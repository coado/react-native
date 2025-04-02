import type {EventSubscription as EventSubscription_2} from 'react-native/Libraries/vendor/emitter/EventEmitter';
import type {ListRenderItem} from '@react-native/virtualized-lists';
import type {ListRenderItemInfo} from '@react-native/virtualized-lists';
import * as React_2 from 'react';
import type {ViewabilityConfig} from '@react-native/virtualized-lists';
import type {ViewToken} from '@react-native/virtualized-lists';
import {VirtualizedListProps} from '@react-native/virtualized-lists';
import type {VirtualizedListWithoutRenderItemProps} from '@react-native/virtualized-lists';

export declare type AccessibilityActionEvent = NativeSyntheticEvent<
  Readonly<{
    actionName: string;
  }>
>;
export declare type AccessibilityActionInfo = Readonly<{
  name: AccessibilityActionName | string;
  label?: string | undefined;
}>;
export declare type AccessibilityActionName =
  | 'activate'
  | 'increment'
  | 'decrement'
  | 'longpress'
  | 'magicTap'
  | 'escape';
export declare type AccessibilityAnnouncementEventName = 'announcementFinished';
export declare type AccessibilityAnnouncementFinishedEvent = {
  announcement: string;
  success: boolean;
};
export declare type AccessibilityAnnouncementFinishedEventHandler = (
  event: AccessibilityAnnouncementFinishedEvent
) => void;
export declare type AccessibilityChangeEvent = boolean;
export declare type AccessibilityChangeEventHandler = (
  event: AccessibilityChangeEvent
) => void;
export declare type AccessibilityChangeEventName =
  | 'change' // deprecated, maps to screenReaderChanged
  | 'boldTextChanged' // iOS-only Event
  | 'grayscaleChanged' // iOS-only Event
  | 'invertColorsChanged' // iOS-only Event
  | 'reduceMotionChanged'
  | 'highTextContrastChanged' // Android-only Event
  | 'darkerSystemColorsChanged' // iOS-only Event
  | 'screenReaderChanged'
  | 'reduceTransparencyChanged';
export declare type AccessibilityEventTypes =
  | 'click'
  | 'focus'
  | 'viewHoverEnter';
export declare const AccessibilityInfo: AccessibilityInfoStatic;
export declare type AccessibilityInfo = AccessibilityInfoStatic;
export declare interface AccessibilityInfoStatic {
  isBoldTextEnabled: () => Promise<boolean>;
  isGrayscaleEnabled: () => Promise<boolean>;
  isInvertColorsEnabled: () => Promise<boolean>;
  isReduceMotionEnabled: () => Promise<boolean>;
  isHighTextContrastEnabled: () => Promise<boolean>;
  isDarkerSystemColorsEnabled: () => Promise<boolean>;
  prefersCrossFadeTransitions(): Promise<boolean>;
  isReduceTransparencyEnabled: () => Promise<boolean>;
  isScreenReaderEnabled: () => Promise<boolean>;
  isAccessibilityServiceEnabled(): Promise<boolean>;
  addEventListener(
    eventName: AccessibilityChangeEventName,
    handler: AccessibilityChangeEventHandler
  ): EmitterSubscription;
  addEventListener(
    eventName: AccessibilityAnnouncementEventName,
    handler: AccessibilityAnnouncementFinishedEventHandler
  ): EmitterSubscription;
  setAccessibilityFocus: (reactTag: number) => void;
  announceForAccessibility: (announcement: string) => void;
  announceForAccessibilityWithOptions(
    announcement: string,
    options: {queue?: boolean | undefined}
  ): void;
  getRecommendedTimeoutMillis: (originalTimeout: number) => Promise<number>;
  sendAccessibilityEvent: (
    handle: HostInstance,
    eventType: AccessibilityEventTypes
  ) => void;
}
export declare type AccessibilityProperties = AccessibilityProps;
export declare type AccessibilityPropertiesAndroid = AccessibilityPropsAndroid;
export declare type AccessibilityPropertiesIOS = AccessibilityPropsIOS;
export declare interface AccessibilityProps
  extends AccessibilityPropsAndroid,
    AccessibilityPropsIOS {
  accessible?: boolean | undefined;
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo> | undefined;
  accessibilityLabel?: string | undefined;
  'aria-label'?: string | undefined;
  accessibilityRole?: AccessibilityRole | undefined;
  accessibilityState?: AccessibilityState | undefined;
  'aria-busy'?: boolean | undefined;
  'aria-checked'?: boolean | 'mixed' | undefined;
  'aria-disabled'?: boolean | undefined;
  'aria-expanded'?: boolean | undefined;
  'aria-selected'?: boolean | undefined;
  accessibilityHint?: string | undefined;
  accessibilityValue?: AccessibilityValue | undefined;
  'aria-valuemax'?: AccessibilityValue['max'] | undefined;
  'aria-valuemin'?: AccessibilityValue['min'] | undefined;
  'aria-valuenow'?: AccessibilityValue['now'] | undefined;
  'aria-valuetext'?: AccessibilityValue['text'] | undefined;
  onAccessibilityAction?:
    | ((event: AccessibilityActionEvent) => void)
    | undefined;
  importantForAccessibility?:
    | ('auto' | 'yes' | 'no' | 'no-hide-descendants')
    | undefined;
  'aria-hidden'?: boolean | undefined;
  'aria-modal'?: boolean | undefined;
  role?: Role | undefined;
}
export declare interface AccessibilityPropsAndroid {
  accessibilityLabelledBy?: string | string[] | undefined;
  'aria-labelledby'?: string | undefined;
  accessibilityLiveRegion?: 'none' | 'polite' | 'assertive' | undefined;
  'aria-live'?: ('polite' | 'assertive' | 'off') | undefined;
  importantForAccessibility?:
    | 'auto'
    | 'yes'
    | 'no'
    | 'no-hide-descendants'
    | undefined;
}
export declare interface AccessibilityPropsIOS {
  accessibilityElementsHidden?: boolean | undefined;
  accessibilityViewIsModal?: boolean | undefined;
  onAccessibilityEscape?: (() => void) | undefined;
  onAccessibilityTap?: (() => void) | undefined;
  onMagicTap?: (() => void) | undefined;
  accessibilityIgnoresInvertColors?: boolean | undefined;
  accessibilityLanguage?: string | undefined;
  accessibilityShowsLargeContentViewer?: boolean | undefined;
  accessibilityLargeContentTitle?: string | undefined;
}
export declare type AccessibilityRole =
  | 'none'
  | 'button'
  | 'togglebutton'
  | 'link'
  | 'search'
  | 'image'
  | 'keyboardkey'
  | 'text'
  | 'adjustable'
  | 'imagebutton'
  | 'header'
  | 'summary'
  | 'alert'
  | 'checkbox'
  | 'combobox'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'scrollbar'
  | 'spinbutton'
  | 'switch'
  | 'tab'
  | 'tabbar'
  | 'tablist'
  | 'timer'
  | 'list'
  | 'toolbar';
export declare interface AccessibilityState {
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  checked?: boolean | 'mixed' | undefined;
  busy?: boolean | undefined;
  expanded?: boolean | undefined;
}
export declare interface AccessibilityValue {
  min?: number | undefined;
  max?: number | undefined;
  now?: number | undefined;
  text?: string | undefined;
}
export declare const ActionSheetIOS: ActionSheetIOSStatic;
export declare type ActionSheetIOS = ActionSheetIOSStatic;
export declare interface ActionSheetIOSOptions {
  title?: string | undefined;
  options: string[];
  cancelButtonIndex?: number | undefined;
  destructiveButtonIndex?: number | number[] | undefined | null;
  message?: string | undefined;
  anchor?: number | undefined;
  tintColor?: ColorValue | ProcessedColorValue | undefined;
  cancelButtonTintColor?: ColorValue | ProcessedColorValue | undefined;
  disabledButtonTintColor?: ColorValue | ProcessedColorValue | undefined;
  userInterfaceStyle?: 'light' | 'dark' | undefined;
  disabledButtonIndices?: number[] | undefined;
}
export declare interface ActionSheetIOSStatic {
  showActionSheetWithOptions: (
    options: ActionSheetIOSOptions,
    callback: (buttonIndex: number) => void
  ) => void;
  showShareActionSheetWithOptions: (
    options: ShareActionSheetIOSOptions,
    failureCallback: (error: Error) => void,
    successCallback: (success: boolean, method: string) => void
  ) => void;
  dismissActionSheet: () => void;
}
export declare class ActivityIndicator extends ActivityIndicatorBase {}
export declare const ActivityIndicatorBase: Constructor<NativeMethods> &
  typeof ActivityIndicatorComponent;
export declare class ActivityIndicatorComponent extends React_2.Component<ActivityIndicatorProps> {}
export declare type ActivityIndicatorIOSProperties = ActivityIndicatorIOSProps;
export declare interface ActivityIndicatorIOSProps extends ViewProps {
  animating?: boolean | undefined;
  color?: ColorValue | undefined;
  hidesWhenStopped?: boolean | undefined;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
  size?: 'small' | 'large' | undefined;
  style?: StyleProp<ViewStyle> | undefined;
}
export declare type ActivityIndicatorProperties = ActivityIndicatorProps;
export declare interface ActivityIndicatorProps extends ViewProps {
  animating?: boolean | undefined;
  color?: ColorValue | undefined;
  hidesWhenStopped?: boolean | undefined;
  size?: number | 'small' | 'large' | undefined;
  style?: StyleProp<ViewStyle> | undefined;
}
export declare const Alert: AlertStatic;
export declare type Alert = AlertStatic;
export declare interface AlertButton {
  text?: string | undefined;
  onPress?:
    | ((value?: string) => void)
    | ((value?: {login: string; password: string}) => void)
    | undefined;
  isPreferred?: boolean | undefined;
  style?: 'default' | 'cancel' | 'destructive' | undefined;
}
export declare interface AlertOptions {
  cancelable?: boolean | undefined;
  userInterfaceStyle?: 'unspecified' | 'light' | 'dark' | undefined;
  onDismiss?: (() => void) | undefined;
}
export declare interface AlertStatic {
  alert: (
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions
  ) => void;
  prompt: (
    title: string,
    message?: string,
    callbackOrButtons?: ((text: string) => void) | AlertButton[],
    type?: AlertType,
    defaultValue?: string,
    keyboardType?: string,
    options?: AlertOptions
  ) => void;
}
export declare type AlertType =
  | 'default'
  | 'plain-text'
  | 'secure-text'
  | 'login-password';
