#import "AppDelegate.h"

#import <UserNotifications/UserNotifications.h>

#import <React/RCTBundleManager.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTDefines.h>
#import <React/RCTLinkingManager.h>
#import <ReactCommon/RCTSampleTurboModule.h>
#import <ReactCommon/RCTTurboModuleManager.h>

#import <React/RCTPushNotificationManager.h>

#import <NativeCxxModuleExample/NativeCxxModuleExample.h>
#ifndef RN_DISABLE_OSS_PLUGIN_HEADER
#import <RNTMyNativeViewComponentView.h>
#endif

#if __has_include(<ReactAppDependencyProvider/RCTAppDependencyProvider.h>)
#define USE_OSS_CODEGEN 1
#import <ReactAppDependencyProvider/RCTAppDependencyProvider.h>
#else
#define USE_OSS_CODEGEN 0
#endif

static NSString *kBundlePath = @"js/RNTesterApp.ios";

@interface AppDelegate () <UNUserNotificationCenterDelegate>
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.launchOptions = launchOptions;
  self.port = @"8081";
  
#if USE_OSS_CODEGEN
  self.dependencyProvider = [RCTAppDependencyProvider new];
#endif

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  
  [self startReactNative];

  [[UNUserNotificationCenter currentNotificationCenter] setDelegate:self];

  return YES;
}

- (void)startReactNative
{
  self.reactNativeFactory = [[RCTReactNativeFactory alloc] initWithDelegate:self];
  
  NSString *packagerServerHost = [NSString stringWithFormat:@"localhost:%@", self.port];
  
  RCTBundleConfiguration *bundleConfiguration =
      [[RCTBundleConfiguration alloc] initWithPackagerServerScheme:@"http" packagerServerHost:packagerServerHost bundlePath:kBundlePath];

  self.reactNativeFactory.bundleConfiguration = bundleConfiguration;
  
  [self.reactNativeFactory startReactNativeWithModuleName:@"RNTesterApp"
                                                 inWindow:self.window
                                        initialProperties:[self prepareInitialProps]
                                            launchOptions:self.launchOptions];
  
  [self createTopButton];
}

- (void)createTopButton
{
  NSString *title = [NSString stringWithFormat:@"Restart RN:%@", self.port];
  
  self.topButton = [UIButton buttonWithType:UIButtonTypeSystem];
  [self.topButton setTitle:title forState:UIControlStateNormal];
  [self.topButton setBackgroundColor:[UIColor colorWithRed:0.0 green:0.5 blue:1.0 alpha:1]];
  [self.topButton setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];

  CGFloat buttonWidth = 120;
  CGFloat buttonHeight = 44;
  CGFloat screenWidth = [UIScreen mainScreen].bounds.size.width;

  self.topButton.frame = CGRectMake((screenWidth - buttonWidth) / 2, 50, buttonWidth, buttonHeight);
  self.topButton.layer.cornerRadius = 8;
  [self.topButton addTarget:self action:@selector(buttonTapped:) forControlEvents:UIControlEventTouchUpInside];
  [self.window addSubview:self.topButton];
  [self.window bringSubviewToFront:self.topButton];
}

- (void)togglePort
{
  self.port = [self.port  isEqual: @"8081"] ? @"8082" : @"8081";
}

- (void)buttonTapped:(UIButton *)sender
{
  self.reactNativeFactory = nil;
  [self togglePort];
  [self startReactNative];
}

- (NSDictionary *)prepareInitialProps
{
  NSMutableDictionary *initProps = [NSMutableDictionary new];

  NSString *_routeUri = [[NSUserDefaults standardUserDefaults] stringForKey:@"route"];
  if (_routeUri) {
    initProps[@"exampleFromAppetizeParams"] = [NSString stringWithFormat:@"rntester://example/%@Example", _routeUri];
  }

  return initProps;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:kBundlePath];
}

- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options
{
  return [RCTLinkingManager application:app openURL:url options:options];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name
                                                      jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker
{
  if (name == facebook::react::NativeCxxModuleExample::kModuleName) {
    return std::make_shared<facebook::react::NativeCxxModuleExample>(jsInvoker);
  }

  return [super getTurboModule:name jsInvoker:jsInvoker];
}

// Required for the remoteNotificationsRegistered event.
- (void)application:(__unused UIApplication *)application
    didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
  [RCTPushNotificationManager didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

// Required for the remoteNotificationRegistrationError event.
- (void)application:(__unused UIApplication *)application
    didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
  [RCTPushNotificationManager didFailToRegisterForRemoteNotificationsWithError:error];
}

#pragma mark - UNUserNotificationCenterDelegate

// Required for the remoteNotificationReceived and localNotificationReceived events
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
       willPresentNotification:(UNNotification *)notification
         withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler
{
  [RCTPushNotificationManager didReceiveNotification:notification];
  completionHandler(UNNotificationPresentationOptionNone);
}

// Required for the remoteNotificationReceived and localNotificationReceived events
// Called when a notification is tapped from background. (Foreground notification will not be shown per
// the presentation option selected above).
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
    didReceiveNotificationResponse:(UNNotificationResponse *)response
             withCompletionHandler:(void (^)(void))completionHandler
{
  UNNotification *notification = response.notification;

  // This condition will be true if tapping the notification launched the app.
  if ([response.actionIdentifier isEqualToString:UNNotificationDefaultActionIdentifier]) {
    // This can be retrieved with getInitialNotification.
    [RCTPushNotificationManager setInitialNotification:notification];
  }

  [RCTPushNotificationManager didReceiveNotification:notification];
  completionHandler();
}

#pragma mark - New Arch Enabled settings

- (BOOL)bridgelessEnabled
{
  return YES;
}

#pragma mark - RCTComponentViewFactoryComponentProvider

#ifndef RN_DISABLE_OSS_PLUGIN_HEADER
- (nonnull NSDictionary<NSString *, Class<RCTComponentViewProtocol>> *)thirdPartyFabricComponents
{
  NSMutableDictionary *dict = [super thirdPartyFabricComponents].mutableCopy;
  if (!dict[@"RNTMyNativeView"]) {
    dict[@"RNTMyNativeView"] = NSClassFromString(@"RNTMyNativeViewComponentView");
  }
  if (!dict[@"SampleNativeComponent"]) {
    dict[@"SampleNativeComponent"] = NSClassFromString(@"RCTSampleNativeComponentComponentView");
  }
  return dict;
}
#endif

- (NSURL *)bundleURL
{
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:kBundlePath];
}

@end
