#import <RCTDefaultReactNativeFactoryDelegate.h>
#import <RCTReactNativeFactory.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : RCTDefaultReactNativeFactoryDelegate <UIApplicationDelegate>

@property (nonatomic, strong, nonnull) UIWindow *window;
@property (nonatomic, strong, nonnull) RCTReactNativeFactory *reactNativeFactory;
@property (nonatomic, strong, nullable) UIButton *topButton;
@property (nonatomic, strong) NSDictionary *launchOptions;
@property (nonatomic, assign) NSString *port;

@end