export declare type AnimatableNumericValue = number | Animated.AnimatedNode;
export declare type AnimatableStringValue = string | Animated.AnimatedNode;
export declare namespace Animated {
  export type AnimatedValue = Value;
  export type AnimatedValueXY = ValueXY;
  export class Animated {}
  export class AnimatedNode {
    addListener(callback: (value: any) => any): string;
    removeListener(id: string): void;
    removeAllListeners(): void;
    hasListeners(): boolean;
  }
  export class AnimatedWithChildren extends AnimatedNode {}
  export type RgbaValue = {
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a: number;
  };
  export type RgbaAnimatedValue = {
    readonly r: AnimatedValue;
    readonly g: AnimatedValue;
    readonly b: AnimatedValue;
    readonly a: AnimatedValue;
  };
  export type AnimatedConfig = {
    readonly useNativeDriver: boolean;
  };
  export class AnimatedColor extends AnimatedWithChildren {
    r: AnimatedValue;
    g: AnimatedValue;
    b: AnimatedValue;
    a: AnimatedValue;
    constructor(
      valueIn?: RgbaValue | RgbaAnimatedValue | ColorValue | null,
      config?: AnimatedConfig | null
    );
    nativeColor: unknown; // Unsure what to do here
    setValue: (value: RgbaValue | ColorValue) => void;
    setOffset: (offset: RgbaValue) => void;
    flattenOffset: () => void;
    extractOffset: () => void;
    addListener: (callback: (value: ColorValue) => unknown) => string;
    removeListener: (id: string) => void;
    removeAllListeners: () => void;
    stopAnimation: (callback: (value: ColorValue) => unknown) => void;
    resetAnimation: (callback: (value: ColorValue) => unknown) => void;
  }
  export class AnimatedInterpolation<
    OutputT extends number | string,
  > extends AnimatedWithChildren {
    interpolate(
      config: InterpolationConfigType
    ): AnimatedInterpolation<OutputT>;
  }
  export type ExtrapolateType = 'extend' | 'identity' | 'clamp';
  export type InterpolationConfigType = {
    inputRange: number[];
    outputRange: number[] | string[];
    easing?: ((input: number) => number) | undefined;
    extrapolate?: ExtrapolateType | undefined;
    extrapolateLeft?: ExtrapolateType | undefined;
    extrapolateRight?: ExtrapolateType | undefined;
  };
  export type ValueListenerCallback = (state: {value: number}) => void;
  export type Animation = {
    start(
      fromValue: number,
      onUpdate: (value: number) => void,
      onEnd: EndCallback | null,
      previousAnimation: Animation | null,
      animatedValue: AnimatedValue
    ): void;
    stop(): void;
  };
  export class Value extends AnimatedWithChildren {
    constructor(value: number, config?: AnimatedConfig | null);
    setValue(value: number): void;
    setOffset(offset: number): void;
    flattenOffset(): void;
    extractOffset(): void;
    addListener(callback: ValueListenerCallback): string;
    removeListener(id: string): void;
    removeAllListeners(): void;
    stopAnimation(callback?: (value: number) => void): void;
    resetAnimation(callback?: (value: number) => void): void;
    interpolate<OutputT extends number | string>(
      config: InterpolationConfigType
    ): AnimatedInterpolation<OutputT>;
    animate(animation: Animation, callback?: EndCallback | null): void;
  }
  export type ValueXYListenerCallback = (value: {x: number; y: number}) => void;
  export class ValueXY extends AnimatedWithChildren {
    x: AnimatedValue;
    y: AnimatedValue;
    constructor(
      valueIn?: {x: number | AnimatedValue; y: number | AnimatedValue},
      config?: AnimatedConfig | null
    );
    setValue(value: {x: number; y: number}): void;
    setOffset(offset: {x: number; y: number}): void;
    flattenOffset(): void;
    extractOffset(): void;
    resetAnimation(callback?: (value: {x: number; y: number}) => void): void;
    stopAnimation(callback?: (value: {x: number; y: number}) => void): void;
    addListener(callback: ValueXYListenerCallback): string;
    removeListener(id: string): void;
    getLayout(): {[key: string]: AnimatedValue};
    getTranslateTransform(): [
      {translateX: AnimatedValue},
      {translateY: AnimatedValue},
    ];
  }
  export type EndResult = {finished: boolean};
  export type EndCallback = (result: EndResult) => void;
  export interface CompositeAnimation {
    start: (callback?: EndCallback) => void;
    stop: () => void;
    reset: () => void;
  }
  export interface AnimationConfig {
    isInteraction?: boolean | undefined;
    useNativeDriver: boolean;
  }
  export function decay(
    value: AnimatedValue | AnimatedValueXY,
    config: DecayAnimationConfig
  ): CompositeAnimation;
  export interface DecayAnimationConfig extends AnimationConfig {
    velocity: number | {x: number; y: number};
    deceleration?: number | undefined;
  }
  const timing: (
    value: AnimatedValue | AnimatedValueXY,
    config: TimingAnimationConfig
  ) => CompositeAnimation;
  export interface TimingAnimationConfig extends AnimationConfig {
    toValue:
      | number
      | AnimatedValue
      | {x: number; y: number}
      | AnimatedValueXY
      | AnimatedInterpolation<number>;
    easing?: ((value: number) => number) | undefined;
    duration?: number | undefined;
    delay?: number | undefined;
  }
  export interface SpringAnimationConfig extends AnimationConfig {
    toValue:
      | number
      | AnimatedValue
      | {x: number; y: number}
      | AnimatedValueXY
      | RgbaValue
      | AnimatedColor
      | AnimatedInterpolation<number>;
    overshootClamping?: boolean | undefined;
    restDisplacementThreshold?: number | undefined;
    restSpeedThreshold?: number | undefined;
    velocity?: number | {x: number; y: number} | undefined;
    bounciness?: number | undefined;
    speed?: number | undefined;
    tension?: number | undefined;
    friction?: number | undefined;
    stiffness?: number | undefined;
    mass?: number | undefined;
    damping?: number | undefined;
    delay?: number | undefined;
  }
  export interface LoopAnimationConfig {
    iterations?: number | undefined; // default -1 for infinite
    resetBeforeIteration?: boolean | undefined;
  }
  export function add<OutputT extends number | string>(
    a: Animated,
    b: Animated
  ): AnimatedAddition<OutputT>;
  export class AnimatedAddition<
    OutputT extends number | string,
  > extends AnimatedInterpolation<OutputT> {}
  export function subtract<OutputT extends number | string>(
    a: Animated,
    b: Animated
  ): AnimatedSubtraction<OutputT>;
  export class AnimatedSubtraction<
    OutputT extends number | string,
  > extends AnimatedInterpolation<OutputT> {}
  export function divide<OutputT extends number | string>(
    a: Animated,
    b: Animated
  ): AnimatedDivision<OutputT>;
  export class AnimatedDivision<
    OutputT extends number | string,
  > extends AnimatedInterpolation<OutputT> {}
  export function multiply<OutputT extends number | string>(
    a: Animated,
    b: Animated
  ): AnimatedMultiplication<OutputT>;
  export class AnimatedMultiplication<
    OutputT extends number | string,
  > extends AnimatedInterpolation<OutputT> {}
  export function modulo<OutputT extends number | string>(
    a: Animated,
    modulus: number
  ): AnimatedModulo<OutputT>;
  export class AnimatedModulo<
    OutputT extends number | string,
  > extends AnimatedInterpolation<OutputT> {}
  export function diffClamp<OutputT extends number | string>(
    a: Animated,
    min: number,
    max: number
  ): AnimatedDiffClamp<OutputT>;
  export class AnimatedDiffClamp<
    OutputT extends number | string,
  > extends AnimatedInterpolation<OutputT> {}
  export function delay(time: number): CompositeAnimation;
  export function sequence(
    animations: Array<CompositeAnimation>
  ): CompositeAnimation;
  export function stagger(
    time: number,
    animations: Array<CompositeAnimation>
  ): CompositeAnimation;
  export function loop(
    animation: CompositeAnimation,
    config?: LoopAnimationConfig
  ): CompositeAnimation;
  export function spring(
    value: AnimatedValue | AnimatedValueXY,
    config: SpringAnimationConfig
  ): CompositeAnimation;
  export type ParallelConfig = {
    stopTogether?: boolean | undefined; // If one is stopped, stop all.  default: true
  };
  export function parallel(
    animations: Array<CompositeAnimation>,
    config?: ParallelConfig
  ): CompositeAnimation;
  export type Mapping = {[key: string]: Mapping} | AnimatedValue;
  export interface EventConfig<T> {
    listener?: ((event: NativeSyntheticEvent<T>) => void) | undefined;
    useNativeDriver: boolean;
  }
  export function event<T>(
    argMapping: Array<Mapping | null>,
    config?: EventConfig<T>
  ): (...args: any[]) => void;
  export type ComponentProps<T> = T extends
    | React_2.ComponentType<infer P>
    | React_2.Component<infer P>
    ? P
    : never;
  export type LegacyRef<C> = {getNode(): C};
  export type Nullable = undefined | null;
  export type Primitive = string | number | boolean | symbol;
  export type Builtin = Function | Date | Error | RegExp;
  export interface WithAnimatedArray<P> extends Array<WithAnimatedValue<P>> {}
  export type WithAnimatedObject<T> = {
    [K in keyof T]: WithAnimatedValue<T[K]>;
  };
  export type WithAnimatedValue<T> = T extends Builtin | Nullable
    ? T
    : T extends Primitive
      ? T | Value | AnimatedInterpolation<number | string> // add `Value` and `AnimatedInterpolation` but also preserve original T
      : T extends Array<infer P>
        ? WithAnimatedArray<P>
        : T extends {}
          ? WithAnimatedObject<T>
          : T; // in case it's something we don't yet know about (for .e.g bigint)
  export type NonAnimatedProps = 'key' | 'ref';
  export type TAugmentRef<T> =
    T extends React_2.Ref<infer R>
      ? unknown extends R
        ? never
        : React_2.Ref<R | LegacyRef<R>>
      : never;
  export type AnimatedProps<T> = {
    [key in keyof T]: key extends NonAnimatedProps
      ? key extends 'ref'
        ? TAugmentRef<T[key]>
        : T[key]
      : WithAnimatedValue<T[key]>;
  };
  export interface AnimatedComponent<T extends React_2.ComponentType<any>>
    extends React_2.FC<AnimatedProps<React_2.ComponentPropsWithRef<T>>> {}
  export type AnimatedComponentOptions = {
    collapsable?: boolean | undefined;
  };
  export function createAnimatedComponent<T extends React_2.ComponentType<any>>(
    component: T,
    options?: AnimatedComponentOptions
  ): AnimatedComponent<T>;
  const View: AnimatedComponent<typeof _View>;
  const Image: AnimatedComponent<typeof _Image>;
  const Text: AnimatedComponent<typeof _Text>;
  const ScrollView: AnimatedComponent<typeof _ScrollView>;
  export class FlatList<ItemT = any> extends FlatListComponent<
    ItemT,
    AnimatedProps<FlatListProps<ItemT>>
  > {}
  export class SectionList<
    ItemT = any,
    SectionT = DefaultSectionT,
  > extends SectionListComponent<
    AnimatedProps<SectionListProps<ItemT, SectionT>>
  > {}
}
export declare type AppConfig = {
  appKey: string;
  component?: ComponentProvider | undefined;
  run?: Runnable | undefined;
};
export declare namespace Appearance {
  export type AppearancePreferences = {
    colorScheme: ColorSchemeName;
  };
  export type AppearanceListener = (preferences: AppearancePreferences) => void;
  export function getColorScheme(): ColorSchemeName;
  export function setColorScheme(
    scheme: ColorSchemeName | null | undefined
  ): void;
  export function addChangeListener(
    listener: AppearanceListener
  ): NativeEventSubscription;
}
export declare namespace AppRegistry {
  export function setWrapperComponentProvider(
    provider: WrapperComponentProvider
  ): void;
  export function setRootViewStyleProvider(
    provider: RootViewStyleProvider
  ): void;
  export function registerConfig(config: AppConfig[]): void;
  export function registerComponent(
    appKey: string,
    getComponentFunc: ComponentProvider,
    section?: boolean
  ): string;
  export function registerRunnable(appKey: string, func: Runnable): string;
  export function registerSection(
    appKey: string,
    component: ComponentProvider
  ): void;
  export function getAppKeys(): string[];
  export function getSectionKeys(): string[];
  export function getSections(): Record<string, Runnable>;
  export function unmountApplicationComponentAtRootTag(rootTag: number): void;
  export function runApplication(appKey: string, appParameters: any): void;
  export function setSurfaceProps(
    appKey: string,
    appParameters: any,
    displayMode?: number
  ): void;
  export function getRunnable(appKey: string): Runnable | undefined;
  export function getRegistry(): {sections: string[]; runnables: Runnable[]};
  export function setComponentProviderInstrumentationHook(
    hook: ComponentProviderInstrumentationHook
  ): void;
  export function registerHeadlessTask(
    taskKey: string,
    taskProvider: TaskProvider
  ): void;
  export function registerCancellableHeadlessTask(
    taskKey: string,
    taskProvider: TaskProvider,
    taskCancelProvider: TaskCancelProvider
  ): void;
  export function startHeadlessTask(
    taskId: number,
    taskKey: string,
    data: any
  ): void;
  export function cancelHeadlessTask(taskId: number, taskKey: string): void;
}
export declare const AppState: AppStateStatic;
export declare type AppState = AppStateStatic;
export declare type AppStateEvent =
  | 'change'
  | 'memoryWarning'
  | 'blur'
  | 'focus';
export declare interface AppStateStatic {
  currentState: AppStateStatus;
  isAvailable: boolean;
  addEventListener(
    type: AppStateEvent,
    listener: (state: AppStateStatus) => void
  ): NativeEventSubscription;
}
export declare type AppStateStatus =
  | 'active'
  | 'background'
  | 'inactive'
  | 'unknown'
  | 'extension';
export declare type BackgroundPropType =
  | RippleBackgroundPropType
  | ThemeAttributeBackgroundPropType;
export declare const BackHandler: BackHandlerStatic;
export declare type BackHandler = BackHandlerStatic;
export declare interface BackHandlerStatic {
  exitApp(): void;
  addEventListener(
    eventName: BackPressEventName,
    handler: () => boolean | null | undefined
  ): NativeEventSubscription;
}
export declare type BackPressEventName = 'hardwareBackPress';
export declare interface BaseBackgroundPropType {
  type: string;
  rippleRadius?: number | null | undefined;
}
declare function beginAsyncEvent(
  eventName: EventName,
  args?: EventArgs
): number;
declare function beginEvent(eventName: EventName, args?: EventArgs): void;
export declare type BlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';
export declare type BoxShadowValue = {
  offsetX: number | string;
  offsetY: number | string;
  color?: string | undefined;
  blurRadius?: ColorValue | number | undefined;
  spreadDistance?: number | string | undefined;
  inset?: boolean | undefined;
};
declare type BubblingEventHandler<
  T,
  PaperName extends string | never = never,
> = (event: NativeSyntheticEvent<T>) => void | Promise<void>;
export declare class Button extends React_2.Component<ButtonProps> {}
export declare type ButtonProperties = ButtonProps;
export declare interface ButtonProps
  extends Pick<
    TouchableNativeFeedbackProps & TouchableOpacityProps,
    | 'accessibilityLabel'
    | 'accessibilityState'
    | 'hasTVPreferredFocus'
    | 'nextFocusDown'
    | 'nextFocusForward'
    | 'nextFocusLeft'
    | 'nextFocusRight'
    | 'nextFocusUp'
    | 'testID'
    | 'disabled'
    | 'onPress'
    | 'touchSoundDisabled'
  > {
  title: string;
  color?: ColorValue | undefined;
}
export declare const Clipboard: ClipboardStatic;
export declare type Clipboard = ClipboardStatic;
export declare interface ClipboardStatic {
  getString(): Promise<string>;
  setString(content: string): void;
}
export declare function codegenNativeCommands<T extends object>(
  options: Options<keyof T extends string ? keyof T : never>
): T;
export declare function codegenNativeComponent<Props extends object>(
  componentName: string,
  options?: Options_2
): NativeComponentType<Props>;
export declare namespace CodegenTypes {
  export {
    BubblingEventHandler,
    DirectEventHandler,
    Double,
    Float,
    Int32,
    UnsafeObject,
    UnsafeMixed,
    DefaultTypes,
    WithDefault,
    EventEmitter,
  };
}
export declare type ColorSchemeName = 'light' | 'dark' | null | undefined;
export declare type ColorValue = string | OpaqueColorValue;
export declare type ComponentProvider = () => React_2.ComponentType<any>;
export declare type ComponentProviderInstrumentationHook = (
  component: ComponentProvider,
  scopedPerformanceLogger: IPerformanceLogger
) => React_2.ComponentType<any>;
declare type Constructor<T> = new (...args: any[]) => T;
declare function counterEvent(eventName: EventName, value: number): void;
export declare type CursorValue = 'auto' | 'pointer';
export declare type DataDetectorTypes =
  | 'phoneNumber'
  | 'link'
  | 'address'
  | 'calendarEvent'
  | 'trackingNumber'
  | 'flightNumber'
  | 'lookupSuggestion'
  | 'none'
  | 'all';
export declare type DefaultSectionT = {
  [key: string]: any;
};
declare type DefaultTypes = number | boolean | string | ReadonlyArray<string>;
export declare const DeviceEventEmitter: DeviceEventEmitterStatic;
export declare interface DeviceEventEmitterStatic extends EventEmitter_2 {
  sharedSubscriber: EventSubscriptionVendor;
  new (): DeviceEventEmitterStatic;
  addListener(
    type: string,
    listener: (data: any) => void,
    context?: any
  ): EmitterSubscription;
}
export declare const DevMenu: DevMenuStatic;
export declare interface DevMenuStatic {
  show(): void;
}
export declare const DevSettings: DevSettingsStatic;
export declare interface DevSettingsStatic extends NativeEventEmitter {
  addMenuItem(title: string, handler: () => any): void;
  reload(reason?: string): void;
}
export declare interface Dimensions {
  get(dim: 'window' | 'screen'): ScaledSize;
  set(dims: {[key: string]: any}): void;
  addEventListener(
    type: 'change',
    handler: ({
      window,
      screen,
    }: {
      window: ScaledSize;
      screen: ScaledSize;
    }) => void
  ): EmitterSubscription;
}
export declare const Dimensions: Dimensions;
export declare type DimensionValue =
  | number
  | 'auto'
  | `${number}%`
  | Animated.AnimatedNode
  | null;
declare type DirectEventHandler<T, PaperName extends string | never = never> = (
  event: NativeSyntheticEvent<T>
) => void | Promise<void>;
export declare interface DocumentSelectionState extends EventEmitter_2 {
  new (anchor: number, focus: number): DocumentSelectionState;
  update(anchor: number, focus: number): void;
  constrainLength(maxLength: number): void;
  focus(): void;
  blur(): void;
  hasFocus(): boolean;
  isCollapsed(): boolean;
  isBackward(): boolean;
  getAnchorOffset(): number;
  getFocusOffset(): number;
  getStartOffset(): number;
  getEndOffset(): number;
  overlaps(start: number, end: number): boolean;
}
declare type Double = number;
export declare class DrawerLayoutAndroid extends DrawerLayoutAndroidBase {
  positions: DrawerPosition;
  openDrawer(): void;
  closeDrawer(): void;
}
export declare const DrawerLayoutAndroidBase: Constructor<NativeMethods> &
  typeof DrawerLayoutAndroidComponent;
export declare class DrawerLayoutAndroidComponent extends React_2.Component<DrawerLayoutAndroidProps> {}
export declare type DrawerLayoutAndroidProperties = DrawerLayoutAndroidProps;
export declare interface DrawerLayoutAndroidProps extends ViewProps {
  drawerBackgroundColor?: ColorValue | undefined;
  drawerLockMode?: 'unlocked' | 'locked-closed' | 'locked-open' | undefined;
  drawerPosition?: 'left' | 'right' | undefined;
  drawerWidth?: number | undefined;
  keyboardDismissMode?: 'none' | 'on-drag' | undefined;
  onDrawerClose?: (() => void) | undefined;
  onDrawerOpen?: (() => void) | undefined;
  onDrawerSlide?: ((event: DrawerSlideEvent) => void) | undefined;
  onDrawerStateChanged?:
    | ((event: 'Idle' | 'Dragging' | 'Settling') => void)
    | undefined;
  renderNavigationView: () => React_2.JSX.Element;
  statusBarBackgroundColor?: ColorValue | undefined;
}
export declare interface DrawerPosition {
  Left: number;
  Right: number;
}
export declare interface DrawerSlideEvent
  extends NativeSyntheticEvent<NativeTouchEvent> {}
export declare type DropShadowValue = {
  offsetX: number | string;
  offsetY: number | string;
  standardDeviation?: number | string | undefined;
  color?: ColorValue | number | undefined;
};
export declare function DynamicColorIOS(
  tuple: DynamicColorIOSTuple
): OpaqueColorValue;
export declare type DynamicColorIOSTuple = {
  light: ColorValue;
  dark: ColorValue;
  highContrastLight?: ColorValue | undefined;
  highContrastDark?: ColorValue | undefined;
};
export declare type Easing = EasingStatic;
export declare const Easing: EasingStatic;
export declare type EasingFunction = (value: number) => number;
export declare interface EasingStatic {
  step0: EasingFunction;
  step1: EasingFunction;
  linear: EasingFunction;
  ease: EasingFunction;
  quad: EasingFunction;
  cubic: EasingFunction;
  poly(n: number): EasingFunction;
  sin: EasingFunction;
  circle: EasingFunction;
  exp: EasingFunction;
  elastic(bounciness: number): EasingFunction;
  back(s: number): EasingFunction;
  bounce: EasingFunction;
  bezier(x1: number, y1: number, x2: number, y2: number): EasingFunction;
  in(easing: EasingFunction): EasingFunction;
  out(easing: EasingFunction): EasingFunction;
  inOut(easing: EasingFunction): EasingFunction;
}
export declare interface EmitterSubscription extends EventSubscription {
  emitter: EventEmitter_2;
  listener: () => any;
  context: any;
  new (
    emitter: EventEmitter_2,
    subscriber: EventSubscriptionVendor,
    listener: () => any,
    context: any
  ): EmitterSubscription;
  remove(): void;
}
declare function endAsyncEvent(
  eventName: EventName,
  cookie: number,
  args?: EventArgs
): void;
declare function endEvent(args?: EventArgs): void;
export declare type EnterKeyHintType =
  | 'done'
  | 'go'
  | 'next'
  | 'search'
  | 'send';
export declare type EnterKeyHintTypeAndroid = 'previous';
export declare type EnterKeyHintTypeIOS = 'enter';
export declare type EnterKeyHintTypeOptions =
  | EnterKeyHintType
  | EnterKeyHintTypeAndroid
  | EnterKeyHintTypeIOS;
export declare type ErrorHandlerCallback = (
  error: any,
  isFatal?: boolean
) => void;
declare interface ErrorUtils_2 {
  setGlobalHandler: (callback: ErrorHandlerCallback) => void;
  getGlobalHandler: () => ErrorHandlerCallback;
}
export {ErrorUtils_2 as ErrorUtils};
declare type EventArgs = {[key: string]: string} | void | null;
declare type EventEmitter<T> = (
  handler: (arg: T) => void | Promise<void>
) => EventSubscription_2;
declare class EventEmitter_2 {
  constructor(subscriber?: EventSubscriptionVendor | null);
  addListener(
    eventType: string,
    listener: (...args: any[]) => any,
    context?: any
  ): EmitterSubscription;
  removeAllListeners(eventType?: string): void;
  listenerCount(eventType: string): number;
  emit(eventType: string, ...params: any[]): void;
}
declare type EventName = string | (() => string);
export declare interface EventSubscription {
  eventType: string;
  key: number;
  subscriber: EventSubscriptionVendor;
  new (subscriber: EventSubscriptionVendor): EventSubscription;
  remove(): void;
}
declare class EventSubscriptionVendor {
  constructor();
  addSubscription(
    eventType: string,
    subscription: EventSubscription
  ): EventSubscription;
  removeAllSubscriptions(eventType?: string): void;
  removeSubscription(subscription: any): void;
  getSubscriptionsForType(eventType: string): EventSubscription[];
}
export declare const experimental_LayoutConformance: React_2.ComponentType<LayoutConformanceProps>;
declare type Extras = {[key: string]: ExtraValue};
declare type ExtraValue = number | string | boolean;
export declare type Falsy = undefined | null | false | '';
export declare type FetchResult = {
  NewData: 'UIBackgroundFetchResultNewData';
  NoData: 'UIBackgroundFetchResultNoData';
  ResultFailed: 'UIBackgroundFetchResultFailed';
};
export declare type FilterFunction =
  | {brightness: number | string}
  | {blur: number | string}
  | {contrast: number | string}
  | {grayscale: number | string}
  | {hueRotate: number | string}
  | {invert: number | string}
  | {opacity: number | string}
  | {saturate: number | string}
  | {sepia: number | string}
  | {dropShadow: DropShadowValue | string};
export declare function findNodeHandle(
  componentOrHandle:
    | null
    | number
    | React_2.Component<any, any>
    | React_2.ComponentClass<any>
): null | NodeHandle;
export declare class FlatList<ItemT = any> extends FlatListComponent<
  ItemT,
  FlatListProps<ItemT>
> {}
export declare abstract class FlatListComponent<
  ItemT,
  Props,
> extends React_2.Component<Props> {
  scrollToEnd: (params?: {animated?: boolean | null | undefined}) => void;
  scrollToIndex: (params: {
    animated?: boolean | null | undefined;
    index: number;
    viewOffset?: number | undefined;
    viewPosition?: number | undefined;
  }) => void;
  scrollToItem: (params: {
    animated?: boolean | null | undefined;
    item: ItemT;
    viewOffset?: number | undefined;
    viewPosition?: number | undefined;
  }) => void;
  scrollToOffset: (params: {
    animated?: boolean | null | undefined;
    offset: number;
  }) => void;
  recordInteraction: () => void;
  flashScrollIndicators: () => void;
  getScrollResponder: () => React_2.JSX.Element | null | undefined;
  getNativeScrollRef: () =>
    | React_2.ElementRef<typeof View>
    | React_2.ElementRef<typeof ScrollViewComponent>
    | null
    | undefined;
  getScrollableNode: () => any;
  setNativeProps: (props: {[key: string]: unknown}) => void;
}
export declare type FlatListProperties<ItemT> = FlatListProps<ItemT>;
export declare interface FlatListProps<ItemT>
  extends VirtualizedListProps<ItemT> {
  columnWrapperStyle?: StyleProp<ViewStyle> | undefined;
  keyboardShouldPersistTaps?:
    | boolean
    | 'always'
    | 'never'
    | 'handled'
    | undefined;
  data: ArrayLike<ItemT> | null | undefined;
  extraData?: any | undefined;
  getItemLayout?:
    | ((
        data: ArrayLike<ItemT> | null | undefined,
        index: number
      ) => {length: number; offset: number; index: number})
    | undefined;
  horizontal?: boolean | null | undefined;
  initialNumToRender?: number | undefined;
  initialScrollIndex?: number | null | undefined;
  keyExtractor?: ((item: ItemT, index: number) => string) | undefined;
  legacyImplementation?: boolean | undefined;
  numColumns?: number | undefined;
  onRefresh?: (() => void) | null | undefined;
  onViewableItemsChanged?:
    | ((info: {
        viewableItems: Array<ViewToken<ItemT>>;
        changed: Array<ViewToken<ItemT>>;
      }) => void)
    | null
    | undefined;
  refreshing?: boolean | null | undefined;
  renderItem: ListRenderItem<ItemT> | null | undefined;
  viewabilityConfig?: ViewabilityConfig | undefined;
  removeClippedSubviews?: boolean | undefined;
  fadingEdgeLength?: number | undefined;
}
export declare type FlexAlignType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
export declare interface FlexStyle {
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignItems?: FlexAlignType | undefined;
  alignSelf?: 'auto' | FlexAlignType | undefined;
  aspectRatio?: number | string | undefined;
  borderBottomWidth?: number | undefined;
  borderEndWidth?: number | undefined;
  borderLeftWidth?: number | undefined;
  borderRightWidth?: number | undefined;
  borderStartWidth?: number | undefined;
  borderTopWidth?: number | undefined;
  borderWidth?: number | undefined;
  bottom?: DimensionValue | undefined;
  boxSizing?: 'border-box' | 'content-box' | undefined;
  display?: 'none' | 'flex' | 'contents' | undefined;
  end?: DimensionValue | undefined;
  flex?: number | undefined;
  flexBasis?: DimensionValue | undefined;
  flexDirection?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | undefined;
  rowGap?: number | string | undefined;
  gap?: number | string | undefined;
  columnGap?: number | string | undefined;
  flexGrow?: number | undefined;
  flexShrink?: number | undefined;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  height?: DimensionValue | undefined;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  left?: DimensionValue | undefined;
  margin?: DimensionValue | undefined;
  marginBottom?: DimensionValue | undefined;
  marginEnd?: DimensionValue | undefined;
  marginHorizontal?: DimensionValue | undefined;
  marginLeft?: DimensionValue | undefined;
  marginRight?: DimensionValue | undefined;
  marginStart?: DimensionValue | undefined;
  marginTop?: DimensionValue | undefined;
  marginVertical?: DimensionValue | undefined;
  maxHeight?: DimensionValue | undefined;
  maxWidth?: DimensionValue | undefined;
  minHeight?: DimensionValue | undefined;
  minWidth?: DimensionValue | undefined;
  overflow?: 'visible' | 'hidden' | 'scroll' | undefined;
  padding?: DimensionValue | undefined;
  paddingBottom?: DimensionValue | undefined;
  paddingEnd?: DimensionValue | undefined;
  paddingHorizontal?: DimensionValue | undefined;
  paddingLeft?: DimensionValue | undefined;
  paddingRight?: DimensionValue | undefined;
  paddingStart?: DimensionValue | undefined;
  paddingTop?: DimensionValue | undefined;
  paddingVertical?: DimensionValue | undefined;
  position?: 'absolute' | 'relative' | 'static' | undefined;
  right?: DimensionValue | undefined;
  start?: DimensionValue | undefined;
  top?: DimensionValue | undefined;
  width?: DimensionValue | undefined;
  zIndex?: number | undefined;
  direction?: 'inherit' | 'ltr' | 'rtl' | undefined;
  inset?: DimensionValue | undefined;
  insetBlock?: DimensionValue | undefined;
  insetBlockEnd?: DimensionValue | undefined;
  insetBlockStart?: DimensionValue | undefined;
  insetInline?: DimensionValue | undefined;
  insetInlineEnd?: DimensionValue | undefined;
  insetInlineStart?: DimensionValue | undefined;
  marginBlock?: DimensionValue | undefined;
  marginBlockEnd?: DimensionValue | undefined;
  marginBlockStart?: DimensionValue | undefined;
  marginInline?: DimensionValue | undefined;
  marginInlineEnd?: DimensionValue | undefined;
  marginInlineStart?: DimensionValue | undefined;
  paddingBlock?: DimensionValue | undefined;
  paddingBlockEnd?: DimensionValue | undefined;
  paddingBlockStart?: DimensionValue | undefined;
  paddingInline?: DimensionValue | undefined;
  paddingInlineEnd?: DimensionValue | undefined;
  paddingInlineStart?: DimensionValue | undefined;
}
declare type Float = number;
export declare type FontVariant =
  | 'small-caps'
  | 'oldstyle-nums'
  | 'lining-nums'
  | 'tabular-nums'
  | 'common-ligatures'
  | 'no-common-ligatures'
  | 'discretionary-ligatures'
  | 'no-discretionary-ligatures'
  | 'historical-ligatures'
  | 'no-historical-ligatures'
  | 'contextual'
  | 'no-contextual'
  | 'proportional-nums'
  | 'stylistic-one'
  | 'stylistic-two'
  | 'stylistic-three'
  | 'stylistic-four'
  | 'stylistic-five'
  | 'stylistic-six'
  | 'stylistic-seven'
  | 'stylistic-eight'
  | 'stylistic-nine'
  | 'stylistic-ten'
  | 'stylistic-eleven'
  | 'stylistic-twelve'
  | 'stylistic-thirteen'
  | 'stylistic-fourteen'
  | 'stylistic-fifteen'
  | 'stylistic-sixteen'
  | 'stylistic-seventeen'
  | 'stylistic-eighteen'
  | 'stylistic-nineteen'
  | 'stylistic-twenty';
export declare interface GestureResponderEvent
  extends NativeSyntheticEvent<NativeTouchEvent> {}
export declare interface GestureResponderHandlers {
  onStartShouldSetResponder?:
    | ((event: GestureResponderEvent) => boolean)
    | undefined;
  onMoveShouldSetResponder?:
    | ((event: GestureResponderEvent) => boolean)
    | undefined;
  onResponderEnd?: ((event: GestureResponderEvent) => void) | undefined;
  onResponderGrant?: ((event: GestureResponderEvent) => void) | undefined;
  onResponderReject?: ((event: GestureResponderEvent) => void) | undefined;
  onResponderMove?: ((event: GestureResponderEvent) => void) | undefined;
  onResponderRelease?: ((event: GestureResponderEvent) => void) | undefined;
  onResponderStart?: ((event: GestureResponderEvent) => void) | undefined;
  onResponderTerminationRequest?:
    | ((event: GestureResponderEvent) => boolean)
    | undefined;
  onResponderTerminate?: ((event: GestureResponderEvent) => void) | undefined;
  onStartShouldSetResponderCapture?:
    | ((event: GestureResponderEvent) => boolean)
    | undefined;
  onMoveShouldSetResponderCapture?:
    | ((event: GestureResponderEvent) => boolean)
    | undefined;
}
declare function get<T extends TurboModule>(name: string): T | null;
declare function getEnforcing<T extends TurboModule>(name: string): T;
export declare type GradientValue = {
  type: 'linearGradient';
  direction?: string | undefined;
  colorStops: ReadonlyArray<{
    color: ColorValue | null;
    positions?: ReadonlyArray<string[]> | undefined;
  }>;
};
export declare type Handle = number;
export declare interface HostComponent<P>
  extends Pick<
    React_2.ComponentClass<P>,
    Exclude<keyof React_2.ComponentClass<P>, 'new'>
  > {
  new (props: P, context?: any): React_2.Component<P> & HostInstance;
}
export declare type HostInstance = NativeMethods;
export declare const I18nManager: I18nManagerStatic;
export declare type I18nManager = I18nManagerStatic;
export declare interface I18nManagerStatic {
  getConstants: () => {
    isRTL: boolean;
    doLeftAndRightSwapInRTL: boolean;
    localeIdentifier?: string | null | undefined;
  };
  allowRTL: (allowRTL: boolean) => void;
  forceRTL: (forceRTL: boolean) => void;
  swapLeftAndRightInRTL: (swapLeftAndRight: boolean) => void;
  isRTL: boolean;
  doLeftAndRightSwapInRTL: boolean;
}
export declare class Image extends ImageBase {
  static getSize(uri: string): Promise<ImageSize>;
  static getSize(
    uri: string,
    success: (width: number, height: number) => void,
    failure?: (error: any) => void
  ): void;
  static getSizeWithHeaders(
    uri: string,
    headers: {[index: string]: string}
  ): Promise<ImageSize>;
  static getSizeWithHeaders(
    uri: string,
    headers: {[index: string]: string},
    success: (width: number, height: number) => void,
    failure?: (error: any) => void
  ): void;
  static prefetch(url: string): Promise<boolean>;
  static prefetchWithMetadata(
    url: string,
    queryRootName: string,
    rootTag?: number
  ): Promise<boolean>;
  static abortPrefetch?(requestId: number): void;
  static queryCache?(
    urls: string[]
  ): Promise<{[url: string]: 'memory' | 'disk' | 'disk/memory'}>;
  static resolveAssetSource(
    source: ImageSourcePropType
  ): ImageResolvedAssetSource;
}
export declare const _Image: typeof Image;
export declare class ImageBackground extends ImageBackgroundBase {}
export declare const ImageBackgroundBase: Constructor<NativeMethods> &
  typeof ImageBackgroundComponent;
export declare class ImageBackgroundComponent extends React_2.Component<ImageBackgroundProps> {}
export declare type ImageBackgroundProperties = ImageBackgroundProps;
export declare interface ImageBackgroundProps extends ImagePropsBase {
  children?: React_2.ReactNode | undefined;
  imageStyle?: StyleProp<ImageStyle> | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  imageRef?(image: Image): void;
}
export declare const ImageBase: Constructor<NativeMethods> &
  typeof ImageComponent;
export declare class ImageComponent extends React_2.Component<ImageProps> {}
export declare type ImageErrorEvent = NativeSyntheticEvent<ImageErrorEventData>;
export declare interface ImageErrorEventData {
  error: any;
}
export declare type ImageLoadEvent = NativeSyntheticEvent<ImageLoadEventData>;
export declare interface ImageLoadEventData {
  source: {
    height: number;
    width: number;
    uri: string;
  };
}
export declare interface ImageProgressEventDataIOS {
  loaded: number;
  total: number;
}
export declare type ImageProgressEventIOS =
  NativeSyntheticEvent<ImageProgressEventDataIOS>;
export declare type ImageProperties = ImageProps;
export declare type ImagePropertiesAndroid = ImagePropsAndroid;
export declare type ImagePropertiesIOS = ImagePropsIOS;
export declare type ImagePropertiesSourceOptions = ImageSourcePropType;
export declare interface ImageProps extends ImagePropsBase {
  style?: StyleProp<ImageStyle> | undefined;
}
export declare interface ImagePropsAndroid {
  resizeMethod?: 'auto' | 'resize' | 'scale' | 'none' | undefined;
  fadeDuration?: number | undefined;
}
export declare interface ImagePropsBase
  extends ImagePropsIOS,
    ImagePropsAndroid,
    AccessibilityProps {
  id?: string | undefined;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
  onError?: ((error: ImageErrorEvent) => void) | undefined;
  onLoad?: ((event: ImageLoadEvent) => void) | undefined;
  onLoadEnd?: (() => void) | undefined;
  onLoadStart?: (() => void) | undefined;
  progressiveRenderingEnabled?: boolean | undefined;
  borderRadius?: number | undefined;
  borderTopLeftRadius?: number | undefined;
  borderTopRightRadius?: number | undefined;
  borderBottomLeftRadius?: number | undefined;
  borderBottomRightRadius?: number | undefined;
  resizeMode?: ImageResizeMode | undefined;
  source?: ImageSourcePropType | undefined;
  src?: string | undefined;
  srcSet?: string | undefined;
  loadingIndicatorSource?: ImageURISource | undefined;
  testID?: string | undefined;
  nativeID?: string | undefined;
  defaultSource?: ImageURISource | ImageRequireSource | undefined;
  alt?: string | undefined;
  height?: number | undefined;
  width?: number | undefined;
  crossOrigin?: 'anonymous' | 'use-credentials' | undefined;
  tintColor?: ColorValue | undefined;
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
    | undefined;
}
export declare interface ImagePropsIOS {
  blurRadius?: number | undefined;
  capInsets?: Insets | undefined;
  onProgress?: ((event: ImageProgressEventIOS) => void) | undefined;
  onPartialLoad?: (() => void) | undefined;
}
export declare type ImageRequireSource = number;
export declare type ImageResizeMode =
  | 'cover'
  | 'contain'
  | 'stretch'
  | 'repeat'
  | 'center'
  | 'none';
export declare interface ImageResizeModeStatic {
  contain: ImageResizeMode;
  cover: ImageResizeMode;
  stretch: ImageResizeMode;
  center: ImageResizeMode;
  repeat: ImageResizeMode;
  none: ImageResizeMode;
}
export declare interface ImageResolvedAssetSource {
  height: number;
  width: number;
  scale: number;
  uri: string;
}
export declare interface ImageSize {
  width: number;
  height: number;
}
export declare type ImageSourcePropType =
  | ImageURISource
  | ImageURISource[]
  | ImageRequireSource;
export declare interface ImageStyle
  extends FlexStyle,
    ShadowStyleIOS,
    TransformsStyle {
  resizeMode?: ImageResizeMode | undefined;
  backfaceVisibility?: 'visible' | 'hidden' | undefined;
  borderBottomLeftRadius?: AnimatableNumericValue | string | undefined;
  borderBottomRightRadius?: AnimatableNumericValue | string | undefined;
  backgroundColor?: ColorValue | undefined;
  borderColor?: ColorValue | undefined;
  borderRadius?: AnimatableNumericValue | string | undefined;
  borderTopLeftRadius?: AnimatableNumericValue | string | undefined;
  borderTopRightRadius?: AnimatableNumericValue | string | undefined;
  overflow?: 'visible' | 'hidden' | undefined;
  overlayColor?: ColorValue | undefined;
  tintColor?: ColorValue | undefined;
  opacity?: AnimatableNumericValue | undefined;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none' | undefined;
  cursor?: CursorValue | undefined;
}
export declare interface ImageURISource {
  uri?: string | undefined;
  bundle?: string | undefined;
  method?: string | undefined;
  headers?: {[key: string]: string} | undefined;
  cache?: 'default' | 'reload' | 'force-cache' | 'only-if-cached' | undefined;
  body?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  scale?: number | undefined;
}
export declare class InputAccessoryView extends React_2.Component<InputAccessoryViewProps> {}
export declare type InputAccessoryViewProperties = InputAccessoryViewProps;
export declare interface InputAccessoryViewProps {
  backgroundColor?: ColorValue | undefined;
  children?: React_2.ReactNode | undefined;
  nativeID?: string | undefined;
  style?: StyleProp<ViewStyle> | undefined;
}
export declare type InputModeOptions =
  | 'none'
  | 'text'
  | 'decimal'
  | 'numeric'
  | 'tel'
  | 'search'
  | 'email'
  | 'url';
export declare interface Insets {
  top?: number | undefined;
  left?: number | undefined;
  bottom?: number | undefined;
  right?: number | undefined;
}
declare type Int32 = number;
export declare const InteractionManager: InteractionManagerStatic;
export declare interface InteractionManagerStatic {
  Events: {
    interactionStart: string;
    interactionComplete: string;
  };
  addListener(
    eventType: string,
    listener: (...args: any[]) => any,
    context?: any
  ): EmitterSubscription;
  runAfterInteractions(task?: (() => any) | SimpleTask | PromiseTask): {
    then: (onfulfilled?: () => any, onrejected?: () => any) => Promise<any>;
    done: (...args: any[]) => any;
    cancel: () => void;
  };
  createInteractionHandle(): Handle;
  clearInteractionHandle(handle: Handle): void;
  setDeadline(deadline: number): void;
}
declare interface IPerformanceLogger {
  addTimespan(
    key: string,
    startTime: number,
    endTime: number,
    startExtras?: Extras,
    endExtras?: Extras
  ): void;
  append(logger: IPerformanceLogger): void;
  clear(): void;
  clearCompleted(): void;
  close(): void;
  currentTimestamp(): number;
  getExtras(): {[key: string]: ExtraValue | null};
  getPoints(): {[key: string]: number | null};
  getPointExtras(): {[key: string]: Extras | null};
  getTimespans(): {[key: string]: Timespan | null};
  hasTimespan(key: string): boolean;
  isClosed(): boolean;
  logEverything(): void;
  markPoint(key: string, timestamp?: number, extras?: Extras): void;
  removeExtra(key: string): ExtraValue | null;
  setExtra(key: string, value: ExtraValue): void;
  startTimespan(key: string, timestamp?: number, extras?: Extras): void;
  stopTimespan(key: string, timestamp?: number, extras?: Extras): void;
}
declare function isEnabled(): boolean;
export declare const Keyboard: KeyboardStatic;
export declare class KeyboardAvoidingView extends KeyboardAvoidingViewBase {}
export declare const KeyboardAvoidingViewBase: Constructor<TimerMixin> &
  typeof KeyboardAvoidingViewComponent;
export declare class KeyboardAvoidingViewComponent extends React_2.Component<KeyboardAvoidingViewProps> {}
export declare interface KeyboardAvoidingViewProps extends ViewProps {
  behavior?: 'height' | 'position' | 'padding' | undefined;
  contentContainerStyle?: StyleProp<ViewStyle> | undefined;
  keyboardVerticalOffset?: number | undefined;
  enabled?: boolean | undefined;
}
declare interface KeyboardEvent_2 extends Partial<KeyboardEventIOS> {
  duration: number;
  easing: KeyboardEventEasing;
  endCoordinates: KeyboardMetrics;
}
export {KeyboardEvent_2 as KeyboardEvent};
export declare type KeyboardEventEasing =
  | 'easeIn'
  | 'easeInEaseOut'
  | 'easeOut'
  | 'linear'
  | 'keyboard';
export declare interface KeyboardEventIOS {
  startCoordinates: KeyboardMetrics;
  isEventFromThisApp: boolean;
}
export declare type KeyboardEventListener = (event: KeyboardEvent_2) => void;
export declare type KeyboardEventName =
  | 'keyboardWillShow'
  | 'keyboardDidShow'
  | 'keyboardWillHide'
  | 'keyboardDidHide'
  | 'keyboardWillChangeFrame'
  | 'keyboardDidChangeFrame';
export declare type KeyboardMetrics = {
  screenX: number;
  screenY: number;
  width: number;
  height: number;
};
export declare interface KeyboardStatic extends NativeEventEmitter {
  dismiss: () => void;
  addListener: (
    eventType: KeyboardEventName,
    listener: KeyboardEventListener
  ) => EmitterSubscription;
  scheduleLayoutAnimation: (event: KeyboardEvent_2) => void;
  isVisible(): boolean;
  metrics(): KeyboardMetrics | undefined;
}
export declare type KeyboardType =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
  | 'url';
export declare type KeyboardTypeAndroid = 'visible-password';
export declare type KeyboardTypeIOS =
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'name-phone-pad'
  | 'twitter'
  | 'web-search';
export declare type KeyboardTypeOptions =
  | KeyboardType
  | KeyboardTypeAndroid
  | KeyboardTypeIOS;
export declare const LayoutAnimation: LayoutAnimationStatic;
export declare type LayoutAnimation = LayoutAnimationStatic;
export declare interface LayoutAnimationAnim {
  duration?: number | undefined;
  delay?: number | undefined;
  springDamping?: number | undefined;
  initialVelocity?: number | undefined;
  type?: LayoutAnimationType | undefined;
  property?: LayoutAnimationProperty | undefined;
}
export declare interface LayoutAnimationConfig {
  duration: number;
  create?: LayoutAnimationAnim | undefined;
  update?: LayoutAnimationAnim | undefined;
  delete?: LayoutAnimationAnim | undefined;
}
export declare type LayoutAnimationProperties = {
  [prop in LayoutAnimationProperty]: prop;
};
export declare type LayoutAnimationProperty =
  | 'opacity'
  | 'scaleX'
  | 'scaleY'
  | 'scaleXY';
export declare interface LayoutAnimationStatic {
  configureNext: (
    config: LayoutAnimationConfig,
    onAnimationDidEnd?: () => void,
    onAnimationDidFail?: () => void
  ) => void;
  create: (
    duration: number,
    type?: LayoutAnimationType,
    creationProp?: LayoutAnimationProperty
  ) => LayoutAnimationConfig;
  Types: LayoutAnimationTypes;
  Properties: LayoutAnimationProperties;
  configChecker: (shapeTypes: {[key: string]: any}) => any;
  Presets: {
    easeInEaseOut: LayoutAnimationConfig;
    linear: LayoutAnimationConfig;
    spring: LayoutAnimationConfig;
  };
  easeInEaseOut: (onAnimationDidEnd?: () => void) => void;
  linear: (onAnimationDidEnd?: () => void) => void;
  spring: (onAnimationDidEnd?: () => void) => void;
}
export declare type LayoutAnimationType =
  | 'spring'
  | 'linear'
  | 'easeInEaseOut'
  | 'easeIn'
  | 'easeOut'
  | 'keyboard';
export declare type LayoutAnimationTypes = {
  [type in LayoutAnimationType]: type;
};
export declare type LayoutChangeEvent = NativeSyntheticEvent<{
  layout: LayoutRectangle;
}>;
export declare type LayoutConformanceProps = {
  mode: 'strict' | 'compatibility';
  children: React_2.ReactNode;
};
export declare interface LayoutRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}
export declare const Linking: LinkingImpl;
export declare type Linking = LinkingImpl;
export declare interface LinkingImpl extends NativeEventEmitter {
  addEventListener(
    type: 'url',
    handler: (event: {url: string}) => void
  ): EmitterSubscription;
  openURL(url: string): Promise<any>;
  canOpenURL(url: string): Promise<boolean>;
  getInitialURL(): Promise<string | null>;
  openSettings(): Promise<void>;
  sendIntent(
    action: string,
    extras?: Array<{key: string; value: string | number | boolean}>
  ): Promise<void>;
}
export declare const LogBox: LogBoxStatic;
export declare type LogBox = LogBoxStatic;
export declare interface LogBoxStatic {
  ignoreLogs(patterns: (string | RegExp)[]): void;
  ignoreAllLogs(ignore?: boolean): void;
  install(): void;
  uninstall(): void;
}
export declare interface MatrixTransform {
  matrix: AnimatableNumericValue[];
}
export declare type MaximumOneOf<
  T,
  K extends keyof T = keyof T,
> = K extends keyof T
  ? {[P in K]: T[K]} & {[P in Exclude<keyof T, K>]?: never}
  : never;
export declare type MeasureInWindowOnSuccessCallback = (
  x: number,
  y: number,
  width: number,
  height: number
) => void;
export declare type MeasureLayoutOnSuccessCallback = (
  left: number,
  top: number,
  width: number,
  height: number
) => void;
export declare type MeasureOnSuccessCallback = (
  x: number,
  y: number,
  width: number,
  height: number,
  pageX: number,
  pageY: number
) => void;
export declare class Modal extends React_2.Component<ModalProps> {}
export declare interface ModalBaseProps {
  animated?: boolean | undefined;
  animationType?: 'none' | 'slide' | 'fade' | undefined;
  transparent?: boolean | undefined;
  visible?: boolean | undefined;
  onRequestClose?: ((event: NativeSyntheticEvent<any>) => void) | undefined;
  onShow?: ((event: NativeSyntheticEvent<any>) => void) | undefined;
  backdropColor?: ColorValue | undefined;
}
export declare type ModalProperties = ModalProps;
export declare type ModalProps = ModalBaseProps &
  ModalPropsIOS &
  ModalPropsAndroid &
  ViewProps;
export declare interface ModalPropsAndroid {
  hardwareAccelerated?: boolean | undefined;
  statusBarTranslucent?: boolean | undefined;
  navigationBarTranslucent?: boolean | undefined;
}
export declare interface ModalPropsIOS {
  presentationStyle?:
    | 'fullScreen'
    | 'pageSheet'
    | 'formSheet'
    | 'overFullScreen'
    | undefined;
  supportedOrientations?:
    | Array<
        | 'portrait'
        | 'portrait-upside-down'
        | 'landscape'
        | 'landscape-left'
        | 'landscape-right'
      >
    | undefined;
  onDismiss?: (() => void) | undefined;
  onOrientationChange?:
    | ((event: NativeSyntheticEvent<any>) => void)
    | undefined;
}
export declare type Module = Object;
declare interface MouseEvent_2 extends NativeSyntheticEvent<NativeMouseEvent> {}
export {MouseEvent_2 as MouseEvent};
export declare const NativeAppEventEmitter: RCTNativeAppEventEmitter;
declare type NativeComponentType<T> = HostComponent<T>;
export declare class NativeEventEmitter extends EventEmitter_2 {
  constructor(nativeModule?: NativeModule);
  addListener(
    eventType: string,
    listener: (event: any) => void,
    context?: Object
  ): EmitterSubscription;
  removeAllListeners(eventType: string): void;
}
export declare interface NativeEventSubscription {
  remove(): void;
}
export declare interface NativeMethods {
  measure(callback: MeasureOnSuccessCallback): void;
  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
  measureLayout(
    relativeToNativeComponentRef: HostInstance | number,
    onSuccess: MeasureLayoutOnSuccessCallback,
    onFail?: () => void
  ): void;
  setNativeProps(nativeProps: object): void;
  focus(): void;
  blur(): void;
}
export declare type NativeMethodsMixin = NativeMethods;
export declare type NativeMethodsMixinType = NativeMethods;
export declare type NativeModule = {
  addListener: (eventType: string) => void;
  removeListeners: (count: number) => void;
};
export declare const NativeModules: NativeModulesStatic;
export declare interface NativeModulesStatic {
  [name: string]: any;
}
export declare interface NativeMouseEvent extends NativeUIEvent {
  readonly screenX: number;
  readonly screenY: number;
  readonly pageX: number;
  readonly pageY: number;
  readonly clientX: number;
  readonly clientY: number;
  readonly x: number;
  readonly y: number;
  readonly ctrlKey: boolean;
  readonly shiftKey: boolean;
  readonly altKey: boolean;
  readonly metaKey: boolean;
  readonly button: number;
  readonly buttons: number;
  readonly relatedTarget: null | number | HostInstance;
  readonly offsetX: number;
  readonly offsetY: number;
}
export declare interface NativePointerEvent extends NativeMouseEvent {
  readonly pointerId: number;
  readonly width: number;
  readonly height: number;
  readonly pressure: number;
  readonly tangentialPressure: number;
  readonly tiltX: number;
  readonly tiltY: number;
  readonly twist: number;
  readonly pointerType: string;
  readonly isPrimary: boolean;
}
export declare interface NativeScrollEvent {
  contentInset: NativeScrollRectangle;
  contentOffset: NativeScrollPoint;
  contentSize: NativeScrollSize;
  layoutMeasurement: NativeScrollSize;
  velocity?: NativeScrollVelocity | undefined;
  zoomScale: number;
  targetContentOffset?: NativeScrollPoint | undefined;
}
export declare interface NativeScrollPoint {
  x: number;
  y: number;
}
export declare interface NativeScrollRectangle {
  left: number;
  top: number;
  bottom: number;
  right: number;
}
export declare interface NativeScrollSize {
  height: number;
  width: number;
}
export declare interface NativeScrollVelocity {
  x: number;
  y: number;
}
export declare interface NativeSyntheticEvent<T>
  extends React_2.BaseSyntheticEvent<T, HostInstance, HostInstance> {}
export declare interface NativeTouchEvent {
  changedTouches: NativeTouchEvent[];
  identifier: string;
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
  target: string;
  timestamp: number;
  touches: NativeTouchEvent[];
  force?: number | undefined;
}
export declare interface NativeUIEvent {
  readonly detail: number;
}
export declare type NodeHandle = number;
export declare type OpaqueColorValue = symbol & {__TYPE__: 'Color'};
declare interface Options<T extends string> {
  readonly supportedCommands: ReadonlyArray<T>;
}
declare interface Options_2 {
  readonly interfaceOnly?: boolean | undefined;
  readonly paperComponentName?: string | undefined;
  readonly paperComponentNameDeprecated?: string | undefined;
  readonly excludedPlatforms?: ReadonlyArray<'iOS' | 'android'> | undefined;
}
export declare const PanResponder: PanResponderStatic;
export declare type PanResponder = PanResponderStatic;
export declare interface PanResponderCallbacks {
  onMoveShouldSetPanResponder?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => boolean)
    | undefined;
  onStartShouldSetPanResponder?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => boolean)
    | undefined;
  onPanResponderGrant?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => void)
    | undefined;
  onPanResponderMove?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => void)
    | undefined;
  onPanResponderRelease?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => void)
    | undefined;
  onPanResponderTerminate?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => void)
    | undefined;
  onMoveShouldSetPanResponderCapture?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => boolean)
    | undefined;
  onStartShouldSetPanResponderCapture?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => boolean)
    | undefined;
  onPanResponderReject?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => void)
    | undefined;
  onPanResponderStart?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => void)
    | undefined;
  onPanResponderEnd?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => void)
    | undefined;
  onPanResponderTerminationRequest?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => boolean)
    | undefined;
  onShouldBlockNativeResponder?:
    | ((
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => boolean)
    | undefined;
}
export declare interface PanResponderGestureState {
  stateID: number;
  moveX: number;
  moveY: number;
  x0: number;
  y0: number;
  dx: number;
  dy: number;
  vx: number;
  vy: number;
  numberActiveTouches: number;
  _accountsForMovesUpTo: number;
}
export declare interface PanResponderInstance {
  panHandlers: GestureResponderHandlers;
}
export declare interface PanResponderStatic {
  create(config: PanResponderCallbacks): PanResponderInstance;
}
export declare type Permission =
  | 'android.permission.READ_CALENDAR'
  | 'android.permission.WRITE_CALENDAR'
  | 'android.permission.CAMERA'
  | 'android.permission.READ_CONTACTS'
  | 'android.permission.WRITE_CONTACTS'
  | 'android.permission.GET_ACCOUNTS'
  | 'android.permission.ACCESS_BACKGROUND_LOCATION'
  | 'android.permission.ACCESS_FINE_LOCATION'
  | 'android.permission.ACCESS_COARSE_LOCATION'
  | 'android.permission.RECORD_AUDIO'
  | 'android.permission.READ_PHONE_STATE'
  | 'android.permission.CALL_PHONE'
  | 'android.permission.READ_CALL_LOG'
  | 'android.permission.WRITE_CALL_LOG'
  | 'com.android.voicemail.permission.ADD_VOICEMAIL'
  | 'com.android.voicemail.permission.READ_VOICEMAIL'
  | 'com.android.voicemail.permission.WRITE_VOICEMAIL'
  | 'android.permission.USE_SIP'
  | 'android.permission.PROCESS_OUTGOING_CALLS'
  | 'android.permission.BODY_SENSORS'
  | 'android.permission.BODY_SENSORS_BACKGROUND'
  | 'android.permission.SEND_SMS'
  | 'android.permission.RECEIVE_SMS'
  | 'android.permission.READ_SMS'
  | 'android.permission.RECEIVE_WAP_PUSH'
  | 'android.permission.RECEIVE_MMS'
  | 'android.permission.READ_EXTERNAL_STORAGE'
  | 'android.permission.READ_MEDIA_IMAGES'
  | 'android.permission.READ_MEDIA_VIDEO'
  | 'android.permission.READ_MEDIA_AUDIO'
  | 'android.permission.READ_MEDIA_VISUAL_USER_SELECTED'
  | 'android.permission.WRITE_EXTERNAL_STORAGE'
  | 'android.permission.BLUETOOTH_CONNECT'
  | 'android.permission.BLUETOOTH_SCAN'
  | 'android.permission.BLUETOOTH_ADVERTISE'
  | 'android.permission.ACCESS_MEDIA_LOCATION'
  | 'android.permission.ACCEPT_HANDOVER'
  | 'android.permission.ACTIVITY_RECOGNITION'
  | 'android.permission.ANSWER_PHONE_CALLS'
  | 'android.permission.READ_PHONE_NUMBERS'
  | 'android.permission.UWB_RANGING'
  | 'android.permission.POST_NOTIFICATIONS'
  | 'android.permission.NEARBY_WIFI_DEVICES';
export declare const PermissionsAndroid: PermissionsAndroidStatic;
export declare type PermissionsAndroid = PermissionsAndroidStatic;
export declare interface PermissionsAndroidStatic {
  RESULTS: {
    [key in 'GRANTED' | 'DENIED' | 'NEVER_ASK_AGAIN']: PermissionStatus;
  };
  PERMISSIONS: {
    [key in
      | 'READ_CALENDAR'
      | 'WRITE_CALENDAR'
      | 'CAMERA'
      | 'READ_CONTACTS'
      | 'WRITE_CONTACTS'
      | 'GET_ACCOUNTS'
      | 'ACCESS_FINE_LOCATION'
      | 'ACCESS_COARSE_LOCATION'
      | 'ACCESS_BACKGROUND_LOCATION'
      | 'RECORD_AUDIO'
      | 'READ_PHONE_STATE'
      | 'CALL_PHONE'
      | 'READ_CALL_LOG'
      | 'WRITE_CALL_LOG'
      | 'ADD_VOICEMAIL'
      | 'READ_VOICEMAIL'
      | 'WRITE_VOICEMAIL'
      | 'USE_SIP'
      | 'PROCESS_OUTGOING_CALLS'
      | 'BODY_SENSORS'
      | 'BODY_SENSORS_BACKGROUND'
      | 'SEND_SMS'
      | 'RECEIVE_SMS'
      | 'READ_SMS'
      | 'RECEIVE_WAP_PUSH'
      | 'RECEIVE_MMS'
      | 'READ_EXTERNAL_STORAGE'
      | 'READ_MEDIA_IMAGES'
      | 'READ_MEDIA_VIDEO'
      | 'READ_MEDIA_AUDIO'
      | 'READ_MEDIA_VISUAL_USER_SELECTED'
      | 'WRITE_EXTERNAL_STORAGE'
      | 'BLUETOOTH_CONNECT'
      | 'BLUETOOTH_SCAN'
      | 'BLUETOOTH_ADVERTISE'
      | 'ACCESS_MEDIA_LOCATION'
      | 'ACCEPT_HANDOVER'
      | 'ACTIVITY_RECOGNITION'
      | 'ANSWER_PHONE_CALLS'
      | 'READ_PHONE_NUMBERS'
      | 'UWB_RANGING'
      | 'POST_NOTIFICATIONS'
      | 'NEARBY_WIFI_DEVICES']: Permission;
  };
  new (): PermissionsAndroidStatic;
  checkPermission(permission: Permission): Promise<boolean>;
  check(permission: Permission): Promise<boolean>;
  requestPermission(
    permission: Permission,
    rationale?: Rationale
  ): Promise<boolean>;
  request(
    permission: Permission,
    rationale?: Rationale
  ): Promise<PermissionStatus>;
  requestMultiple(
    permissions: Array<Permission>
  ): Promise<{[key in Permission]: PermissionStatus}>;
}
export declare type PermissionStatus = 'granted' | 'denied' | 'never_ask_again';
export declare interface PerspectiveTransform {
  perspective: AnimatableNumericValue;
}
export declare const PixelRatio: PixelRatioStatic;
export declare interface PixelRatioStatic {
  get(): number;
  getFontScale(): number;
  getPixelSizeForLayoutSize(layoutSize: number): number;
  roundToNearestPixel(layoutSize: number): number;
  startDetecting(): void;
}
export declare type Platform =
  | PlatformIOSStatic
  | PlatformAndroidStatic
  | PlatformWindowsOSStatic
  | PlatformMacOSStatic
  | PlatformWebStatic;
export declare const Platform: Platform;
export declare interface PlatformAndroidStatic extends PlatformStatic {
  constants: PlatformConstants & {
    Version: number;
    Release: string;
    Serial: string;
    Fingerprint: string;
    Model: string;
    Brand: string;
    Manufacturer: string;
    ServerHost?: string | undefined;
    uiMode: 'car' | 'desk' | 'normal' | 'tv' | 'watch' | 'unknown';
  };
  OS: 'android';
  Version: number;
}
export declare function PlatformColor(...colors: string[]): OpaqueColorValue;
export declare type PlatformConstants = {
  isTesting: boolean;
  isDisableAnimations?: boolean | undefined;
  reactNativeVersion: {
    major: number;
    minor: number;
    patch: number;
    prerelease?: string | null | undefined;
  };
};
export declare interface PlatformIOSStatic extends PlatformStatic {
  constants: PlatformConstants & {
    forceTouchAvailable: boolean;
    interfaceIdiom: string;
    osVersion: string;
    systemName: string;
    isMacCatalyst?: boolean | undefined;
  };
  OS: 'ios';
  isPad: boolean;
  isTV: boolean;
  isVision: boolean;
  isMacCatalyst?: boolean | undefined;
  Version: string;
}
export declare interface PlatformMacOSStatic extends PlatformStatic {
  OS: 'macos';
  Version: string;
  constants: PlatformConstants & {
    osVersion: string;
  };
}
export declare type PlatformOSType =
  | 'ios'
  | 'android'
  | 'macos'
  | 'windows'
  | 'web'
  | 'native';
export declare interface PlatformStatic {
  isTV: boolean;
  isTesting: boolean;
  Version: number | string;
  constants: PlatformConstants;
  select<T>(
    specifics:
      | ({[platform in PlatformOSType]?: T} & {default: T})
      | {[platform in PlatformOSType]: T}
  ): T;
  select<T>(specifics: {[platform in PlatformOSType]?: T}): T | undefined;
}
export declare interface PlatformWebStatic extends PlatformStatic {
  OS: 'web';
}
export declare interface PlatformWindowsOSStatic extends PlatformStatic {
  OS: 'windows';
  Version: number;
  constants: PlatformConstants & {
    osVersion: number;
  };
}
declare type PointerEvent_2 = NativeSyntheticEvent<NativePointerEvent>;
export {PointerEvent_2 as PointerEvent};
export declare interface PointerEvents {
  onPointerEnter?: ((event: PointerEvent_2) => void) | undefined;
  onPointerEnterCapture?: ((event: PointerEvent_2) => void) | undefined;
  onPointerLeave?: ((event: PointerEvent_2) => void) | undefined;
  onPointerLeaveCapture?: ((event: PointerEvent_2) => void) | undefined;
  onPointerMove?: ((event: PointerEvent_2) => void) | undefined;
  onPointerMoveCapture?: ((event: PointerEvent_2) => void) | undefined;
  onPointerCancel?: ((event: PointerEvent_2) => void) | undefined;
  onPointerCancelCapture?: ((event: PointerEvent_2) => void) | undefined;
  onPointerDown?: ((event: PointerEvent_2) => void) | undefined;
  onPointerDownCapture?: ((event: PointerEvent_2) => void) | undefined;
  onPointerUp?: ((event: PointerEvent_2) => void) | undefined;
  onPointerUpCapture?: ((event: PointerEvent_2) => void) | undefined;
}
export declare interface PointProp {
  x: number;
  y: number;
}
export declare type PresentLocalNotificationDetails = {
  alertBody: string;
  alertAction: string;
  alertTitle?: string | undefined;
  soundName?: string | undefined;
  category?: string | undefined;
  userInfo?: Object | undefined;
  applicationIconBadgeNumber?: number | undefined;
};
export declare const Pressable: React_2.ForwardRefExoticComponent<
  PressableProps & React_2.RefAttributes<View>
>;
export declare interface PressableAndroidRippleConfig {
  color?: null | ColorValue | undefined;
  borderless?: null | boolean | undefined;
  radius?: null | number | undefined;
  foreground?: null | boolean | undefined;
}
export declare interface PressableProps
  extends AccessibilityProps,
    Omit<ViewProps, 'children' | 'style' | 'hitSlop'> {
  onHoverIn?: null | ((event: MouseEvent_2) => void) | undefined;
  onHoverOut?: null | ((event: MouseEvent_2) => void) | undefined;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  onPressIn?: null | ((event: GestureResponderEvent) => void) | undefined;
  onPressOut?: null | ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  onBlur?:
    | null
    | ((event: NativeSyntheticEvent<TargetedEvent>) => void)
    | undefined;
  onFocus?:
    | null
    | ((event: NativeSyntheticEvent<TargetedEvent>) => void)
    | undefined;
  children?:
    | React_2.ReactNode
    | ((state: PressableStateCallbackType) => React_2.ReactNode)
    | undefined;
  cancelable?: null | boolean | undefined;
  delayHoverIn?: number | null | undefined;
  delayHoverOut?: number | null | undefined;
  delayLongPress?: null | number | undefined;
  disabled?: null | boolean | undefined;
  hitSlop?: null | Insets | number | undefined;
  pressRetentionOffset?: null | Insets | number | undefined;
  android_disableSound?: null | boolean | undefined;
  android_ripple?: null | PressableAndroidRippleConfig | undefined;
  testOnly_pressed?: null | boolean | undefined;
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>)
    | undefined;
  unstable_pressDelay?: number | undefined;
}
export declare interface PressableStateCallbackType {
  readonly pressed: boolean;
}
export declare function processColor(
  color?: number | ColorValue
): ProcessedColorValue | null | undefined;
export declare type ProcessedColorValue = number | OpaqueColorValue;
export declare class ProgressBarAndroid extends ProgressBarAndroidBase {}
export declare const ProgressBarAndroidBase: Constructor<NativeMethods> &
  typeof ProgressBarAndroidComponent;
export declare class ProgressBarAndroidComponent extends React_2.Component<ProgressBarAndroidProps> {}
export declare type ProgressBarAndroidProperties = ProgressBarAndroidProps;
export declare interface ProgressBarAndroidProps extends ViewProps {
  styleAttr?:
    | 'Horizontal'
    | 'Normal'
    | 'Small'
    | 'Large'
    | 'Inverse'
    | 'SmallInverse'
    | 'LargeInverse'
    | undefined;
  indeterminate?: boolean | undefined;
  progress?: number | undefined;
  animating?: boolean | undefined;
  color?: ColorValue | undefined;
  testID?: string | undefined;
}
export declare type PromiseTask = {
  name: string;
  gen: () => Promise<any>;
};
export declare interface PushNotification {
  getMessage(): string | Object;
  getSound(): string;
  getCategory(): string;
  getAlert(): string | Object;
  getContentAvailable(): number;
  getBadgeCount(): number;
  getData(): Object;
  getThreadId(): string;
  finish(result: string): void;
}
export declare type PushNotificationEventName =
  | 'notification'
  | 'localNotification'
  | 'register'
  | 'registrationError';
export declare const PushNotificationIOS: PushNotificationIOSStatic;
export declare type PushNotificationIOS = PushNotificationIOSStatic;
export declare interface PushNotificationIOSStatic {
  presentLocalNotification(details: PresentLocalNotificationDetails): void;
  scheduleLocalNotification(details: ScheduleLocalNotificationDetails): void;
  cancelAllLocalNotifications(): void;
  removeAllDeliveredNotifications(): void;
  getDeliveredNotifications(callback: (notifications: Object[]) => void): void;
  removeDeliveredNotifications(identifiers: string[]): void;
  cancelLocalNotifications(userInfo: Object): void;
  setApplicationIconBadgeNumber(number: number): void;
  getApplicationIconBadgeNumber(callback: (badge: number) => void): void;
  getScheduledLocalNotifications(
    callback: (notifications: ScheduleLocalNotificationDetails[]) => void
  ): void;
  addEventListener(
    type: 'notification' | 'localNotification',
    handler: (notification: PushNotification) => void
  ): void;
  addEventListener(
    type: 'register',
    handler: (deviceToken: string) => void
  ): void;
  addEventListener(
    type: 'registrationError',
    handler: (error: {message: string; code: number; details: any}) => void
  ): void;
  removeEventListener(
    type: PushNotificationEventName,
    handler:
      | ((notification: PushNotification) => void)
      | ((deviceToken: string) => void)
      | ((error: {message: string; code: number; details: any}) => void)
  ): void;
  requestPermissions(permissions?: PushNotificationPermissions[]): void;
  requestPermissions(
    permissions?: PushNotificationPermissions
  ): Promise<PushNotificationPermissions>;
  abandonPermissions(): void;
  checkPermissions(
    callback: (permissions: PushNotificationPermissions) => void
  ): void;
  getInitialNotification(): Promise<PushNotification | null>;
  FetchResult: FetchResult;
}
export declare interface PushNotificationPermissions {
  alert?: boolean | undefined;
  badge?: boolean | undefined;
  sound?: boolean | undefined;
}
export declare interface Rationale {
  title: string;
  message: string;
  buttonPositive: string;
  buttonNegative?: string | undefined;
  buttonNeutral?: string | undefined;
}
export declare type RCTNativeAppEventEmitter = DeviceEventEmitterStatic;
export declare interface RecursiveArray<T>
  extends Array<T | ReadonlyArray<T> | RecursiveArray<T>> {}
export declare class RefreshControl extends RefreshControlBase {
  static SIZE: Object; // Undocumented
}
export declare const RefreshControlBase: Constructor<NativeMethods> &
  typeof RefreshControlComponent;
export declare class RefreshControlComponent extends React_2.Component<RefreshControlProps> {}
export declare type RefreshControlProperties = RefreshControlProps;
export declare type RefreshControlPropertiesAndroid =
  RefreshControlPropsAndroid;
export declare type RefreshControlPropertiesIOS = RefreshControlPropsIOS;
export declare interface RefreshControlProps
  extends RefreshControlPropsIOS,
    RefreshControlPropsAndroid {
  onRefresh?: (() => void) | undefined;
  refreshing: boolean;
  progressViewOffset?: number | undefined;
}
export declare interface RefreshControlPropsAndroid extends ViewProps {
  colors?: ColorValue[] | undefined;
  enabled?: boolean | undefined;
  progressBackgroundColor?: ColorValue | undefined;
  size?: number | undefined;
}
export declare interface RefreshControlPropsIOS extends ViewProps {
  tintColor?: ColorValue | undefined;
  title?: string | undefined;
  titleColor?: ColorValue | undefined;
}
export declare type RegisterCallableModule = (
  name: string,
  moduleOrFactory: Module | (() => Module)
) => void;
export declare const registerCallableModule: RegisterCallableModule;
export declare type RegisteredStyle<T> = number & {__registeredStyleBrand: T};
export declare function requireNativeComponent<T>(
  viewName: string
): HostComponent<T>;
export declare type ReturnKeyType = 'done' | 'go' | 'next' | 'search' | 'send';
export declare type ReturnKeyTypeAndroid = 'none' | 'previous';
export declare type ReturnKeyTypeIOS =
  | 'default'
  | 'google'
  | 'join'
  | 'route'
  | 'yahoo'
  | 'emergency-call';
export declare type ReturnKeyTypeOptions =
  | ReturnKeyType
  | ReturnKeyTypeAndroid
  | ReturnKeyTypeIOS;
export declare interface RippleBackgroundPropType
  extends BaseBackgroundPropType {
  type: 'RippleAndroid';
  borderless: boolean;
  color?: number | null | undefined;
}
export declare type Role =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'cell'
  | 'checkbox'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'group'
  | 'heading'
  | 'img'
  | 'link'
  | 'list'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'meter'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'searchbox'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'summary'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem';
export declare type RootTag = number;
export declare const RootTagContext: React_2.Context<RootTag>;
export declare type RootViewStyleProvider = (appParameters: any) => ViewStyle;
export declare interface RotateTransform {
  rotate: AnimatableStringValue;
}
export declare interface RotateXTransform {
  rotateX: AnimatableStringValue;
}
export declare interface RotateYTransform {
  rotateY: AnimatableStringValue;
}
export declare interface RotateZTransform {
  rotateZ: AnimatableStringValue;
}
export declare type Runnable = (appParameters: any) => void;
export declare class SafeAreaView extends SafeAreaViewBase {}
export declare const SafeAreaViewBase: Constructor<NativeMethods> &
  typeof SafeAreaViewComponent;
export declare class SafeAreaViewComponent extends React_2.Component<ViewProps> {}
export declare interface ScaledSize {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
}
export declare interface ScaleTransform {
  scale: AnimatableNumericValue;
}
export declare interface ScaleXTransform {
  scaleX: AnimatableNumericValue;
}
export declare interface ScaleYTransform {
  scaleY: AnimatableNumericValue;
}
export declare type ScheduleLocalNotificationDetails = {
  alertAction?: string | undefined;
  alertBody?: string | undefined;
  alertTitle?: string | undefined;
  applicationIconBadgeNumber?: number | undefined;
  category?: string | undefined;
  fireDate?: number | string | undefined;
  isSilent?: boolean | undefined;
  repeatInterval?:
    | 'year'
    | 'month'
    | 'week'
    | 'day'
    | 'hour'
    | 'minute'
    | undefined;
  soundName?: string | undefined;
  userInfo?: Object | undefined;
};
export declare interface ScrollResponderEvent
  extends NativeSyntheticEvent<NativeTouchEvent> {}
export declare interface ScrollResponderMixin extends SubscribableMixin {
  scrollResponderHandleScrollShouldSetResponder(): boolean;
  scrollResponderHandleStartShouldSetResponder(): boolean;
  scrollResponderHandleStartShouldSetResponderCapture(
    e: ScrollResponderEvent
  ): boolean;
  scrollResponderHandleResponderReject(): any;
  scrollResponderHandleTerminationRequest(): boolean;
  scrollResponderHandleTouchEnd(e: ScrollResponderEvent): void;
  scrollResponderHandleResponderRelease(e: ScrollResponderEvent): void;
  scrollResponderHandleScroll(e: ScrollResponderEvent): void;
  scrollResponderHandleResponderGrant(e: ScrollResponderEvent): void;
  scrollResponderHandleScrollBeginDrag(e: ScrollResponderEvent): void;
  scrollResponderHandleScrollEndDrag(e: ScrollResponderEvent): void;
  scrollResponderHandleMomentumScrollBegin(e: ScrollResponderEvent): void;
  scrollResponderHandleMomentumScrollEnd(e: ScrollResponderEvent): void;
  scrollResponderHandleTouchStart(e: ScrollResponderEvent): void;
  scrollResponderHandleTouchMove(e: ScrollResponderEvent): void;
  scrollResponderIsAnimating(): boolean;
  scrollResponderGetScrollableNode(): any;
  scrollResponderScrollTo(
    x?:
      | number
      | {
          x?: number | undefined;
          y?: number | undefined;
          animated?: boolean | undefined;
        },
    y?: number,
    animated?: boolean
  ): void;
  scrollResponderZoomTo(
    rect: {
      x: number;
      y: number;
      width: number;
      height: number;
      animated?: boolean | undefined;
    },
    animated?: boolean // deprecated, put this inside the rect argument instead
  ): void;
  scrollResponderScrollNativeHandleToKeyboard(
    nodeHandle: any,
    additionalOffset?: number,
    preventNegativeScrollOffset?: boolean
  ): void;
  scrollResponderInputMeasureAndScrollToKeyboard(
    left: number,
    top: number,
    width: number,
    height: number
  ): void;
  scrollResponderTextInputFocusError(e: ScrollResponderEvent): void;
  componentWillMount(): void;
  scrollResponderKeyboardWillShow(e: ScrollResponderEvent): void;
  scrollResponderKeyboardWillHide(e: ScrollResponderEvent): void;
  scrollResponderKeyboardDidShow(e: ScrollResponderEvent): void;
  scrollResponderKeyboardDidHide(e: ScrollResponderEvent): void;
}
export declare class ScrollView extends ScrollViewBase {
  scrollTo(
    y?:
      | number
      | {
          x?: number | undefined;
          y?: number | undefined;
          animated?: boolean | undefined;
        },
    deprecatedX?: number,
    deprecatedAnimated?: boolean
  ): void;
  scrollToEnd(options?: {animated?: boolean | undefined}): void;
  flashScrollIndicators(): void;
  getScrollResponder(): ScrollResponderMixin;
  getScrollableNode(): any;
  getInnerViewNode(): any;
  scrollWithoutAnimationTo?: ((y: number, x: number) => void) | undefined;
  setNativeProps(nativeProps: object): void;
}
export declare const _ScrollView: typeof ScrollView;
export declare const ScrollViewBase: Constructor<ScrollResponderMixin> &
  typeof ScrollViewComponent;
export declare class ScrollViewComponent extends React_2.Component<ScrollViewProps> {}
export declare type ScrollViewProperties = ScrollViewProps;
export declare type ScrollViewPropertiesAndroid = ScrollViewPropsAndroid;
export declare type ScrollViewPropertiesIOS = ScrollViewPropsIOS;
export declare interface ScrollViewProps
  extends ViewProps,
    ScrollViewPropsIOS,
    ScrollViewPropsAndroid,
    Touchable {
  contentContainerStyle?: StyleProp<ViewStyle> | undefined;
  decelerationRate?: 'fast' | 'normal' | number | undefined;
  horizontal?: boolean | null | undefined;
  invertStickyHeaders?: boolean | undefined;
  keyboardDismissMode?: 'none' | 'interactive' | 'on-drag' | undefined;
  keyboardShouldPersistTaps?:
    | boolean
    | 'always'
    | 'never'
    | 'handled'
    | undefined;
  onContentSizeChange?: ((w: number, h: number) => void) | undefined;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onScrollBeginDrag?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onScrollEndDrag?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onMomentumScrollEnd?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onMomentumScrollBegin?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  pagingEnabled?: boolean | undefined;
  scrollEnabled?: boolean | undefined; // true
  removeClippedSubviews?: boolean | undefined;
  showsHorizontalScrollIndicator?: boolean | undefined;
  showsVerticalScrollIndicator?: boolean | undefined;
  stickyHeaderHiddenOnScroll?: boolean | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  refreshControl?: React_2.ReactElement<RefreshControlProps> | undefined;
  snapToInterval?: number | undefined;
  snapToOffsets?: number[] | undefined;
  snapToStart?: boolean | undefined;
  snapToEnd?: boolean | undefined;
  stickyHeaderIndices?: number[] | undefined;
  disableIntervalMomentum?: boolean | undefined;
  disableScrollViewPanResponder?: boolean | undefined;
  StickyHeaderComponent?: React_2.ComponentType<any> | undefined;
}
export declare interface ScrollViewPropsAndroid {
  endFillColor?: ColorValue | undefined;
  scrollPerfTag?: string | undefined;
  overScrollMode?: 'auto' | 'always' | 'never' | undefined;
  nestedScrollEnabled?: boolean | undefined;
  fadingEdgeLength?: number | undefined;
  persistentScrollbar?: boolean | undefined;
}
export declare interface ScrollViewPropsIOS {
  alwaysBounceHorizontal?: boolean | undefined;
  alwaysBounceVertical?: boolean | undefined;
  automaticallyAdjustContentInsets?: boolean | undefined; // true
  automaticallyAdjustKeyboardInsets?: boolean | undefined;
  automaticallyAdjustsScrollIndicatorInsets?: boolean | undefined;
  bounces?: boolean | undefined;
  bouncesZoom?: boolean | undefined;
  canCancelContentTouches?: boolean | undefined;
  centerContent?: boolean | undefined;
  contentInset?: Insets | undefined; // zeros
  contentOffset?: PointProp | undefined; // zeros
  contentInsetAdjustmentBehavior?:
    | 'automatic'
    | 'scrollableAxes'
    | 'never'
    | 'always'
    | undefined;
  directionalLockEnabled?: boolean | undefined;
  indicatorStyle?: 'default' | 'black' | 'white' | undefined;
  maintainVisibleContentPosition?:
    | null
    | {
        autoscrollToTopThreshold?: number | null | undefined;
        minIndexForVisible: number;
      }
    | undefined;
  maximumZoomScale?: number | undefined;
  minimumZoomScale?: number | undefined;
  onScrollAnimationEnd?: (() => void) | undefined;
  pinchGestureEnabled?: boolean | undefined;
  scrollEventThrottle?: number | undefined;
  scrollIndicatorInsets?: Insets | undefined; //zeroes
  scrollToOverflowEnabled?: boolean | undefined;
  scrollsToTop?: boolean | undefined;
  snapToAlignment?: 'start' | 'center' | 'end' | undefined;
  onScrollToTop?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  zoomScale?: number | undefined;
}
export declare interface SectionBase<ItemT, SectionT = DefaultSectionT> {
  data: ReadonlyArray<ItemT>;
  key?: string | undefined;
  renderItem?: SectionListRenderItem<ItemT, SectionT> | undefined;
  ItemSeparatorComponent?: React_2.ComponentType<any> | null | undefined;
  keyExtractor?: ((item: ItemT, index: number) => string) | undefined;
}
export declare class SectionList<
  ItemT = any,
  SectionT = DefaultSectionT,
> extends SectionListComponent<SectionListProps<ItemT, SectionT>> {}
export declare abstract class SectionListComponent<
  Props,
> extends React_2.Component<Props> {
  scrollToLocation(params: SectionListScrollParams): void;
  recordInteraction(): void;
  flashScrollIndicators(): void;
  getScrollResponder(): ScrollView | undefined;
  getScrollableNode(): NodeHandle | undefined;
}
export declare type SectionListData<
  ItemT,
  SectionT = DefaultSectionT,
> = SectionBase<ItemT, SectionT> & SectionT;
export declare type SectionListProperties<ItemT> = SectionListProps<ItemT>;
export declare interface SectionListProps<ItemT, SectionT = DefaultSectionT>
  extends VirtualizedListWithoutPreConfiguredProps<ItemT> {
  SectionSeparatorComponent?:
    | React_2.ComponentType<any>
    | React_2.ReactElement
    | null
    | undefined;
  extraData?: any | undefined;
  getItemLayout?:
    | ((
        data: SectionListData<ItemT, SectionT>[] | null,
        index: number
      ) => {length: number; offset: number; index: number})
    | undefined;
  initialNumToRender?: number | undefined;
  inverted?: boolean | null | undefined;
  keyExtractor?: ((item: ItemT, index: number) => string) | undefined;
  onEndReached?: ((info: {distanceFromEnd: number}) => void) | null | undefined;
  onEndReachedThreshold?: number | null | undefined;
  onRefresh?: (() => void) | null | undefined;
  onScrollToIndexFailed?:
    | ((info: {
        index: number;
        highestMeasuredFrameIndex: number;
        averageItemLength: number;
      }) => void)
    | undefined;
  refreshing?: boolean | null | undefined;
  renderItem?: SectionListRenderItem<ItemT, SectionT> | undefined;
  renderSectionHeader?:
    | ((info: {
        section: SectionListData<ItemT, SectionT>;
      }) => React_2.ReactElement | null)
    | undefined;
  renderSectionFooter?:
    | ((info: {
        section: SectionListData<ItemT, SectionT>;
      }) => React_2.ReactElement | null)
    | undefined;
  sections: ReadonlyArray<SectionListData<ItemT, SectionT>>;
  renderScrollComponent?:
    | ((props: ScrollViewProps) => React_2.ReactElement<ScrollViewProps>)
    | undefined;
  removeClippedSubviews?: boolean | undefined;
  stickySectionHeadersEnabled?: boolean | undefined;
  legacyImplementation?: boolean | undefined;
}
export declare type SectionListRenderItem<ItemT, SectionT = DefaultSectionT> = (
  info: SectionListRenderItemInfo<ItemT, SectionT>
) => React_2.ReactElement | null;
export declare interface SectionListRenderItemInfo<
  ItemT,
  SectionT = DefaultSectionT,
> extends ListRenderItemInfo<ItemT> {
  section: SectionListData<ItemT, SectionT>;
}
export declare interface SectionListScrollParams {
  animated?: boolean | undefined;
  itemIndex: number;
  sectionIndex: number;
  viewOffset?: number | undefined;
  viewPosition?: number | undefined;
}
export declare interface SectionListStatic<ItemT, SectionT = DefaultSectionT>
  extends React_2.ComponentClass<SectionListProps<ItemT, SectionT>> {
  scrollToLocation?(params: SectionListScrollParams): void;
}
declare function setEnabled(_doEnable: boolean): void;
export declare const Settings: SettingsStatic;
export declare type Settings = SettingsStatic;
export declare interface SettingsStatic {
  get(key: string): any;
  set(settings: Object): void;
  watchKeys(keys: string | Array<string>, callback: () => void): number;
  clearWatch(watchId: number): void;
}
export declare interface ShadowStyleIOS {
  shadowColor?: ColorValue | undefined;
  shadowOffset?: Readonly<{width: number; height: number}> | undefined;
  shadowOpacity?: AnimatableNumericValue | undefined;
  shadowRadius?: number | undefined;
}
export declare const Share: ShareStatic;
export declare type Share = ShareStatic;
export declare type ShareAction = {
  action: 'sharedAction' | 'dismissedAction';
  activityType?: string | null | undefined;
};
export declare interface ShareActionSheetIOSOptions {
  message?: string | undefined;
  url?: string | undefined;
  subject?: string | undefined;
  anchor?: number | undefined;
  excludedActivityTypes?: string[] | undefined;
}
export declare type ShareContent =
  | {
      title?: string | undefined;
      url: string;
      message?: string | undefined;
    }
  | {
      title?: string | undefined;
      url?: string | undefined;
      message: string;
    };
export declare type ShareOptions = {
  dialogTitle?: string | undefined;
  excludedActivityTypes?: Array<string> | undefined;
  tintColor?: ColorValue | undefined;
  subject?: string | undefined;
  anchor?: number | undefined;
};
export declare interface ShareStatic {
  share(content: ShareContent, options?: ShareOptions): Promise<ShareAction>;
  sharedAction: 'sharedAction';
  dismissedAction: 'dismissedAction';
}
export declare type SimpleTask = {
  name: string;
  gen: () => void;
};
export declare interface SkewXTransform {
  skewX: AnimatableStringValue;
}
export declare interface SkewYTransform {
  skewY: AnimatableStringValue;
}
export declare class StatusBar extends React_2.Component<StatusBarProps> {
  static currentHeight?: number | undefined;
  static setHidden: (hidden: boolean, animation?: StatusBarAnimation) => void;
  static setBarStyle: (style: StatusBarStyle, animated?: boolean) => void;
  static setNetworkActivityIndicatorVisible: (visible: boolean) => void;
  static setBackgroundColor: (color: ColorValue, animated?: boolean) => void;
  static setTranslucent: (translucent: boolean) => void;
  static pushStackEntry: (props: StatusBarProps) => StatusBarProps;
  static popStackEntry: (entry: StatusBarProps) => void;
  static replaceStackEntry: (
    entry: StatusBarProps,
    props: StatusBarProps
  ) => StatusBarProps;
}
export declare type StatusBarAnimation = 'none' | 'fade' | 'slide';
export declare type StatusBarProperties = StatusBarProps;
export declare type StatusBarPropertiesAndroid = StatusBarPropsAndroid;
export declare type StatusBarPropertiesIOS = StatusBarPropsIOS;
export declare interface StatusBarProps
  extends StatusBarPropsIOS,
    StatusBarPropsAndroid {
  animated?: boolean | undefined;
  barStyle?: null | StatusBarStyle | undefined;
  hidden?: boolean | undefined;
}
export declare interface StatusBarPropsAndroid {
  backgroundColor?: ColorValue | undefined;
  translucent?: boolean | undefined;
}
export declare interface StatusBarPropsIOS {
  networkActivityIndicatorVisible?: boolean | undefined;
  showHideTransition?: null | 'fade' | 'slide' | 'none' | undefined;
}
export declare type StatusBarStyle =
  | 'default'
  | 'light-content'
  | 'dark-content';
export declare type StyleProp<T> =
  | T
  | RegisteredStyle<T>
  | RecursiveArray<T | RegisteredStyle<T> | Falsy>
  | Falsy;
export declare namespace StyleSheet {
  export type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
  };
  export function create<T extends NamedStyles<T> | NamedStyles<any>>(
    styles: T & NamedStyles<any>
  ): T;
  export function flatten<T>(
    style?: StyleProp<T>
  ): T extends (infer U)[] ? U : T;
  export function compose<
    T extends ViewStyle | TextStyle | ImageStyle,
    U extends T,
    V extends T,
  >(
    style1: StyleProp<U> | Array<StyleProp<U>>,
    style2: StyleProp<V> | Array<StyleProp<V>>
  ): StyleProp<T>;
  export function setStyleAttributePreprocessor(
    property: string,
    process: (nextProp: any) => any
  ): void;
  const hairlineWidth: number;
  export interface AbsoluteFillStyle {
    position: 'absolute';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  const absoluteFillObject: AbsoluteFillStyle;
  const absoluteFill: RegisteredStyle<AbsoluteFillStyle>;
}
export declare interface StyleSheetProperties {
  hairlineWidth: number;
  flatten<T extends string>(style: T): T;
}
export declare type SubmitBehavior = 'submit' | 'blurAndSubmit';
export declare interface SubscribableMixin {
  addListenerOn(
    eventEmitter: any,
    eventType: string,
    listener: () => any,
    context: any
  ): void;
}
export declare class Switch extends SwitchBase {}
export declare const SwitchBase: Constructor<NativeMethods> &
  typeof SwitchComponent;
export declare interface SwitchChangeEvent
  extends NativeSyntheticEvent<SwitchChangeEventData> {}
export declare interface SwitchChangeEventData extends TargetedEvent {
  value: boolean;
}
export declare class SwitchComponent extends React_2.Component<SwitchProps> {}
export declare type SwitchProperties = SwitchProps;
export declare type SwitchPropertiesIOS = SwitchPropsIOS;
export declare interface SwitchProps extends SwitchPropsIOS {
  thumbColor?: ColorValue | undefined;
  trackColor?:
    | {
        false?: ColorValue | null | undefined;
        true?: ColorValue | null | undefined;
      }
    | undefined;
  disabled?: boolean | undefined;
  onChange?:
    | ((event: SwitchChangeEvent) => Promise<void> | void)
    | null
    | undefined;
  onValueChange?: ((value: boolean) => Promise<void> | void) | null | undefined;
  testID?: string | undefined;
  value?: boolean | undefined;
  ios_backgroundColor?: ColorValue | undefined;
  style?: StyleProp<ViewStyle> | undefined;
}
export declare interface SwitchPropsIOS extends ViewProps {
  onTintColor?: ColorValue | undefined;
  thumbTintColor?: ColorValue | undefined;
  tintColor?: ColorValue | undefined;
}
export declare namespace Systrace {
  export {
    isEnabled,
    setEnabled,
    beginEvent,
    endEvent,
    beginAsyncEvent,
    endAsyncEvent,
    counterEvent,
    EventName,
    EventArgs,
  };
}
export declare interface TargetedEvent {
  target: number;
}
export declare type Task = (taskData: any) => Promise<void>;
export declare type TaskCanceller = () => void;
export declare type TaskCancelProvider = () => TaskCanceller;
export declare type TaskProvider = () => Task;
export declare const _Text: typeof Text_2;
declare class Text_2 extends TextBase {}
export {Text_2 as Text};
export declare const TextBase: Constructor<NativeMethods> &
  typeof TextComponent;
export declare class TextComponent extends React_2.Component<TextProps> {}
export declare class TextInput extends TextInputBase {
  static State: TextInputState;
  isFocused: () => boolean;
  clear: () => void;
  setSelection: (start: number, end: number) => void;
}
export declare type TextInputAndroidProperties = TextInputAndroidProps;
export declare interface TextInputAndroidProps {
  cursorColor?: ColorValue | null | undefined;
  selectionHandleColor?: ColorValue | null | undefined;
  importantForAutofill?:
    | 'auto'
    | 'no'
    | 'noExcludeDescendants'
    | 'yes'
    | 'yesExcludeDescendants'
    | undefined;
  disableFullscreenUI?: boolean | undefined;
  inlineImageLeft?: string | undefined;
  inlineImagePadding?: number | undefined;
  numberOfLines?: number | undefined;
  returnKeyLabel?: string | undefined;
  textBreakStrategy?: 'simple' | 'highQuality' | 'balanced' | undefined;
  underlineColorAndroid?: ColorValue | undefined;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  showSoftInputOnFocus?: boolean | undefined;
  verticalAlign?: 'auto' | 'top' | 'bottom' | 'middle' | undefined;
}
export declare const TextInputBase: Constructor<NativeMethods> &
  Constructor<TimerMixin> &
  typeof TextInputComponent;
export declare type TextInputChangeEvent =
  NativeSyntheticEvent<TextInputChangeEventData>;
export declare interface TextInputChangeEventData extends TargetedEvent {
  eventCount: number;
  text: string;
}
export declare class TextInputComponent extends React_2.Component<TextInputProps> {}
export declare type TextInputContentSizeChangeEvent =
  NativeSyntheticEvent<TextInputContentSizeChangeEventData>;
export declare interface TextInputContentSizeChangeEventData {
  contentSize: {width: number; height: number};
}
export declare type TextInputEndEditingEvent =
  NativeSyntheticEvent<TextInputEndEditingEventData>;
export declare interface TextInputEndEditingEventData {
  text: string;
}
export declare type TextInputFocusEvent =
  NativeSyntheticEvent<TextInputFocusEventData>;
export declare interface TextInputFocusEventData extends TargetedEvent {
  text: string;
  eventCount: number;
}
export declare type TextInputIOSProperties = TextInputIOSProps;
export declare interface TextInputIOSProps {
  disableKeyboardShortcuts?: boolean | undefined;
  clearButtonMode?:
    | 'never'
    | 'while-editing'
    | 'unless-editing'
    | 'always'
    | undefined;
  clearTextOnFocus?: boolean | undefined;
  dataDetectorTypes?: DataDetectorTypes | DataDetectorTypes[] | undefined;
  enablesReturnKeyAutomatically?: boolean | undefined;
  keyboardAppearance?: 'default' | 'light' | 'dark' | undefined;
  passwordRules?: string | null | undefined;
  rejectResponderTermination?: boolean | null | undefined;
  selectionState?: DocumentSelectionState | undefined;
  spellCheck?: boolean | undefined;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'creditCardExpiration'
    | 'creditCardExpirationMonth'
    | 'creditCardExpirationYear'
    | 'creditCardSecurityCode'
    | 'creditCardType'
    | 'creditCardName'
    | 'creditCardGivenName'
    | 'creditCardMiddleName'
    | 'creditCardFamilyName'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | 'birthdate'
    | 'birthdateDay'
    | 'birthdateMonth'
    | 'birthdateYear'
    | 'cellularEID'
    | 'cellularIMEI'
    | 'dateTime'
    | 'flightNumber'
    | 'shipmentTrackingNumber'
    | undefined;
  scrollEnabled?: boolean | undefined;
  lineBreakStrategyIOS?:
    | 'none'
    | 'standard'
    | 'hangul-word'
    | 'push-out'
    | undefined;
  lineBreakModeIOS?:
    | 'wordWrapping'
    | 'char'
    | 'clip'
    | 'head'
    | 'middle'
    | 'tail'
    | undefined;
  smartInsertDelete?: boolean | undefined;
}
export declare type TextInputKeyPressEvent =
  NativeSyntheticEvent<TextInputKeyPressEventData>;
export declare interface TextInputKeyPressEventData {
  key: string;
}
export declare type TextInputProperties = TextInputProps;
export declare interface TextInputProps
  extends ViewProps,
    TextInputIOSProps,
    TextInputAndroidProps,
    AccessibilityProps {
  allowFontScaling?: boolean | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoComplete?:
    | 'additional-name'
    | 'address-line1'
    | 'address-line2'
    | 'birthdate-day'
    | 'birthdate-full'
    | 'birthdate-month'
    | 'birthdate-year'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-day'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'cc-name'
    | 'cc-given-name'
    | 'cc-middle-name'
    | 'cc-family-name'
    | 'cc-type'
    | 'country'
    | 'current-password'
    | 'email'
    | 'family-name'
    | 'gender'
    | 'given-name'
    | 'honorific-prefix'
    | 'honorific-suffix'
    | 'name'
    | 'name-family'
    | 'name-given'
    | 'name-middle'
    | 'name-middle-initial'
    | 'name-prefix'
    | 'name-suffix'
    | 'new-password'
    | 'nickname'
    | 'one-time-code'
    | 'organization'
    | 'organization-title'
    | 'password'
    | 'password-new'
    | 'postal-address'
    | 'postal-address-country'
    | 'postal-address-extended'
    | 'postal-address-extended-postal-code'
    | 'postal-address-locality'
    | 'postal-address-region'
    | 'postal-code'
    | 'street-address'
    | 'sms-otp'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-device'
    | 'url'
    | 'username'
    | 'username-new'
    | 'off'
    | undefined;
  autoCorrect?: boolean | undefined;
  autoFocus?: boolean | undefined;
  blurOnSubmit?: boolean | undefined;
  submitBehavior?: SubmitBehavior | undefined;
  caretHidden?: boolean | undefined;
  contextMenuHidden?: boolean | undefined;
  defaultValue?: string | undefined;
  editable?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  inputMode?: InputModeOptions | undefined;
  maxLength?: number | undefined;
  multiline?: boolean | undefined;
  onBlur?: ((e: TextInputFocusEvent) => void) | undefined;
  onChange?: ((e: TextInputChangeEvent) => void) | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  onContentSizeChange?:
    | ((e: TextInputContentSizeChangeEvent) => void)
    | undefined;
  onEndEditing?: ((e: TextInputEndEditingEvent) => void) | undefined;
  onPress?: ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined;
  onPressIn?: ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined;
  onPressOut?:
    | ((e: NativeSyntheticEvent<NativeTouchEvent>) => void)
    | undefined;
  onFocus?: ((e: TextInputFocusEvent) => void) | undefined;
  onSelectionChange?: ((e: TextInputSelectionChangeEvent) => void) | undefined;
  onSubmitEditing?: ((e: TextInputSubmitEditingEvent) => void) | undefined;
  onScroll?: ((e: TextInputScrollEvent) => void) | undefined;
  onKeyPress?: ((e: TextInputKeyPressEvent) => void) | undefined;
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
  readOnly?: boolean | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  enterKeyHint?: EnterKeyHintTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
  selectTextOnFocus?: boolean | undefined;
  selection?: {start: number; end?: number | undefined} | undefined;
  selectionColor?: ColorValue | undefined;
  style?: StyleProp<TextStyle> | undefined;
  textAlign?: 'left' | 'center' | 'right' | undefined;
  testID?: string | undefined;
  inputAccessoryViewID?: string | undefined;
  inputAccessoryViewButtonLabel?: string | undefined;
  value?: string | undefined;
  maxFontSizeMultiplier?: number | null | undefined;
}
export declare type TextInputScrollEvent =
  NativeSyntheticEvent<TextInputScrollEventData>;
export declare interface TextInputScrollEventData {
  contentOffset: {x: number; y: number};
}
export declare type TextInputSelectionChangeEvent =
  NativeSyntheticEvent<TextInputSelectionChangeEventData>;
export declare interface TextInputSelectionChangeEventData
  extends TargetedEvent {
  selection: {
    start: number;
    end: number;
  };
}
export declare interface TextInputState {
  currentlyFocusedField(): number;
  currentlyFocusedInput(): HostInstance;
  focusTextInput(textField?: HostInstance): void;
  blurTextInput(textField?: HostInstance): void;
}
export declare type TextInputSubmitEditingEvent =
  NativeSyntheticEvent<TextInputSubmitEditingEventData>;
export declare interface TextInputSubmitEditingEventData {
  text: string;
}
export declare type TextLayoutEvent = NativeSyntheticEvent<TextLayoutEventData>;
export declare interface TextLayoutEventData extends TargetedEvent {
  lines: TextLayoutLine[];
}
export declare interface TextLayoutLine {
  ascender: number;
  capHeight: number;
  descender: number;
  height: number;
  text: string;
  width: number;
  x: number;
  xHeight: number;
  y: number;
}
export declare type TextProperties = TextProps;
export declare type TextPropertiesAndroid = TextPropsAndroid;
export declare type TextPropertiesIOS = TextPropsIOS;
export declare interface TextProps
  extends TextPropsIOS,
    TextPropsAndroid,
    AccessibilityProps {
  allowFontScaling?: boolean | undefined;
  children?: React_2.ReactNode | undefined;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  id?: string | undefined;
  lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  numberOfLines?: number | undefined;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
  onTextLayout?: ((event: TextLayoutEvent) => void) | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => void) | undefined;
  onPressOut?: ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<TextStyle> | undefined;
  testID?: string | undefined;
  nativeID?: string | undefined;
  maxFontSizeMultiplier?: number | null | undefined;
  minimumFontScale?: number | undefined;
  pointerEvents?: ViewStyle['pointerEvents'] | undefined;
}
export declare interface TextPropsAndroid {
  disabled?: boolean | undefined;
  selectable?: boolean | undefined;
  selectionColor?: ColorValue | undefined;
  textBreakStrategy?: 'simple' | 'highQuality' | 'balanced' | undefined;
  dataDetectorType?:
    | null
    | 'phoneNumber'
    | 'link'
    | 'email'
    | 'none'
    | 'all'
    | undefined;
  android_hyphenationFrequency?: 'normal' | 'none' | 'full' | undefined;
}
export declare interface TextPropsIOS {
  adjustsFontSizeToFit?: boolean | undefined;
  dynamicTypeRamp?:
    | 'caption2'
    | 'caption1'
    | 'footnote'
    | 'subheadline'
    | 'callout'
    | 'body'
    | 'headline'
    | 'title3'
    | 'title2'
    | 'title1'
    | 'largeTitle'
    | undefined;
  suppressHighlighting?: boolean | undefined;
  lineBreakStrategyIOS?:
    | 'none'
    | 'standard'
    | 'hangul-word'
    | 'push-out'
    | undefined;
}
export declare interface TextStyle
  extends TextStyleIOS,
    TextStyleAndroid,
    ViewStyle {
  color?: ColorValue | undefined;
  fontFamily?: string | undefined;
  fontSize?: number | undefined;
  fontStyle?: 'normal' | 'italic' | undefined;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'ultralight'
    | 'thin'
    | 'light'
    | 'medium'
    | 'regular'
    | 'semibold'
    | 'condensedBold'
    | 'condensed'
    | 'heavy'
    | 'black'
    | undefined;
  letterSpacing?: number | undefined;
  lineHeight?: number | undefined;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined;
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed' | undefined;
  textDecorationColor?: ColorValue | undefined;
  textShadowColor?: ColorValue | undefined;
  textShadowOffset?: {width: number; height: number} | undefined;
  textShadowRadius?: number | undefined;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  userSelect?: 'auto' | 'none' | 'text' | 'contain' | 'all' | undefined;
}
export declare interface TextStyleAndroid extends ViewStyle {
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  verticalAlign?: 'auto' | 'top' | 'bottom' | 'middle' | undefined;
  includeFontPadding?: boolean | undefined;
}
export declare interface TextStyleIOS extends ViewStyle {
  fontVariant?: FontVariant[] | undefined;
  textDecorationColor?: ColorValue | undefined;
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed' | undefined;
  writingDirection?: 'auto' | 'ltr' | 'rtl' | undefined;
}
export declare interface ThemeAttributeBackgroundPropType
  extends BaseBackgroundPropType {
  type: 'ThemeAttrAndroid';
  attribute: string;
}
declare interface TimerMixin {
  setTimeout: typeof setTimeout;
  clearTimeout: typeof clearTimeout;
  setInterval: typeof setInterval;
  clearInterval: typeof clearInterval;
  setImmediate: typeof setImmediate;
  clearImmediate: typeof clearImmediate;
  requestAnimationFrame: typeof requestAnimationFrame;
  cancelAnimationFrame: typeof cancelAnimationFrame;
}
declare type Timespan = {
  startTime: number;
  endTime?: number | undefined;
  totalTime?: number | undefined;
  startExtras?: Extras | undefined;
  endExtras?: Extras | undefined;
};
export declare const ToastAndroid: ToastAndroidStatic;
export declare type ToastAndroid = ToastAndroidStatic;
export declare interface ToastAndroidStatic {
  show(message: string, duration: number): void;
  showWithGravity(message: string, duration: number, gravity: number): void;
  showWithGravityAndOffset(
    message: string,
    duration: number,
    gravity: number,
    xOffset: number,
    yOffset: number
  ): void;
  SHORT: number;
  LONG: number;
  TOP: number;
  BOTTOM: number;
  CENTER: number;
}
export declare interface Touchable {
  onTouchStart?: ((event: GestureResponderEvent) => void) | undefined;
  onTouchMove?: ((event: GestureResponderEvent) => void) | undefined;
  onTouchEnd?: ((event: GestureResponderEvent) => void) | undefined;
  onTouchCancel?: ((event: GestureResponderEvent) => void) | undefined;
  onTouchEndCapture?: ((event: GestureResponderEvent) => void) | undefined;
}
export declare const Touchable: {
  TOUCH_TARGET_DEBUG: boolean;
  renderDebugView: (config: {
    color: string | number;
    hitSlop?: Insets | undefined;
  }) => React_2.ReactElement | null;
};
export declare const TouchableHighlight: React_2.ForwardRefExoticComponent<
  React_2.PropsWithoutRef<TouchableHighlightProps> & React_2.RefAttributes<View>
>;
export declare type TouchableHighlightProperties = TouchableHighlightProps;
export declare interface TouchableHighlightProps
  extends TouchableWithoutFeedbackProps {
  activeOpacity?: number | undefined;
  onHideUnderlay?: (() => void) | undefined;
  onShowUnderlay?: (() => void) | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  underlayColor?: ColorValue | undefined;
}
export declare interface TouchableMixin {
  touchableHandleActivePressIn(e: GestureResponderEvent): void;
  touchableHandleActivePressOut(e: GestureResponderEvent): void;
  touchableHandlePress(e: GestureResponderEvent): void;
  touchableHandleLongPress(e: GestureResponderEvent): void;
  touchableGetPressRectOffset(): Insets;
  touchableGetHighlightDelayMS(): number;
  touchableGetLongPressDelayMS(): number;
  touchableGetPressOutDelayMS(): number;
  touchableGetHitSlop(): Insets;
}
export declare class TouchableNativeFeedback extends TouchableNativeFeedbackBase {
  static SelectableBackground(
    rippleRadius?: number | null
  ): ThemeAttributeBackgroundPropType;
  static SelectableBackgroundBorderless(
    rippleRadius?: number | null
  ): ThemeAttributeBackgroundPropType;
  static Ripple(
    color: ColorValue,
    borderless: boolean,
    rippleRadius?: number | null
  ): RippleBackgroundPropType;
  static canUseNativeForeground(): boolean;
}
export declare const TouchableNativeFeedbackBase: Constructor<TouchableMixin> &
  typeof TouchableNativeFeedbackComponent;
export declare class TouchableNativeFeedbackComponent extends React_2.Component<TouchableNativeFeedbackProps> {}
export declare type TouchableNativeFeedbackProperties =
  TouchableNativeFeedbackProps;
export declare interface TouchableNativeFeedbackProps
  extends TouchableWithoutFeedbackProps,
    TVProps {
  background?: BackgroundPropType | undefined;
  useForeground?: boolean | undefined;
}
export declare const TouchableOpacity: React_2.ForwardRefExoticComponent<
  React_2.PropsWithoutRef<TouchableOpacityProps> & React_2.RefAttributes<View>
>;
export declare type TouchableOpacityProperties = TouchableOpacityProps;
export declare interface TouchableOpacityProps
  extends TouchableWithoutFeedbackProps,
    TVProps {
  activeOpacity?: number | undefined;
}
export declare class TouchableWithoutFeedback extends TouchableWithoutFeedbackBase {}
export declare const TouchableWithoutFeedbackBase: Constructor<TimerMixin> &
  Constructor<TouchableMixin> &
  typeof TouchableWithoutFeedbackComponent;
export declare class TouchableWithoutFeedbackComponent extends React_2.Component<TouchableWithoutFeedbackProps> {}
export declare type TouchableWithoutFeedbackProperties =
  TouchableWithoutFeedbackProps;
export declare interface TouchableWithoutFeedbackProps
  extends TouchableWithoutFeedbackPropsIOS,
    TouchableWithoutFeedbackPropsAndroid,
    AccessibilityProps {
  children?: React_2.ReactNode | undefined;
  rejectResponderTermination?: boolean | undefined;
  delayLongPress?: number | undefined;
  delayPressIn?: number | undefined;
  delayPressOut?: number | undefined;
  disabled?: boolean | undefined;
  focusable?: boolean | undefined;
  hitSlop?: null | Insets | number | undefined;
  id?: string | undefined;
  onBlur?: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
  onFocus?: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => void) | undefined;
  onPressOut?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  pressRetentionOffset?: null | Insets | number | undefined;
  testID?: string | undefined;
}
export declare interface TouchableWithoutFeedbackPropsAndroid {
  touchSoundDisabled?: boolean | undefined;
}
export declare interface TouchableWithoutFeedbackPropsIOS {}
export declare interface TransformsStyle {
  transform?:
    | Readonly<
        MaximumOneOf<
          PerspectiveTransform &
            RotateTransform &
            RotateXTransform &
            RotateYTransform &
            RotateZTransform &
            ScaleTransform &
            ScaleXTransform &
            ScaleYTransform &
            TranslateXTransform &
            TranslateYTransform &
            SkewXTransform &
            SkewYTransform &
            MatrixTransform
        >[]
      >
    | string
    | undefined;
  transformOrigin?: Array<string | number> | string | undefined;
  transformMatrix?: Array<number> | undefined;
  rotation?: AnimatableNumericValue | undefined;
  scaleX?: AnimatableNumericValue | undefined;
  scaleY?: AnimatableNumericValue | undefined;
  translateX?: AnimatableNumericValue | undefined;
  translateY?: AnimatableNumericValue | undefined;
}
export declare interface TranslateXTransform {
  translateX: AnimatableNumericValue | `${number}%`;
}
export declare interface TranslateYTransform {
  translateY: AnimatableNumericValue | `${number}%`;
}
export declare interface TurboModule {
  getConstants?(): {};
}
export declare namespace TurboModuleRegistry {
  export {get, getEnforcing};
}
export declare interface TVProps {
  hasTVPreferredFocus?: boolean | undefined;
  nextFocusDown?: number | undefined;
  nextFocusForward?: number | undefined;
  nextFocusLeft?: number | undefined;
  nextFocusRight?: number | undefined;
  nextFocusUp?: number | undefined;
}
export declare interface TVViewPropsIOS {
  isTVSelectable?: boolean | undefined;
  hasTVPreferredFocus?: boolean | undefined;
  tvParallaxShiftDistanceX?: number | undefined;
  tvParallaxShiftDistanceY?: number | undefined;
  tvParallaxTiltAngle?: number | undefined;
  tvParallaxMagnification?: number | undefined;
}
export declare const UIManager: UIManagerStatic;
export declare type UIManager = UIManagerStatic;
export declare interface UIManagerStatic {
  measure(node: number, callback: MeasureOnSuccessCallback): void;
  measureInWindow(
    node: number,
    callback: MeasureInWindowOnSuccessCallback
  ): void;
  measureLayout(
    node: number,
    relativeToNativeNode: number,
    onFail: () => void /* currently unused */,
    onSuccess: MeasureLayoutOnSuccessCallback
  ): void;
  setLayoutAnimationEnabledExperimental?:
    | ((value: boolean) => void)
    | undefined;
  getViewManagerConfig: (name: string) => {
    Commands: {[key: string]: number};
  };
  hasViewManagerConfig: (name: string) => boolean;
  dispatchViewManagerCommand: (
    reactTag: number | null,
    commandID: number | string,
    commandArgs?: Array<any>
  ) => void;
}
declare type UnsafeMixed = unknown;
declare type UnsafeObject = object;
export declare function unstable_batchedUpdates<A, R>(
  callback: (a: A) => R,
  a: A
): R;
export declare function unstable_batchedUpdates<R>(callback: () => R): R;
export declare function useAnimatedValue(
  initialValue: number,
  config?: Animated.AnimatedConfig
): Animated.Value;
export declare function useColorScheme(): ColorSchemeName;
export declare function useWindowDimensions(): ScaledSize;
export declare const Vibration: VibrationStatic;
export declare type Vibration = VibrationStatic;
export declare interface VibrationStatic {
  vibrate(pattern?: number | number[], repeat?: boolean): void;
  cancel(): void;
}
export declare class View extends ViewBase {
  static forceTouchAvailable: boolean;
}
export declare const _View: typeof View;
export declare const ViewBase: Constructor<NativeMethods> &
  typeof ViewComponent;
export declare class ViewComponent extends React_2.Component<ViewProps> {}
export declare type ViewProperties = ViewProps;
export declare type ViewPropertiesAndroid = ViewPropsAndroid;
export declare type ViewPropertiesIOS = ViewPropsIOS;
export declare interface ViewProps
  extends ViewPropsAndroid,
    ViewPropsIOS,
    GestureResponderHandlers,
    Touchable,
    PointerEvents,
    AccessibilityProps {
  children?: React_2.ReactNode | undefined;
  hitSlop?: null | Insets | number | undefined;
  id?: string | undefined;
  needsOffscreenAlphaCompositing?: boolean | undefined;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
  removeClippedSubviews?: boolean | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  testID?: string | undefined;
  nativeID?: string | undefined;
  collapsable?: boolean | undefined;
  collapsableChildren?: boolean | undefined;
}
export declare interface ViewPropsAndroid {
  renderToHardwareTextureAndroid?: boolean | undefined;
  focusable?: boolean | undefined;
  tabIndex?: 0 | -1 | undefined;
}
export declare interface ViewPropsIOS extends TVViewPropsIOS {
  shouldRasterizeIOS?: boolean | undefined;
}
export declare interface ViewStyle
  extends FlexStyle,
    ShadowStyleIOS,
    TransformsStyle {
  backfaceVisibility?: 'visible' | 'hidden' | undefined;
  backgroundColor?: ColorValue | undefined;
  borderBlockColor?: ColorValue | undefined;
  borderBlockEndColor?: ColorValue | undefined;
  borderBlockStartColor?: ColorValue | undefined;
  borderBottomColor?: ColorValue | undefined;
  borderBottomEndRadius?: AnimatableNumericValue | string | undefined;
  borderBottomLeftRadius?: AnimatableNumericValue | string | undefined;
  borderBottomRightRadius?: AnimatableNumericValue | string | undefined;
  borderBottomStartRadius?: AnimatableNumericValue | string | undefined;
  borderColor?: ColorValue | undefined;
  borderCurve?: 'circular' | 'continuous' | undefined;
  borderEndColor?: ColorValue | undefined;
  borderEndEndRadius?: AnimatableNumericValue | string | undefined;
  borderEndStartRadius?: AnimatableNumericValue | string | undefined;
  borderLeftColor?: ColorValue | undefined;
  borderRadius?: AnimatableNumericValue | string | undefined;
  borderRightColor?: ColorValue | undefined;
  borderStartColor?: ColorValue | undefined;
  borderStartEndRadius?: AnimatableNumericValue | string | undefined;
  borderStartStartRadius?: AnimatableNumericValue | string | undefined;
  borderStyle?: 'solid' | 'dotted' | 'dashed' | undefined;
  borderTopColor?: ColorValue | undefined;
  borderTopEndRadius?: AnimatableNumericValue | string | undefined;
  borderTopLeftRadius?: AnimatableNumericValue | string | undefined;
  borderTopRightRadius?: AnimatableNumericValue | string | undefined;
  borderTopStartRadius?: AnimatableNumericValue | string | undefined;
  outlineColor?: ColorValue | undefined;
  outlineOffset?: AnimatableNumericValue | undefined;
  outlineStyle?: 'solid' | 'dotted' | 'dashed' | undefined;
  outlineWidth?: AnimatableNumericValue | undefined;
  opacity?: AnimatableNumericValue | undefined;
  elevation?: number | undefined;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
  isolation?: 'auto' | 'isolate' | undefined;
  cursor?: CursorValue | undefined;
  boxShadow?: ReadonlyArray<BoxShadowValue> | string | undefined;
  filter?: ReadonlyArray<FilterFunction> | string | undefined;
  mixBlendMode?: BlendMode | undefined;
  experimental_backgroundImage?:
    | ReadonlyArray<GradientValue>
    | string
    | undefined;
}
export declare type VirtualizedListProperties<ItemT> =
  VirtualizedListProps<ItemT>;
export declare type VirtualizedListWithoutPreConfiguredProps<ItemT> = Omit<
  VirtualizedListWithoutRenderItemProps<ItemT>,
  'stickyHeaderIndices'
>;
declare type WithDefault<
  Type extends DefaultTypes,
  Value extends Type | string | undefined | null,
> = Type | undefined | null;
export declare type WrapperComponentProvider = (
  appParameters: any
) => React_2.ComponentType<any>;
export * from '@react-native/virtualized-lists';
