import type { ElementRef } from "react";
import type { ElementType } from "react";
import type { ErrorUtilsT } from "@react-native/js-polyfills/error-guard";
import { ListRenderItem } from "@react-native/virtualized-lists";
import { ListRenderItemInfo } from "@react-native/virtualized-lists";
import * as React_2 from "react";
import type { RefSetter } from "react";
import { ScrollToLocationParamsType } from "@react-native/virtualized-lists";
import { SectionBase } from "@react-native/virtualized-lists";
import type { SectionData } from "@react-native/virtualized-lists";
import { Separators } from "@react-native/virtualized-lists";
import { VirtualizedListProps } from "@react-native/virtualized-lists";
import VirtualizedLists from "@react-native/virtualized-lists";
import { VirtualizedSectionListProps } from "@react-native/virtualized-lists";
declare type ____BlendMode_Internal =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";
declare type ____ColorValue_Internal =
  | null
  | string
  | number
  | NativeColorValue;
declare type ____DangerouslyImpreciseAnimatedStyleProp_Internal = StyleProp<
  Partial<AnimatedBaseProps<____DangerouslyImpreciseStyle_Internal>>
>;
declare type ____DangerouslyImpreciseStyle_Internal = Readonly<
  Omit<
    ____DangerouslyImpreciseStyle_InternalCore,
    keyof ____DangerouslyImpreciseStyle_InternalOverrides | keyof {}
  > &
    Omit<____DangerouslyImpreciseStyle_InternalOverrides, keyof {}> & {}
>;
declare type ____DangerouslyImpreciseStyle_InternalCore = Readonly<
  Omit<
    ____TextStyle_Internal,
    keyof {
      resizeMode?: ImageResizeMode;
      objectFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
      tintColor?: ____ColorValue_Internal;
      overlayColor?: string;
    }
  > & {
    resizeMode?: ImageResizeMode;
    objectFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
    tintColor?: ____ColorValue_Internal;
    overlayColor?: string;
  }
>;
declare type ____DangerouslyImpreciseStyle_InternalOverrides = Readonly<{}>;
declare type ____FlattenStyleProp_Helper<
  TStyleProp extends StyleProp<unknown>,
  Depth extends FlattenDepthLimiter[keyof FlattenDepthLimiter] = 9
> = Depth extends 0
  ? never
  : TStyleProp extends null | void | false | ""
  ? never
  : TStyleProp extends ReadonlyArray<infer V>
  ? ____FlattenStyleProp_Helper<
      V,
      Depth extends number ? FlattenDepthLimiter[Depth] : 0
    >
  : TStyleProp;
declare type ____FlattenStyleProp_Internal<
  TStyleProp extends StyleProp<unknown>
> = ____FlattenStyleProp_Helper<TStyleProp> extends never
  ? any
  : ____FlattenStyleProp_Helper<TStyleProp>;
declare type ____FontVariant_Internal =
  | "small-caps"
  | "oldstyle-nums"
  | "lining-nums"
  | "tabular-nums"
  | "common-ligatures"
  | "no-common-ligatures"
  | "discretionary-ligatures"
  | "no-discretionary-ligatures"
  | "historical-ligatures"
  | "no-historical-ligatures"
  | "contextual"
  | "no-contextual"
  | "proportional-nums"
  | "stylistic-one"
  | "stylistic-two"
  | "stylistic-three"
  | "stylistic-four"
  | "stylistic-five"
  | "stylistic-six"
  | "stylistic-seven"
  | "stylistic-eight"
  | "stylistic-nine"
  | "stylistic-ten"
  | "stylistic-eleven"
  | "stylistic-twelve"
  | "stylistic-thirteen"
  | "stylistic-fourteen"
  | "stylistic-fifteen"
  | "stylistic-sixteen"
  | "stylistic-seventeen"
  | "stylistic-eighteen"
  | "stylistic-nineteen"
  | "stylistic-twenty";
declare type ____FontVariantArray_Internal =
  ReadonlyArray<____FontVariant_Internal>;
declare type ____FontWeight_Internal =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "ultralight"
  | "thin"
  | "light"
  | "medium"
  | "regular"
  | "semibold"
  | "condensedBold"
  | "condensed"
  | "heavy"
  | "black";
declare type ____ImageStyle_Internal = Readonly<
  Omit<
    ____ImageStyle_InternalCore,
    keyof ____ImageStyle_InternalOverrides | keyof {}
  > &
    Omit<____ImageStyle_InternalOverrides, keyof {}> & {}
>;
declare type ____ImageStyle_InternalCore = Readonly<
  Omit<
    ____ViewStyle_Internal,
    keyof {
      resizeMode?: ImageResizeMode;
      objectFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
      tintColor?: ____ColorValue_Internal;
      overlayColor?: string;
    }
  > & {
    resizeMode?: ImageResizeMode;
    objectFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
    tintColor?: ____ColorValue_Internal;
    overlayColor?: string;
  }
>;
declare type ____ImageStyle_InternalOverrides = Readonly<{}>;
declare type ____ImageStyleProp_Internal = StyleProp<
  Readonly<Partial<____ImageStyle_Internal>>
>;
declare type ____LayoutStyle_Internal = Readonly<{
  display?: "none" | "flex" | "contents";
  width?: DimensionValue;
  height?: DimensionValue;
  bottom?: DimensionValue;
  end?: DimensionValue;
  left?: DimensionValue;
  right?: DimensionValue;
  start?: DimensionValue;
  top?: DimensionValue;
  inset?: DimensionValue;
  insetBlock?: DimensionValue;
  insetBlockEnd?: DimensionValue;
  insetBlockStart?: DimensionValue;
  insetInline?: DimensionValue;
  insetInlineEnd?: DimensionValue;
  insetInlineStart?: DimensionValue;
  minWidth?: DimensionValue;
  maxWidth?: DimensionValue;
  minHeight?: DimensionValue;
  maxHeight?: DimensionValue;
  margin?: DimensionValue;
  marginBlock?: DimensionValue;
  marginBlockEnd?: DimensionValue;
  marginBlockStart?: DimensionValue;
  marginBottom?: DimensionValue;
  marginEnd?: DimensionValue;
  marginHorizontal?: DimensionValue;
  marginInline?: DimensionValue;
  marginInlineEnd?: DimensionValue;
  marginInlineStart?: DimensionValue;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
  marginStart?: DimensionValue;
  marginTop?: DimensionValue;
  marginVertical?: DimensionValue;
  padding?: DimensionValue;
  paddingBlock?: DimensionValue;
  paddingBlockEnd?: DimensionValue;
  paddingBlockStart?: DimensionValue;
  paddingBottom?: DimensionValue;
  paddingEnd?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  paddingInline?: DimensionValue;
  paddingInlineEnd?: DimensionValue;
  paddingInlineStart?: DimensionValue;
  paddingLeft?: DimensionValue;
  paddingRight?: DimensionValue;
  paddingStart?: DimensionValue;
  paddingTop?: DimensionValue;
  paddingVertical?: DimensionValue;
  borderWidth?: number;
  borderBottomWidth?: number;
  borderEndWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderStartWidth?: number;
  borderTopWidth?: number;
  position?: "absolute" | "relative" | "static";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly";
  overflow?: "visible" | "hidden" | "scroll";
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  aspectRatio?: number | string;
  boxSizing?: "border-box" | "content-box";
  zIndex?: number;
  direction?: "inherit" | "ltr" | "rtl";
  rowGap?: number | string;
  columnGap?: number | string;
  gap?: number | string;
}>;
declare type ____ShadowStyle_Internal = Readonly<
  Omit<
    ____ShadowStyle_InternalCore,
    keyof ____ShadowStyle_InternalOverrides | keyof {}
  > &
    Omit<____ShadowStyle_InternalOverrides, keyof {}> & {}
>;
declare type ____ShadowStyle_InternalCore = Readonly<{
  shadowColor?: ____ColorValue_Internal;
  shadowOffset?: Readonly<{
    width?: number;
    height?: number;
  }>;
  shadowOpacity?: AnimatableNumericValue;
  shadowRadius?: number;
}>;
declare type ____ShadowStyle_InternalOverrides = Readonly<{}>;
declare type ____Styles_Internal = {
  readonly [key: string]: Partial<____DangerouslyImpreciseStyle_Internal>;
};
declare type ____TextStyle_Internal = Readonly<
  Omit<
    ____TextStyle_InternalCore,
    keyof ____TextStyle_InternalOverrides | keyof {}
  > &
    Omit<____TextStyle_InternalOverrides, keyof {}> & {}
>;
declare type ____TextStyle_InternalBase = Readonly<{
  color?: ____ColorValue_Internal;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: "normal" | "italic";
  fontWeight?: ____FontWeight_Internal;
  fontVariant?: ____FontVariantArray_Internal | string;
  textShadowOffset?: Readonly<{
    width: number;
    height: number;
  }>;
  textShadowRadius?: number;
  textShadowColor?: ____ColorValue_Internal;
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textAlignVertical?: "auto" | "top" | "bottom" | "center";
  includeFontPadding?: boolean;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  textDecorationStyle?: "solid" | "double" | "dotted" | "dashed";
  textDecorationColor?: ____ColorValue_Internal;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  userSelect?: "auto" | "text" | "none" | "contain" | "all";
  verticalAlign?: "auto" | "top" | "bottom" | "middle";
  writingDirection?: "auto" | "ltr" | "rtl";
}>;
declare type ____TextStyle_InternalCore = Readonly<
  Omit<____ViewStyle_Internal, keyof ____TextStyle_InternalBase | keyof {}> &
    Omit<____TextStyle_InternalBase, keyof {}> & {}
>;
declare type ____TextStyle_InternalOverrides = Readonly<{}>;
declare type ____TextStyleProp_Internal = StyleProp<
  Readonly<Partial<____TextStyle_Internal>>
>;
declare type ____TransformStyle_Internal = Readonly<{
  transform?:
    | ReadonlyArray<
        | {
            readonly perspective: number | AnimatedNode;
          }
        | {
            readonly rotate: string | AnimatedNode;
          }
        | {
            readonly rotateX: string | AnimatedNode;
          }
        | {
            readonly rotateY: string | AnimatedNode;
          }
        | {
            readonly rotateZ: string | AnimatedNode;
          }
        | {
            readonly scale: number | AnimatedNode;
          }
        | {
            readonly scaleX: number | AnimatedNode;
          }
        | {
            readonly scaleY: number | AnimatedNode;
          }
        | {
            readonly translateX: number | string | AnimatedNode;
          }
        | {
            readonly translateY: number | string | AnimatedNode;
          }
        | {
            readonly translate:
              | [number | string | AnimatedNode, number | string | AnimatedNode]
              | AnimatedNode;
          }
        | {
            readonly skewX: string | AnimatedNode;
          }
        | {
            readonly skewY: string | AnimatedNode;
          }
        | {
            readonly matrix:
              | ReadonlyArray<number | AnimatedNode>
              | AnimatedNode;
          }
      >
    | string;
  transformOrigin?:
    | [string | number, string | number, string | number]
    | string;
}>;
declare type ____ViewStyle_Internal = Readonly<
  Omit<
    ____ViewStyle_InternalCore,
    keyof ____ViewStyle_InternalOverrides | keyof {}
  > &
    Omit<____ViewStyle_InternalOverrides, keyof {}> & {}
>;
declare type ____ViewStyle_InternalBase = Readonly<{
  backfaceVisibility?: "visible" | "hidden";
  backgroundColor?: ____ColorValue_Internal;
  borderColor?: ____ColorValue_Internal;
  borderCurve?: "circular" | "continuous";
  borderBottomColor?: ____ColorValue_Internal;
  borderEndColor?: ____ColorValue_Internal;
  borderLeftColor?: ____ColorValue_Internal;
  borderRightColor?: ____ColorValue_Internal;
  borderStartColor?: ____ColorValue_Internal;
  borderTopColor?: ____ColorValue_Internal;
  borderBlockColor?: ____ColorValue_Internal;
  borderBlockEndColor?: ____ColorValue_Internal;
  borderBlockStartColor?: ____ColorValue_Internal;
  borderRadius?: AnimatableNumericValue | string;
  borderBottomEndRadius?: AnimatableNumericValue | string;
  borderBottomLeftRadius?: AnimatableNumericValue | string;
  borderBottomRightRadius?: AnimatableNumericValue | string;
  borderBottomStartRadius?: AnimatableNumericValue | string;
  borderEndEndRadius?: AnimatableNumericValue | string;
  borderEndStartRadius?: AnimatableNumericValue | string;
  borderStartEndRadius?: AnimatableNumericValue | string;
  borderStartStartRadius?: AnimatableNumericValue | string;
  borderTopEndRadius?: AnimatableNumericValue | string;
  borderTopLeftRadius?: AnimatableNumericValue | string;
  borderTopRightRadius?: AnimatableNumericValue | string;
  borderTopStartRadius?: AnimatableNumericValue | string;
  borderStyle?: "solid" | "dotted" | "dashed";
  borderWidth?: AnimatableNumericValue;
  borderBottomWidth?: AnimatableNumericValue;
  borderEndWidth?: AnimatableNumericValue;
  borderLeftWidth?: AnimatableNumericValue;
  borderRightWidth?: AnimatableNumericValue;
  borderStartWidth?: AnimatableNumericValue;
  borderTopWidth?: AnimatableNumericValue;
  opacity?: AnimatableNumericValue;
  outlineColor?: ____ColorValue_Internal;
  outlineOffset?: AnimatableNumericValue;
  outlineStyle?: "solid" | "dotted" | "dashed";
  outlineWidth?: AnimatableNumericValue;
  elevation?: number;
  pointerEvents?: "auto" | "none" | "box-none" | "box-only";
  cursor?: CursorValue;
  boxShadow?: ReadonlyArray<BoxShadowValue> | string;
  filter?: ReadonlyArray<FilterFunction> | string;
  mixBlendMode?: ____BlendMode_Internal;
  experimental_backgroundImage?: ReadonlyArray<GradientValue> | string;
  isolation?: "auto" | "isolate";
}>;
declare type ____ViewStyle_InternalCore = Readonly<
  Omit<
    ____LayoutStyle_Internal,
    | keyof ____ShadowStyle_Internal
    | keyof ____TransformStyle_Internal
    | keyof ____ViewStyle_InternalBase
    | keyof {}
  > &
    Omit<
      ____ShadowStyle_Internal,
      | keyof ____TransformStyle_Internal
      | keyof ____ViewStyle_InternalBase
      | keyof {}
    > &
    Omit<
      ____TransformStyle_Internal,
      keyof ____ViewStyle_InternalBase | keyof {}
    > &
    Omit<____ViewStyle_InternalBase, keyof {}> & {}
>;
declare type ____ViewStyle_InternalOverrides = Readonly<{}>;
declare type ____ViewStyleProp_Internal = StyleProp<
  Readonly<Partial<____ViewStyle_Internal>>
>;
declare const absoluteFill: any;
declare type absoluteFill = typeof absoluteFill;
declare const absoluteFillObject: {
  readonly bottom: 0;
  readonly left: 0;
  readonly position: "absolute";
  readonly right: 0;
  readonly top: 0;
};
declare type absoluteFillObject = typeof absoluteFillObject;
declare type AbstractImageAndroid = (
  props: Omit<
    ImageProps,
    keyof {
      ref?: React_2.Ref<
        | React_2.ComponentRef<TextInlineImageNativeComponent>
        | React_2.ComponentRef<ImageViewNativeComponent>
      >;
    }
  > & {
    ref?: React_2.Ref<
      | React_2.ComponentRef<TextInlineImageNativeComponent>
      | React_2.ComponentRef<ImageViewNativeComponent>
    >;
  }
) => React_2.ReactNode;
declare type AbstractImageIOS = (
  props: Omit<
    ImageProps,
    keyof {
      ref?: React_2.Ref<React_2.ComponentRef<ImageViewNativeComponent>>;
    }
  > & {
    ref?: React_2.Ref<React_2.ComponentRef<ImageViewNativeComponent>>;
  }
) => React_2.ReactNode;
declare type AccessibilityActionEvent = NativeSyntheticEvent<
  Readonly<{
    actionName: string;
  }>
>;
declare type AccessibilityActionInfo = Readonly<{
  name: AccessibilityActionName | string;
  label?: string;
}>;
declare type AccessibilityActionName =
  | "activate"
  | "increment"
  | "decrement"
  | "longpress"
  | "magicTap"
  | "escape";
declare type AccessibilityEventDefinitions = Omit<
  AccessibilityEventDefinitionsAndroid,
  | keyof AccessibilityEventDefinitionsIOS
  | keyof {
      change: [boolean];
      reduceMotionChanged: [boolean];
      screenReaderChanged: [boolean];
    }
> &
  Omit<
    AccessibilityEventDefinitionsIOS,
    keyof {
      change: [boolean];
      reduceMotionChanged: [boolean];
      screenReaderChanged: [boolean];
    }
  > & {
    change: [boolean];
    reduceMotionChanged: [boolean];
    screenReaderChanged: [boolean];
  };
declare type AccessibilityEventDefinitionsAndroid = {
  accessibilityServiceChanged: [boolean];
  highTextContrastChanged: [boolean];
};
declare type AccessibilityEventDefinitionsIOS = {
  announcementFinished: [
    {
      announcement: string;
      success: boolean;
    }
  ];
  boldTextChanged: [boolean];
  grayscaleChanged: [boolean];
  invertColorsChanged: [boolean];
  reduceTransparencyChanged: [boolean];
  darkerSystemColorsChanged: [boolean];
};
declare type AccessibilityEventTypes = "click" | "focus" | "viewHoverEnter";
export declare const AccessibilityInfo: typeof AccessibilityInfo_2;
export declare type AccessibilityInfo = typeof AccessibilityInfo;
declare const AccessibilityInfo_2: {
  isBoldTextEnabled(): Promise<boolean>;
  isGrayscaleEnabled(): Promise<boolean>;
  isInvertColorsEnabled(): Promise<boolean>;
  isReduceMotionEnabled(): Promise<boolean>;
  isHighTextContrastEnabled(): Promise<boolean>;
  isDarkerSystemColorsEnabled(): Promise<boolean>;
  prefersCrossFadeTransitions(): Promise<boolean>;
  isReduceTransparencyEnabled(): Promise<boolean>;
  isScreenReaderEnabled(): Promise<boolean>;
  isAccessibilityServiceEnabled(): Promise<boolean>;
  addEventListener<K extends keyof AccessibilityEventDefinitions>(
    eventName: K,
    handler: (...$$REST$$: AccessibilityEventDefinitions[K]) => void
  ): EventSubscription;
  setAccessibilityFocus(reactTag: number): void;
  sendAccessibilityEvent(
    handle: HostInstance,
    eventType: AccessibilityEventTypes
  ): void;
  announceForAccessibility(announcement: string): void;
  announceForAccessibilityWithOptions(
    announcement: string,
    options: {
      queue?: boolean;
    }
  ): void;
  getRecommendedTimeoutMillis(originalTimeout: number): Promise<number>;
};
declare type AccessibilityProps = Readonly<
  Omit<
    AccessibilityPropsAndroid,
    | keyof AccessibilityPropsIOS
    | keyof {
        accessible?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        "aria-label"?: string | undefined;
        accessibilityRole?: AccessibilityRole | undefined;
        role?: Role | undefined;
        accessibilityState?: AccessibilityState | undefined;
        accessibilityValue?: AccessibilityValue | undefined;
        "aria-valuemax"?: AccessibilityValue["max"] | undefined;
        "aria-valuemin"?: AccessibilityValue["min"] | undefined;
        "aria-valuenow"?: AccessibilityValue["now"] | undefined;
        "aria-valuetext"?: AccessibilityValue["text"] | undefined;
        accessibilityActions?:
          | ReadonlyArray<AccessibilityActionInfo>
          | undefined;
        "aria-busy"?: boolean | undefined;
        "aria-checked"?: (boolean | undefined) | "mixed";
        "aria-disabled"?: boolean | undefined;
        "aria-expanded"?: boolean | undefined;
        "aria-selected"?: boolean | undefined;
        "aria-hidden"?: boolean | undefined;
      }
  > &
    Omit<
      AccessibilityPropsIOS,
      keyof {
        accessible?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        "aria-label"?: string | undefined;
        accessibilityRole?: AccessibilityRole | undefined;
        role?: Role | undefined;
        accessibilityState?: AccessibilityState | undefined;
        accessibilityValue?: AccessibilityValue | undefined;
        "aria-valuemax"?: AccessibilityValue["max"] | undefined;
        "aria-valuemin"?: AccessibilityValue["min"] | undefined;
        "aria-valuenow"?: AccessibilityValue["now"] | undefined;
        "aria-valuetext"?: AccessibilityValue["text"] | undefined;
        accessibilityActions?:
          | ReadonlyArray<AccessibilityActionInfo>
          | undefined;
        "aria-busy"?: boolean | undefined;
        "aria-checked"?: (boolean | undefined) | "mixed";
        "aria-disabled"?: boolean | undefined;
        "aria-expanded"?: boolean | undefined;
        "aria-selected"?: boolean | undefined;
        "aria-hidden"?: boolean | undefined;
      }
    > & {
      accessible?: boolean | undefined;
      accessibilityLabel?: string | undefined;
      accessibilityHint?: string | undefined;
      "aria-label"?: string | undefined;
      accessibilityRole?: AccessibilityRole | undefined;
      role?: Role | undefined;
      accessibilityState?: AccessibilityState | undefined;
      accessibilityValue?: AccessibilityValue | undefined;
      "aria-valuemax"?: AccessibilityValue["max"] | undefined;
      "aria-valuemin"?: AccessibilityValue["min"] | undefined;
      "aria-valuenow"?: AccessibilityValue["now"] | undefined;
      "aria-valuetext"?: AccessibilityValue["text"] | undefined;
      accessibilityActions?: ReadonlyArray<AccessibilityActionInfo> | undefined;
      "aria-busy"?: boolean | undefined;
      "aria-checked"?: (boolean | undefined) | "mixed";
      "aria-disabled"?: boolean | undefined;
      "aria-expanded"?: boolean | undefined;
      "aria-selected"?: boolean | undefined;
      "aria-hidden"?: boolean | undefined;
    }
>;
declare type AccessibilityPropsAndroid = Readonly<{
  accessibilityLabelledBy?: (string | undefined) | (Array<string> | undefined);
  "aria-labelledby"?: string | undefined;
  accessibilityLiveRegion?: ("none" | "polite" | "assertive") | undefined;
  "aria-live"?: ("polite" | "assertive" | "off") | undefined;
  importantForAccessibility?:
    | ("auto" | "yes" | "no" | "no-hide-descendants")
    | undefined;
}>;
declare type AccessibilityPropsIOS = Readonly<{
  accessibilityIgnoresInvertColors?: boolean | undefined;
  accessibilityViewIsModal?: boolean | undefined;
  accessibilityShowsLargeContentViewer?: boolean | undefined;
  accessibilityLargeContentTitle?: string | undefined;
  "aria-modal"?: boolean | undefined;
  accessibilityElementsHidden?: boolean | undefined;
  accessibilityLanguage?: string | undefined;
}>;
declare type AccessibilityRole =
  | "none"
  | "button"
  | "dropdownlist"
  | "togglebutton"
  | "link"
  | "search"
  | "image"
  | "keyboardkey"
  | "text"
  | "adjustable"
  | "imagebutton"
  | "header"
  | "summary"
  | "alert"
  | "checkbox"
  | "combobox"
  | "menu"
  | "menubar"
  | "menuitem"
  | "progressbar"
  | "radio"
  | "radiogroup"
  | "scrollbar"
  | "spinbutton"
  | "switch"
  | "tab"
  | "tabbar"
  | "tablist"
  | "timer"
  | "list"
  | "toolbar"
  | "grid"
  | "pager"
  | "scrollview"
  | "horizontalscrollview"
  | "viewgroup"
  | "webview"
  | "drawerlayout"
  | "slidingdrawer"
  | "iconmenu"
  | string;
declare type AccessibilityState = {
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  checked?: (boolean | undefined) | "mixed";
  busy?: boolean | undefined;
  expanded?: boolean | undefined;
};
declare type AccessibilityValue = Readonly<{
  min?: number;
  max?: number;
  now?: number;
  text?: string;
}>;
export declare const ActionSheetIOS: typeof ActionSheetIOS_2;
export declare type ActionSheetIOS = typeof ActionSheetIOS;
declare const ActionSheetIOS_2: {
  showActionSheetWithOptions(
    options: ActionSheetIOSOptions,
    callback: (buttonIndex: number) => void
  ): void;
  showShareActionSheetWithOptions(
    options: ShareActionSheetIOSOptions,
    failureCallback: Function | ((error: ShareActionSheetError) => void),
    successCallback:
      | Function
      | ((success: boolean, method: null | undefined | string) => void)
  ): void;
  dismissActionSheet: () => void;
};
export declare type ActionSheetIOSOptions = Readonly<{
  title?: string | undefined;
  message?: string | undefined;
  options: Array<string>;
  destructiveButtonIndex?: (number | undefined) | (Array<number> | undefined);
  cancelButtonIndex?: number | undefined;
  anchor?: number | undefined;
  tintColor?: ColorValue | ProcessedColorValue;
  cancelButtonTintColor?: ColorValue | ProcessedColorValue;
  disabledButtonTintColor?: ColorValue | ProcessedColorValue;
  userInterfaceStyle?: string;
  disabledButtonIndices?: Array<number>;
}>;
declare type ActiveCallback = (
  event: GestureResponderEvent,
  gestureState: PanResponderGestureState
) => boolean;
export declare const ActivityIndicator: typeof ActivityIndicatorWithRef;
export declare type ActivityIndicator = typeof ActivityIndicator;
declare type ActivityIndicatorIOSProps = Readonly<{
  hidesWhenStopped?: boolean | undefined;
}>;
export declare type ActivityIndicatorProps = Readonly<
  Omit<
    ViewProps,
    | keyof ActivityIndicatorIOSProps
    | keyof {
        animating?: boolean | undefined;
        color?: ColorValue | undefined;
        size?: IndicatorSize | undefined;
      }
  > &
    Omit<
      ActivityIndicatorIOSProps,
      keyof {
        animating?: boolean | undefined;
        color?: ColorValue | undefined;
        size?: IndicatorSize | undefined;
      }
    > & {
      animating?: boolean | undefined;
      color?: ColorValue | undefined;
      size?: IndicatorSize | undefined;
    }
>;
declare const ActivityIndicatorWithRef: (
  props: Omit<
    ActivityIndicatorProps,
    keyof {
      ref?: React_2.Ref<HostComponent<never>>;
    }
  > & {
    ref?: React_2.Ref<HostComponent<never>>;
  }
) => React_2.ReactNode;
declare const add: typeof AnimatedImplementation_MODULE_EXPORT.add;
declare type add = typeof add;
declare const add_2: (
  a: AnimatedNode | number,
  b: AnimatedNode | number
) => AnimatedAddition;
declare function addChangeListener(
  listener: ($$PARAM_0$$: { colorScheme: ColorSchemeName | undefined }) => void
): EventSubscription;
export declare class Alert {
  static alert(
    title: null | undefined | string,
    message?: null | undefined | string,
    buttons?: AlertButtons,
    options?: AlertOptions
  ): void;
  static prompt(
    title: null | undefined | string,
    message?: null | undefined | string,
    callbackOrButtons?:
      | null
      | undefined
      | (((text: string) => void) | AlertButtons),
    type?: null | undefined | AlertType,
    defaultValue?: string,
    keyboardType?: string,
    options?: AlertOptions
  ): void;
}
export declare type AlertButton = {
  text?: string;
  onPress?: (((value?: string) => any) | undefined) | (Function | undefined);
  isPreferred?: boolean;
  style?: AlertButtonStyle;
};
declare type AlertButtons = Array<AlertButton>;
export declare type AlertButtonStyle = "default" | "cancel" | "destructive";
export declare type AlertOptions = {
  cancelable?: boolean | undefined;
  userInterfaceStyle?: "unspecified" | "light" | "dark";
  onDismiss?: (() => void) | undefined;
};
export declare type AlertType =
  | "default"
  | "plain-text"
  | "secure-text"
  | "login-password";
declare type AndroidDrawable = AndroidDrawableThemeAttr | AndroidDrawableRipple;
declare type AndroidDrawableRipple = Readonly<{
  type: "RippleAndroid";
  color?: number | undefined;
  borderless?: boolean | undefined;
  rippleRadius?: number | undefined;
}>;
declare type AndroidDrawableThemeAttr = Readonly<{
  type: "ThemeAttrAndroid";
  attribute: string;
}>;
export declare type AndroidKeyboardEvent = Readonly<
  Omit<
    BaseKeyboardEvent,
    keyof {
      duration: 0;
      easing: "keyboard";
    }
  > & {
    duration: 0;
    easing: "keyboard";
  }
>;
declare type AndroidPlatform = {
  OS: "android";
  get Version(): number;
  get constants(): {
    isTesting: boolean;
    isDisableAnimations?: boolean;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: string | undefined;
    };
    Version: number;
    Release: string;
    Serial: string;
    Fingerprint: string;
    Model: string;
    ServerHost?: string;
    uiMode: string;
    Brand: string;
    Manufacturer: string;
  };
  get isTV(): boolean;
  get isVision(): boolean;
  get isTesting(): boolean;
  get isDisableAnimations(): boolean;
  select: <T>(spec: PlatformSelectSpec<T>) => T;
};
declare type AndroidProps = Readonly<{
  nextFocusDown?: number | undefined;
  nextFocusForward?: number | undefined;
  nextFocusLeft?: number | undefined;
  nextFocusRight?: number | undefined;
  nextFocusUp?: number | undefined;
}>;
declare const AndroidSwitchNativeComponent_MODULE_EXPORT: typeof AndroidSwitchNativeComponent_MODULE_EXPORT_2;
declare type AndroidSwitchNativeComponent_MODULE_EXPORT =
  typeof AndroidSwitchNativeComponent_MODULE_EXPORT;
declare const AndroidSwitchNativeComponent_MODULE_EXPORT_2: NativeType;
declare type AndroidSwitchNativeComponent_MODULE_EXPORT_2 =
  typeof AndroidSwitchNativeComponent_MODULE_EXPORT_2;
declare type AnimatableNumericValue = number | AnimatedNode;
export declare namespace Animated {
  export {
    AnimatedFlatList_MODULE_EXPORT as FlatList,
    AnimatedImage_MODULE_EXPORT as Image,
    AnimatedScrollView_MODULE_EXPORT as ScrollView,
    AnimatedSectionList_MODULE_EXPORT as SectionList,
    AnimatedText_MODULE_EXPORT as Text,
    AnimatedView_MODULE_EXPORT as View,
    AnimatedColor as Color,
    AnimatedEvent as Event,
    AnimatedInterpolation as Interpolation,
    AnimatedNode as Node,
    AnimatedValue as Value,
    AnimatedValueXY as ValueXY,
    AnimatedInterpolation,
    AnimatedColor,
    AnimatedValueConfig as AnimatedConfig,
    AnimatedNode,
    AnimatedAddition,
    AnimatedDiffClamp,
    AnimatedDivision,
    AnimatedModulo,
    AnimatedMultiplication,
    AnimatedSubtraction,
    add,
    attachNativeEvent_2 as attachNativeEvent,
    createAnimatedComponent_2 as createAnimatedComponent,
    decay_2 as decay,
    delay_2 as delay,
    diffClamp_2 as diffClamp,
    divide_2 as divide,
    event_3 as event,
    forkEvent_2 as forkEvent,
    loop_2 as loop,
    modulo_2 as modulo,
    multiply_2 as multiply,
    parallel_2 as parallel,
    sequence_2 as sequence,
    spring_2 as spring,
    stagger_2 as stagger,
    subtract_2 as subtract,
    timing_2 as timing,
    unforkEvent_2 as unforkEvent,
  };
}
declare class AnimatedAddition extends AnimatedWithChildren {
  constructor(
    a: AnimatedNode | number,
    b: AnimatedNode | number,
    config?: null | undefined | AnimatedNodeConfig
  );
  interpolate<OutputT extends number | string>(
    config: InterpolationConfigType<OutputT>
  ): AnimatedInterpolation<OutputT>;
}
declare type AnimatedBaseProps<Props extends {}> = {
  [K in keyof Props]: K extends NonAnimatedProps
    ? Props[K]
    : WithAnimatedValue<Props[K]>;
};
declare class AnimatedColor extends AnimatedWithChildren {
  r: AnimatedValue;
  g: AnimatedValue;
  b: AnimatedValue;
  a: AnimatedValue;
  nativeColor: null | undefined | NativeColorValue;
  constructor(
    valueIn?: InputValue,
    config?: null | undefined | AnimatedColorConfig
  );
  setValue(value: RgbaValue | ColorValue): void;
  setOffset(offset: RgbaValue): void;
  flattenOffset(): void;
  extractOffset(): void;
  stopAnimation(callback?: ColorListenerCallback): void;
  resetAnimation(callback?: ColorListenerCallback): void;
}
declare type AnimatedColorConfig = Readonly<
  Omit<
    AnimatedNodeConfig,
    keyof {
      useNativeDriver: boolean;
    }
  > & {
    useNativeDriver: boolean;
  }
>;
declare type AnimatedComponentType<Props extends {}, Instance = unknown> = (
  props: Omit<
    AnimatedProps<Props>,
    keyof {
      ref?: React_2.Ref<Instance>;
    }
  > & {
    ref?: React_2.Ref<Instance>;
  }
) => React_2.ReactNode;
declare class AnimatedDiffClamp extends AnimatedWithChildren {
  constructor(
    a: AnimatedNode,
    min: number,
    max: number,
    config?: null | undefined | AnimatedNodeConfig
  );
  interpolate<OutputT extends number | string>(
    config: InterpolationConfigType<OutputT>
  ): AnimatedInterpolation<OutputT>;
}
declare class AnimatedDivision extends AnimatedWithChildren {
  constructor(
    a: AnimatedNode | number,
    b: AnimatedNode | number,
    config?: null | undefined | AnimatedNodeConfig
  );
  interpolate<OutputT extends number | string>(
    config: InterpolationConfigType<OutputT>
  ): AnimatedInterpolation<OutputT>;
}
declare class AnimatedEvent {
  constructor(
    argMapping: ReadonlyArray<null | undefined | Mapping>,
    config: EventConfig<any>
  );
}
declare const AnimatedFlatList_MODULE_EXPORT: AnimatedComponentType<
  React_2.JSX.LibraryManagedAttributes<
    typeof FlatList,
    React_2.ComponentProps<typeof FlatList>
  >,
  FlatList<unknown>
>;
declare type AnimatedFlatList_MODULE_EXPORT =
  typeof AnimatedFlatList_MODULE_EXPORT;
declare const AnimatedImage_MODULE_EXPORT: AnimatedComponentType<
  React_2.JSX.LibraryManagedAttributes<
    typeof Image_2,
    React_2.ComponentProps<typeof Image_2>
  >,
  React_2.ComponentRef<typeof Image_2>
>;
declare type AnimatedImage_MODULE_EXPORT = typeof AnimatedImage_MODULE_EXPORT;
declare const AnimatedImplementation_MODULE_EXPORT: {
  Value: typeof AnimatedValue;
  ValueXY: typeof AnimatedValueXY;
  Color: typeof AnimatedColor;
  Interpolation: typeof AnimatedInterpolation;
  Node: typeof AnimatedNode;
  decay: typeof decay;
  timing: typeof timing;
  spring: typeof spring;
  add: typeof add_2;
  subtract: typeof subtract;
  divide: typeof divide;
  multiply: typeof multiply;
  modulo: typeof modulo;
  diffClamp: typeof diffClamp;
  delay: typeof delay;
  sequence: typeof sequence;
  parallel: typeof parallel;
  stagger: typeof stagger;
  loop: typeof loop;
  event: typeof event_2;
  createAnimatedComponent: typeof createAnimatedComponent;
  attachNativeEvent: typeof attachNativeEvent;
  forkEvent: typeof forkEvent;
  unforkEvent: typeof unforkEvent;
  Event: typeof AnimatedEvent;
};
declare type AnimatedImplementation_MODULE_EXPORT =
  typeof AnimatedImplementation_MODULE_EXPORT;
declare class AnimatedInterpolation<
  OutputT extends number | string
> extends AnimatedWithChildren {
  constructor(parent: AnimatedNode, config: InterpolationConfigType<OutputT>);
  interpolate<NewOutputT extends number | string>(
    config: InterpolationConfigType<NewOutputT>
  ): AnimatedInterpolation<NewOutputT>;
}
declare class AnimatedModulo extends AnimatedWithChildren {
  constructor(
    a: AnimatedNode,
    modulus: number,
    config?: null | undefined | AnimatedNodeConfig
  );
  interpolate<OutputT extends number | string>(
    config: InterpolationConfigType<OutputT>
  ): AnimatedInterpolation<OutputT>;
}
declare class AnimatedMultiplication extends AnimatedWithChildren {
  constructor(
    a: AnimatedNode | number,
    b: AnimatedNode | number,
    config?: null | undefined | AnimatedNodeConfig
  );
  interpolate<OutputT extends number | string>(
    config: InterpolationConfigType<OutputT>
  ): AnimatedInterpolation<OutputT>;
}
declare class AnimatedNode {
  constructor(
    config?:
      | null
      | undefined
      | Readonly<Omit<AnimatedNodeConfig, keyof {}> & {}>
  );
  addListener(callback: (value: any) => unknown): string;
  removeListener(id: string): void;
  removeAllListeners(): void;
  hasListeners(): boolean;
  toJSON(): unknown;
}
declare type AnimatedNodeConfig = Readonly<{
  debugID?: string;
}>;
declare type AnimatedProps<Props extends {}> = {
  [K in keyof Props]: K extends NonAnimatedProps
    ? Props[K]
    : WithAnimatedValue<Props[K]>;
} & PassThroughProps;
declare const AnimatedScrollView: AnimatedComponentType<Props_2, Instance>;
declare const AnimatedScrollView_MODULE_EXPORT: typeof AnimatedScrollView;
declare type AnimatedScrollView_MODULE_EXPORT =
  typeof AnimatedScrollView_MODULE_EXPORT;
declare const AnimatedSectionList_MODULE_EXPORT: AnimatedComponentType<
  React_2.JSX.LibraryManagedAttributes<
    typeof SectionList,
    React_2.ComponentProps<typeof SectionList>
  >,
  SectionList<any, SectionBase_2<any>>
>;
declare type AnimatedSectionList_MODULE_EXPORT =
  typeof AnimatedSectionList_MODULE_EXPORT;
declare class AnimatedSubtraction extends AnimatedWithChildren {
  constructor(
    a: AnimatedNode | number,
    b: AnimatedNode | number,
    config?: null | undefined | AnimatedNodeConfig
  );
  interpolate<OutputT extends number | string>(
    config: InterpolationConfigType<OutputT>
  ): AnimatedInterpolation<OutputT>;
}
declare const AnimatedText_MODULE_EXPORT: AnimatedComponentType<
  React_2.JSX.LibraryManagedAttributes<
    typeof Text_2,
    React_2.ComponentProps<typeof Text_2>
  >,
  React_2.ComponentRef<typeof Text_2>
>;
declare type AnimatedText_MODULE_EXPORT = typeof AnimatedText_MODULE_EXPORT;
declare class AnimatedTracking extends AnimatedNode {
  constructor(
    value: AnimatedValue,
    parent: AnimatedNode,
    animationClass: any,
    animationConfig: Object,
    callback?: null | undefined | EndCallback,
    config?: null | undefined | AnimatedNodeConfig
  );
  update(): void;
}
declare class AnimatedValue extends AnimatedWithChildren {
  constructor(value: number, config?: null | undefined | AnimatedValueConfig);
  addListener(callback: (value: any) => unknown): string;
  removeListener(id: string): void;
  removeAllListeners(): void;
  setValue(value: number): void;
  setOffset(offset: number): void;
  flattenOffset(): void;
  extractOffset(): void;
  stopAnimation(callback?: null | undefined | ((value: number) => void)): void;
  resetAnimation(callback?: null | undefined | ((value: number) => void)): void;
  interpolate<OutputT extends number | string>(
    config: InterpolationConfigType<OutputT>
  ): AnimatedInterpolation<OutputT>;
  animate(
    animation: Animation_2,
    callback: null | undefined | EndCallback
  ): void;
  stopTracking(): void;
  track(tracking: AnimatedTracking): void;
}
declare type AnimatedValueConfig = Readonly<
  Omit<
    AnimatedNodeConfig,
    keyof {
      useNativeDriver: boolean;
    }
  > & {
    useNativeDriver: boolean;
  }
>;
declare class AnimatedValueXY extends AnimatedWithChildren {
  x: AnimatedValue;
  y: AnimatedValue;
  constructor(
    valueIn?:
      | null
      | undefined
      | {
          readonly x: number | AnimatedValue;
          readonly y: number | AnimatedValue;
        },
    config?: null | undefined | AnimatedValueXYConfig
  );
  setValue(value: { x: number; y: number }): void;
  setOffset(offset: { x: number; y: number }): void;
  flattenOffset(): void;
  extractOffset(): void;
  resetAnimation(callback?: (value: { x: number; y: number }) => void): void;
  stopAnimation(callback?: (value: { x: number; y: number }) => void): void;
  addListener(callback: ValueXYListenerCallback): string;
  removeListener(id: string): void;
  removeAllListeners(): void;
  getLayout(): {
    [key: string]: AnimatedValue;
  };
  getTranslateTransform(): Array<
    | {
        translateX: AnimatedValue;
      }
    | {
        translateY: AnimatedValue;
      }
  >;
}
declare type AnimatedValueXYConfig = Readonly<
  Omit<
    AnimatedNodeConfig,
    keyof {
      useNativeDriver: boolean;
    }
  > & {
    useNativeDriver: boolean;
  }
>;
declare const AnimatedView_MODULE_EXPORT: AnimatedComponentType<
  React_2.JSX.LibraryManagedAttributes<
    typeof View,
    React_2.ComponentProps<typeof View>
  >,
  React_2.ComponentRef<typeof View>
>;
declare type AnimatedView_MODULE_EXPORT = typeof AnimatedView_MODULE_EXPORT;
declare class AnimatedWithChildren extends AnimatedNode {}
declare class Animation_2 {
  constructor(config: AnimationConfig);
  start(
    fromValue: number,
    onUpdate: (value: number) => void,
    onEnd: null | undefined | EndCallback,
    previousAnimation: null | undefined | Animation_2,
    animatedValue: AnimatedValue
  ): void;
  stop(): void;
}
declare type AnimationConfig = Readonly<{
  isInteraction?: boolean;
  useNativeDriver: boolean;
  platformConfig?: PlatformConfig;
  onComplete?: EndCallback | undefined;
  iterations?: number;
  isLooping?: boolean;
  debugID?: string | undefined;
}>;
export declare type AppConfig = {
  appKey: string;
  component?: ComponentProvider;
  run?: Runnable;
  section?: boolean;
};
export declare namespace Appearance {
  export { getColorScheme, setColorScheme, addChangeListener };
}
declare type AppParameters = {
  initialProps: Readonly<{
    [$$Key$$: string]: unknown;
  }>;
  rootTag: RootTag;
  fabric?: boolean;
};
export declare namespace AppRegistry {
  export {
    setWrapperComponentProvider,
    setRootViewStyleProvider,
    registerConfig,
    registerComponent,
    registerRunnable,
    registerSection,
    getAppKeys,
    getSectionKeys,
    getSections,
    getRunnable,
    getRegistry,
    setComponentProviderInstrumentationHook,
    runApplication,
    setSurfaceProps,
    unmountApplicationComponentAtRootTag,
    registerHeadlessTask,
    registerCancellableHeadlessTask,
    startHeadlessTask,
    cancelHeadlessTask,
    TaskCanceller,
    TaskCancelProvider,
  };
}
export declare const AppState: typeof AppState_2;
export declare type AppState = typeof AppState;
declare const AppState_2: AppStateImpl;
export declare type AppStateEvent = keyof AppStateEventDefinitions;
declare type AppStateEventDefinitions = {
  change: [AppStateStatus];
  memoryWarning: [];
  blur: [];
  focus: [];
};
declare class AppStateImpl {
  currentState: null | undefined | string;
  isAvailable: boolean;
  constructor();
  addEventListener<K extends AppStateEvent>(
    type: K,
    handler: (...$$REST$$: AppStateEventDefinitions[K]) => void
  ): EventSubscription;
}
export declare type AppStateStatus = "inactive" | "background" | "active";
declare function attachNativeEvent(
  viewRef: any,
  eventName: string,
  argMapping: ReadonlyArray<null | undefined | Mapping>,
  platformConfig: null | undefined | PlatformConfig
): {
  detach: () => void;
};
declare const attachNativeEvent_2: typeof AnimatedImplementation_MODULE_EXPORT.attachNativeEvent;
declare type attachNativeEvent_2 = typeof attachNativeEvent_2;
export declare type AutoCapitalize =
  | "none"
  | "sentences"
  | "words"
  | "characters";
declare type AutoCapitalize_2 = "none" | "sentences" | "words" | "characters";
export declare const BackHandler: typeof BackHandler_2;
export declare type BackHandler = typeof BackHandler;
declare const BackHandler_2: TBackHandler;
export declare type BackPressEventName = "backPress" | "hardwareBackPress";
declare type BaseKeyboardEvent = {
  duration: number;
  easing: KeyboardEventEasing;
  endCoordinates: KeyboardMetrics;
};
declare function beginAsyncEvent(
  eventName: EventName,
  args?: EventArgs
): number;
declare function beginEvent(eventName: EventName, args?: EventArgs): void;
declare class Blob_2 {
  constructor(parts: Array<Blob_2 | string>, options?: BlobOptions_2);
  set data(data: null | undefined | BlobData);
  get data(): BlobData;
  slice(start?: number, end?: number, contentType?: string): Blob_2;
  close(): void;
  get size(): number;
  get type(): string;
}
declare type BlobData = {
  blobId: string;
  offset: number;
  size: number;
  name?: string;
  type?: string;
  lastModified?: number;
};
declare type BlobOptions_2 = {
  type: string;
  lastModified: number;
};
export declare type BlurEvent = NativeSyntheticEvent<TargetedEvent>;
export declare type BoxShadowValue = {
  offsetX: number | string;
  offsetY: number | string;
  color?: ____ColorValue_Internal;
  blurRadius?: number | string;
  spreadDistance?: number | string;
  inset?: boolean;
};
declare type BubblingEventHandler<
  T,
  PaperName extends string | never = never
> = (event: NativeSyntheticEvent<T>) => void | Promise<void>;
declare type Builtin = (
  ...$$REST$$: ReadonlyArray<never>
) => unknown | Date | Error | RegExp;
export declare const Button: typeof Button_2;
export declare type Button = typeof Button;
declare const Button_2: (
  props: Omit<
    ButtonProps,
    keyof {
      ref?: React_2.Ref<ButtonRef>;
    }
  > & {
    ref?: React_2.Ref<ButtonRef>;
  }
) => React_2.ReactNode;
export declare type ButtonProps = Readonly<{
  title: string;
  onPress: (event?: GestureResponderEvent) => unknown;
  touchSoundDisabled?: boolean | undefined;
  color?: ColorValue | undefined;
  hasTVPreferredFocus?: boolean | undefined;
  nextFocusDown?: number | undefined;
  nextFocusForward?: number | undefined;
  nextFocusLeft?: number | undefined;
  nextFocusRight?: number | undefined;
  nextFocusUp?: number | undefined;
  accessibilityLabel?: string | undefined;
  "aria-label"?: string | undefined;
  disabled?: boolean | undefined;
  testID?: string | undefined;
  accessible?: boolean | undefined;
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo> | undefined;
  onAccessibilityAction?:
    | ((event: AccessibilityActionEvent) => unknown)
    | undefined;
  accessibilityState?: AccessibilityState | undefined;
  "aria-busy"?: boolean | undefined;
  "aria-checked"?: (boolean | undefined) | "mixed";
  "aria-disabled"?: boolean | undefined;
  "aria-expanded"?: boolean | undefined;
  "aria-selected"?: boolean | undefined;
  importantForAccessibility?:
    | ("auto" | "yes" | "no" | "no-hide-descendants")
    | undefined;
  accessibilityHint?: string | undefined;
  accessibilityLanguage?: string | undefined;
}>;
declare type ButtonRef = React_2.ComponentRef<typeof Touchable_2>;
declare function cancelHeadlessTask(taskId: number, taskKey: string): void;
declare type Category = string;
declare const Clipboard_2: {
  getString(): Promise<string>;
  setString(content: string): void;
};
declare type Clipboard_2 = typeof Clipboard_2;
export { Clipboard_2 as Clipboard };
declare type CodeFrame = Readonly<{
  content: string;
  location:
    | {
        row: number;
        column: number;
      }
    | undefined;
  fileName: string;
  collapse?: boolean;
}>;
export declare const codegenNativeCommands: typeof codegenNativeCommands_2;
export declare type codegenNativeCommands = typeof codegenNativeCommands;
declare function codegenNativeCommands_2<T extends {}>(
  options: Options_2<keyof T>
): T;
export declare const codegenNativeComponent: typeof codegenNativeComponent_2;
export declare type codegenNativeComponent = typeof codegenNativeComponent;
declare function codegenNativeComponent_2<Props extends {}>(
  componentName: string,
  options?: Options
): NativeComponentType<Props>;
declare namespace CodegenTypes {
  export {
    BubblingEventHandler,
    DirectEventHandler,
    Double,
    Float,
    Int32,
    UnsafeObject_3 as UnsafeObject,
    UnsafeMixed,
    DefaultTypes,
    WithDefault,
    EventEmitter,
  };
}
export { CodegenTypes };
declare type ColorListenerCallback = (value: ColorValue) => unknown;
export declare type ColorSchemeName = "light" | "dark" | "unspecified";
export declare type ColorValue = ____ColorValue_Internal;
export declare type ComponentProvider = () => React_2.ComponentType<any>;
export declare type ComponentProviderInstrumentationHook = (
  component_: ComponentProvider,
  scopedPerformanceLogger: IPerformanceLogger
) => React_2.ComponentType<any>;
declare type ComponentStack = ReadonlyArray<CodeFrame>;
declare type ComponentStackType = "legacy" | "stack";
declare type ComponentType = HostComponent<NativeProps_3>;
declare const compose: typeof composeStyles;
declare type compose = typeof compose;
declare function composeStyles<T1, T2>(
  style1: null | undefined | T1,
  style2: null | undefined | T2
): null | undefined | (T1 | T2 | ReadonlyArray<T1 | T2>);
declare type CompositeAnimation = {
  start: (callback?: EndCallback | undefined, isLooping?: boolean) => void;
  stop: () => void;
  reset: () => void;
};
declare function configureNext(
  config: LayoutAnimationConfig,
  onAnimationDidEnd?: OnAnimationDidEndCallback,
  onAnimationDidFail?: OnAnimationDidFailCallback
): void;
declare type ContentAvailable = 1 | null | void;
declare function counterEvent(eventName: EventName, value: number): void;
declare function create(
  duration: number,
  type?: LayoutAnimationType,
  property?: LayoutAnimationProperty
): LayoutAnimationConfig;
declare const create_2: <S extends ____Styles_Internal>(obj: S) => Readonly<S>;
declare type create_2 = typeof create_2;
declare function createAnimatedComponent<
  TInstance extends React_2.ComponentType<any>
>(
  Component: TInstance
): AnimatedComponentType<
  Readonly<React_2.ComponentProps<TInstance>>,
  React_2.ComponentRef<TInstance>
>;
declare const createAnimatedComponent_2: typeof AnimatedImplementation_MODULE_EXPORT.createAnimatedComponent;
declare type createAnimatedComponent_2 = typeof createAnimatedComponent_2;
export declare type CursorValue = "auto" | "pointer";
declare type DangerouslyImpreciseStyle = ____DangerouslyImpreciseStyle_Internal;
declare type DataDetectorTypesType =
  | "phoneNumber"
  | "link"
  | "address"
  | "calendarEvent"
  | "trackingNumber"
  | "flightNumber"
  | "lookupSuggestion"
  | "none"
  | "all";
declare type DataDetectorTypesType_2 =
  | "phoneNumber"
  | "link"
  | "address"
  | "calendarEvent"
  | "trackingNumber"
  | "flightNumber"
  | "lookupSuggestion"
  | "none"
  | "all";
declare const decay: (
  value: AnimatedValue | AnimatedValueXY | AnimatedColor,
  config: DecayAnimationConfig
) => CompositeAnimation;
declare const decay_2: typeof AnimatedImplementation_MODULE_EXPORT.decay;
declare type decay_2 = typeof decay_2;
declare type DecayAnimationConfig = Readonly<
  Omit<
    AnimationConfig,
    keyof {
      velocity:
        | number
        | Readonly<{
            x: number;
            y: number;
          }>;
      deceleration?: number;
    }
  > & {
    velocity:
      | number
      | Readonly<{
          x: number;
          y: number;
        }>;
    deceleration?: number;
  }
>;
declare type DecelerationRateType = "fast" | "normal" | number;
declare type DefaultSectionT = {
  [key: string]: any;
};
declare type DefaultTypes = number | boolean | string | ReadonlyArray<string>;
declare const delay: (time: number) => CompositeAnimation;
declare const delay_2: typeof AnimatedImplementation_MODULE_EXPORT.delay;
declare type delay_2 = typeof delay_2;
declare interface DEPRECATED_RCTExport<T extends void = void> {
  readonly getConstants?: () => {};
}
export declare const DeviceEventEmitter: IEventEmitter<RCTDeviceEventDefinitions>;
export declare type DeviceEventEmitter = typeof DeviceEventEmitter;
export declare const DeviceInfo: typeof NativeDeviceInfo_MODULE_EXPORT;
export declare type DeviceInfo = typeof DeviceInfo;
export declare type DeviceInfoConstants = {
  readonly Dimensions: DimensionsPayload;
  readonly isIPhoneX_deprecated?: boolean;
};
export declare const DevMenu: typeof DevMenu_2;
export declare type DevMenu = typeof DevMenu;
declare const DevMenu_2: DevMenuStatic;
declare type DevMenuStatic = {
  show(): void;
};
export declare const DevSettings: typeof DevSettings_2;
export declare type DevSettings = typeof DevSettings;
declare let DevSettings_2: {
  addMenuItem(title: string, handler: () => unknown): void;
  reload(reason?: string): void;
  onFastRefresh(): void;
};
declare type DialogAction = string;
declare type DialogButtonKey = number;
declare type DialogOptions = {
  title?: string;
  message?: string;
  buttonPositive?: string;
  buttonNegative?: string;
  buttonNeutral?: string;
  items?: Array<string>;
  cancelable?: boolean;
};
declare const diffClamp: (
  a: AnimatedNode,
  min: number,
  max: number
) => AnimatedDiffClamp;
declare const diffClamp_2: typeof AnimatedImplementation_MODULE_EXPORT.diffClamp;
declare type diffClamp_2 = typeof diffClamp_2;
export declare class Dimensions {
  static get(dim: string): DisplayMetrics | DisplayMetricsAndroid;
  static set(dims: Readonly<DimensionsPayload>): void;
  static addEventListener(type: "change", handler: Function): EventSubscription;
}
export declare type DimensionsPayload = {
  window?: DisplayMetrics;
  screen?: DisplayMetrics;
  windowPhysicalPixels?: DisplayMetricsAndroid;
  screenPhysicalPixels?: DisplayMetricsAndroid;
};
export declare type DimensionValue =
  | number
  | string
  | "auto"
  | AnimatedNode
  | null;
declare type DirectEventHandler<T, PaperName extends string | never = never> = (
  event: NativeSyntheticEvent<T>
) => void | Promise<void>;
declare type DirectEventProps = Readonly<{
  onAccessibilityAction?:
    | ((event: AccessibilityActionEvent) => unknown)
    | undefined;
  onAccessibilityTap?: (() => unknown) | undefined;
  onLayout?: ((event: LayoutChangeEvent) => unknown) | undefined;
  onMagicTap?: (() => unknown) | undefined;
  onAccessibilityEscape?: (() => unknown) | undefined;
}>;
export declare type DisplayMetrics = {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
};
export declare type DisplayMetricsAndroid = {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  densityDpi: number;
};
declare type DisplayModeType = symbol & {
  __DisplayModeType__: string;
};
declare const divide: (
  a: AnimatedNode | number,
  b: AnimatedNode | number
) => AnimatedDivision;
declare const divide_2: typeof AnimatedImplementation_MODULE_EXPORT.divide;
declare type divide_2 = typeof divide_2;
declare type Double = number;
export declare class DrawerLayoutAndroid
  extends React_2.Component<DrawerLayoutAndroidProps, DrawerLayoutAndroidState>
  implements DrawerLayoutAndroidMethods
{
  render(): React_2.ReactNode;
  openDrawer(): void;
  closeDrawer(): void;
  blur(): void;
  focus(): void;
  measure(callback: MeasureOnSuccessCallback): void;
  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
  measureLayout(
    relativeToNativeNode: number,
    onSuccess: MeasureLayoutOnSuccessCallback,
    onFail?: () => void
  ): void;
  setNativeProps(nativeProps: Object): void;
}
declare interface DrawerLayoutAndroidMethods {
  openDrawer(): void;
  closeDrawer(): void;
  blur(): void;
  focus(): void;
  measure(callback: MeasureOnSuccessCallback): void;
  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
  measureLayout(
    relativeToNativeNode: number,
    onSuccess: MeasureLayoutOnSuccessCallback,
    onFail?: () => void
  ): void;
  setNativeProps(nativeProps: Object): void;
}
export declare type DrawerLayoutAndroidProps = Readonly<
  Omit<
    ViewProps,
    keyof {
      keyboardDismissMode?: ("none" | "on-drag") | undefined;
      drawerBackgroundColor?: ColorValue | undefined;
      drawerPosition: ("left" | "right") | undefined;
      drawerWidth?: number | undefined;
      drawerLockMode?:
        | ("unlocked" | "locked-closed" | "locked-open")
        | undefined;
      onDrawerSlide?: ((event: DrawerSlideEvent) => unknown) | undefined;
      onDrawerStateChanged?: ((state: DrawerStates) => unknown) | undefined;
      onDrawerOpen?: (() => unknown) | undefined;
      onDrawerClose?: (() => unknown) | undefined;
      renderNavigationView: () => React_2.JSX.Element;
      statusBarBackgroundColor?: ColorValue | undefined;
    }
  > & {
    keyboardDismissMode?: ("none" | "on-drag") | undefined;
    drawerBackgroundColor?: ColorValue | undefined;
    drawerPosition: ("left" | "right") | undefined;
    drawerWidth?: number | undefined;
    drawerLockMode?: ("unlocked" | "locked-closed" | "locked-open") | undefined;
    onDrawerSlide?: ((event: DrawerSlideEvent) => unknown) | undefined;
    onDrawerStateChanged?: ((state: DrawerStates) => unknown) | undefined;
    onDrawerOpen?: (() => unknown) | undefined;
    onDrawerClose?: (() => unknown) | undefined;
    renderNavigationView: () => React_2.JSX.Element;
    statusBarBackgroundColor?: ColorValue | undefined;
  }
>;
declare type DrawerLayoutAndroidState = {
  drawerOpened: boolean;
};
export declare type DrawerSlideEvent = NativeSyntheticEvent<
  Readonly<{
    offset: number;
  }>
>;
declare type DrawerStates = "Idle" | "Dragging" | "Settling";
export declare type DropShadowValue = {
  offsetX: number | string;
  offsetY: number | string;
  standardDeviation?: number | string;
  color?: ____ColorValue_Internal;
};
export declare const DynamicColorIOS: (
  tuple: DynamicColorIOSTuple
) => ColorValue;
export declare type DynamicColorIOS = typeof DynamicColorIOS;
export declare type DynamicColorIOSTuple = {
  light: ColorValue;
  dark: ColorValue;
  highContrastLight?: ColorValue;
  highContrastDark?: ColorValue;
};
export declare const Easing: typeof EasingStatic;
export declare type Easing = typeof Easing;
export declare type EasingFunction = (t: number) => number;
declare const EasingStatic: {
  step0(n: number): number;
  step1(n: number): number;
  linear(t: number): number;
  ease(t: number): number;
  quad(t: number): number;
  cubic(t: number): number;
  poly(n: number): EasingFunction;
  sin(t: number): number;
  circle(t: number): number;
  exp(t: number): number;
  elastic(bounciness: number): EasingFunction;
  back(s: number): EasingFunction;
  bounce(t: number): number;
  bezier(x1: number, y1: number, x2: number, y2: number): EasingFunction;
  in(easing: EasingFunction): EasingFunction;
  out(easing: EasingFunction): EasingFunction;
  inOut(easing: EasingFunction): EasingFunction;
};
declare type EdgeInsetsOrSizeProp = RectOrSize;
declare type EdgeInsetsProp = Rect;
export declare type EdgeInsetsValue = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};
declare function endAsyncEvent(
  eventName: EventName,
  cookie: number,
  args?: EventArgs
): void;
declare type EndCallback = (result: EndResult) => void;
declare function endEvent(args?: EventArgs): void;
declare type EndResult = {
  finished: boolean;
  value?: number;
};
declare type EnterKeyHintType = "done" | "go" | "next" | "search" | "send";
declare type EnterKeyHintType_2 = "done" | "go" | "next" | "search" | "send";
declare type EnterKeyHintTypeAndroid = "previous";
declare type EnterKeyHintTypeAndroid_2 = "previous";
declare type EnterKeyHintTypeIOS = "enter";
declare type EnterKeyHintTypeIOS_2 = "enter";
export declare type EnterKeyHintTypeOptions =
  | EnterKeyHintType
  | EnterKeyHintTypeAndroid
  | EnterKeyHintTypeIOS;
declare type EnterKeyHintTypeOptions_2 =
  | EnterKeyHintType_2
  | EnterKeyHintTypeAndroid_2
  | EnterKeyHintTypeIOS_2;
declare type ErrorUtils_2 = ErrorUtilsT;
export { ErrorUtils_2 as ErrorUtils };
declare const event_2: <T>(
  argMapping: ReadonlyArray<null | undefined | Mapping>,
  config: EventConfig<T>
) => any;
declare const event_3: typeof AnimatedImplementation_MODULE_EXPORT.event;
declare type event_3 = typeof event_3;
declare type EventArgs =
  | null
  | undefined
  | {
      [$$Key$$: string]: string;
    };
declare type EventConfig<T> = {
  listener?: (($$PARAM_0$$: NativeSyntheticEvent<T>) => unknown) | undefined;
  useNativeDriver: boolean;
  platformConfig?: PlatformConfig;
};
declare type EventEmitter<T> = (
  handler: ($$PARAM_0$$: T) => void | Promise<void>
) => EventSubscription;
declare type EventHandlers = Readonly<{
  onBlur: (event: BlurEvent) => void;
  onClick: (event: GestureResponderEvent) => void;
  onFocus: (event: FocusEvent_2) => void;
  onMouseEnter?: (event: MouseEvent_2) => void;
  onMouseLeave?: (event: MouseEvent_2) => void;
  onPointerEnter?: (event: PointerEvent_2) => void;
  onPointerLeave?: (event: PointerEvent_2) => void;
  onResponderGrant: (event: GestureResponderEvent) => void | boolean;
  onResponderMove: (event: GestureResponderEvent) => void;
  onResponderRelease: (event: GestureResponderEvent) => void;
  onResponderTerminate: (event: GestureResponderEvent) => void;
  onResponderTerminationRequest: () => boolean;
  onStartShouldSetResponder: () => boolean;
}>;
declare type EventName = string | (() => string);
declare interface EventSubscription {
  remove(): void;
}
declare type ExceptionData = {
  message: string;
  originalMessage: string | undefined;
  name: string | undefined;
  componentStack: string | undefined;
  stack: Array<StackFrame>;
  id: number;
  isFatal: boolean;
  extraData?: Object;
};
export declare const experimental_LayoutConformance: (
  props: LayoutConformanceProps
) => React_2.ReactNode;
export declare type experimental_LayoutConformance =
  typeof experimental_LayoutConformance;
declare const exported: (
  props: Omit<
    ViewProps,
    keyof {
      ref?: React_2.Ref<React_2.ComponentRef<typeof View>>;
    }
  > & {
    ref?: React_2.Ref<React_2.ComponentRef<typeof View>>;
  }
) => React_2.ReactNode;
export declare type ExtendedExceptionData = ExceptionData & {
  isComponentError: boolean;
};
declare type ExtrapolateType = "extend" | "identity" | "clamp";
declare type Extras = {
  [key: string]: ExtraValue;
};
declare type ExtraValue = number | string | boolean;
declare type FetchResult = {
  NewData: "UIBackgroundFetchResultNewData";
  NoData: "UIBackgroundFetchResultNoData";
  ResultFailed: "UIBackgroundFetchResultFailed";
};
declare type FilterFunction =
  | {
      brightness: number | string;
    }
  | {
      blur: number | string;
    }
  | {
      contrast: number | string;
    }
  | {
      grayscale: number | string;
    }
  | {
      hueRotate: number | string;
    }
  | {
      invert: number | string;
    }
  | {
      opacity: number | string;
    }
  | {
      saturate: number | string;
    }
  | {
      sepia: number | string;
    }
  | {
      dropShadow: DropShadowValue | string;
    };
export declare function findNodeHandle<TElementType extends ElementType>(
  componentOrHandle: null | undefined | (ElementRef<TElementType> | number)
): null | undefined | number;
export declare class FlatList<ItemT = any> extends React_2.PureComponent<
  FlatListProps<ItemT>
> {
  scrollToEnd(
    params?:
      | null
      | undefined
      | {
          animated?: boolean | undefined;
        }
  ): void;
  scrollToIndex(params: {
    animated?: boolean | undefined;
    index: number;
    viewOffset?: number;
    viewPosition?: number;
  }): void;
  scrollToItem(params: {
    animated?: boolean | undefined;
    item: ItemT;
    viewOffset?: number;
    viewPosition?: number;
  }): void;
  scrollToOffset(params: {
    animated?: boolean | undefined;
    offset: number;
  }): void;
  recordInteraction(): void;
  flashScrollIndicators(): void;
  getScrollResponder(): null | undefined | ScrollResponderType;
  getNativeScrollRef():
    | (null | undefined | React_2.ComponentRef<typeof View>)
    | (null | undefined | React_2.ComponentRef<ScrollViewNativeComponent>);
  getScrollableNode(): any;
  setNativeProps(props: { [$$Key$$: string]: unknown }): void;
  constructor(props: FlatListProps<ItemT>);
  componentDidUpdate(prevProps: FlatListProps<ItemT>): void;
  render(): React_2.ReactNode;
}
declare type FlatListBaseProps<ItemT> = Omit<
  RequiredProps<ItemT>,
  keyof OptionalProps<ItemT> | keyof {}
> &
  Omit<OptionalProps<ItemT>, keyof {}> & {};
export declare type FlatListProps<ItemT> = Omit<
  Omit<
    VirtualizedListProps_2,
    | "data"
    | "getItem"
    | "getItemCount"
    | "getItemLayout"
    | "renderItem"
    | "keyExtractor"
  >,
  keyof FlatListBaseProps<ItemT> | keyof {}
> &
  Omit<FlatListBaseProps<ItemT>, keyof {}> & {};
declare const flatten: typeof flattenStyle_MODULE_EXPORT;
declare type flatten = typeof flatten;
declare type FlattenDepthLimiter = [void, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
declare function flattenStyle<
  TStyleProp extends ____DangerouslyImpreciseAnimatedStyleProp_Internal
>(
  style: null | undefined | TStyleProp
): null | undefined | ____FlattenStyleProp_Internal<TStyleProp>;
declare const flattenStyle_MODULE_EXPORT: typeof flattenStyle;
declare type flattenStyle_MODULE_EXPORT = typeof flattenStyle_MODULE_EXPORT;
declare type Float = number;
declare type FocusEvent_2 = NativeSyntheticEvent<TargetedEvent>;
export { FocusEvent_2 as FocusEvent };
declare type FocusEventProps = Readonly<{
  onBlur?: ((event: BlurEvent) => void) | undefined;
  onBlurCapture?: ((event: BlurEvent) => void) | undefined;
  onFocus?: ((event: FocusEvent_2) => void) | undefined;
  onFocusCapture?: ((event: FocusEvent_2) => void) | undefined;
}>;
declare function forkEvent(
  event: (null | undefined | AnimatedEvent) | (null | undefined | Function),
  listener: Function
): AnimatedEvent | Function;
declare const forkEvent_2: typeof AnimatedImplementation_MODULE_EXPORT.forkEvent;
declare type forkEvent_2 = typeof forkEvent_2;
declare class FormData_2 {
  constructor();
  append(key: string, value: FormDataValue_2): void;
  getAll(key: string): Array<FormDataValue_2>;
  getParts(): Array<FormDataPart_2>;
}
declare type FormDataPart_2 =
  | {
      string: string;
      headers: Headers_2;
    }
  | {
      uri: string;
      headers: Headers_2;
      name?: string;
      type?: string;
    };
declare type FormDataValue_2 =
  | string
  | {
      name?: string;
      type?: string;
      uri: string;
    };
export declare type GestureResponderEvent =
  ResponderSyntheticEvent<NativeTouchEvent>;
declare type GestureResponderHandlerMethods = {
  onMoveShouldSetResponder: (event: GestureResponderEvent) => boolean;
  onMoveShouldSetResponderCapture: (event: GestureResponderEvent) => boolean;
  onResponderEnd: (event: GestureResponderEvent) => void;
  onResponderGrant: (event: GestureResponderEvent) => boolean;
  onResponderMove: (event: GestureResponderEvent) => void;
  onResponderReject: (event: GestureResponderEvent) => void;
  onResponderRelease: (event: GestureResponderEvent) => void;
  onResponderStart: (event: GestureResponderEvent) => void;
  onResponderTerminate: (event: GestureResponderEvent) => void;
  onResponderTerminationRequest: (event: GestureResponderEvent) => boolean;
  onStartShouldSetResponder: (event: GestureResponderEvent) => boolean;
  onStartShouldSetResponderCapture: (event: GestureResponderEvent) => boolean;
};
export declare type GestureResponderHandlers = Readonly<{
  onMoveShouldSetResponder?:
    | ((e: GestureResponderEvent) => boolean)
    | undefined;
  onMoveShouldSetResponderCapture?:
    | ((e: GestureResponderEvent) => boolean)
    | undefined;
  onResponderGrant?: ((e: GestureResponderEvent) => void | boolean) | undefined;
  onResponderMove?: ((e: GestureResponderEvent) => void) | undefined;
  onResponderReject?: ((e: GestureResponderEvent) => void) | undefined;
  onResponderRelease?: ((e: GestureResponderEvent) => void) | undefined;
  onResponderStart?: ((e: GestureResponderEvent) => void) | undefined;
  onResponderEnd?: ((e: GestureResponderEvent) => void) | undefined;
  onResponderTerminate?: ((e: GestureResponderEvent) => void) | undefined;
  onResponderTerminationRequest?:
    | ((e: GestureResponderEvent) => boolean)
    | undefined;
  onStartShouldSetResponder?:
    | ((e: GestureResponderEvent) => boolean)
    | undefined;
  onStartShouldSetResponderCapture?:
    | ((e: GestureResponderEvent) => boolean)
    | undefined;
}>;
declare function get<T extends TurboModule>(name: string): null | undefined | T;
declare function getAppKeys(): ReadonlyArray<string>;
declare function getColorScheme(): null | undefined | ColorSchemeName;
declare function getEnforcing<T extends TurboModule>(name: string): T;
declare function getRegistry(): Registry;
declare function getRunnable(appKey: string): null | undefined | Runnable;
declare function getSectionKeys(): ReadonlyArray<string>;
declare function getSections(): Runnables;
declare type GradientValue = {
  type: "linearGradient";
  direction?: string;
  colorStops: ReadonlyArray<{
    color: ____ColorValue_Internal;
    positions?: ReadonlyArray<string>;
  }>;
};
declare const hairlineWidth: number;
declare type hairlineWidth = typeof hairlineWidth;
export declare type Handle = number;
declare type Headers_2 = {
  [name: string]: string;
};
export declare type HostComponent<Config extends {}> = (
  props: Omit<
    Config,
    keyof {
      ref: React_2.Ref<HostInstance>;
    }
  > & {
    ref: React_2.Ref<HostInstance>;
  }
) => React_2.ReactNode;
export declare type HostInstance = NativeMethods;
export declare const I18nManager: {
  getConstants: () => I18nManagerConstants;
  allowRTL: (shouldAllow: boolean) => void;
  forceRTL: (shouldForce: boolean) => void;
  swapLeftAndRightInRTL: (flipStyles: boolean) => void;
  isRTL: I18nManagerConstants["isRTL"];
  doLeftAndRightSwapInRTL: I18nManagerConstants["doLeftAndRightSwapInRTL"];
};
export declare type I18nManager = typeof I18nManager;
declare type I18nManagerConstants = {
  doLeftAndRightSwapInRTL: boolean;
  isRTL: boolean;
  localeIdentifier?: string | undefined;
};
declare interface IEventEmitter<
  TEventToArgsMap extends Readonly<Record<string, ReadonlyArray<UnsafeObject>>>
> {
  addListener<TEvent extends keyof TEventToArgsMap>(
    eventType: TEvent,
    listener: (...args: TEventToArgsMap[TEvent]) => unknown,
    context?: unknown
  ): EventSubscription;
  emit<TEvent extends keyof TEventToArgsMap>(
    eventType: TEvent,
    ...args: TEventToArgsMap[TEvent]
  ): void;
  removeAllListeners<TEvent extends keyof TEventToArgsMap>(
    eventType?: TEvent | undefined
  ): void;
  listenerCount<TEvent extends keyof TEventToArgsMap>(
    eventType: TEvent
  ): number;
}
export declare type IgnorePattern = string | RegExp;
declare interface ILogBox {
  install(): void;
  uninstall(): void;
  isInstalled(): boolean;
  ignoreLogs($$PARAM_0$$: ReadonlyArray<IgnorePattern>): void;
  ignoreAllLogs(value?: boolean): void;
  clearAllLogs(): void;
  addLog(log: LogData): void;
  addException(error: ExtendedExceptionData): void;
}
declare const Image_2: Image_3;
declare type Image_2 = typeof Image_2;
export { Image_2 as Image };
declare type Image_3 = ImageIOS | ImageAndroid;
declare type Image_4 = typeof Image_2;
declare type ImageAndroid = AbstractImageAndroid & ImageComponentStaticsAndroid;
export declare class ImageBackground extends React_2.Component<ImageBackgroundProps> {
  setNativeProps(props: {}): void;
  render(): React_2.ReactNode;
}
export declare type ImageBackgroundProps = Readonly<
  Omit<
    ImageProps,
    keyof {
      children?: React_2.ReactNode;
      style?: ViewStyleProp | undefined;
      imageStyle?: ImageStyleProp | undefined;
      imageRef?: RefSetter<ElementRef<Image_4>>;
    }
  > & {
    children?: React_2.ReactNode;
    style?: ViewStyleProp | undefined;
    imageStyle?: ImageStyleProp | undefined;
    imageRef?: RefSetter<ElementRef<Image_4>>;
  }
>;
declare type ImageComponentStaticsAndroid = Readonly<
  Omit<
    ImageComponentStaticsIOS,
    keyof {
      abortPrefetch(requestId: number): void;
    }
  > & {
    abortPrefetch(requestId: number): void;
  }
>;
declare type ImageComponentStaticsIOS = Readonly<{
  getSize(uri: string): Promise<ImageSize>;
  getSize(
    uri: string,
    success: (width: number, height: number) => void,
    failure?: (error: unknown) => void
  ): void;
  getSizeWithHeaders(
    uri: string,
    headers: {
      [$$Key$$: string]: string;
    }
  ): Promise<ImageSize>;
  getSizeWithHeaders(
    uri: string,
    headers: {
      [$$Key$$: string]: string;
    },
    success: (width: number, height: number) => void,
    failure?: (error: unknown) => void
  ): void;
  prefetch(url: string): Promise<boolean>;
  prefetchWithMetadata(
    url: string,
    queryRootName: string,
    rootTag?: RootTag | undefined
  ): Promise<boolean>;
  queryCache(urls: Array<string>): Promise<{
    [url: string]: "memory" | "disk" | "disk/memory";
  }>;
  resolveAssetSource(source: ImageSource): ImageResolvedAssetSource | undefined;
}>;
export declare type ImageErrorEvent = NativeSyntheticEvent<
  Readonly<ImageErrorEventData>
>;
declare type ImageErrorEventData = {
  error: string;
};
declare type ImageIOS = AbstractImageIOS & ImageComponentStaticsIOS;
export declare type ImageLoadEvent = NativeSyntheticEvent<
  Readonly<ImageLoadEventData>
>;
declare type ImageLoadEventData = {
  source: {
    height: number;
    width: number;
    uri: string;
  };
};
declare type ImageProgressEventDataIOS = {
  loaded: number;
  total: number;
};
export declare type ImageProgressEventIOS = NativeSyntheticEvent<
  Readonly<ImageProgressEventDataIOS>
>;
export declare type ImageProps = Readonly<
  Omit<
    ImagePropsIOS,
    | keyof ImagePropsAndroid
    | keyof ImagePropsBase
    | keyof {
        style?: ImageStyleProp | undefined;
      }
  > &
    Omit<
      ImagePropsAndroid,
      | keyof ImagePropsBase
      | keyof {
          style?: ImageStyleProp | undefined;
        }
    > &
    Omit<
      ImagePropsBase,
      keyof {
        style?: ImageStyleProp | undefined;
      }
    > & {
      style?: ImageStyleProp | undefined;
    }
>;
export declare type ImagePropsAndroid = Readonly<{
  loadingIndicatorSource?: (number | Readonly<ImageURISource>) | undefined;
  progressiveRenderingEnabled?: boolean | undefined;
  fadeDuration?: number | undefined;
  resizeMethod?: ("auto" | "resize" | "scale" | "none") | undefined;
  resizeMultiplier?: number | undefined;
}>;
export declare type ImagePropsBase = Readonly<
  Omit<
    Pick<
      ViewProps,
      Exclude<
        keyof ViewProps,
        keyof Readonly<{
          style: ViewStyleProp | undefined;
        }>
      >
    >,
    keyof {
      accessible?: boolean | undefined;
      internal_analyticTag?: string | undefined;
      accessibilityLabel?: string | undefined;
      "aria-label"?: string | undefined;
      "aria-labelledby"?: string | undefined;
      alt?: string | undefined;
      blurRadius?: number | undefined;
      capInsets?: EdgeInsetsProp | undefined;
      crossOrigin?: ("anonymous" | "use-credentials") | undefined;
      height?: number;
      width?: number;
      onError?: ((event: ImageErrorEvent) => void) | undefined;
      onLayout?: ((event: LayoutChangeEvent) => unknown) | undefined;
      onLoad?: ((event: ImageLoadEvent) => void) | undefined;
      onLoadEnd?: (() => void) | undefined;
      onLoadStart?: (() => void) | undefined;
      source?: ImageSource | undefined;
      referrerPolicy?:
        | (
            | "no-referrer"
            | "no-referrer-when-downgrade"
            | "origin"
            | "origin-when-cross-origin"
            | "same-origin"
            | "strict-origin"
            | "strict-origin-when-cross-origin"
            | "unsafe-url"
          )
        | undefined;
      resizeMode?: ImageResizeMode | undefined;
      testID?: string | undefined;
      tintColor?: ColorValue;
      src?: string | undefined;
      srcSet?: string | undefined;
      children?: never;
    }
  > & {
    accessible?: boolean | undefined;
    internal_analyticTag?: string | undefined;
    accessibilityLabel?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    alt?: string | undefined;
    blurRadius?: number | undefined;
    capInsets?: EdgeInsetsProp | undefined;
    crossOrigin?: ("anonymous" | "use-credentials") | undefined;
    height?: number;
    width?: number;
    onError?: ((event: ImageErrorEvent) => void) | undefined;
    onLayout?: ((event: LayoutChangeEvent) => unknown) | undefined;
    onLoad?: ((event: ImageLoadEvent) => void) | undefined;
    onLoadEnd?: (() => void) | undefined;
    onLoadStart?: (() => void) | undefined;
    source?: ImageSource | undefined;
    referrerPolicy?:
      | (
          | "no-referrer"
          | "no-referrer-when-downgrade"
          | "origin"
          | "origin-when-cross-origin"
          | "same-origin"
          | "strict-origin"
          | "strict-origin-when-cross-origin"
          | "unsafe-url"
        )
      | undefined;
    resizeMode?: ImageResizeMode | undefined;
    testID?: string | undefined;
    tintColor?: ColorValue;
    src?: string | undefined;
    srcSet?: string | undefined;
    children?: never;
  }
>;
export declare type ImagePropsIOS = Readonly<{
  defaultSource?: ImageSource | undefined;
  onPartialLoad?: (() => void) | undefined;
  onProgress?: ((event: ImageProgressEventIOS) => void) | undefined;
}>;
declare type ImageResizeMode =
  | "center"
  | "contain"
  | "cover"
  | "repeat"
  | "stretch"
  | "none";
export declare type ImageResolvedAssetSource = ResolvedAssetSource;
export declare type ImageSize = {
  width: number;
  height: number;
};
export declare type ImageSource =
  | number
  | ImageURISource
  | ReadonlyArray<ImageURISource>;
export declare type ImageSourcePropType = ImageSource;
export declare type ImageStyle = ____ImageStyle_Internal;
declare type ImageStyleProp = ____ImageStyleProp_Internal;
export declare interface ImageURISource {
  readonly uri?: string | undefined;
  readonly bundle?: string | undefined;
  readonly method?: string | undefined;
  readonly headers?:
    | {
        [$$Key$$: string]: string;
      }
    | undefined;
  readonly body?: string | undefined;
  readonly cache?:
    | ("default" | "reload" | "force-cache" | "only-if-cached")
    | undefined;
  readonly width?: number | undefined;
  readonly height?: number | undefined;
  readonly scale?: number | undefined;
}
declare type ImageViewNativeComponent =
  typeof ImageViewNativeComponent_MODULE_EXPORT;
declare const ImageViewNativeComponent_2: HostComponent<Props>;
declare const ImageViewNativeComponent_MODULE_EXPORT: typeof ImageViewNativeComponent_2;
declare type ImageViewNativeComponent_MODULE_EXPORT =
  typeof ImageViewNativeComponent_MODULE_EXPORT;
declare type IndicatorSize = number | "small" | "large";
declare type InnerViewInstance = React_2.ComponentRef<View_3>;
export declare const InputAccessoryView: typeof InputAccessoryView_2;
export declare type InputAccessoryView = typeof InputAccessoryView;
declare const InputAccessoryView_2: React_2.ComponentType<InputAccessoryViewProps>;
export declare type InputAccessoryViewProps = Readonly<{
  readonly children: React_2.ReactNode;
  nativeID?: string | undefined;
  style?: ViewStyleProp | undefined;
  backgroundColor?: ColorValue | undefined;
}>;
export declare type InputModeOptions =
  | "none"
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url";
declare type InputModeOptions_2 =
  | "none"
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url";
declare type InputValue =
  | null
  | undefined
  | (RgbaValue | RgbaAnimatedValue | ColorValue);
declare type Instance = React_2.ComponentRef<typeof ScrollView>;
declare type Int32 = number;
export declare const InteractionManager: typeof InteractionManager_2;
export declare type InteractionManager = typeof InteractionManager;
declare const InteractionManager_2: typeof InteractionManagerImpl;
declare const InteractionManagerImpl: {
  Events: {
    interactionStart: "interactionStart";
    interactionComplete: "interactionComplete";
  };
  runAfterInteractions(task: null | undefined | Task_2): {
    then: <U>(
      onFulfill?:
        | (($$PARAM_0$$: void) => (Promise<U> | U) | undefined)
        | undefined,
      onReject?: ((error: unknown) => (Promise<U> | U) | undefined) | undefined
    ) => Promise<U>;
    cancel: () => void;
  };
  createInteractionHandle(): Handle;
  clearInteractionHandle(handle: Handle): void;
  addListener: (
    eventType: string,
    listener: (...args: any) => unknown,
    context: unknown
  ) => EventSubscription;
  setDeadline(deadline: number): void;
};
declare type InternalTextInput = (
  props: Omit<
    TextInputProps_2,
    keyof {
      ref?: React_2.Ref<TextInputInstance>;
    }
  > & {
    ref?: React_2.Ref<TextInputInstance>;
  }
) => React_2.ReactNode;
declare type InterpolationConfigType<OutputT extends number | string> =
  Readonly<
    Omit<
      AnimatedNodeConfig,
      keyof {
        inputRange: ReadonlyArray<number>;
        outputRange: ReadonlyArray<OutputT>;
        easing?: (input: number) => number;
        extrapolate?: ExtrapolateType;
        extrapolateLeft?: ExtrapolateType;
        extrapolateRight?: ExtrapolateType;
      }
    > & {
      inputRange: ReadonlyArray<number>;
      outputRange: ReadonlyArray<OutputT>;
      easing?: (input: number) => number;
      extrapolate?: ExtrapolateType;
      extrapolateLeft?: ExtrapolateType;
      extrapolateRight?: ExtrapolateType;
    }
  >;
export declare type IOSKeyboardEvent = Readonly<
  Omit<
    BaseKeyboardEvent,
    keyof {
      startCoordinates: KeyboardMetrics;
      isEventFromThisApp: boolean;
    }
  > & {
    startCoordinates: KeyboardMetrics;
    isEventFromThisApp: boolean;
  }
>;
declare type IOSPlatform = {
  OS: "ios";
  get Version(): string;
  get constants(): {
    forceTouchAvailable: boolean;
    interfaceIdiom: string;
    isTesting: boolean;
    isDisableAnimations?: boolean;
    osVersion: string;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: string | undefined;
    };
    systemName: string;
    isMacCatalyst?: boolean;
  };
  get isPad(): boolean;
  get isTV(): boolean;
  get isVision(): boolean;
  get isTesting(): boolean;
  get isDisableAnimations(): boolean;
  get isMacCatalyst(): boolean;
  select: <T>(spec: PlatformSelectSpec<T>) => T;
};
declare type IOSProps = Readonly<{
  hasTVPreferredFocus?: boolean | undefined;
}>;
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
  getExtras(): Readonly<{
    [key: string]: ExtraValue | undefined;
  }>;
  getPoints(): Readonly<{
    [key: string]: number | undefined;
  }>;
  getPointExtras(): Readonly<{
    [key: string]: Extras | undefined;
  }>;
  getTimespans(): Readonly<{
    [key: string]: Timespan | undefined;
  }>;
  hasTimespan(key: string): boolean;
  isClosed(): boolean;
  logEverything(): void;
  markPoint(key: string, timestamp?: number, extras?: Extras): void;
  removeExtra(key: string): ExtraValue | undefined;
  setExtra(key: string, value: ExtraValue): void;
  startTimespan(key: string, timestamp?: number, extras?: Extras): void;
  stopTimespan(key: string, timestamp?: number, extras?: Extras): void;
}
declare function isEnabled(): boolean;
export declare class Keyboard {
  constructor();
  addListener<K extends keyof KeyboardEventDefinitions>(
    eventType: K,
    listener: (...$$REST$$: KeyboardEventDefinitions[K]) => unknown,
    context?: unknown
  ): EventSubscription;
  removeAllListeners<K extends keyof KeyboardEventDefinitions>(
    eventType: null | undefined | K
  ): void;
  dismiss(): void;
  isVisible(): boolean;
  metrics(): null | undefined | KeyboardMetrics;
  scheduleLayoutAnimation(event: KeyboardEvent_2): void;
}
export declare class KeyboardAvoidingView extends React_2.Component<
  KeyboardAvoidingViewProps,
  State_3
> {
  viewRef: {
    current: React_2.ComponentRef<typeof View> | null;
  };
  constructor(props: KeyboardAvoidingViewProps);
  componentDidUpdate(_: KeyboardAvoidingViewProps, prevState: State_3): void;
  componentDidMount(): void;
  componentWillUnmount(): void;
  render(): React_2.ReactNode;
}
export declare type KeyboardAvoidingViewProps = Readonly<
  Omit<
    ViewProps,
    keyof {
      behavior?: ("height" | "position" | "padding") | undefined;
      contentContainerStyle?: ViewStyleProp | undefined;
      enabled?: boolean | undefined;
      keyboardVerticalOffset?: number;
    }
  > & {
    behavior?: ("height" | "position" | "padding") | undefined;
    contentContainerStyle?: ViewStyleProp | undefined;
    enabled?: boolean | undefined;
    keyboardVerticalOffset?: number;
  }
>;
declare type KeyboardEvent_2 = AndroidKeyboardEvent | IOSKeyboardEvent;
export { KeyboardEvent_2 as KeyboardEvent };
declare type KeyboardEventDefinitions = {
  keyboardWillShow: [KeyboardEvent_2];
  keyboardDidShow: [KeyboardEvent_2];
  keyboardWillHide: [KeyboardEvent_2];
  keyboardDidHide: [KeyboardEvent_2];
  keyboardWillChangeFrame: [KeyboardEvent_2];
  keyboardDidChangeFrame: [KeyboardEvent_2];
};
export declare type KeyboardEventEasing =
  | "easeIn"
  | "easeInEaseOut"
  | "easeOut"
  | "linear"
  | "keyboard";
export declare type KeyboardEventName = keyof KeyboardEventDefinitions;
export declare type KeyboardMetrics = Readonly<{
  screenX: number;
  screenY: number;
  width: number;
  height: number;
}>;
declare type KeyboardType =
  | "default"
  | "email-address"
  | "numeric"
  | "phone-pad"
  | "number-pad"
  | "decimal-pad"
  | "url";
declare type KeyboardType_2 =
  | "default"
  | "email-address"
  | "numeric"
  | "phone-pad"
  | "number-pad"
  | "decimal-pad"
  | "url";
declare type KeyboardTypeAndroid = "visible-password";
declare type KeyboardTypeAndroid_2 = "visible-password";
declare type KeyboardTypeIOS =
  | "ascii-capable"
  | "numbers-and-punctuation"
  | "name-phone-pad"
  | "twitter"
  | "web-search"
  | "ascii-capable-number-pad";
declare type KeyboardTypeIOS_2 =
  | "ascii-capable"
  | "numbers-and-punctuation"
  | "name-phone-pad"
  | "twitter"
  | "web-search"
  | "ascii-capable-number-pad";
export declare type KeyboardTypeOptions =
  | KeyboardType
  | KeyboardTypeIOS
  | KeyboardTypeAndroid;
declare type KeyboardTypeOptions_2 =
  | KeyboardType_2
  | KeyboardTypeIOS_2
  | KeyboardTypeAndroid_2;
export declare const LayoutAnimation: typeof LayoutAnimation_2;
export declare type LayoutAnimation = typeof LayoutAnimation;
declare const LayoutAnimation_2: {
  configureNext: typeof configureNext;
  create: typeof create;
  Types: LayoutAnimationTypes;
  Properties: LayoutAnimationProperties;
  checkConfig(...args: Array<unknown>): void;
  Presets: typeof Presets;
  easeInEaseOut: (onAnimationDidEnd?: OnAnimationDidEndCallback) => void;
  linear: (onAnimationDidEnd?: OnAnimationDidEndCallback) => void;
  spring: (onAnimationDidEnd?: OnAnimationDidEndCallback) => void;
  setEnabled: typeof setEnabled;
};
export declare type LayoutAnimationAnim = Readonly<{
  duration?: number;
  delay?: number;
  springDamping?: number;
  initialVelocity?: number;
  type?: LayoutAnimationType;
  property?: LayoutAnimationProperty;
}>;
export declare type LayoutAnimationConfig = LayoutAnimationConfig_2;
declare type LayoutAnimationConfig_2 = Readonly<{
  duration: number;
  create?: LayoutAnimationAnim;
  update?: LayoutAnimationAnim;
  delete?: LayoutAnimationAnim;
}>;
export declare type LayoutAnimationProperties = Readonly<{
  [prop in LayoutAnimationProperty]: prop;
}>;
export declare type LayoutAnimationProperty =
  | "opacity"
  | "scaleX"
  | "scaleY"
  | "scaleXY";
export declare type LayoutAnimationType =
  | "spring"
  | "linear"
  | "easeInEaseOut"
  | "easeIn"
  | "easeOut"
  | "keyboard";
export declare type LayoutAnimationTypes = Readonly<{
  [type in LayoutAnimationType]: type;
}>;
export declare type LayoutChangeEvent = NativeSyntheticEvent<
  Readonly<{
    layout: LayoutRectangle;
  }>
>;
export declare type LayoutConformanceProps = Readonly<{
  mode: "strict" | "compatibility";
  children: React_2.ReactNode;
}>;
export declare type LayoutRectangle = Readonly<{
  x: number;
  y: number;
  width: number;
  height: number;
}>;
export declare const Linking: typeof Linking_2;
export declare type Linking = typeof Linking;
declare const Linking_2: LinkingImpl;
declare type LinkingEventDefinitions = {
  url: [
    {
      url: string;
    }
  ];
};
declare class LinkingImpl extends NativeEventEmitter<LinkingEventDefinitions> {
  constructor();
  addEventListener<K extends keyof LinkingEventDefinitions>(
    eventType: K,
    listener: (...$$REST$$: LinkingEventDefinitions[K]) => unknown
  ): EventSubscription;
  openURL(url: string): Promise<void>;
  canOpenURL(url: string): Promise<boolean>;
  openSettings(): Promise<void>;
  getInitialURL(): Promise<null | undefined | string>;
  sendIntent(
    action: string,
    extras?: Array<{
      key: string;
      value: string | number | boolean;
    }>
  ): Promise<void>;
}
export { ListRenderItem };
export { ListRenderItemInfo };
export declare const LogBox: ILogBox;
export declare type LogBox = typeof LogBox;
export declare type LogData = Readonly<{
  level: LogLevel;
  message: Message;
  category: Category;
  componentStack: ComponentStack;
  componentStackType: ComponentStackType | null;
  stack?: string;
}>;
declare type LogLevel = "warn" | "error" | "fatal" | "syntax";
declare const loop: (
  animation: CompositeAnimation,
  $$PARAM_1$$: LoopAnimationConfig
) => CompositeAnimation;
declare const loop_2: typeof AnimatedImplementation_MODULE_EXPORT.loop;
declare type loop_2 = typeof loop_2;
declare type LoopAnimationConfig = {
  iterations: number;
  resetBeforeIteration?: boolean;
};
declare type MacOSPlatform = {
  OS: "macos";
  get Version(): string;
  get constants(): {
    isTesting: boolean;
    osVersion: string;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: number | undefined;
    };
    systemName: string;
  };
  get isTV(): boolean;
  get isVision(): boolean;
  get isTesting(): boolean;
  get isDisableAnimations(): boolean;
  select: <T>(spec: PlatformSelectSpec<T>) => T;
};
declare type Mapping =
  | {
      [key: string]: Mapping;
    }
  | AnimatedValue
  | AnimatedValueXY;
export declare type MeasureInWindowOnSuccessCallback = (
  x: number,
  y: number,
  width: number,
  height: number
) => void;
declare type MeasureInWindowOnSuccessCallback_2 = (
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
declare type MeasureLayoutOnSuccessCallback_2 = (
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
declare type MeasureOnSuccessCallback_2 = (
  x: number,
  y: number,
  width: number,
  height: number,
  pageX: number,
  pageY: number
) => void;
declare type Message = Readonly<{
  content: string;
  substitutions: ReadonlyArray<
    Readonly<{
      length: number;
      offset: number;
    }>
  >;
}>;
export declare const Modal: typeof Wrapper_2;
export declare type Modal = typeof Modal;
export declare type ModalBaseProps = {
  animated?: boolean;
  animationType?: ("none" | "slide" | "fade") | undefined;
  transparent?: boolean | undefined;
  visible?: boolean | undefined;
  onRequestClose?: DirectEventHandler<null> | undefined;
  onShow?: DirectEventHandler<null> | undefined;
  backdropColor?: ColorValue;
  modalRef?: React_2.Ref<PublicModalInstance>;
};
export declare type ModalProps = Omit<
  ModalBaseProps,
  keyof ModalPropsIOS | keyof ModalPropsAndroid | keyof ViewProps | keyof {}
> &
  Omit<ModalPropsIOS, keyof ModalPropsAndroid | keyof ViewProps | keyof {}> &
  Omit<ModalPropsAndroid, keyof ViewProps | keyof {}> &
  Omit<ViewProps, keyof {}> & {};
export declare type ModalPropsAndroid = {
  hardwareAccelerated?: boolean | undefined;
  statusBarTranslucent?: boolean | undefined;
  navigationBarTranslucent?: boolean | undefined;
};
export declare type ModalPropsIOS = {
  presentationStyle?:
    | ("fullScreen" | "pageSheet" | "formSheet" | "overFullScreen")
    | undefined;
  supportedOrientations?:
    | ReadonlyArray<
        | "portrait"
        | "portrait-upside-down"
        | "landscape"
        | "landscape-left"
        | "landscape-right"
      >
    | undefined;
  onDismiss?: (() => void) | undefined;
  onOrientationChange?: DirectEventHandler<OrientationChangeEvent> | undefined;
};
declare type ModalRefProps = Readonly<{
  ref?: React_2.Ref<PublicModalInstance>;
}>;
declare type Module = {};
declare const modulo: (a: AnimatedNode, modulus: number) => AnimatedModulo;
declare const modulo_2: typeof AnimatedImplementation_MODULE_EXPORT.modulo;
declare type modulo_2 = typeof modulo_2;
declare type MouseEvent_2 = NativeSyntheticEvent<
  Readonly<{
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    timestamp: number;
  }>
>;
export { MouseEvent_2 as MouseEvent };
declare type MouseEventProps = Readonly<{
  onMouseEnter?: ((event: MouseEvent_2) => void) | undefined;
  onMouseLeave?: ((event: MouseEvent_2) => void) | undefined;
}>;
declare const multiply: (
  a: AnimatedNode | number,
  b: AnimatedNode | number
) => AnimatedMultiplication;
declare const multiply_2: typeof AnimatedImplementation_MODULE_EXPORT.multiply;
declare type multiply_2 = typeof multiply_2;
export declare const NativeAppEventEmitter: typeof RCTNativeAppEventEmitter;
export declare type NativeAppEventEmitter = typeof NativeAppEventEmitter;
declare type NativeColorValue = symbol & {
  __NativeColorValue__: string;
};
declare type NativeComponentType<T> = HostComponent<T>;
declare const NativeDeviceInfo: {
  getConstants(): DeviceInfoConstants;
};
declare const NativeDeviceInfo_MODULE_EXPORT: typeof NativeDeviceInfo_MODULE_EXPORT_2;
declare type NativeDeviceInfo_MODULE_EXPORT =
  typeof NativeDeviceInfo_MODULE_EXPORT;
declare const NativeDeviceInfo_MODULE_EXPORT_2: typeof NativeDeviceInfo;
declare type NativeDeviceInfo_MODULE_EXPORT_2 =
  typeof NativeDeviceInfo_MODULE_EXPORT_2;
export declare const NativeDialogManagerAndroid: typeof NativeDialogManagerAndroid_MODULE_EXPORT;
export declare type NativeDialogManagerAndroid =
  typeof NativeDialogManagerAndroid;
declare const NativeDialogManagerAndroid_MODULE_EXPORT: null | undefined | Spec;
declare type NativeDialogManagerAndroid_MODULE_EXPORT =
  typeof NativeDialogManagerAndroid_MODULE_EXPORT;
export declare class NativeEventEmitter<
  TEventToArgsMap extends Readonly<
    Record<string, ReadonlyArray<UnsafeObject_2>>
  > = Readonly<Record<string, ReadonlyArray<UnsafeObject_2>>>
> implements IEventEmitter<TEventToArgsMap>
{
  constructor(nativeModule: null | undefined | NativeModule);
  addListener<TEvent extends keyof TEventToArgsMap>(
    eventType: TEvent,
    listener: (...args: TEventToArgsMap[TEvent]) => unknown,
    context?: unknown
  ): EventSubscription;
  emit<TEvent extends keyof TEventToArgsMap>(
    eventType: TEvent,
    ...args: TEventToArgsMap[TEvent]
  ): void;
  removeAllListeners<TEvent extends keyof TEventToArgsMap>(
    eventType?: null | undefined | TEvent
  ): void;
  listenerCount<TEvent extends keyof TEventToArgsMap>(
    eventType: TEvent
  ): number;
}
export declare type NativeEventSubscription = EventSubscription;
export declare interface NativeMethods {
  blur(): void;
  focus(): void;
  measure(callback: MeasureOnSuccessCallback): void;
  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
  measureLayout(
    relativeToNativeNode: number | HostInstance,
    onSuccess: MeasureLayoutOnSuccessCallback,
    onFail?: () => void
  ): void;
  setNativeProps(nativeProps: {}): void;
}
declare interface NativeModule {
  addListener(eventType: string): void;
  removeListeners(count: number): void;
}
export declare const NativeModules: typeof NativeModules_2;
export declare type NativeModules = typeof NativeModules;
declare let NativeModules_2: {
  [moduleName: string]: any;
};
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
declare type NativeProps = Readonly<
  Omit<
    ViewProps,
    keyof {
      resizeMode?: ImageResizeMode | undefined;
      src?:
        | ReadonlyArray<
            | Readonly<{
                uri?: string | undefined;
              }>
            | undefined
          >
        | undefined;
      tintColor?: ColorValue | undefined;
      headers?:
        | {
            [$$Key$$: string]: string;
          }
        | undefined;
    }
  > & {
    resizeMode?: ImageResizeMode | undefined;
    src?:
      | ReadonlyArray<
          | Readonly<{
              uri?: string | undefined;
            }>
          | undefined
        >
      | undefined;
    tintColor?: ColorValue | undefined;
    headers?:
      | {
          [$$Key$$: string]: string;
        }
      | undefined;
  }
>;
declare type NativeProps_2 = Readonly<
  Omit<
    ViewProps,
    keyof {
      styleAttr?: string;
      typeAttr?: string;
      indeterminate: boolean;
      progress?: WithDefault<Double, 0>;
      animating?: WithDefault<boolean, true>;
      color?: ColorValue | undefined;
      testID?: WithDefault<string, "">;
    }
  > & {
    styleAttr?: string;
    typeAttr?: string;
    indeterminate: boolean;
    progress?: WithDefault<Double, 0>;
    animating?: WithDefault<boolean, true>;
    color?: ColorValue | undefined;
    testID?: WithDefault<string, "">;
  }
>;
declare type NativeProps_3 = Readonly<
  Omit<
    ViewProps,
    keyof {
      disabled?: WithDefault<boolean, false>;
      value?: WithDefault<boolean, false>;
      tintColor?: ColorValue | undefined;
      onTintColor?: ColorValue | undefined;
      thumbTintColor?: ColorValue | undefined;
      thumbColor?: ColorValue | undefined;
      trackColorForFalse?: ColorValue | undefined;
      trackColorForTrue?: ColorValue | undefined;
      onChange?: BubblingEventHandler<SwitchChangeEvent_2> | undefined;
    }
  > & {
    disabled?: WithDefault<boolean, false>;
    value?: WithDefault<boolean, false>;
    tintColor?: ColorValue | undefined;
    onTintColor?: ColorValue | undefined;
    thumbTintColor?: ColorValue | undefined;
    thumbColor?: ColorValue | undefined;
    trackColorForFalse?: ColorValue | undefined;
    trackColorForTrue?: ColorValue | undefined;
    onChange?: BubblingEventHandler<SwitchChangeEvent_2> | undefined;
  }
>;
declare type NativeProps_4 = Readonly<
  Omit<
    ViewProps,
    keyof {
      disabled?: WithDefault<boolean, false>;
      enabled?: WithDefault<boolean, true>;
      thumbColor?: ColorValue | undefined;
      trackColorForFalse?: ColorValue | undefined;
      trackColorForTrue?: ColorValue | undefined;
      value?: WithDefault<boolean, false>;
      on?: WithDefault<boolean, false>;
      thumbTintColor?: ColorValue | undefined;
      trackTintColor?: ColorValue | undefined;
      onChange?: BubblingEventHandler<SwitchChangeEvent_3>;
    }
  > & {
    disabled?: WithDefault<boolean, false>;
    enabled?: WithDefault<boolean, true>;
    thumbColor?: ColorValue | undefined;
    trackColorForFalse?: ColorValue | undefined;
    trackColorForTrue?: ColorValue | undefined;
    value?: WithDefault<boolean, false>;
    on?: WithDefault<boolean, false>;
    thumbTintColor?: ColorValue | undefined;
    trackTintColor?: ColorValue | undefined;
    onChange?: BubblingEventHandler<SwitchChangeEvent_3>;
  }
>;
declare type NativeResponseType = "base64" | "blob" | "text";
export declare type NativeScrollEvent = Readonly<{
  contentInset: NativeScrollRectangle;
  contentOffset: NativeScrollPoint;
  contentSize: NativeScrollSize;
  layoutMeasurement: NativeScrollSize;
  velocity?: NativeScrollVelocity;
  zoomScale?: number;
  responderIgnoreScroll?: boolean;
  targetContentOffset?: NativeScrollPoint;
}>;
declare type NativeScrollPoint = Readonly<{
  y: number;
  x: number;
}>;
declare type NativeScrollRectangle = Readonly<{
  bottom: number;
  left: number;
  right: number;
  top: number;
}>;
declare type NativeScrollSize = Readonly<{
  height: number;
  width: number;
}>;
declare type NativeScrollVelocity = Readonly<{
  y: number;
  x: number;
}>;
export declare type NativeSyntheticEvent<T> = Readonly<{
  bubbles: boolean | undefined;
  cancelable: boolean | undefined;
  currentTarget: number | HostInstance;
  defaultPrevented: boolean | undefined;
  dispatchConfig: Readonly<{
    registrationName: string;
  }>;
  eventPhase: number | undefined;
  preventDefault: () => void;
  isDefaultPrevented: () => boolean;
  stopPropagation: () => void;
  isPropagationStopped: () => boolean;
  isTrusted: boolean | undefined;
  nativeEvent: T;
  persist: () => void;
  target: (number | undefined) | HostInstance;
  timeStamp: number;
  type: string | undefined;
}>;
declare const NativeText: HostComponent<NativeTextProps>;
declare type NativeText = typeof NativeText;
declare type NativeTextProps = Readonly<
  Omit<
    TextProps,
    keyof {
      isHighlighted?: boolean | undefined;
      selectionColor?: ProcessedColorValue | undefined;
      onClick?: ((event: GestureResponderEvent) => unknown) | undefined;
      isPressable?: boolean | undefined;
    }
  > & {
    isHighlighted?: boolean | undefined;
    selectionColor?: ProcessedColorValue | undefined;
    onClick?: ((event: GestureResponderEvent) => unknown) | undefined;
    isPressable?: boolean | undefined;
  }
>;
export declare type NativeTouchEvent = Readonly<{
  changedTouches: ReadonlyArray<NativeTouchEvent>;
  force?: number;
  identifier: number;
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
  target: number | undefined;
  timestamp: number;
  touches: ReadonlyArray<NativeTouchEvent>;
}>;
declare type NativeType = HostComponent<NativeProps_4>;
export declare interface NativeUIEvent {
  readonly detail: number;
}
declare const NativeVirtualText: HostComponent<NativeTextProps>;
declare type NativeVirtualText = typeof NativeVirtualText;
export declare const Networking: typeof RCTNetworking;
export declare type Networking = typeof Networking;
declare type NonAnimatedProps =
  | "ref"
  | "innerViewRef"
  | "scrollViewRef"
  | "testID"
  | "disabled"
  | "accessibilityLabel";
declare type Nullable = void | null;
declare type OnAnimationDidEndCallback = () => void;
declare type OnAnimationDidFailCallback = () => void;
declare type OptionalPlatformSelectSpec<T> = { [_key in PlatformOSType]?: T };
declare type OptionalProps<ItemT> = {
  renderItem?: ListRenderItem<ItemT> | undefined;
  columnWrapperStyle?: ViewStyleProp;
  extraData?: any;
  getItemLayout?: (
    data: Readonly<ArrayLike<ItemT>> | undefined,
    index: number
  ) => {
    length: number;
    offset: number;
    index: number;
  };
  horizontal?: boolean | undefined;
  initialNumToRender?: number | undefined;
  initialScrollIndex?: number | undefined;
  inverted?: boolean | undefined;
  keyExtractor?: ((item: ItemT, index: number) => string) | undefined;
  numColumns?: number;
  removeClippedSubviews?: boolean;
  fadingEdgeLength?: number | undefined;
  strictMode?: boolean;
};
declare type OptionalProps_2<ItemT, SectionT = DefaultSectionT> = {
  renderItem?: SectionListRenderItem<ItemT, SectionT>;
  extraData?: any;
  initialNumToRender?: number | undefined;
  inverted?: boolean | undefined;
  keyExtractor?: ((item: ItemT, index: number) => string) | undefined;
  onEndReached?: ((info: { distanceFromEnd: number }) => void) | undefined;
  removeClippedSubviews?: boolean;
};
declare type Options = Readonly<{
  interfaceOnly?: boolean;
  paperComponentName?: string;
  paperComponentNameDeprecated?: string;
  excludedPlatforms?: ReadonlyArray<"iOS" | "android">;
}>;
declare type Options_2<T = string> = Readonly<{
  supportedCommands: ReadonlyArray<T>;
}>;
declare type OrientationChangeEvent = Readonly<{
  orientation: "portrait" | "landscape";
}>;
export declare const PanResponder: typeof PanResponder_2;
export declare type PanResponder = typeof PanResponder;
declare const PanResponder_2: {
  create(config: PanResponderCallbacks): {
    getInteractionHandle: () => number | undefined;
    panHandlers: GestureResponderHandlerMethods;
  };
};
export declare type PanResponderCallbacks = Readonly<{
  onMoveShouldSetPanResponder?: ActiveCallback | undefined;
  onMoveShouldSetPanResponderCapture?: ActiveCallback | undefined;
  onStartShouldSetPanResponder?: ActiveCallback | undefined;
  onStartShouldSetPanResponderCapture?: ActiveCallback | undefined;
  onPanResponderGrant?: (PassiveCallback | ActiveCallback) | undefined;
  onPanResponderReject?: PassiveCallback | undefined;
  onPanResponderStart?: PassiveCallback | undefined;
  onPanResponderEnd?: PassiveCallback | undefined;
  onPanResponderRelease?: PassiveCallback | undefined;
  onPanResponderMove?: PassiveCallback | undefined;
  onPanResponderTerminate?: PassiveCallback | undefined;
  onPanResponderTerminationRequest?: ActiveCallback | undefined;
  onShouldBlockNativeResponder?: ActiveCallback | undefined;
}>;
export declare type PanResponderGestureState = {
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
};
export declare type PanResponderInstance = ReturnType<
  (typeof PanResponder_2)["create"]
>;
declare const parallel: (
  animations: Array<CompositeAnimation>,
  config?: null | undefined | ParallelConfig
) => CompositeAnimation;
declare const parallel_2: typeof AnimatedImplementation_MODULE_EXPORT.parallel;
declare type parallel_2 = typeof parallel_2;
declare type ParallelConfig = {
  stopTogether?: boolean;
};
declare type PassiveCallback = (
  event: GestureResponderEvent,
  gestureState: PanResponderGestureState
) => unknown;
declare type PassThroughProps = Readonly<{
  passthroughAnimatedPropExplicitValues?: React_2.JSX.LibraryManagedAttributes<
    typeof View,
    React_2.ComponentProps<typeof View>
  > | null;
}>;
declare type PasswordRules = string;
declare type PasswordRules_2 = string;
export declare type Permission = PermissionsType[keyof PermissionsType];
export declare const PermissionsAndroid: typeof PermissionsAndroidInstance;
export declare type PermissionsAndroid = typeof PermissionsAndroid;
declare class PermissionsAndroid_2 {
  PERMISSIONS: PermissionsType;
  RESULTS: Readonly<{
    DENIED: "denied";
    GRANTED: "granted";
    NEVER_ASK_AGAIN: "never_ask_again";
  }>;
  checkPermission(permission: Permission): Promise<boolean>;
  check(permission: Permission): Promise<boolean>;
  requestPermission(
    permission: Permission,
    rationale?: Rationale
  ): Promise<boolean>;
  request(
    permission: Permission,
    rationale?: Rationale
  ): Promise<PermissionStatus_2>;
  requestMultiple(
    permissions: Array<Permission>
  ): Promise<{ [permission in Permission]: PermissionStatus_2 }>;
}
declare const PermissionsAndroidInstance: PermissionsAndroid_2;
declare type PermissionStatus_2 = "granted" | "denied" | "never_ask_again";
export { PermissionStatus_2 as PermissionStatus };
declare type PermissionsType = Readonly<{
  READ_CALENDAR: "android.permission.READ_CALENDAR";
  WRITE_CALENDAR: "android.permission.WRITE_CALENDAR";
  CAMERA: "android.permission.CAMERA";
  READ_CONTACTS: "android.permission.READ_CONTACTS";
  WRITE_CONTACTS: "android.permission.WRITE_CONTACTS";
  GET_ACCOUNTS: "android.permission.GET_ACCOUNTS";
  ACCESS_FINE_LOCATION: "android.permission.ACCESS_FINE_LOCATION";
  ACCESS_COARSE_LOCATION: "android.permission.ACCESS_COARSE_LOCATION";
  ACCESS_BACKGROUND_LOCATION: "android.permission.ACCESS_BACKGROUND_LOCATION";
  RECORD_AUDIO: "android.permission.RECORD_AUDIO";
  READ_PHONE_STATE: "android.permission.READ_PHONE_STATE";
  CALL_PHONE: "android.permission.CALL_PHONE";
  READ_CALL_LOG: "android.permission.READ_CALL_LOG";
  WRITE_CALL_LOG: "android.permission.WRITE_CALL_LOG";
  ADD_VOICEMAIL: "com.android.voicemail.permission.ADD_VOICEMAIL";
  READ_VOICEMAIL: "com.android.voicemail.permission.READ_VOICEMAIL";
  WRITE_VOICEMAIL: "com.android.voicemail.permission.WRITE_VOICEMAIL";
  USE_SIP: "android.permission.USE_SIP";
  PROCESS_OUTGOING_CALLS: "android.permission.PROCESS_OUTGOING_CALLS";
  BODY_SENSORS: "android.permission.BODY_SENSORS";
  BODY_SENSORS_BACKGROUND: "android.permission.BODY_SENSORS_BACKGROUND";
  SEND_SMS: "android.permission.SEND_SMS";
  RECEIVE_SMS: "android.permission.RECEIVE_SMS";
  READ_SMS: "android.permission.READ_SMS";
  RECEIVE_WAP_PUSH: "android.permission.RECEIVE_WAP_PUSH";
  RECEIVE_MMS: "android.permission.RECEIVE_MMS";
  READ_EXTERNAL_STORAGE: "android.permission.READ_EXTERNAL_STORAGE";
  READ_MEDIA_IMAGES: "android.permission.READ_MEDIA_IMAGES";
  READ_MEDIA_VIDEO: "android.permission.READ_MEDIA_VIDEO";
  READ_MEDIA_AUDIO: "android.permission.READ_MEDIA_AUDIO";
  READ_MEDIA_VISUAL_USER_SELECTED: "android.permission.READ_MEDIA_VISUAL_USER_SELECTED";
  WRITE_EXTERNAL_STORAGE: "android.permission.WRITE_EXTERNAL_STORAGE";
  BLUETOOTH_CONNECT: "android.permission.BLUETOOTH_CONNECT";
  BLUETOOTH_SCAN: "android.permission.BLUETOOTH_SCAN";
  BLUETOOTH_ADVERTISE: "android.permission.BLUETOOTH_ADVERTISE";
  ACCESS_MEDIA_LOCATION: "android.permission.ACCESS_MEDIA_LOCATION";
  ACCEPT_HANDOVER: "android.permission.ACCEPT_HANDOVER";
  ACTIVITY_RECOGNITION: "android.permission.ACTIVITY_RECOGNITION";
  ANSWER_PHONE_CALLS: "android.permission.ANSWER_PHONE_CALLS";
  READ_PHONE_NUMBERS: "android.permission.READ_PHONE_NUMBERS";
  UWB_RANGING: "android.permission.UWB_RANGING";
  POST_NOTIFICATIONS: "android.permission.POST_NOTIFICATIONS";
  NEARBY_WIFI_DEVICES: "android.permission.NEARBY_WIFI_DEVICES";
}>;
export declare class PixelRatio {
  static get(): number;
  static getFontScale(): number;
  static getPixelSizeForLayoutSize(layoutSize: number): number;
  static roundToNearestPixel(layoutSize: number): number;
  static startDetecting(): void;
}
export declare const Platform: Platform_2;
export declare type Platform = typeof Platform;
declare type Platform_2 =
  | IOSPlatform
  | AndroidPlatform
  | WindowsPlatform
  | MacOSPlatform
  | WebPlatform;
export declare function PlatformColor(...names: Array<string>): ColorValue;
declare type PlatformConfig = {};
export declare type PlatformOSType =
  | "ios"
  | "android"
  | "macos"
  | "windows"
  | "web"
  | "native";
export declare type PlatformSelectSpec<T> =
  | (Omit<
      OptionalPlatformSelectSpec<T>,
      keyof {
        default: T;
      }
    > & {
      default: T;
    })
  | OptionalPlatformSelectSpec<T>;
declare type PointerEvent_2 = NativeSyntheticEvent<NativePointerEvent>;
declare type PointerEventProps = Readonly<{
  onClick?: ((event: PointerEvent_2) => void) | undefined;
  onClickCapture?: ((event: PointerEvent_2) => void) | undefined;
  onPointerEnter?: ((event: PointerEvent_2) => void) | undefined;
  onPointerEnterCapture?: ((event: PointerEvent_2) => void) | undefined;
  onPointerLeave?: ((event: PointerEvent_2) => void) | undefined;
  onPointerLeaveCapture?: ((event: PointerEvent_2) => void) | undefined;
  onPointerMove?: ((event: PointerEvent_2) => void) | undefined;
  onPointerMoveCapture?: ((event: PointerEvent_2) => void) | undefined;
  onPointerCancel?: ((e: PointerEvent_2) => void) | undefined;
  onPointerCancelCapture?: ((e: PointerEvent_2) => void) | undefined;
  onPointerDown?: ((e: PointerEvent_2) => void) | undefined;
  onPointerDownCapture?: ((e: PointerEvent_2) => void) | undefined;
  onPointerUp?: ((e: PointerEvent_2) => void) | undefined;
  onPointerUpCapture?: ((e: PointerEvent_2) => void) | undefined;
  onPointerOver?: ((e: PointerEvent_2) => void) | undefined;
  onPointerOverCapture?: ((e: PointerEvent_2) => void) | undefined;
  onPointerOut?: ((e: PointerEvent_2) => void) | undefined;
  onPointerOutCapture?: ((e: PointerEvent_2) => void) | undefined;
  onGotPointerCapture?: ((e: PointerEvent_2) => void) | undefined;
  onGotPointerCaptureCapture?: ((e: PointerEvent_2) => void) | undefined;
  onLostPointerCapture?: ((e: PointerEvent_2) => void) | undefined;
  onLostPointerCaptureCapture?: ((e: PointerEvent_2) => void) | undefined;
}>;
declare type PointerEventProps_2 = Readonly<{
  onPointerEnter?: (event: PointerEvent_2) => void;
  onPointerLeave?: (event: PointerEvent_2) => void;
  onPointerMove?: (event: PointerEvent_2) => void;
}>;
declare type PointProp = Readonly<{
  x: number;
  y: number;
}>;
export declare type PointValue = {
  x: number;
  y: number;
};
declare type PresentLocalNotificationDetails = {
  alertBody: string;
  alertAction?: string;
  alertTitle?: string;
  soundName?: string;
  category?: string;
  userInfo?: Object;
  applicationIconBadgeNumber?: number;
  fireDate?: number;
  isSilent?: boolean;
};
declare const Presets: {
  easeInEaseOut: LayoutAnimationConfig;
  linear: LayoutAnimationConfig;
  spring: LayoutAnimationConfig;
};
declare class Pressability {
  constructor(config: PressabilityConfig);
  configure(config: PressabilityConfig): void;
  reset(): void;
  getEventHandlers(): EventHandlers;
  static setLongPressDeactivationDistance(distance: number): void;
}
declare type PressabilityConfig = Readonly<{
  cancelable?: boolean | undefined;
  disabled?: boolean | undefined;
  hitSlop?: RectOrSize | undefined;
  pressRectOffset?: RectOrSize | undefined;
  android_disableSound?: boolean | undefined;
  delayHoverIn?: number | undefined;
  delayHoverOut?: number | undefined;
  delayLongPress?: number | undefined;
  delayPressIn?: number | undefined;
  delayPressOut?: number | undefined;
  minPressDuration?: number | undefined;
  onBlur?: ((event: BlurEvent) => unknown) | undefined;
  onFocus?: ((event: FocusEvent_2) => unknown) | undefined;
  onHoverIn?: ((event: MouseEvent_2) => unknown) | undefined;
  onHoverOut?: ((event: MouseEvent_2) => unknown) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPress?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPressMove?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPressOut?: ((event: GestureResponderEvent) => unknown) | undefined;
  blockNativeResponder?: boolean | undefined;
}>;
export declare const Pressable: (
  props: Omit<
    PressableProps,
    keyof {
      ref?: React_2.Ref<React_2.ComponentRef<typeof View>>;
    }
  > & {
    ref?: React_2.Ref<React_2.ComponentRef<typeof View>>;
  }
) => React_2.ReactNode;
export declare type Pressable = typeof Pressable;
declare type PressableAndroidRippleConfig = {
  color?: ColorValue;
  borderless?: boolean;
  radius?: number;
  foreground?: boolean;
};
declare type PressableBaseProps = Readonly<{
  cancelable?: boolean | undefined;
  children?:
    | React_2.ReactNode
    | ((state: PressableStateCallbackType) => React_2.ReactNode);
  delayHoverIn?: number | undefined;
  delayHoverOut?: number | undefined;
  delayLongPress?: number | undefined;
  disabled?: boolean | undefined;
  hitSlop?: RectOrSize | undefined;
  pressRetentionOffset?: RectOrSize | undefined;
  onLayout?: ((event: LayoutChangeEvent) => unknown) | undefined;
  onHoverIn?: ((event: MouseEvent_2) => unknown) | undefined;
  onHoverOut?: ((event: MouseEvent_2) => unknown) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPress?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPressMove?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPressOut?: ((event: GestureResponderEvent) => unknown) | undefined;
  style?:
    | ViewStyleProp_2
    | ((state: PressableStateCallbackType) => ViewStyleProp_2);
  testID?: string | undefined;
  android_disableSound?: boolean | undefined;
  android_ripple?: PressableAndroidRippleConfig | undefined;
  testOnly_pressed?: boolean | undefined;
  unstable_pressDelay?: number | undefined;
}>;
export declare type PressableProps = Readonly<
  Omit<ViewProps, keyof PressableBaseProps | keyof {}> &
    Omit<PressableBaseProps, keyof {}> & {}
>;
export declare type PressableStateCallbackType = Readonly<{
  pressed: boolean;
}>;
declare type PressRetentionOffset = Readonly<{
  top: number;
  left: number;
  bottom: number;
  right: number;
}>;
declare type Primitive = string | number | boolean | symbol | void;
export declare const processColor: typeof processColor_2;
export declare type processColor = typeof processColor;
declare function processColor_2(
  color?: null | undefined | (number | ColorValue)
): null | undefined | ProcessedColorValue;
export declare type ProcessedColorValue = number | NativeColorValue;
export declare const ProgressBarAndroid: (
  props: Omit<
    ProgressBarAndroidProps,
    keyof {
      ref?: React_2.Ref<
        React_2.ComponentRef<ProgressBarAndroidNativeComponentType>
      >;
    }
  > & {
    ref?: React_2.Ref<
      React_2.ComponentRef<ProgressBarAndroidNativeComponentType>
    >;
  }
) => React_2.ReactNode;
export declare type ProgressBarAndroid = typeof ProgressBarAndroid;
declare const ProgressBarAndroidNativeComponent_MODULE_EXPORT: typeof ProgressBarAndroidNativeComponent_MODULE_EXPORT_2;
declare type ProgressBarAndroidNativeComponent_MODULE_EXPORT =
  typeof ProgressBarAndroidNativeComponent_MODULE_EXPORT;
declare const ProgressBarAndroidNativeComponent_MODULE_EXPORT_2: HostComponent<NativeProps_2>;
declare type ProgressBarAndroidNativeComponent_MODULE_EXPORT_2 =
  typeof ProgressBarAndroidNativeComponent_MODULE_EXPORT_2;
declare type ProgressBarAndroidNativeComponentType =
  typeof ProgressBarAndroidNativeComponent_MODULE_EXPORT;
export declare type ProgressBarAndroidProps = Readonly<
  Omit<
    ViewProps,
    | keyof ProgressBarAndroidStyleAttrProp
    | keyof {
        animating?: boolean | undefined;
        color?: ColorValue | undefined;
        testID?: string | undefined;
      }
  > &
    Omit<
      ProgressBarAndroidStyleAttrProp,
      keyof {
        animating?: boolean | undefined;
        color?: ColorValue | undefined;
        testID?: string | undefined;
      }
    > & {
      animating?: boolean | undefined;
      color?: ColorValue | undefined;
      testID?: string | undefined;
    }
>;
declare type ProgressBarAndroidStyleAttrProp =
  | {
      styleAttr: "Horizontal";
      indeterminate: false;
      progress: number;
    }
  | {
      styleAttr:
        | "Horizontal"
        | "Normal"
        | "Small"
        | "Large"
        | "Inverse"
        | "SmallInverse"
        | "LargeInverse";
      indeterminate: true;
    };
export declare type PromiseTask = {
  name: string;
  gen: () => Promise<void>;
};
declare type Props = Readonly<
  Omit<
    ImageProps,
    | keyof ViewProps
    | keyof {
        style?: ImageStyleProp | DangerouslyImpreciseStyle;
        tintColor?: ColorValue;
        shouldNotifyLoadEvents?: boolean;
        src?:
          | (ResolvedAssetSource | undefined)
          | (
              | ReadonlyArray<
                  | Readonly<{
                      uri?: string | undefined;
                    }>
                  | undefined
                >
              | undefined
            );
        headers?:
          | {
              [$$Key$$: string]: string;
            }
          | undefined;
        defaultSource?: (ImageSource | undefined) | (string | undefined);
        loadingIndicatorSrc?: string | undefined;
      }
  > &
    Omit<
      ViewProps,
      keyof {
        style?: ImageStyleProp | DangerouslyImpreciseStyle;
        tintColor?: ColorValue;
        shouldNotifyLoadEvents?: boolean;
        src?:
          | (ResolvedAssetSource | undefined)
          | (
              | ReadonlyArray<
                  | Readonly<{
                      uri?: string | undefined;
                    }>
                  | undefined
                >
              | undefined
            );
        headers?:
          | {
              [$$Key$$: string]: string;
            }
          | undefined;
        defaultSource?: (ImageSource | undefined) | (string | undefined);
        loadingIndicatorSrc?: string | undefined;
      }
    > & {
      style?: ImageStyleProp | DangerouslyImpreciseStyle;
      tintColor?: ColorValue;
      shouldNotifyLoadEvents?: boolean;
      src?:
        | (ResolvedAssetSource | undefined)
        | (
            | ReadonlyArray<
                | Readonly<{
                    uri?: string | undefined;
                  }>
                | undefined
              >
            | undefined
          );
      headers?:
        | {
            [$$Key$$: string]: string;
          }
        | undefined;
      defaultSource?: (ImageSource | undefined) | (string | undefined);
      loadingIndicatorSrc?: string | undefined;
    }
>;
declare type Props_2 = React_2.JSX.LibraryManagedAttributes<
  typeof ScrollView,
  React_2.ComponentProps<typeof ScrollView>
>;
declare type PublicModalInstance = HostInstance;
declare interface PublicScrollViewInstance
  extends HostInstance,
    ScrollViewImperativeMethods {}
declare interface PushNotification {
  getMessage(): (string | undefined) | (Object | undefined);
  getSound(): string | undefined;
  getCategory(): string | undefined;
  getAlert(): (string | undefined) | (Object | undefined);
  getContentAvailable(): ContentAvailable;
  getBadgeCount(): number | undefined;
  getData(): Object | undefined;
  getThreadID(): string | undefined;
  finish(result: string): void;
}
export declare type PushNotificationEventName = keyof {
  notification: string;
  localNotification: string;
  register: string;
  registrationError: string;
};
export declare class PushNotificationIOS {
  static FetchResult: FetchResult;
  static presentLocalNotification(
    details: PresentLocalNotificationDetails
  ): void;
  static scheduleLocalNotification(
    details: ScheduleLocalNotificationDetails
  ): void;
  static cancelAllLocalNotifications(): void;
  static removeAllDeliveredNotifications(): void;
  static getDeliveredNotifications(
    callback: (notifications: Array<Object>) => void
  ): void;
  static removeDeliveredNotifications(identifiers: Array<string>): void;
  static setApplicationIconBadgeNumber(number: number): void;
  static getApplicationIconBadgeNumber(callback: Function): void;
  static cancelLocalNotifications(userInfo: Object): void;
  static getScheduledLocalNotifications(callback: Function): void;
  static addEventListener(
    type: PushNotificationEventName,
    handler: Function
  ): void;
  static removeEventListener(type: PushNotificationEventName): void;
  static requestPermissions(
    permissions?: PushNotificationPermissions
  ): Promise<{
    alert: boolean;
    badge: boolean;
    sound: boolean;
  }>;
  static abandonPermissions(): void;
  static checkPermissions(
    callback: (permissions: PushNotificationPermissions) => void
  ): void;
  static getInitialNotification(): Promise<null | undefined | PushNotification>;
  static getAuthorizationStatus(
    callback: (authorizationStatus: number) => void
  ): void;
  constructor(nativeNotif: Object);
  finish(fetchResult: string): void;
  getMessage(): (null | undefined | string) | (null | undefined | Object);
  getSound(): null | undefined | string;
  getCategory(): null | undefined | string;
  getAlert(): (null | undefined | string) | (null | undefined | Object);
  getContentAvailable(): ContentAvailable;
  getBadgeCount(): null | undefined | number;
  getData(): null | undefined | Object;
  getThreadID(): null | undefined | string;
}
export declare type PushNotificationPermissions = {
  alert: boolean;
  badge: boolean;
  sound: boolean;
  [key: string]: boolean | number;
};
export declare type Rationale = {
  title: string;
  message: string;
  buttonPositive?: string;
  buttonNegative?: string;
  buttonNeutral?: string;
};
declare type RCTDeviceEventDefinitions = {
  [name: string]: Array<any>;
};
declare const RCTNativeAppEventEmitter: typeof DeviceEventEmitter;
declare const RCTNetworking: {
  addListener<K extends keyof RCTNetworkingEventDefinitions>(
    eventType: K,
    listener: (...$$REST$$: RCTNetworkingEventDefinitions[K]) => unknown,
    context?: unknown
  ): EventSubscription;
  sendRequest(
    method: string,
    trackingName: string | undefined,
    url: string,
    headers: {},
    data: RequestBody,
    responseType: NativeResponseType,
    incrementalUpdates: boolean,
    timeout: number,
    callback: (requestId: number) => void,
    withCredentials: boolean
  ): void;
  abortRequest(requestId: number): void;
  clearCookies(callback: (result: boolean) => void): void;
};
declare type RCTNetworkingEventDefinitions = Readonly<{
  didSendNetworkData: [[number, number, number]];
  didReceiveNetworkResponse: [
    [
      number,
      number,
      (
        | {
            [$$Key$$: string]: string;
          }
        | undefined
      ),
      string | undefined
    ]
  ];
  didReceiveNetworkData: [[number, string]];
  didReceiveNetworkIncrementalData: [[number, string, number, number]];
  didReceiveNetworkDataProgress: [[number, number, number]];
  didCompleteNetworkResponse: [[number, string, boolean]];
}>;
declare type Rect = Readonly<{
  bottom?: number | undefined;
  left?: number | undefined;
  right?: number | undefined;
  top?: number | undefined;
}>;
declare type RectOrSize = Rect | number;
export declare class RefreshControl extends React_2.Component<RefreshControlProps> {
  componentDidMount(): void;
  componentDidUpdate(prevProps: RefreshControlProps): void;
  render(): React_2.ReactNode;
}
declare type RefreshControlBaseProps = Readonly<{
  onRefresh?: (() => void | Promise<void>) | undefined;
  refreshing: boolean;
  progressViewOffset?: number | undefined;
}>;
export declare type RefreshControlProps = Readonly<
  Omit<
    ViewProps,
    | keyof RefreshControlPropsIOS
    | keyof RefreshControlPropsAndroid
    | keyof RefreshControlBaseProps
    | keyof {}
  > &
    Omit<
      RefreshControlPropsIOS,
      | keyof RefreshControlPropsAndroid
      | keyof RefreshControlBaseProps
      | keyof {}
    > &
    Omit<RefreshControlPropsAndroid, keyof RefreshControlBaseProps | keyof {}> &
    Omit<RefreshControlBaseProps, keyof {}> & {}
>;
export declare type RefreshControlPropsAndroid = Readonly<{
  enabled?: boolean | undefined;
  colors?: ReadonlyArray<ColorValue> | undefined;
  progressBackgroundColor?: ColorValue | undefined;
  size?: ("default" | "large") | undefined;
}>;
export declare type RefreshControlPropsIOS = Readonly<{
  tintColor?: ColorValue | undefined;
  titleColor?: ColorValue | undefined;
  title?: string | undefined;
}>;
declare type RegisterCallableModule = (
  name: string,
  moduleOrFactory: Module | (($$PARAM_0$$: void) => Module)
) => void;
export declare const registerCallableModule: typeof registerCallableModule_2;
export declare type registerCallableModule = typeof registerCallableModule;
declare const registerCallableModule_2: RegisterCallableModule;
declare function registerCancellableHeadlessTask(
  taskKey: string,
  taskProvider: TaskProvider,
  taskCancelProvider: TaskCancelProvider
): void;
declare function registerComponent(
  appKey: string,
  componentProvider: ComponentProvider,
  section?: boolean
): string;
declare function registerConfig(config: Array<AppConfig>): void;
declare function registerHeadlessTask(
  taskKey: string,
  taskProvider: TaskProvider
): void;
declare function registerRunnable(appKey: string, run: Runnable): string;
declare function registerSection(
  appKey: string,
  component: ComponentProvider
): void;
export declare type Registry = {
  sections: ReadonlyArray<string>;
  runnables: Runnables;
};
declare type RequestBody =
  | string
  | Blob_2
  | FormData_2
  | {
      uri: string;
    }
  | ArrayBuffer
  | ArrayBufferView;
declare type RequiredProps<ItemT> = {
  data: Readonly<ArrayLike<ItemT>> | undefined;
};
declare type RequiredProps_2<ItemT, SectionT = DefaultSectionT> = {
  sections: ReadonlyArray<SectionData<ItemT, SectionT>>;
};
export declare const requireNativeComponent: typeof requireNativeComponent_2;
export declare type requireNativeComponent = typeof requireNativeComponent;
declare const requireNativeComponent_2: <T extends {}>(
  uiViewClassName: string
) => HostComponent<T>;
declare type ResolvedAssetSource = {
  readonly width: number | undefined;
  readonly height: number | undefined;
  readonly uri: string;
  readonly scale: number;
};
export declare type ResponderSyntheticEvent<T> = Readonly<
  Omit<
    NativeSyntheticEvent<T>,
    keyof {
      touchHistory: Readonly<{
        indexOfSingleActiveTouch: number;
        mostRecentTimeStamp: number;
        numberActiveTouches: number;
        touchBank: ReadonlyArray<
          Readonly<{
            touchActive: boolean;
            startPageX: number;
            startPageY: number;
            startTimeStamp: number;
            currentPageX: number;
            currentPageY: number;
            currentTimeStamp: number;
            previousPageX: number;
            previousPageY: number;
            previousTimeStamp: number;
          }>
        >;
      }>;
    }
  > & {
    touchHistory: Readonly<{
      indexOfSingleActiveTouch: number;
      mostRecentTimeStamp: number;
      numberActiveTouches: number;
      touchBank: ReadonlyArray<
        Readonly<{
          touchActive: boolean;
          startPageX: number;
          startPageY: number;
          startTimeStamp: number;
          currentPageX: number;
          currentPageY: number;
          currentTimeStamp: number;
          previousPageX: number;
          previousPageY: number;
          previousTimeStamp: number;
        }>
      >;
    }>;
  }
>;
declare type ReturnKeyType = "done" | "go" | "next" | "search" | "send";
declare type ReturnKeyType_2 = "done" | "go" | "next" | "search" | "send";
declare type ReturnKeyTypeAndroid = "none" | "previous";
declare type ReturnKeyTypeAndroid_2 = "none" | "previous";
declare type ReturnKeyTypeIOS =
  | "default"
  | "emergency-call"
  | "google"
  | "join"
  | "route"
  | "yahoo";
declare type ReturnKeyTypeIOS_2 =
  | "default"
  | "emergency-call"
  | "google"
  | "join"
  | "route"
  | "yahoo";
export declare type ReturnKeyTypeOptions =
  | ReturnKeyType
  | ReturnKeyTypeIOS
  | ReturnKeyTypeAndroid;
declare type ReturnKeyTypeOptions_2 =
  | ReturnKeyType_2
  | ReturnKeyTypeIOS_2
  | ReturnKeyTypeAndroid_2;
declare type RgbaAnimatedValue = {
  readonly r: AnimatedValue;
  readonly g: AnimatedValue;
  readonly b: AnimatedValue;
  readonly a: AnimatedValue;
};
declare type RgbaValue = {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a: number;
};
declare type Role =
  | "alert"
  | "alertdialog"
  | "application"
  | "article"
  | "banner"
  | "button"
  | "cell"
  | "checkbox"
  | "columnheader"
  | "combobox"
  | "complementary"
  | "contentinfo"
  | "definition"
  | "dialog"
  | "directory"
  | "document"
  | "feed"
  | "figure"
  | "form"
  | "grid"
  | "group"
  | "heading"
  | "img"
  | "link"
  | "list"
  | "listitem"
  | "log"
  | "main"
  | "marquee"
  | "math"
  | "menu"
  | "menubar"
  | "menuitem"
  | "meter"
  | "navigation"
  | "none"
  | "note"
  | "option"
  | "presentation"
  | "progressbar"
  | "radio"
  | "radiogroup"
  | "region"
  | "row"
  | "rowgroup"
  | "rowheader"
  | "scrollbar"
  | "searchbox"
  | "separator"
  | "slider"
  | "spinbutton"
  | "status"
  | "summary"
  | "switch"
  | "tab"
  | "table"
  | "tablist"
  | "tabpanel"
  | "term"
  | "timer"
  | "toolbar"
  | "tooltip"
  | "tree"
  | "treegrid"
  | "treeitem";
export declare type RootTag = symbol & {
  __RootTag__: string;
};
export declare const RootTagContext: React_2.Context<RootTag>;
export declare type RootTagContext = typeof RootTagContext;
export declare type RootViewStyleProvider = (
  appParameters: Object
) => ViewStyleProp;
declare function runApplication(
  appKey: string,
  appParameters: AppParameters,
  displayMode?: number
): void;
export declare type Runnable = (
  appParameters: AppParameters,
  displayMode: DisplayModeType
) => void;
export declare type Runnables = {
  [appKey: string]: Runnable;
};
export declare const SafeAreaView: typeof exported;
export declare type SafeAreaView = typeof SafeAreaView;
export declare type ScaledSize = DisplayMetrics;
declare type ScheduleLocalNotificationDetails = Omit<
  PresentLocalNotificationDetails,
  keyof {
    repeatInterval?: "year" | "month" | "week" | "day" | "hour" | "minute";
  }
> & {
  repeatInterval?: "year" | "month" | "week" | "day" | "hour" | "minute";
};
export declare type ScrollEvent = NativeSyntheticEvent<NativeScrollEvent>;
declare type ScrollResponderType = ScrollViewImperativeMethods;
export { ScrollToLocationParamsType };
export declare const ScrollView: typeof Wrapper & ScrollViewComponentStatics;
export declare type ScrollView = typeof ScrollView;
declare class ScrollView_2 extends React_2.Component<ScrollViewProps, State_2> {
  static Context: typeof ScrollViewContext_MODULE_EXPORT;
  constructor(props: ScrollViewProps);
  state: State_2;
  componentDidMount(): void;
  componentDidUpdate(prevProps: ScrollViewProps): void;
  componentWillUnmount(): void;
  getScrollResponder: () => ScrollResponderType;
  getScrollableNode: () => null | undefined | number;
  getInnerViewNode: () => null | undefined | number;
  getInnerViewRef: () => InnerViewInstance | null;
  getNativeScrollRef: () => HostInstance | null;
  scrollTo: (
    options?: ScrollViewScrollToOptions | number,
    deprecatedX?: number,
    deprecatedAnimated?: boolean
  ) => void;
  scrollToEnd: (options?: null | undefined | ScrollViewScrollToOptions) => void;
  flashScrollIndicators: () => void;
  scrollResponderScrollNativeHandleToKeyboard: (
    nodeHandle: number | HostInstance,
    additionalOffset?: number,
    preventNegativeScrollOffset?: boolean
  ) => void;
  scrollResponderZoomTo: (
    rect: {
      x: number;
      y: number;
      width: number;
      height: number;
      animated?: boolean;
    },
    animated?: boolean
  ) => void;
  scrollResponderKeyboardWillShow: (e: KeyboardEvent_2) => void;
  scrollResponderKeyboardWillHide: (e: KeyboardEvent_2) => void;
  scrollResponderKeyboardDidShow: (e: KeyboardEvent_2) => void;
  scrollResponderKeyboardDidHide: (e: KeyboardEvent_2) => void;
  render(): React_2.ReactNode;
}
declare type ScrollViewComponentStatics = Readonly<{
  Context: typeof ScrollViewContext_MODULE_EXPORT;
}>;
declare const ScrollViewContext: React_2.Context<Value>;
declare const ScrollViewContext_MODULE_EXPORT: typeof ScrollViewContext;
declare type ScrollViewContext_MODULE_EXPORT =
  typeof ScrollViewContext_MODULE_EXPORT;
declare interface ScrollViewImperativeMethods {
  readonly getScrollResponder: ScrollView_2["getScrollResponder"];
  readonly getScrollableNode: ScrollView_2["getScrollableNode"];
  readonly getInnerViewNode: ScrollView_2["getInnerViewNode"];
  readonly getInnerViewRef: ScrollView_2["getInnerViewRef"];
  readonly getNativeScrollRef: ScrollView_2["getNativeScrollRef"];
  readonly scrollTo: ScrollView_2["scrollTo"];
  readonly scrollToEnd: ScrollView_2["scrollToEnd"];
  readonly flashScrollIndicators: ScrollView_2["flashScrollIndicators"];
  readonly scrollResponderZoomTo: ScrollView_2["scrollResponderZoomTo"];
  readonly scrollResponderScrollNativeHandleToKeyboard: ScrollView_2["scrollResponderScrollNativeHandleToKeyboard"];
}
declare type ScrollViewNativeComponent =
  typeof ScrollViewNativeComponent_MODULE_EXPORT;
declare const ScrollViewNativeComponent_2: HostComponent<ScrollViewNativeProps>;
declare const ScrollViewNativeComponent_MODULE_EXPORT: typeof ScrollViewNativeComponent_2;
declare type ScrollViewNativeComponent_MODULE_EXPORT =
  typeof ScrollViewNativeComponent_MODULE_EXPORT;
declare type ScrollViewNativeProps = Readonly<
  Omit<
    ViewProps,
    keyof {
      alwaysBounceHorizontal?: boolean | undefined;
      alwaysBounceVertical?: boolean | undefined;
      automaticallyAdjustContentInsets?: boolean | undefined;
      automaticallyAdjustKeyboardInsets?: boolean | undefined;
      automaticallyAdjustsScrollIndicatorInsets?: boolean | undefined;
      bounces?: boolean | undefined;
      bouncesZoom?: boolean | undefined;
      canCancelContentTouches?: boolean | undefined;
      centerContent?: boolean | undefined;
      contentInset?: EdgeInsetsProp | undefined;
      contentInsetAdjustmentBehavior?:
        | ("automatic" | "scrollableAxes" | "never" | "always")
        | undefined;
      contentOffset?: PointProp | undefined;
      decelerationRate?: ("fast" | "normal" | number) | undefined;
      directionalLockEnabled?: boolean | undefined;
      disableIntervalMomentum?: boolean | undefined;
      endFillColor?: ColorValue | undefined;
      fadingEdgeLength?: number | undefined;
      indicatorStyle?: ("default" | "black" | "white") | undefined;
      isInvertedVirtualizedList?: boolean | undefined;
      keyboardDismissMode?: ("none" | "on-drag" | "interactive") | undefined;
      maintainVisibleContentPosition?:
        | Readonly<{
            minIndexForVisible: number;
            autoscrollToTopThreshold?: number | undefined;
          }>
        | undefined;
      maximumZoomScale?: number | undefined;
      minimumZoomScale?: number | undefined;
      nestedScrollEnabled?: boolean | undefined;
      onMomentumScrollBegin?: ((event: ScrollEvent) => void) | undefined;
      onMomentumScrollEnd?: ((event: ScrollEvent) => void) | undefined;
      onScroll?: ((event: ScrollEvent) => void) | undefined;
      onScrollBeginDrag?: ((event: ScrollEvent) => void) | undefined;
      onScrollEndDrag?: ((event: ScrollEvent) => void) | undefined;
      onScrollToTop?: (event: ScrollEvent) => void;
      overScrollMode?: ("auto" | "always" | "never") | undefined;
      pagingEnabled?: boolean | undefined;
      persistentScrollbar?: boolean | undefined;
      pinchGestureEnabled?: boolean | undefined;
      scrollEnabled?: boolean | undefined;
      scrollEventThrottle?: number | undefined;
      scrollIndicatorInsets?: EdgeInsetsProp | undefined;
      scrollPerfTag?: string | undefined;
      scrollToOverflowEnabled?: boolean | undefined;
      scrollsToTop?: boolean | undefined;
      sendMomentumEvents?: boolean | undefined;
      showsHorizontalScrollIndicator?: boolean | undefined;
      showsVerticalScrollIndicator?: boolean | undefined;
      snapToAlignment?: ("start" | "center" | "end") | undefined;
      snapToEnd?: boolean | undefined;
      snapToInterval?: number | undefined;
      snapToOffsets?: ReadonlyArray<number> | undefined;
      snapToStart?: boolean | undefined;
      zoomScale?: number | undefined;
      onResponderGrant?:
        | ((e: GestureResponderEvent) => void | boolean)
        | undefined;
    }
  > & {
    alwaysBounceHorizontal?: boolean | undefined;
    alwaysBounceVertical?: boolean | undefined;
    automaticallyAdjustContentInsets?: boolean | undefined;
    automaticallyAdjustKeyboardInsets?: boolean | undefined;
    automaticallyAdjustsScrollIndicatorInsets?: boolean | undefined;
    bounces?: boolean | undefined;
    bouncesZoom?: boolean | undefined;
    canCancelContentTouches?: boolean | undefined;
    centerContent?: boolean | undefined;
    contentInset?: EdgeInsetsProp | undefined;
    contentInsetAdjustmentBehavior?:
      | ("automatic" | "scrollableAxes" | "never" | "always")
      | undefined;
    contentOffset?: PointProp | undefined;
    decelerationRate?: ("fast" | "normal" | number) | undefined;
    directionalLockEnabled?: boolean | undefined;
    disableIntervalMomentum?: boolean | undefined;
    endFillColor?: ColorValue | undefined;
    fadingEdgeLength?: number | undefined;
    indicatorStyle?: ("default" | "black" | "white") | undefined;
    isInvertedVirtualizedList?: boolean | undefined;
    keyboardDismissMode?: ("none" | "on-drag" | "interactive") | undefined;
    maintainVisibleContentPosition?:
      | Readonly<{
          minIndexForVisible: number;
          autoscrollToTopThreshold?: number | undefined;
        }>
      | undefined;
    maximumZoomScale?: number | undefined;
    minimumZoomScale?: number | undefined;
    nestedScrollEnabled?: boolean | undefined;
    onMomentumScrollBegin?: ((event: ScrollEvent) => void) | undefined;
    onMomentumScrollEnd?: ((event: ScrollEvent) => void) | undefined;
    onScroll?: ((event: ScrollEvent) => void) | undefined;
    onScrollBeginDrag?: ((event: ScrollEvent) => void) | undefined;
    onScrollEndDrag?: ((event: ScrollEvent) => void) | undefined;
    onScrollToTop?: (event: ScrollEvent) => void;
    overScrollMode?: ("auto" | "always" | "never") | undefined;
    pagingEnabled?: boolean | undefined;
    persistentScrollbar?: boolean | undefined;
    pinchGestureEnabled?: boolean | undefined;
    scrollEnabled?: boolean | undefined;
    scrollEventThrottle?: number | undefined;
    scrollIndicatorInsets?: EdgeInsetsProp | undefined;
    scrollPerfTag?: string | undefined;
    scrollToOverflowEnabled?: boolean | undefined;
    scrollsToTop?: boolean | undefined;
    sendMomentumEvents?: boolean | undefined;
    showsHorizontalScrollIndicator?: boolean | undefined;
    showsVerticalScrollIndicator?: boolean | undefined;
    snapToAlignment?: ("start" | "center" | "end") | undefined;
    snapToEnd?: boolean | undefined;
    snapToInterval?: number | undefined;
    snapToOffsets?: ReadonlyArray<number> | undefined;
    snapToStart?: boolean | undefined;
    zoomScale?: number | undefined;
    onResponderGrant?:
      | ((e: GestureResponderEvent) => void | boolean)
      | undefined;
  }
>;
export declare type ScrollViewProps = Readonly<
  Omit<
    ViewProps,
    | keyof ScrollViewPropsIOS
    | keyof ScrollViewPropsAndroid
    | keyof {
        contentContainerStyle?: ViewStyleProp | undefined;
        contentOffset?: PointProp | undefined;
        disableIntervalMomentum?: boolean | undefined;
        decelerationRate?: DecelerationRateType | undefined;
        experimental_endDraggingSensitivityMultiplier?: number | undefined;
        horizontal?: boolean | undefined;
        invertStickyHeaders?: boolean | undefined;
        keyboardDismissMode?: ("none" | "on-drag" | "interactive") | undefined;
        keyboardShouldPersistTaps?:
          | ("always" | "never" | "handled" | true | false)
          | undefined;
        maintainVisibleContentPosition?:
          | Readonly<{
              minIndexForVisible: number;
              autoscrollToTopThreshold?: number | undefined;
            }>
          | undefined;
        onMomentumScrollBegin?: ((event: ScrollEvent) => void) | undefined;
        onMomentumScrollEnd?: ((event: ScrollEvent) => void) | undefined;
        onScroll?: ((event: ScrollEvent) => void) | undefined;
        onScrollBeginDrag?: ((event: ScrollEvent) => void) | undefined;
        onScrollEndDrag?: ((event: ScrollEvent) => void) | undefined;
        onContentSizeChange?: (
          contentWidth: number,
          contentHeight: number
        ) => void;
        onKeyboardDidShow?: (event: KeyboardEvent_2) => void;
        onKeyboardDidHide?: (event: KeyboardEvent_2) => void;
        onKeyboardWillShow?: (event: KeyboardEvent_2) => void;
        onKeyboardWillHide?: (event: KeyboardEvent_2) => void;
        pagingEnabled?: boolean | undefined;
        scrollEnabled?: boolean | undefined;
        scrollEventThrottle?: number | undefined;
        showsVerticalScrollIndicator?: boolean | undefined;
        stickyHeaderHiddenOnScroll?: boolean | undefined;
        stickyHeaderIndices?: ReadonlyArray<number> | undefined;
        StickyHeaderComponent?: StickyHeaderComponentType;
        snapToAlignment?: ("start" | "center" | "end") | undefined;
        snapToInterval?: number | undefined;
        snapToOffsets?: ReadonlyArray<number> | undefined;
        snapToStart?: boolean | undefined;
        snapToEnd?: boolean | undefined;
        removeClippedSubviews?: boolean | undefined;
        refreshControl?: React_2.ReactNode | undefined;
        children?: React_2.ReactNode;
        innerViewRef?: React_2.Ref<InnerViewInstance>;
        scrollViewRef?: React_2.Ref<PublicScrollViewInstance>;
      }
  > &
    Omit<
      ScrollViewPropsIOS,
      | keyof ScrollViewPropsAndroid
      | keyof {
          contentContainerStyle?: ViewStyleProp | undefined;
          contentOffset?: PointProp | undefined;
          disableIntervalMomentum?: boolean | undefined;
          decelerationRate?: DecelerationRateType | undefined;
          experimental_endDraggingSensitivityMultiplier?: number | undefined;
          horizontal?: boolean | undefined;
          invertStickyHeaders?: boolean | undefined;
          keyboardDismissMode?:
            | ("none" | "on-drag" | "interactive")
            | undefined;
          keyboardShouldPersistTaps?:
            | ("always" | "never" | "handled" | true | false)
            | undefined;
          maintainVisibleContentPosition?:
            | Readonly<{
                minIndexForVisible: number;
                autoscrollToTopThreshold?: number | undefined;
              }>
            | undefined;
          onMomentumScrollBegin?: ((event: ScrollEvent) => void) | undefined;
          onMomentumScrollEnd?: ((event: ScrollEvent) => void) | undefined;
          onScroll?: ((event: ScrollEvent) => void) | undefined;
          onScrollBeginDrag?: ((event: ScrollEvent) => void) | undefined;
          onScrollEndDrag?: ((event: ScrollEvent) => void) | undefined;
          onContentSizeChange?: (
            contentWidth: number,
            contentHeight: number
          ) => void;
          onKeyboardDidShow?: (event: KeyboardEvent_2) => void;
          onKeyboardDidHide?: (event: KeyboardEvent_2) => void;
          onKeyboardWillShow?: (event: KeyboardEvent_2) => void;
          onKeyboardWillHide?: (event: KeyboardEvent_2) => void;
          pagingEnabled?: boolean | undefined;
          scrollEnabled?: boolean | undefined;
          scrollEventThrottle?: number | undefined;
          showsVerticalScrollIndicator?: boolean | undefined;
          stickyHeaderHiddenOnScroll?: boolean | undefined;
          stickyHeaderIndices?: ReadonlyArray<number> | undefined;
          StickyHeaderComponent?: StickyHeaderComponentType;
          snapToAlignment?: ("start" | "center" | "end") | undefined;
          snapToInterval?: number | undefined;
          snapToOffsets?: ReadonlyArray<number> | undefined;
          snapToStart?: boolean | undefined;
          snapToEnd?: boolean | undefined;
          removeClippedSubviews?: boolean | undefined;
          refreshControl?: React_2.ReactNode | undefined;
          children?: React_2.ReactNode;
          innerViewRef?: React_2.Ref<InnerViewInstance>;
          scrollViewRef?: React_2.Ref<PublicScrollViewInstance>;
        }
    > &
    Omit<
      ScrollViewPropsAndroid,
      keyof {
        contentContainerStyle?: ViewStyleProp | undefined;
        contentOffset?: PointProp | undefined;
        disableIntervalMomentum?: boolean | undefined;
        decelerationRate?: DecelerationRateType | undefined;
        experimental_endDraggingSensitivityMultiplier?: number | undefined;
        horizontal?: boolean | undefined;
        invertStickyHeaders?: boolean | undefined;
        keyboardDismissMode?: ("none" | "on-drag" | "interactive") | undefined;
        keyboardShouldPersistTaps?:
          | ("always" | "never" | "handled" | true | false)
          | undefined;
        maintainVisibleContentPosition?:
          | Readonly<{
              minIndexForVisible: number;
              autoscrollToTopThreshold?: number | undefined;
            }>
          | undefined;
        onMomentumScrollBegin?: ((event: ScrollEvent) => void) | undefined;
        onMomentumScrollEnd?: ((event: ScrollEvent) => void) | undefined;
        onScroll?: ((event: ScrollEvent) => void) | undefined;
        onScrollBeginDrag?: ((event: ScrollEvent) => void) | undefined;
        onScrollEndDrag?: ((event: ScrollEvent) => void) | undefined;
        onContentSizeChange?: (
          contentWidth: number,
          contentHeight: number
        ) => void;
        onKeyboardDidShow?: (event: KeyboardEvent_2) => void;
        onKeyboardDidHide?: (event: KeyboardEvent_2) => void;
        onKeyboardWillShow?: (event: KeyboardEvent_2) => void;
        onKeyboardWillHide?: (event: KeyboardEvent_2) => void;
        pagingEnabled?: boolean | undefined;
        scrollEnabled?: boolean | undefined;
        scrollEventThrottle?: number | undefined;
        showsVerticalScrollIndicator?: boolean | undefined;
        stickyHeaderHiddenOnScroll?: boolean | undefined;
        stickyHeaderIndices?: ReadonlyArray<number> | undefined;
        StickyHeaderComponent?: StickyHeaderComponentType;
        snapToAlignment?: ("start" | "center" | "end") | undefined;
        snapToInterval?: number | undefined;
        snapToOffsets?: ReadonlyArray<number> | undefined;
        snapToStart?: boolean | undefined;
        snapToEnd?: boolean | undefined;
        removeClippedSubviews?: boolean | undefined;
        refreshControl?: React_2.ReactNode | undefined;
        children?: React_2.ReactNode;
        innerViewRef?: React_2.Ref<InnerViewInstance>;
        scrollViewRef?: React_2.Ref<PublicScrollViewInstance>;
      }
    > & {
      contentContainerStyle?: ViewStyleProp | undefined;
      contentOffset?: PointProp | undefined;
      disableIntervalMomentum?: boolean | undefined;
      decelerationRate?: DecelerationRateType | undefined;
      experimental_endDraggingSensitivityMultiplier?: number | undefined;
      horizontal?: boolean | undefined;
      invertStickyHeaders?: boolean | undefined;
      keyboardDismissMode?: ("none" | "on-drag" | "interactive") | undefined;
      keyboardShouldPersistTaps?:
        | ("always" | "never" | "handled" | true | false)
        | undefined;
      maintainVisibleContentPosition?:
        | Readonly<{
            minIndexForVisible: number;
            autoscrollToTopThreshold?: number | undefined;
          }>
        | undefined;
      onMomentumScrollBegin?: ((event: ScrollEvent) => void) | undefined;
      onMomentumScrollEnd?: ((event: ScrollEvent) => void) | undefined;
      onScroll?: ((event: ScrollEvent) => void) | undefined;
      onScrollBeginDrag?: ((event: ScrollEvent) => void) | undefined;
      onScrollEndDrag?: ((event: ScrollEvent) => void) | undefined;
      onContentSizeChange?: (
        contentWidth: number,
        contentHeight: number
      ) => void;
      onKeyboardDidShow?: (event: KeyboardEvent_2) => void;
      onKeyboardDidHide?: (event: KeyboardEvent_2) => void;
      onKeyboardWillShow?: (event: KeyboardEvent_2) => void;
      onKeyboardWillHide?: (event: KeyboardEvent_2) => void;
      pagingEnabled?: boolean | undefined;
      scrollEnabled?: boolean | undefined;
      scrollEventThrottle?: number | undefined;
      showsVerticalScrollIndicator?: boolean | undefined;
      stickyHeaderHiddenOnScroll?: boolean | undefined;
      stickyHeaderIndices?: ReadonlyArray<number> | undefined;
      StickyHeaderComponent?: StickyHeaderComponentType;
      snapToAlignment?: ("start" | "center" | "end") | undefined;
      snapToInterval?: number | undefined;
      snapToOffsets?: ReadonlyArray<number> | undefined;
      snapToStart?: boolean | undefined;
      snapToEnd?: boolean | undefined;
      removeClippedSubviews?: boolean | undefined;
      refreshControl?: React_2.ReactNode | undefined;
      children?: React_2.ReactNode;
      innerViewRef?: React_2.Ref<InnerViewInstance>;
      scrollViewRef?: React_2.Ref<PublicScrollViewInstance>;
    }
>;
export declare type ScrollViewPropsAndroid = Readonly<{
  nestedScrollEnabled?: boolean | undefined;
  endFillColor?: ColorValue | undefined;
  scrollPerfTag?: string | undefined;
  overScrollMode?: ("auto" | "always" | "never") | undefined;
  persistentScrollbar?: boolean | undefined;
  fadingEdgeLength?: number | undefined;
}>;
export declare type ScrollViewPropsIOS = Readonly<{
  automaticallyAdjustContentInsets?: boolean | undefined;
  automaticallyAdjustKeyboardInsets?: boolean | undefined;
  automaticallyAdjustsScrollIndicatorInsets?: boolean | undefined;
  contentInset?: EdgeInsetsProp | undefined;
  bounces?: boolean | undefined;
  disableScrollViewPanResponder?: boolean | undefined;
  bouncesZoom?: boolean | undefined;
  alwaysBounceHorizontal?: boolean | undefined;
  alwaysBounceVertical?: boolean | undefined;
  centerContent?: boolean | undefined;
  indicatorStyle?: ("default" | "black" | "white") | undefined;
  directionalLockEnabled?: boolean | undefined;
  canCancelContentTouches?: boolean | undefined;
  maximumZoomScale?: number | undefined;
  minimumZoomScale?: number | undefined;
  pinchGestureEnabled?: boolean | undefined;
  scrollIndicatorInsets?: EdgeInsetsProp | undefined;
  scrollToOverflowEnabled?: boolean | undefined;
  scrollsToTop?: boolean | undefined;
  onScrollToTop?: (event: ScrollEvent) => void;
  showsHorizontalScrollIndicator?: boolean | undefined;
  zoomScale?: number | undefined;
  contentInsetAdjustmentBehavior?:
    | ("automatic" | "scrollableAxes" | "never" | "always")
    | undefined;
}>;
declare interface ScrollViewScrollToOptions {
  x?: number;
  y?: number;
  animated?: boolean;
}
declare type ScrollViewStickyHeaderProps = Readonly<{
  children?: React_2.ReactNode;
  nextHeaderLayoutY: number | undefined;
  onLayout: (event: LayoutChangeEvent) => void;
  scrollAnimatedValue: Animated.Value;
  inverted: boolean | undefined;
  scrollViewHeight: number | undefined;
  nativeID?: string | undefined;
  hiddenOnScroll?: boolean | undefined;
}>;
export { SectionBase };
declare type SectionBase_2<
  SectionItemT,
  SectionT = DefaultSectionT
> = SectionBase<SectionItemT, SectionT>;
export declare class SectionList<
  ItemT,
  SectionT = DefaultSectionT
> extends React_2.PureComponent<SectionListProps<ItemT, SectionT>> {
  props: SectionListProps<ItemT, SectionT>;
  scrollToLocation(params: ScrollToLocationParamsType): void;
  recordInteraction(): void;
  flashScrollIndicators(): void;
  getScrollResponder(): null | undefined | ScrollResponderType;
  getScrollableNode(): any;
  setNativeProps(props: Object): void;
  render(): React_2.ReactNode;
}
export declare type SectionListProps<ItemT, SectionT = DefaultSectionT> = Omit<
  Omit<
    VirtualizedSectionListProps<ItemT, SectionT>,
    "getItem" | "getItemCount" | "renderItem" | "keyExtractor"
  >,
  | keyof RequiredProps_2<ItemT, SectionT>
  | keyof OptionalProps_2<ItemT, SectionT>
  | keyof {}
> &
  Omit<
    RequiredProps_2<ItemT, SectionT>,
    keyof OptionalProps_2<ItemT, SectionT> | keyof {}
  > &
  Omit<OptionalProps_2<ItemT, SectionT>, keyof {}> & {};
export declare type SectionListRenderItem<ItemT, SectionT = DefaultSectionT> = (
  info: SectionListRenderItemInfo<ItemT, SectionT>
) => React_2.ReactNode | null;
export declare type SectionListRenderItemInfo<
  ItemT,
  SectionT = DefaultSectionT
> = Omit<
  ListRenderItemInfo<ItemT>,
  keyof {
    section: SectionData<ItemT, SectionT>;
  }
> & {
  section: SectionData<ItemT, SectionT>;
};
declare type Selection_2 = Readonly<{
  start: number;
  end: number;
}>;
declare type Selection_3 = Readonly<{
  start: number;
  end: number;
}>;
export { Separators };
declare const sequence: (
  animations: Array<CompositeAnimation>
) => CompositeAnimation;
declare const sequence_2: typeof AnimatedImplementation_MODULE_EXPORT.sequence;
declare type sequence_2 = typeof sequence_2;
declare function setColorScheme(
  colorScheme: null | undefined | ColorSchemeName
): void;
declare function setComponentProviderInstrumentationHook(
  hook: ComponentProviderInstrumentationHook
): void;
declare function setEnabled(value: boolean): void;
declare function setEnabled_2(_doEnable: boolean): void;
declare function setRootViewStyleProvider(
  provider: RootViewStyleProvider
): void;
declare const setStyleAttributePreprocessor: (
  property: string,
  process: (nextProp: any) => any
) => void;
declare type setStyleAttributePreprocessor =
  typeof setStyleAttributePreprocessor;
declare function setSurfaceProps(
  appKey: string,
  appParameters: Object,
  displayMode?: number
): void;
export declare const Settings: typeof Settings_2;
export declare type Settings = typeof Settings;
declare const Settings_2: {
  get(key: string): any;
  set(settings: Object): void;
  watchKeys(keys: string | Array<string>, callback: () => void): number;
  clearWatch(watchId: number): void;
};
declare function setWrapperComponentProvider(
  provider: WrapperComponentProvider
): void;
export declare class Share {
  static share(
    content: ShareContent,
    options?: ShareOptions
  ): Promise<{
    action: string;
    activityType: string | undefined;
  }>;
  static sharedAction: "sharedAction";
  static dismissedAction: "dismissedAction";
}
export declare type ShareAction = {
  action: "sharedAction" | "dismissedAction";
  activityType?: string | null;
};
export declare type ShareActionSheetError = Readonly<{
  domain: string;
  code: string;
  userInfo?: Object | undefined;
  message: string;
}>;
export declare type ShareActionSheetIOSOptions = Readonly<{
  message?: string | undefined;
  url?: string | undefined;
  subject?: string | undefined;
  anchor?: number | undefined;
  tintColor?: number | undefined;
  cancelButtonTintColor?: number | undefined;
  disabledButtonTintColor?: number | undefined;
  excludedActivityTypes?: Array<string> | undefined;
  userInterfaceStyle?: string | undefined;
}>;
export declare type ShareContent =
  | {
      title?: string;
      url: string;
      message?: string;
    }
  | {
      title?: string;
      url?: string;
      message: string;
    };
export declare type ShareOptions = {
  dialogTitle?: string;
  excludedActivityTypes?: Array<string>;
  tintColor?: ColorValue;
  subject?: string;
  anchor?: number;
};
export declare type SimpleTask = {
  name: string;
  run: () => void;
};
declare interface Spec extends TurboModule {
  readonly getConstants: () => {
    readonly buttonClicked: DialogAction;
    readonly dismissed: DialogAction;
    readonly buttonPositive: DialogButtonKey;
    readonly buttonNegative: DialogButtonKey;
    readonly buttonNeutral: DialogButtonKey;
  };
  readonly showAlert: (
    config: DialogOptions,
    onError: (error: string) => void,
    onAction: (action: DialogAction, buttonKey?: DialogButtonKey) => void
  ) => void;
}
declare interface Spec_2 extends TurboModule {
  readonly getConstants: () => Object;
  readonly createView: (
    reactTag: number,
    viewName: string,
    rootTag: RootTag,
    props: Object
  ) => void;
  readonly updateView: (
    reactTag: number,
    viewName: string,
    props: Object
  ) => void;
  readonly findSubviewIn: (
    reactTag: number,
    point: Array<number>,
    callback: (
      nativeViewTag: number,
      left: number,
      top: number,
      width: number,
      height: number
    ) => void
  ) => void;
  readonly dispatchViewManagerCommand: (
    reactTag: number,
    commandID: number,
    commandArgs?: Array<any>
  ) => void;
  readonly measure: (
    reactTag: number,
    callback: MeasureOnSuccessCallback_2
  ) => void;
  readonly measureInWindow: (
    reactTag: number,
    callback: MeasureInWindowOnSuccessCallback_2
  ) => void;
  readonly viewIsDescendantOf: (
    reactTag: number,
    ancestorReactTag: number,
    callback: (result: Array<boolean>) => void
  ) => void;
  readonly measureLayout: (
    reactTag: number,
    ancestorReactTag: number,
    errorCallback: (error: Object) => void,
    callback: MeasureLayoutOnSuccessCallback_2
  ) => void;
  readonly measureLayoutRelativeToParent: (
    reactTag: number,
    errorCallback: (error: Object) => void,
    callback: (left: number, top: number, width: number, height: number) => void
  ) => void;
  readonly setJSResponder: (
    reactTag: number,
    blockNativeResponder: boolean
  ) => void;
  readonly clearJSResponder: () => void;
  readonly configureNextLayoutAnimation: (
    config: Object,
    callback: () => void,
    errorCallback: (error: Object) => void
  ) => void;
  readonly setChildren: (
    containerTag: number,
    reactTags: Array<number>
  ) => void;
  readonly manageChildren: (
    containerTag: number,
    moveFromIndices: Array<number>,
    moveToIndices: Array<number>,
    addChildReactTags: Array<number>,
    addAtIndices: Array<number>,
    removeAtIndices: Array<number>
  ) => void;
  readonly getConstantsForViewManager?: (
    viewManagerName: string
  ) => Object | undefined;
  readonly getDefaultEventTypes?: () => Array<string>;
  readonly setLayoutAnimationEnabledExperimental?: (enabled: boolean) => void;
  readonly sendAccessibilityEvent?: (
    reactTag: number,
    eventType: number
  ) => void;
  readonly lazilyLoadView?: (name: string) => Object;
  readonly focus?: (reactTag: number) => void;
  readonly blur?: (reactTag: number) => void;
}
declare const spring: (
  value: AnimatedValue | AnimatedValueXY | AnimatedColor,
  config: SpringAnimationConfig
) => CompositeAnimation;
declare const spring_2: typeof AnimatedImplementation_MODULE_EXPORT.spring;
declare type spring_2 = typeof spring_2;
declare type SpringAnimationConfig = Readonly<
  Omit<
    AnimationConfig,
    keyof {
      toValue:
        | number
        | AnimatedValue
        | {
            x: number;
            y: number;
          }
        | AnimatedValueXY
        | {
            r: number;
            g: number;
            b: number;
            a: number;
          }
        | AnimatedColor
        | AnimatedInterpolation<number>;
      overshootClamping?: boolean;
      restDisplacementThreshold?: number;
      restSpeedThreshold?: number;
      velocity?:
        | number
        | Readonly<{
            x: number;
            y: number;
          }>;
      bounciness?: number;
      speed?: number;
      tension?: number;
      friction?: number;
      stiffness?: number;
      damping?: number;
      mass?: number;
      delay?: number;
    }
  > & {
    toValue:
      | number
      | AnimatedValue
      | {
          x: number;
          y: number;
        }
      | AnimatedValueXY
      | {
          r: number;
          g: number;
          b: number;
          a: number;
        }
      | AnimatedColor
      | AnimatedInterpolation<number>;
    overshootClamping?: boolean;
    restDisplacementThreshold?: number;
    restSpeedThreshold?: number;
    velocity?:
      | number
      | Readonly<{
          x: number;
          y: number;
        }>;
    bounciness?: number;
    speed?: number;
    tension?: number;
    friction?: number;
    stiffness?: number;
    damping?: number;
    mass?: number;
    delay?: number;
  }
>;
declare type StackFrame = {
  column: number | undefined;
  file: string | undefined;
  lineNumber: number | undefined;
  methodName: string;
  collapse?: boolean;
};
declare type StackProps = {
  backgroundColor:
    | {
        value: StatusBarProps["backgroundColor"];
        animated: boolean;
      }
    | undefined;
  barStyle:
    | {
        value: StatusBarProps["barStyle"];
        animated: boolean;
      }
    | undefined;
  translucent: StatusBarProps["translucent"];
  hidden:
    | {
        value: boolean;
        animated: boolean;
        transition: StatusBarProps["showHideTransition"];
      }
    | undefined;
  networkActivityIndicatorVisible: StatusBarProps["networkActivityIndicatorVisible"];
};
declare const stagger: (
  time: number,
  animations: Array<CompositeAnimation>
) => CompositeAnimation;
declare const stagger_2: typeof AnimatedImplementation_MODULE_EXPORT.stagger;
declare type stagger_2 = typeof stagger_2;
declare function startHeadlessTask(
  taskId: number,
  taskKey: string,
  data: any
): void;
declare type State = Readonly<{
  pressability: Pressability;
}>;
declare type State_2 = {
  layoutHeight: number | undefined;
};
declare type State_3 = {
  bottom: number;
};
declare type State_4 =
  | typeof States.NOT_RESPONDER
  | typeof States.RESPONDER_INACTIVE_PRESS_IN
  | typeof States.RESPONDER_INACTIVE_PRESS_OUT
  | typeof States.RESPONDER_ACTIVE_PRESS_IN
  | typeof States.RESPONDER_ACTIVE_PRESS_OUT
  | typeof States.RESPONDER_ACTIVE_LONG_PRESS_IN
  | typeof States.RESPONDER_ACTIVE_LONG_PRESS_OUT
  | typeof States.ERROR;
declare const States: {
  NOT_RESPONDER: "NOT_RESPONDER";
  RESPONDER_INACTIVE_PRESS_IN: "RESPONDER_INACTIVE_PRESS_IN";
  RESPONDER_INACTIVE_PRESS_OUT: "RESPONDER_INACTIVE_PRESS_OUT";
  RESPONDER_ACTIVE_PRESS_IN: "RESPONDER_ACTIVE_PRESS_IN";
  RESPONDER_ACTIVE_PRESS_OUT: "RESPONDER_ACTIVE_PRESS_OUT";
  RESPONDER_ACTIVE_LONG_PRESS_IN: "RESPONDER_ACTIVE_LONG_PRESS_IN";
  RESPONDER_ACTIVE_LONG_PRESS_OUT: "RESPONDER_ACTIVE_LONG_PRESS_OUT";
  ERROR: "ERROR";
};
export declare class StatusBar extends React_2.Component<StatusBarProps> {
  static currentHeight: null | undefined | number;
  static setHidden(hidden: boolean, animation?: StatusBarAnimation): void;
  static setBarStyle(style: StatusBarStyle, animated?: boolean): void;
  static setNetworkActivityIndicatorVisible(visible: boolean): void;
  static setBackgroundColor(color: ColorValue, animated?: boolean): void;
  static setTranslucent(translucent: boolean): void;
  static pushStackEntry(props: StatusBarProps): StackProps;
  static popStackEntry(entry: StackProps): void;
  static replaceStackEntry(
    entry: StackProps,
    props: StatusBarProps
  ): StackProps;
  componentDidMount(): void;
  componentWillUnmount(): void;
  componentDidUpdate(): void;
  render(): React_2.ReactNode;
}
export declare type StatusBarAnimation = keyof {
  none: string;
  fade: string;
  slide: string;
};
declare type StatusBarBaseProps = Readonly<{
  hidden?: boolean | undefined;
  animated?: boolean | undefined;
  barStyle?: ("default" | "light-content" | "dark-content") | undefined;
}>;
export declare type StatusBarProps = Readonly<
  Omit<
    StatusBarPropsAndroid,
    keyof StatusBarPropsIOS | keyof StatusBarBaseProps | keyof {}
  > &
    Omit<StatusBarPropsIOS, keyof StatusBarBaseProps | keyof {}> &
    Omit<StatusBarBaseProps, keyof {}> & {}
>;
declare type StatusBarPropsAndroid = Readonly<{
  backgroundColor?: ColorValue | undefined;
  translucent?: boolean | undefined;
}>;
declare type StatusBarPropsIOS = Readonly<{
  networkActivityIndicatorVisible?: boolean | undefined;
  showHideTransition?: ("fade" | "slide" | "none") | undefined;
}>;
export declare type StatusBarStyle = keyof {
  default: string;
  "light-content": string;
  "dark-content": string;
};
declare type StickyHeaderComponentType = (
  props: Omit<
    ScrollViewStickyHeaderProps,
    keyof {
      ref?: React_2.Ref<
        Readonly<{
          setNextHeaderY: ($$PARAM_0$$: number) => void;
        }>
      >;
    }
  > & {
    ref?: React_2.Ref<
      Readonly<{
        setNextHeaderY: ($$PARAM_0$$: number) => void;
      }>
    >;
  }
) => React_2.ReactNode;
export declare type StyleProp<T> =
  | null
  | void
  | T
  | false
  | ""
  | ReadonlyArray<StyleProp<T>>;
export declare namespace StyleSheet_2 {
  export {
    hairlineWidth,
    absoluteFill,
    absoluteFillObject,
    compose,
    flatten,
    setStyleAttributePreprocessor,
    create_2 as create,
  };
}
export declare type SubmitBehavior = "submit" | "blurAndSubmit" | "newline";
declare type SubmitBehavior_2 = "submit" | "blurAndSubmit" | "newline";
declare const subtract: (
  a: AnimatedNode | number,
  b: AnimatedNode | number
) => AnimatedSubtraction;
declare const subtract_2: typeof AnimatedImplementation_MODULE_EXPORT.subtract;
declare type subtract_2 = typeof subtract_2;
export declare const Switch: typeof Switch_2;
export declare type Switch = typeof Switch;
declare const Switch_2: (
  props: Omit<
    SwitchProps,
    keyof {
      ref?: React_2.Ref<SwitchRef>;
    }
  > & {
    ref?: React_2.Ref<SwitchRef>;
  }
) => React_2.ReactNode;
export declare type SwitchChangeEvent =
  NativeSyntheticEvent<SwitchChangeEventData>;
declare type SwitchChangeEvent_2 = Readonly<{
  value: boolean;
  target: Int32;
}>;
declare type SwitchChangeEvent_3 = Readonly<{
  value: boolean;
  target: Int32;
}>;
declare type SwitchChangeEventData = Readonly<{
  target: number;
  value: boolean;
}>;
declare const SwitchNativeComponent_MODULE_EXPORT: typeof SwitchNativeComponent_MODULE_EXPORT_2;
declare type SwitchNativeComponent_MODULE_EXPORT =
  typeof SwitchNativeComponent_MODULE_EXPORT;
declare const SwitchNativeComponent_MODULE_EXPORT_2: ComponentType;
declare type SwitchNativeComponent_MODULE_EXPORT_2 =
  typeof SwitchNativeComponent_MODULE_EXPORT_2;
export declare type SwitchProps = Readonly<
  Omit<ViewProps, keyof SwitchPropsIOS | keyof SwitchPropsBase | keyof {}> &
    Omit<SwitchPropsIOS, keyof SwitchPropsBase | keyof {}> &
    Omit<SwitchPropsBase, keyof {}> & {}
>;
declare type SwitchPropsBase = {
  disabled?: boolean | undefined;
  value?: boolean | undefined;
  thumbColor?: ColorValue | undefined;
  trackColor?:
    | Readonly<{
        false?: ColorValue | undefined;
        true?: ColorValue | undefined;
      }>
    | undefined;
  ios_backgroundColor?: ColorValue | undefined;
  onChange?: ((event: SwitchChangeEvent) => Promise<void> | void) | undefined;
  onValueChange?: ((value: boolean) => Promise<void> | void) | undefined;
};
declare type SwitchPropsIOS = {
  onTintColor?: ColorValue | undefined;
  thumbTintColor?: ColorValue | undefined;
  tintColor?: ColorValue | undefined;
};
declare type SwitchRef = React_2.ComponentRef<
  | typeof SwitchNativeComponent_MODULE_EXPORT
  | typeof AndroidSwitchNativeComponent_MODULE_EXPORT
>;
export declare namespace Systrace {
  export {
    isEnabled,
    setEnabled_2 as setEnabled,
    beginEvent,
    endEvent,
    beginAsyncEvent,
    endAsyncEvent,
    counterEvent,
    EventName,
    EventArgs,
  };
}
export declare type TargetedEvent = Readonly<{
  target: number;
}>;
declare type TargetEvent = Readonly<{
  target: number;
}>;
declare type TargetEvent_2 = Readonly<{
  target: number;
}>;
declare type Task = (taskData: any) => Promise<void>;
declare type Task_2 = SimpleTask | PromiseTask | (() => void);
declare type TaskCanceller = () => void;
declare type TaskCancelProvider = () => TaskCanceller;
export declare type TaskProvider = () => Task;
declare type TBackHandler = {
  exitApp(): void;
  addEventListener(
    eventName: BackPressEventName,
    handler: () => boolean | undefined
  ): {
    remove: () => void;
  };
};
declare const Text_2: typeof Text_3;
declare type Text_2 = typeof Text_2;
export { Text_2 as Text };
declare const Text_3: (
  props: Omit<
    TextProps,
    keyof {
      ref?: React_2.Ref<TextForwardRef>;
    }
  > & {
    ref?: React_2.Ref<TextForwardRef>;
  }
) => React_2.ReactNode;
declare type TextBaseProps = Readonly<{
  accessible?: boolean | undefined;
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo> | undefined;
  onAccessibilityAction?:
    | ((event: AccessibilityActionEvent) => unknown)
    | undefined;
  accessibilityHint?: string | undefined;
  accessibilityLanguage?: string | undefined;
  accessibilityLabel?: string | undefined;
  accessibilityRole?: AccessibilityRole | undefined;
  accessibilityState?: AccessibilityState | undefined;
  "aria-label"?: string | undefined;
  allowFontScaling?: boolean | undefined;
  android_hyphenationFrequency?: ("normal" | "none" | "full") | undefined;
  "aria-busy"?: boolean | undefined;
  "aria-checked"?: (boolean | undefined) | "mixed";
  "aria-disabled"?: boolean | undefined;
  "aria-expanded"?: boolean | undefined;
  "aria-selected"?: boolean | undefined;
  "aria-labelledby"?: string | undefined;
  children?: React_2.ReactNode | undefined;
  ellipsizeMode?: ("clip" | "head" | "middle" | "tail") | undefined;
  id?: string;
  maxFontSizeMultiplier?: number | undefined;
  nativeID?: string | undefined;
  numberOfLines?: number | undefined;
  onLayout?: ((event: LayoutChangeEvent) => unknown) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPress?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPressOut?: ((event: GestureResponderEvent) => unknown) | undefined;
  onResponderGrant?: ((event: GestureResponderEvent) => void) | undefined;
  onResponderMove?: ((event: GestureResponderEvent) => void) | undefined;
  onResponderRelease?: ((event: GestureResponderEvent) => void) | undefined;
  onResponderTerminate?: ((event: GestureResponderEvent) => void) | undefined;
  onResponderTerminationRequest?: (() => boolean) | undefined;
  onStartShouldSetResponder?: (() => boolean) | undefined;
  onMoveShouldSetResponder?: (() => boolean) | undefined;
  onTextLayout?: ((event: TextLayoutEvent) => unknown) | undefined;
  pressRetentionOffset?: PressRetentionOffset | undefined;
  role?: Role | undefined;
  selectable?: boolean | undefined;
  style?: TextStyleProp | undefined;
  testID?: string | undefined;
}>;
export declare type TextContentType =
  | "none"
  | "URL"
  | "addressCity"
  | "addressCityAndState"
  | "addressState"
  | "countryName"
  | "creditCardNumber"
  | "creditCardExpiration"
  | "creditCardExpirationMonth"
  | "creditCardExpirationYear"
  | "creditCardSecurityCode"
  | "creditCardType"
  | "creditCardName"
  | "creditCardGivenName"
  | "creditCardMiddleName"
  | "creditCardFamilyName"
  | "emailAddress"
  | "familyName"
  | "fullStreetAddress"
  | "givenName"
  | "jobTitle"
  | "location"
  | "middleName"
  | "name"
  | "namePrefix"
  | "nameSuffix"
  | "nickname"
  | "organizationName"
  | "postalCode"
  | "streetAddressLine1"
  | "streetAddressLine2"
  | "sublocality"
  | "telephoneNumber"
  | "username"
  | "password"
  | "newPassword"
  | "oneTimeCode"
  | "birthdate"
  | "birthdateDay"
  | "birthdateMonth"
  | "birthdateYear"
  | "cellularEID"
  | "cellularIMEI"
  | "dateTime"
  | "flightNumber"
  | "shipmentTrackingNumber";
declare type TextContentType_2 =
  | "none"
  | "URL"
  | "addressCity"
  | "addressCityAndState"
  | "addressState"
  | "countryName"
  | "creditCardNumber"
  | "creditCardExpiration"
  | "creditCardExpirationMonth"
  | "creditCardExpirationYear"
  | "creditCardSecurityCode"
  | "creditCardType"
  | "creditCardName"
  | "creditCardGivenName"
  | "creditCardMiddleName"
  | "creditCardFamilyName"
  | "emailAddress"
  | "familyName"
  | "fullStreetAddress"
  | "givenName"
  | "jobTitle"
  | "location"
  | "middleName"
  | "name"
  | "namePrefix"
  | "nameSuffix"
  | "nickname"
  | "organizationName"
  | "postalCode"
  | "streetAddressLine1"
  | "streetAddressLine2"
  | "sublocality"
  | "telephoneNumber"
  | "username"
  | "password"
  | "newPassword"
  | "oneTimeCode"
  | "birthdate"
  | "birthdateDay"
  | "birthdateMonth"
  | "birthdateYear"
  | "cellularEID"
  | "cellularIMEI"
  | "dateTime"
  | "flightNumber"
  | "shipmentTrackingNumber";
declare type TextForwardRef = React_2.ComponentRef<
  typeof NativeText | typeof NativeVirtualText
>;
declare const TextInlineImage: HostComponent<NativeProps>;
declare type TextInlineImageNativeComponent =
  typeof TextInlineImageNativeComponent_MODULE_EXPORT;
declare const TextInlineImageNativeComponent_MODULE_EXPORT: typeof TextInlineImage;
declare type TextInlineImageNativeComponent_MODULE_EXPORT =
  typeof TextInlineImageNativeComponent_MODULE_EXPORT;
export declare const TextInput: TextInputType;
export declare type TextInput = typeof TextInput;
export declare type TextInputAndroidProps = Readonly<{
  cursorColor?: ColorValue | undefined;
  disableFullscreenUI?: boolean | undefined;
  importantForAutofill?:
    | ("auto" | "no" | "noExcludeDescendants" | "yes" | "yesExcludeDescendants")
    | undefined;
  inlineImageLeft?: string | undefined;
  inlineImagePadding?: number | undefined;
  numberOfLines?: number | undefined;
  returnKeyLabel?: string | undefined;
  rows?: number | undefined;
  showSoftInputOnFocus?: boolean | undefined;
  textBreakStrategy?: ("simple" | "highQuality" | "balanced") | undefined;
  underlineColorAndroid?: ColorValue | undefined;
}>;
declare type TextInputAndroidProps_2 = Readonly<{
  cursorColor?: ColorValue | undefined;
  selectionHandleColor?: ColorValue | undefined;
  disableFullscreenUI?: boolean | undefined;
  importantForAutofill?:
    | ("auto" | "no" | "noExcludeDescendants" | "yes" | "yesExcludeDescendants")
    | undefined;
  inlineImageLeft?: string | undefined;
  inlineImagePadding?: number | undefined;
  numberOfLines?: number | undefined;
  returnKeyLabel?: string | undefined;
  rows?: number | undefined;
  showSoftInputOnFocus?: boolean | undefined;
  textBreakStrategy?: ("simple" | "highQuality" | "balanced") | undefined;
  underlineColorAndroid?: ColorValue | undefined;
}>;
declare type TextInputBaseProps = Readonly<{
  autoCapitalize?: AutoCapitalize | undefined;
  autoComplete?:
    | (
        | "additional-name"
        | "address-line1"
        | "address-line2"
        | "birthdate-day"
        | "birthdate-full"
        | "birthdate-month"
        | "birthdate-year"
        | "cc-csc"
        | "cc-exp"
        | "cc-exp-day"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-number"
        | "cc-name"
        | "cc-given-name"
        | "cc-middle-name"
        | "cc-family-name"
        | "cc-type"
        | "country"
        | "current-password"
        | "email"
        | "family-name"
        | "gender"
        | "given-name"
        | "honorific-prefix"
        | "honorific-suffix"
        | "name"
        | "name-family"
        | "name-given"
        | "name-middle"
        | "name-middle-initial"
        | "name-prefix"
        | "name-suffix"
        | "new-password"
        | "nickname"
        | "one-time-code"
        | "organization"
        | "organization-title"
        | "password"
        | "password-new"
        | "postal-address"
        | "postal-address-country"
        | "postal-address-extended"
        | "postal-address-extended-postal-code"
        | "postal-address-locality"
        | "postal-address-region"
        | "postal-code"
        | "street-address"
        | "sms-otp"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-device"
        | "url"
        | "username"
        | "username-new"
        | "off"
      )
    | undefined;
  autoCorrect?: boolean | undefined;
  autoFocus?: boolean | undefined;
  allowFontScaling?: boolean | undefined;
  caretHidden?: boolean | undefined;
  contextMenuHidden?: boolean | undefined;
  defaultValue?: string | undefined;
  editable?: boolean | undefined;
  forwardedRef?: React_2.Ref<TextInputInstance> | undefined;
  enterKeyHint?: EnterKeyHintTypeOptions | undefined;
  inputMode?: InputModeOptions | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxFontSizeMultiplier?: number | undefined;
  maxLength?: number | undefined;
  multiline?: boolean | undefined;
  onBlur?: ((e: TextInputBlurEvent) => unknown) | undefined;
  onChange?: ((e: TextInputChangeEvent) => unknown) | undefined;
  onChangeText?: ((text: string) => unknown) | undefined;
  onContentSizeChange?:
    | ((e: TextInputContentSizeChangeEvent) => unknown)
    | undefined;
  onEndEditing?: ((e: TextInputEndEditingEvent) => unknown) | undefined;
  onFocus?: ((e: TextInputFocusEvent) => unknown) | undefined;
  onKeyPress?: ((e: TextInputKeyPressEvent) => unknown) | undefined;
  onPress?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => unknown) | undefined;
  onPressOut?: ((event: GestureResponderEvent) => unknown) | undefined;
  onSelectionChange?:
    | ((e: TextInputSelectionChangeEvent) => unknown)
    | undefined;
  onSubmitEditing?: ((e: TextInputSubmitEditingEvent) => unknown) | undefined;
  onScroll?: ((e: ScrollEvent) => unknown) | undefined;
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
  readOnly?: boolean | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
  selection?:
    | Readonly<{
        start: number;
        end?: number | undefined;
      }>
    | undefined;
  selectionColor?: ColorValue | undefined;
  selectionHandleColor?: ColorValue | undefined;
  selectTextOnFocus?: boolean | undefined;
  blurOnSubmit?: boolean | undefined;
  submitBehavior?: SubmitBehavior | undefined;
  style?: TextStyleProp | undefined;
  value?: string | undefined;
}>;
declare type TextInputBlurEvent = NativeSyntheticEvent<TextInputFocusEventData>;
declare type TextInputBlurEvent_2 =
  NativeSyntheticEvent<TextInputFocusEventData_2>;
export declare type TextInputChangeEvent =
  NativeSyntheticEvent<TextInputChangeEventData>;
declare type TextInputChangeEvent_2 =
  NativeSyntheticEvent<TextInputChangeEventData_2>;
declare type TextInputChangeEventData = Readonly<{
  eventCount: number;
  target: number;
  text: string;
}>;
declare type TextInputChangeEventData_2 = Readonly<{
  eventCount: number;
  target: number;
  text: string;
}>;
declare type TextInputComponentStatics = Readonly<{
  State: Readonly<{
    currentlyFocusedInput: () => HostInstance | undefined;
    currentlyFocusedField: () => number | undefined;
    focusTextInput: (textField: HostInstance | undefined) => void;
    blurTextInput: (textField: HostInstance | undefined) => void;
  }>;
}>;
export declare type TextInputContentSizeChangeEvent =
  NativeSyntheticEvent<TextInputContentSizeChangeEventData>;
declare type TextInputContentSizeChangeEvent_2 =
  NativeSyntheticEvent<TextInputContentSizeChangeEventData_2>;
declare type TextInputContentSizeChangeEventData = Readonly<{
  target: number;
  contentSize: Readonly<{
    width: number;
    height: number;
  }>;
}>;
declare type TextInputContentSizeChangeEventData_2 = Readonly<{
  target: number;
  contentSize: Readonly<{
    width: number;
    height: number;
  }>;
}>;
export declare type TextInputEndEditingEvent =
  NativeSyntheticEvent<TextInputEndEditingEventData>;
declare type TextInputEndEditingEvent_2 =
  NativeSyntheticEvent<TextInputEndEditingEventData_2>;
declare type TextInputEndEditingEventData = Readonly<
  Omit<
    TargetEvent,
    keyof {
      eventCount: number;
      text: string;
    }
  > & {
    eventCount: number;
    text: string;
  }
>;
declare type TextInputEndEditingEventData_2 = Readonly<
  Omit<
    TargetEvent_2,
    keyof {
      eventCount: number;
      text: string;
    }
  > & {
    eventCount: number;
    text: string;
  }
>;
export declare type TextInputFocusEvent =
  NativeSyntheticEvent<TextInputFocusEventData>;
declare type TextInputFocusEvent_2 =
  NativeSyntheticEvent<TextInputFocusEventData_2>;
declare type TextInputFocusEventData = TargetEvent;
declare type TextInputFocusEventData_2 = TargetEvent_2;
declare interface TextInputInstance extends HostInstance {
  readonly clear: () => void;
  readonly isFocused: () => boolean;
  readonly getNativeRef: () => HostInstance | undefined;
  readonly setSelection: (start: number, end: number) => void;
}
export declare type TextInputIOSProps = Readonly<{
  disableKeyboardShortcuts?: boolean | undefined;
  clearButtonMode?:
    | ("never" | "while-editing" | "unless-editing" | "always")
    | undefined;
  clearTextOnFocus?: boolean | undefined;
  dataDetectorTypes?:
    | (DataDetectorTypesType | undefined)
    | ReadonlyArray<DataDetectorTypesType>;
  enablesReturnKeyAutomatically?: boolean | undefined;
  inputAccessoryViewID?: string | undefined;
  inputAccessoryViewButtonLabel?: string | undefined;
  keyboardAppearance?: ("default" | "light" | "dark") | undefined;
  passwordRules?: PasswordRules | undefined;
  rejectResponderTermination?: boolean | undefined;
  scrollEnabled?: boolean | undefined;
  spellCheck?: boolean | undefined;
  textContentType?: TextContentType | undefined;
  lineBreakStrategyIOS?:
    | ("none" | "standard" | "hangul-word" | "push-out")
    | undefined;
  lineBreakModeIOS?:
    | ("wordWrapping" | "char" | "clip" | "head" | "middle" | "tail")
    | undefined;
  smartInsertDelete?: boolean | undefined;
}>;
declare type TextInputIOSProps_2 = Readonly<{
  disableKeyboardShortcuts?: boolean | undefined;
  clearButtonMode?:
    | ("never" | "while-editing" | "unless-editing" | "always")
    | undefined;
  clearTextOnFocus?: boolean | undefined;
  dataDetectorTypes?:
    | (DataDetectorTypesType_2 | undefined)
    | ReadonlyArray<DataDetectorTypesType_2>;
  enablesReturnKeyAutomatically?: boolean | undefined;
  inputAccessoryViewID?: string | undefined;
  inputAccessoryViewButtonLabel?: string | undefined;
  keyboardAppearance?: ("default" | "light" | "dark") | undefined;
  passwordRules?: PasswordRules_2 | undefined;
  rejectResponderTermination?: boolean | undefined;
  scrollEnabled?: boolean | undefined;
  spellCheck?: boolean | undefined;
  textContentType?: TextContentType_2 | undefined;
  lineBreakStrategyIOS?:
    | ("none" | "standard" | "hangul-word" | "push-out")
    | undefined;
  lineBreakModeIOS?:
    | ("wordWrapping" | "char" | "clip" | "head" | "middle" | "tail")
    | undefined;
  smartInsertDelete?: boolean | undefined;
}>;
export declare type TextInputKeyPressEvent =
  NativeSyntheticEvent<TextInputKeyPressEventData>;
declare type TextInputKeyPressEvent_2 =
  NativeSyntheticEvent<TextInputKeyPressEventData_2>;
declare type TextInputKeyPressEventData = Readonly<
  Omit<
    TargetEvent,
    keyof {
      key: string;
      target?: number | undefined;
      eventCount?: number | undefined;
    }
  > & {
    key: string;
    target?: number | undefined;
    eventCount?: number | undefined;
  }
>;
declare type TextInputKeyPressEventData_2 = Readonly<
  Omit<
    TargetEvent_2,
    keyof {
      key: string;
      target?: number | undefined;
      eventCount: number;
    }
  > & {
    key: string;
    target?: number | undefined;
    eventCount: number;
  }
>;
export declare type TextInputProps = Readonly<
  Omit<
    Pick<
      ViewProps,
      Exclude<
        keyof ViewProps,
        keyof Readonly<{
          style: ViewStyleProp | undefined;
        }>
      >
    >,
    | keyof TextInputIOSProps
    | keyof TextInputAndroidProps
    | keyof TextInputBaseProps
    | keyof {}
  > &
    Omit<
      TextInputIOSProps,
      keyof TextInputAndroidProps | keyof TextInputBaseProps | keyof {}
    > &
    Omit<TextInputAndroidProps, keyof TextInputBaseProps | keyof {}> &
    Omit<TextInputBaseProps, keyof {}> & {}
>;
declare type TextInputProps_2 = Readonly<
  Omit<
    Pick<
      ViewProps,
      Exclude<
        keyof ViewProps,
        keyof Readonly<{
          style: ViewStyleProp | undefined;
        }>
      >
    >,
    | keyof TextInputIOSProps_2
    | keyof TextInputAndroidProps_2
    | keyof {
        autoCapitalize?: AutoCapitalize_2 | undefined;
        autoComplete?:
          | (
              | "additional-name"
              | "address-line1"
              | "address-line2"
              | "birthdate-day"
              | "birthdate-full"
              | "birthdate-month"
              | "birthdate-year"
              | "cc-csc"
              | "cc-exp"
              | "cc-exp-day"
              | "cc-exp-month"
              | "cc-exp-year"
              | "cc-number"
              | "cc-name"
              | "cc-given-name"
              | "cc-middle-name"
              | "cc-family-name"
              | "cc-type"
              | "country"
              | "current-password"
              | "email"
              | "family-name"
              | "gender"
              | "given-name"
              | "honorific-prefix"
              | "honorific-suffix"
              | "name"
              | "name-family"
              | "name-given"
              | "name-middle"
              | "name-middle-initial"
              | "name-prefix"
              | "name-suffix"
              | "new-password"
              | "nickname"
              | "one-time-code"
              | "organization"
              | "organization-title"
              | "password"
              | "password-new"
              | "postal-address"
              | "postal-address-country"
              | "postal-address-extended"
              | "postal-address-extended-postal-code"
              | "postal-address-locality"
              | "postal-address-region"
              | "postal-code"
              | "street-address"
              | "sms-otp"
              | "tel"
              | "tel-country-code"
              | "tel-national"
              | "tel-device"
              | "url"
              | "username"
              | "username-new"
              | "off"
            )
          | undefined;
        autoCorrect?: boolean | undefined;
        autoFocus?: boolean | undefined;
        allowFontScaling?: boolean | undefined;
        caretHidden?: boolean | undefined;
        contextMenuHidden?: boolean | undefined;
        defaultValue?: string | undefined;
        editable?: boolean | undefined;
        forwardedRef?: React_2.Ref<TextInputInstance> | undefined;
        enterKeyHint?: EnterKeyHintTypeOptions_2 | undefined;
        inputMode?: InputModeOptions_2 | undefined;
        keyboardType?: KeyboardTypeOptions_2 | undefined;
        maxFontSizeMultiplier?: number | undefined;
        maxLength?: number | undefined;
        multiline?: boolean | undefined;
        onBlur?: ((e: TextInputBlurEvent_2) => unknown) | undefined;
        onChange?: ((e: TextInputChangeEvent_2) => unknown) | undefined;
        unstable_onChangeSync?:
          | ((e: TextInputChangeEvent_2) => unknown)
          | undefined;
        onChangeText?: ((text: string) => unknown) | undefined;
        unstable_onChangeTextSync?: ((text: string) => unknown) | undefined;
        onContentSizeChange?:
          | ((e: TextInputContentSizeChangeEvent_2) => unknown)
          | undefined;
        onEndEditing?: ((e: TextInputEndEditingEvent_2) => unknown) | undefined;
        onFocus?: ((e: TextInputFocusEvent_2) => unknown) | undefined;
        onKeyPress?: ((e: TextInputKeyPressEvent_2) => unknown) | undefined;
        unstable_onKeyPressSync?:
          | ((e: TextInputKeyPressEvent_2) => unknown)
          | undefined;
        onPress?: ((event: GestureResponderEvent) => unknown) | undefined;
        onPressIn?: ((event: GestureResponderEvent) => unknown) | undefined;
        onPressOut?: ((event: GestureResponderEvent) => unknown) | undefined;
        onSelectionChange?:
          | ((e: TextInputSelectionChangeEvent_2) => unknown)
          | undefined;
        onSubmitEditing?:
          | ((e: TextInputSubmitEditingEvent_2) => unknown)
          | undefined;
        onScroll?: ((e: ScrollEvent) => unknown) | undefined;
        placeholder?: string | undefined;
        placeholderTextColor?: ColorValue | undefined;
        readOnly?: boolean | undefined;
        returnKeyType?: ReturnKeyTypeOptions_2 | undefined;
        secureTextEntry?: boolean | undefined;
        selection?:
          | Readonly<{
              start: number;
              end?: number | undefined;
            }>
          | undefined;
        selectionColor?: ColorValue | undefined;
        selectTextOnFocus?: boolean | undefined;
        blurOnSubmit?: boolean | undefined;
        submitBehavior?: SubmitBehavior_2 | undefined;
        style?: TextStyleProp | undefined;
        value?: string | undefined;
      }
  > &
    Omit<
      TextInputIOSProps_2,
      | keyof TextInputAndroidProps_2
      | keyof {
          autoCapitalize?: AutoCapitalize_2 | undefined;
          autoComplete?:
            | (
                | "additional-name"
                | "address-line1"
                | "address-line2"
                | "birthdate-day"
                | "birthdate-full"
                | "birthdate-month"
                | "birthdate-year"
                | "cc-csc"
                | "cc-exp"
                | "cc-exp-day"
                | "cc-exp-month"
                | "cc-exp-year"
                | "cc-number"
                | "cc-name"
                | "cc-given-name"
                | "cc-middle-name"
                | "cc-family-name"
                | "cc-type"
                | "country"
                | "current-password"
                | "email"
                | "family-name"
                | "gender"
                | "given-name"
                | "honorific-prefix"
                | "honorific-suffix"
                | "name"
                | "name-family"
                | "name-given"
                | "name-middle"
                | "name-middle-initial"
                | "name-prefix"
                | "name-suffix"
                | "new-password"
                | "nickname"
                | "one-time-code"
                | "organization"
                | "organization-title"
                | "password"
                | "password-new"
                | "postal-address"
                | "postal-address-country"
                | "postal-address-extended"
                | "postal-address-extended-postal-code"
                | "postal-address-locality"
                | "postal-address-region"
                | "postal-code"
                | "street-address"
                | "sms-otp"
                | "tel"
                | "tel-country-code"
                | "tel-national"
                | "tel-device"
                | "url"
                | "username"
                | "username-new"
                | "off"
              )
            | undefined;
          autoCorrect?: boolean | undefined;
          autoFocus?: boolean | undefined;
          allowFontScaling?: boolean | undefined;
          caretHidden?: boolean | undefined;
          contextMenuHidden?: boolean | undefined;
          defaultValue?: string | undefined;
          editable?: boolean | undefined;
          forwardedRef?: React_2.Ref<TextInputInstance> | undefined;
          enterKeyHint?: EnterKeyHintTypeOptions_2 | undefined;
          inputMode?: InputModeOptions_2 | undefined;
          keyboardType?: KeyboardTypeOptions_2 | undefined;
          maxFontSizeMultiplier?: number | undefined;
          maxLength?: number | undefined;
          multiline?: boolean | undefined;
          onBlur?: ((e: TextInputBlurEvent_2) => unknown) | undefined;
          onChange?: ((e: TextInputChangeEvent_2) => unknown) | undefined;
          unstable_onChangeSync?:
            | ((e: TextInputChangeEvent_2) => unknown)
            | undefined;
          onChangeText?: ((text: string) => unknown) | undefined;
          unstable_onChangeTextSync?: ((text: string) => unknown) | undefined;
          onContentSizeChange?:
            | ((e: TextInputContentSizeChangeEvent_2) => unknown)
            | undefined;
          onEndEditing?:
            | ((e: TextInputEndEditingEvent_2) => unknown)
            | undefined;
          onFocus?: ((e: TextInputFocusEvent_2) => unknown) | undefined;
          onKeyPress?: ((e: TextInputKeyPressEvent_2) => unknown) | undefined;
          unstable_onKeyPressSync?:
            | ((e: TextInputKeyPressEvent_2) => unknown)
            | undefined;
          onPress?: ((event: GestureResponderEvent) => unknown) | undefined;
          onPressIn?: ((event: GestureResponderEvent) => unknown) | undefined;
          onPressOut?: ((event: GestureResponderEvent) => unknown) | undefined;
          onSelectionChange?:
            | ((e: TextInputSelectionChangeEvent_2) => unknown)
            | undefined;
          onSubmitEditing?:
            | ((e: TextInputSubmitEditingEvent_2) => unknown)
            | undefined;
          onScroll?: ((e: ScrollEvent) => unknown) | undefined;
          placeholder?: string | undefined;
          placeholderTextColor?: ColorValue | undefined;
          readOnly?: boolean | undefined;
          returnKeyType?: ReturnKeyTypeOptions_2 | undefined;
          secureTextEntry?: boolean | undefined;
          selection?:
            | Readonly<{
                start: number;
                end?: number | undefined;
              }>
            | undefined;
          selectionColor?: ColorValue | undefined;
          selectTextOnFocus?: boolean | undefined;
          blurOnSubmit?: boolean | undefined;
          submitBehavior?: SubmitBehavior_2 | undefined;
          style?: TextStyleProp | undefined;
          value?: string | undefined;
        }
    > &
    Omit<
      TextInputAndroidProps_2,
      keyof {
        autoCapitalize?: AutoCapitalize_2 | undefined;
        autoComplete?:
          | (
              | "additional-name"
              | "address-line1"
              | "address-line2"
              | "birthdate-day"
              | "birthdate-full"
              | "birthdate-month"
              | "birthdate-year"
              | "cc-csc"
              | "cc-exp"
              | "cc-exp-day"
              | "cc-exp-month"
              | "cc-exp-year"
              | "cc-number"
              | "cc-name"
              | "cc-given-name"
              | "cc-middle-name"
              | "cc-family-name"
              | "cc-type"
              | "country"
              | "current-password"
              | "email"
              | "family-name"
              | "gender"
              | "given-name"
              | "honorific-prefix"
              | "honorific-suffix"
              | "name"
              | "name-family"
              | "name-given"
              | "name-middle"
              | "name-middle-initial"
              | "name-prefix"
              | "name-suffix"
              | "new-password"
              | "nickname"
              | "one-time-code"
              | "organization"
              | "organization-title"
              | "password"
              | "password-new"
              | "postal-address"
              | "postal-address-country"
              | "postal-address-extended"
              | "postal-address-extended-postal-code"
              | "postal-address-locality"
              | "postal-address-region"
              | "postal-code"
              | "street-address"
              | "sms-otp"
              | "tel"
              | "tel-country-code"
              | "tel-national"
              | "tel-device"
              | "url"
              | "username"
              | "username-new"
              | "off"
            )
          | undefined;
        autoCorrect?: boolean | undefined;
        autoFocus?: boolean | undefined;
        allowFontScaling?: boolean | undefined;
        caretHidden?: boolean | undefined;
        contextMenuHidden?: boolean | undefined;
        defaultValue?: string | undefined;
        editable?: boolean | undefined;
        forwardedRef?: React_2.Ref<TextInputInstance> | undefined;
        enterKeyHint?: EnterKeyHintTypeOptions_2 | undefined;
        inputMode?: InputModeOptions_2 | undefined;
        keyboardType?: KeyboardTypeOptions_2 | undefined;
        maxFontSizeMultiplier?: number | undefined;
        maxLength?: number | undefined;
        multiline?: boolean | undefined;
        onBlur?: ((e: TextInputBlurEvent_2) => unknown) | undefined;
        onChange?: ((e: TextInputChangeEvent_2) => unknown) | undefined;
        unstable_onChangeSync?:
          | ((e: TextInputChangeEvent_2) => unknown)
          | undefined;
        onChangeText?: ((text: string) => unknown) | undefined;
        unstable_onChangeTextSync?: ((text: string) => unknown) | undefined;
        onContentSizeChange?:
          | ((e: TextInputContentSizeChangeEvent_2) => unknown)
          | undefined;
        onEndEditing?: ((e: TextInputEndEditingEvent_2) => unknown) | undefined;
        onFocus?: ((e: TextInputFocusEvent_2) => unknown) | undefined;
        onKeyPress?: ((e: TextInputKeyPressEvent_2) => unknown) | undefined;
        unstable_onKeyPressSync?:
          | ((e: TextInputKeyPressEvent_2) => unknown)
          | undefined;
        onPress?: ((event: GestureResponderEvent) => unknown) | undefined;
        onPressIn?: ((event: GestureResponderEvent) => unknown) | undefined;
        onPressOut?: ((event: GestureResponderEvent) => unknown) | undefined;
        onSelectionChange?:
          | ((e: TextInputSelectionChangeEvent_2) => unknown)
          | undefined;
        onSubmitEditing?:
          | ((e: TextInputSubmitEditingEvent_2) => unknown)
          | undefined;
        onScroll?: ((e: ScrollEvent) => unknown) | undefined;
        placeholder?: string | undefined;
        placeholderTextColor?: ColorValue | undefined;
        readOnly?: boolean | undefined;
        returnKeyType?: ReturnKeyTypeOptions_2 | undefined;
        secureTextEntry?: boolean | undefined;
        selection?:
          | Readonly<{
              start: number;
              end?: number | undefined;
            }>
          | undefined;
        selectionColor?: ColorValue | undefined;
        selectTextOnFocus?: boolean | undefined;
        blurOnSubmit?: boolean | undefined;
        submitBehavior?: SubmitBehavior_2 | undefined;
        style?: TextStyleProp | undefined;
        value?: string | undefined;
      }
    > & {
      autoCapitalize?: AutoCapitalize_2 | undefined;
      autoComplete?:
        | (
            | "additional-name"
            | "address-line1"
            | "address-line2"
            | "birthdate-day"
            | "birthdate-full"
            | "birthdate-month"
            | "birthdate-year"
            | "cc-csc"
            | "cc-exp"
            | "cc-exp-day"
            | "cc-exp-month"
            | "cc-exp-year"
            | "cc-number"
            | "cc-name"
            | "cc-given-name"
            | "cc-middle-name"
            | "cc-family-name"
            | "cc-type"
            | "country"
            | "current-password"
            | "email"
            | "family-name"
            | "gender"
            | "given-name"
            | "honorific-prefix"
            | "honorific-suffix"
            | "name"
            | "name-family"
            | "name-given"
            | "name-middle"
            | "name-middle-initial"
            | "name-prefix"
            | "name-suffix"
            | "new-password"
            | "nickname"
            | "one-time-code"
            | "organization"
            | "organization-title"
            | "password"
            | "password-new"
            | "postal-address"
            | "postal-address-country"
            | "postal-address-extended"
            | "postal-address-extended-postal-code"
            | "postal-address-locality"
            | "postal-address-region"
            | "postal-code"
            | "street-address"
            | "sms-otp"
            | "tel"
            | "tel-country-code"
            | "tel-national"
            | "tel-device"
            | "url"
            | "username"
            | "username-new"
            | "off"
          )
        | undefined;
      autoCorrect?: boolean | undefined;
      autoFocus?: boolean | undefined;
      allowFontScaling?: boolean | undefined;
      caretHidden?: boolean | undefined;
      contextMenuHidden?: boolean | undefined;
      defaultValue?: string | undefined;
      editable?: boolean | undefined;
      forwardedRef?: React_2.Ref<TextInputInstance> | undefined;
      enterKeyHint?: EnterKeyHintTypeOptions_2 | undefined;
      inputMode?: InputModeOptions_2 | undefined;
      keyboardType?: KeyboardTypeOptions_2 | undefined;
      maxFontSizeMultiplier?: number | undefined;
      maxLength?: number | undefined;
      multiline?: boolean | undefined;
      onBlur?: ((e: TextInputBlurEvent_2) => unknown) | undefined;
      onChange?: ((e: TextInputChangeEvent_2) => unknown) | undefined;
      unstable_onChangeSync?:
        | ((e: TextInputChangeEvent_2) => unknown)
        | undefined;
      onChangeText?: ((text: string) => unknown) | undefined;
      unstable_onChangeTextSync?: ((text: string) => unknown) | undefined;
      onContentSizeChange?:
        | ((e: TextInputContentSizeChangeEvent_2) => unknown)
        | undefined;
      onEndEditing?: ((e: TextInputEndEditingEvent_2) => unknown) | undefined;
      onFocus?: ((e: TextInputFocusEvent_2) => unknown) | undefined;
      onKeyPress?: ((e: TextInputKeyPressEvent_2) => unknown) | undefined;
      unstable_onKeyPressSync?:
        | ((e: TextInputKeyPressEvent_2) => unknown)
        | undefined;
      onPress?: ((event: GestureResponderEvent) => unknown) | undefined;
      onPressIn?: ((event: GestureResponderEvent) => unknown) | undefined;
      onPressOut?: ((event: GestureResponderEvent) => unknown) | undefined;
      onSelectionChange?:
        | ((e: TextInputSelectionChangeEvent_2) => unknown)
        | undefined;
      onSubmitEditing?:
        | ((e: TextInputSubmitEditingEvent_2) => unknown)
        | undefined;
      onScroll?: ((e: ScrollEvent) => unknown) | undefined;
      placeholder?: string | undefined;
      placeholderTextColor?: ColorValue | undefined;
      readOnly?: boolean | undefined;
      returnKeyType?: ReturnKeyTypeOptions_2 | undefined;
      secureTextEntry?: boolean | undefined;
      selection?:
        | Readonly<{
            start: number;
            end?: number | undefined;
          }>
        | undefined;
      selectionColor?: ColorValue | undefined;
      selectTextOnFocus?: boolean | undefined;
      blurOnSubmit?: boolean | undefined;
      submitBehavior?: SubmitBehavior_2 | undefined;
      style?: TextStyleProp | undefined;
      value?: string | undefined;
    }
>;
export declare type TextInputScrollEvent =
  NativeSyntheticEvent<TextInputScrollEventData>;
declare type TextInputScrollEventData = {
  contentOffset: {
    x: number;
    y: number;
  };
};
export declare type TextInputSelectionChangeEvent =
  NativeSyntheticEvent<TextInputSelectionChangeEventData>;
declare type TextInputSelectionChangeEvent_2 =
  NativeSyntheticEvent<TextInputSelectionChangeEventData_2>;
declare type TextInputSelectionChangeEventData = Readonly<
  Omit<
    TargetEvent,
    keyof {
      selection: Selection_2;
    }
  > & {
    selection: Selection_2;
  }
>;
declare type TextInputSelectionChangeEventData_2 = Readonly<
  Omit<
    TargetEvent_2,
    keyof {
      selection: Selection_3;
    }
  > & {
    selection: Selection_3;
  }
>;
export declare type TextInputSubmitEditingEvent =
  NativeSyntheticEvent<TextInputSubmitEditingEventData>;
declare type TextInputSubmitEditingEvent_2 =
  NativeSyntheticEvent<TextInputSubmitEditingEventData_2>;
declare type TextInputSubmitEditingEventData = Readonly<
  Omit<
    TargetEvent,
    keyof {
      eventCount: number;
      text: string;
    }
  > & {
    eventCount: number;
    text: string;
  }
>;
declare type TextInputSubmitEditingEventData_2 = Readonly<
  Omit<
    TargetEvent_2,
    keyof {
      eventCount: number;
      text: string;
    }
  > & {
    eventCount: number;
    text: string;
  }
>;
declare type TextInputType = InternalTextInput & TextInputComponentStatics;
export declare type TextLayoutEvent = NativeSyntheticEvent<TextLayoutEventData>;
declare type TextLayoutEventData = Readonly<{
  lines: Array<TextLayoutLine>;
}>;
declare type TextLayoutLine = Readonly<
  Omit<
    LayoutRectangle,
    keyof {
      ascender: number;
      capHeight: number;
      descender: number;
      text: string;
      xHeight: number;
    }
  > & {
    ascender: number;
    capHeight: number;
    descender: number;
    text: string;
    xHeight: number;
  }
>;
export declare type TextProps = Readonly<
  Omit<
    PointerEventProps_2,
    keyof TextPropsIOS | keyof TextPropsAndroid | keyof TextBaseProps | keyof {}
  > &
    Omit<
      TextPropsIOS,
      keyof TextPropsAndroid | keyof TextBaseProps | keyof {}
    > &
    Omit<TextPropsAndroid, keyof TextBaseProps | keyof {}> &
    Omit<TextBaseProps, keyof {}> & {}
>;
declare type TextPropsAndroid = {
  disabled?: boolean | undefined;
  selectionColor?: ColorValue | undefined;
  dataDetectorType?:
    | ("phoneNumber" | "link" | "email" | "none" | "all")
    | undefined;
  textBreakStrategy?: ("balanced" | "highQuality" | "simple") | undefined;
  adjustsFontSizeToFit?: boolean | undefined;
  minimumFontScale?: number | undefined;
};
declare type TextPropsIOS = {
  adjustsFontSizeToFit?: boolean | undefined;
  dynamicTypeRamp?:
    | (
        | "caption2"
        | "caption1"
        | "footnote"
        | "subheadline"
        | "callout"
        | "body"
        | "headline"
        | "title3"
        | "title2"
        | "title1"
        | "largeTitle"
      )
    | undefined;
  suppressHighlighting?: boolean | undefined;
  lineBreakStrategyIOS?:
    | ("none" | "standard" | "hangul-word" | "push-out")
    | undefined;
};
export declare type TextStyle = ____TextStyle_Internal;
declare type TextStyleProp = ____TextStyleProp_Internal;
declare type Timespan = {
  startTime: number;
  endTime?: number;
  totalTime?: number;
  startExtras?: Extras;
  endExtras?: Extras;
};
declare const timing: (
  value: AnimatedValue | AnimatedValueXY | AnimatedColor,
  config: TimingAnimationConfig
) => CompositeAnimation;
declare const timing_2: typeof AnimatedImplementation_MODULE_EXPORT.timing;
declare type timing_2 = typeof timing_2;
declare type TimingAnimationConfig = Readonly<
  Omit<
    AnimationConfig,
    keyof {
      toValue:
        | number
        | AnimatedValue
        | Readonly<{
            x: number;
            y: number;
          }>
        | AnimatedValueXY
        | RgbaValue
        | AnimatedColor
        | AnimatedInterpolation<number>;
      easing?: (value: number) => number;
      duration?: number;
      delay?: number;
    }
  > & {
    toValue:
      | number
      | AnimatedValue
      | Readonly<{
          x: number;
          y: number;
        }>
      | AnimatedValueXY
      | RgbaValue
      | AnimatedColor
      | AnimatedInterpolation<number>;
    easing?: (value: number) => number;
    duration?: number;
    delay?: number;
  }
>;
export declare const ToastAndroid: typeof ToastAndroid_2;
export declare type ToastAndroid = typeof ToastAndroid;
declare const ToastAndroid_2: {
  SHORT: number;
  LONG: number;
  TOP: number;
  BOTTOM: number;
  CENTER: number;
  show: (message: string, duration: number) => void;
  showWithGravity: (message: string, duration: number, gravity: number) => void;
  showWithGravityAndOffset: (
    message: string,
    duration: number,
    gravity: number,
    xOffset: number,
    yOffset: number
  ) => void;
};
export declare const Touchable: typeof TouchableImpl;
export declare type Touchable = typeof Touchable;
declare const Touchable_2:
  | typeof TouchableNativeFeedback
  | typeof TouchableOpacity;
declare const Touchable_3: (
  props: Omit<
    TouchableOpacityProps,
    keyof {
      ref?: React_2.Ref<React_2.ComponentRef<typeof Animated.View>>;
    }
  > & {
    ref?: React_2.Ref<React_2.ComponentRef<typeof Animated.View>>;
  }
) => React_2.ReactNode;
export declare const TouchableHighlight: typeof TouchableHighlight_2;
export declare type TouchableHighlight = typeof TouchableHighlight;
declare const TouchableHighlight_2: (
  props: Omit<
    Readonly<
      Pick<
        TouchableHighlightProps,
        Exclude<
          keyof TouchableHighlightProps,
          keyof {
            readonly hostRef: unknown;
          }
        >
      >
    >,
    keyof {
      ref?: React_2.Ref<React_2.ComponentRef<typeof View>>;
    }
  > & {
    ref?: React_2.Ref<React_2.ComponentRef<typeof View>>;
  }
) => React_2.ReactNode;
declare type TouchableHighlightBaseProps = Readonly<{
  activeOpacity?: number | undefined;
  underlayColor?: ColorValue | undefined;
  style?: ViewStyleProp | undefined;
  onShowUnderlay?: (() => void) | undefined;
  onHideUnderlay?: (() => void) | undefined;
  testOnly_pressed?: boolean | undefined;
  hostRef: React_2.Ref<React_2.ComponentRef<typeof View>>;
}>;
export declare type TouchableHighlightProps = Readonly<
  Omit<
    TouchableWithoutFeedbackProps,
    | keyof AndroidProps
    | keyof IOSProps
    | keyof TouchableHighlightBaseProps
    | keyof {}
  > &
    Omit<
      AndroidProps,
      keyof IOSProps | keyof TouchableHighlightBaseProps | keyof {}
    > &
    Omit<IOSProps, keyof TouchableHighlightBaseProps | keyof {}> &
    Omit<TouchableHighlightBaseProps, keyof {}> & {}
>;
declare const TouchableImpl: {
  Mixin: typeof TouchableMixinImpl;
  renderDebugView: ($$PARAM_0$$: {
    color: ColorValue;
    hitSlop?: EdgeInsetsProp;
  }) => null | React_2.ReactNode;
};
declare const TouchableMixinImpl: {
  componentDidMount: () => void;
  componentWillUnmount: () => void;
  touchableGetInitialState: () => {
    touchable: {
      touchState: State_4 | undefined;
      responderID: GestureResponderEvent["currentTarget"] | undefined;
    };
  };
  touchableHandleResponderTerminationRequest: () => any;
  touchableHandleStartShouldSetResponder: () => any;
  touchableLongPressCancelsPress: () => boolean;
  touchableHandleResponderGrant: (e: GestureResponderEvent) => void;
  touchableHandleResponderRelease: (e: GestureResponderEvent) => void;
  touchableHandleResponderTerminate: (e: GestureResponderEvent) => void;
  touchableHandleResponderMove: (e: GestureResponderEvent) => void;
  touchableHandleFocus: (e: Event) => void;
  touchableHandleBlur: (e: Event) => void;
  withoutDefaultFocusAndBlur: {};
};
export declare class TouchableNativeFeedback extends React_2.Component<
  TouchableNativeFeedbackProps,
  State
> {
  static SelectableBackground: (
    rippleRadius?: null | undefined | number
  ) => Readonly<{
    attribute: "selectableItemBackground";
    type: "ThemeAttrAndroid";
    rippleRadius: number | undefined;
  }>;
  static SelectableBackgroundBorderless: (
    rippleRadius?: null | undefined | number
  ) => Readonly<{
    attribute: "selectableItemBackgroundBorderless";
    type: "ThemeAttrAndroid";
    rippleRadius: number | undefined;
  }>;
  static Ripple: (
    color: string,
    borderless: boolean,
    rippleRadius?: null | undefined | number
  ) => Readonly<{
    borderless: boolean;
    color: number | undefined;
    rippleRadius: number | undefined;
    type: "RippleAndroid";
  }>;
  static canUseNativeForeground: () => boolean;
  state: State;
  render(): React_2.ReactNode;
  componentDidUpdate(
    prevProps: TouchableNativeFeedbackProps,
    prevState: State
  ): void;
  componentDidMount(): unknown;
  componentWillUnmount(): void;
}
export declare type TouchableNativeFeedbackProps = Readonly<
  Omit<
    TouchableWithoutFeedbackProps,
    | keyof TVProps
    | keyof {
        background?:
          | (
              | Readonly<{
                  type: "ThemeAttrAndroid";
                  attribute:
                    | "selectableItemBackground"
                    | "selectableItemBackgroundBorderless";
                  rippleRadius: number | undefined;
                }>
              | Readonly<{
                  type: "RippleAndroid";
                  color: number | undefined;
                  borderless: boolean;
                  rippleRadius: number | undefined;
                }>
            )
          | undefined;
        useForeground?: boolean | undefined;
      }
  > &
    Omit<
      TVProps,
      keyof {
        background?:
          | (
              | Readonly<{
                  type: "ThemeAttrAndroid";
                  attribute:
                    | "selectableItemBackground"
                    | "selectableItemBackgroundBorderless";
                  rippleRadius: number | undefined;
                }>
              | Readonly<{
                  type: "RippleAndroid";
                  color: number | undefined;
                  borderless: boolean;
                  rippleRadius: number | undefined;
                }>
            )
          | undefined;
        useForeground?: boolean | undefined;
      }
    > & {
      background?:
        | (
            | Readonly<{
                type: "ThemeAttrAndroid";
                attribute:
                  | "selectableItemBackground"
                  | "selectableItemBackgroundBorderless";
                rippleRadius: number | undefined;
              }>
            | Readonly<{
                type: "RippleAndroid";
                color: number | undefined;
                borderless: boolean;
                rippleRadius: number | undefined;
              }>
          )
        | undefined;
      useForeground?: boolean | undefined;
    }
>;
export declare const TouchableOpacity: typeof Touchable_3;
export declare type TouchableOpacity = typeof TouchableOpacity;
declare type TouchableOpacityBaseProps = Readonly<{
  activeOpacity?: number | undefined;
  style?: ViewStyleProp | undefined;
  hostRef?: React_2.Ref<React_2.ComponentRef<typeof Animated.View>> | undefined;
}>;
export declare type TouchableOpacityProps = Readonly<
  Omit<
    TouchableWithoutFeedbackProps,
    keyof TVProps_2 | keyof TouchableOpacityBaseProps | keyof {}
  > &
    Omit<TVProps_2, keyof TouchableOpacityBaseProps | keyof {}> &
    Omit<TouchableOpacityBaseProps, keyof {}> & {}
>;
export declare function TouchableWithoutFeedback(
  props: TouchableWithoutFeedbackProps
): React_2.ReactNode;
export declare type TouchableWithoutFeedbackProps = Readonly<
  {
    children?: React_2.ReactNode | undefined;
    delayLongPress?: number | undefined;
    delayPressIn?: number | undefined;
    delayPressOut?: number | undefined;
    disabled?: boolean | undefined;
    focusable?: boolean | undefined;
    hitSlop?: EdgeInsetsOrSizeProp | undefined;
    id?: string;
    importantForAccessibility?:
      | ("auto" | "yes" | "no" | "no-hide-descendants")
      | undefined;
    nativeID?: string | undefined;
    onAccessibilityAction?:
      | ((event: AccessibilityActionEvent) => unknown)
      | undefined;
    onBlur?: ((event: BlurEvent) => unknown) | undefined;
    onFocus?: ((event: FocusEvent_2) => unknown) | undefined;
    onLayout?: ((event: LayoutChangeEvent) => unknown) | undefined;
    onLongPress?: ((event: GestureResponderEvent) => unknown) | undefined;
    onPress?: ((event: GestureResponderEvent) => unknown) | undefined;
    onPressIn?: ((event: GestureResponderEvent) => unknown) | undefined;
    onPressOut?: ((event: GestureResponderEvent) => unknown) | undefined;
    pressRetentionOffset?: EdgeInsetsOrSizeProp | undefined;
    rejectResponderTermination?: boolean | undefined;
    testID?: string | undefined;
    style?: ViewStyleProp | undefined;
  } & TouchableWithoutFeedbackPropsAndroid &
    TouchableWithoutFeedbackPropsIOS &
    AccessibilityProps
>;
declare type TouchableWithoutFeedbackPropsAndroid = {
  touchSoundDisabled?: boolean | undefined;
};
declare type TouchableWithoutFeedbackPropsIOS = {};
declare type TouchEventProps = Readonly<{
  onTouchCancel?: ((e: GestureResponderEvent) => void) | undefined;
  onTouchCancelCapture?: ((e: GestureResponderEvent) => void) | undefined;
  onTouchEnd?: ((e: GestureResponderEvent) => void) | undefined;
  onTouchEndCapture?: ((e: GestureResponderEvent) => void) | undefined;
  onTouchMove?: ((e: GestureResponderEvent) => void) | undefined;
  onTouchMoveCapture?: ((e: GestureResponderEvent) => void) | undefined;
  onTouchStart?: ((e: GestureResponderEvent) => void) | undefined;
  onTouchStartCapture?: ((e: GestureResponderEvent) => void) | undefined;
}>;
declare interface TurboModule extends DEPRECATED_RCTExport<void> {}
export declare namespace TurboModuleRegistry {
  export { get, getEnforcing };
}
declare type TVProps = {
  hasTVPreferredFocus?: boolean | undefined;
  nextFocusDown?: number | undefined;
  nextFocusForward?: number | undefined;
  nextFocusLeft?: number | undefined;
  nextFocusRight?: number | undefined;
  nextFocusUp?: number | undefined;
};
declare type TVProps_2 = Readonly<{
  hasTVPreferredFocus?: boolean | undefined;
  nextFocusDown?: number | undefined;
  nextFocusForward?: number | undefined;
  nextFocusLeft?: number | undefined;
  nextFocusRight?: number | undefined;
  nextFocusUp?: number | undefined;
}>;
export declare type TVViewPropsIOS = Readonly<{
  isTVSelectable?: boolean;
  hasTVPreferredFocus?: boolean;
  tvParallaxShiftDistanceX?: number;
  tvParallaxShiftDistanceY?: number;
  tvParallaxTiltAngle?: number;
  tvParallaxMagnification?: number;
}>;
export declare const UIManager: typeof UIManager_2;
export declare type UIManager = typeof UIManager;
declare const UIManager_2: UIManagerJSInterface;
declare interface UIManagerJSInterface extends Spec_2 {
  readonly getViewManagerConfig: (viewManagerName: string) => Object;
  readonly hasViewManagerConfig: (viewManagerName: string) => boolean;
}
declare function unforkEvent(
  event: (null | undefined | AnimatedEvent) | (null | undefined | Function),
  listener: Function
): void;
declare const unforkEvent_2: typeof AnimatedImplementation_MODULE_EXPORT.unforkEvent;
declare type unforkEvent_2 = typeof unforkEvent_2;
declare function unmountApplicationComponentAtRootTag(rootTag: RootTag): void;
declare type UnsafeMixed = unknown;
declare type UnsafeObject = Object;
declare type UnsafeObject_2 = Object;
declare type UnsafeObject_3 = Object;
export declare function unstable_batchedUpdates<T>(
  fn: ($$PARAM_0$$: T) => void,
  bookkeeping: T
): void;
export declare function useAnimatedValue(
  initialValue: number,
  config?: null | undefined | Animated.AnimatedConfig
): Animated.Value;
export declare function useColorScheme(): null | undefined | ColorSchemeName;
export declare function useWindowDimensions():
  | DisplayMetrics
  | DisplayMetricsAndroid;
export declare const UTFSequence: typeof UTFSequence_2;
export declare type UTFSequence = typeof UTFSequence;
declare const UTFSequence_2: {
  BOM: string;
  BULLET: string;
  BULLET_SP: string;
  MDASH: string;
  MDASH_SP: string;
  MIDDOT: string;
  MIDDOT_KATAKANA: string;
  MIDDOT_SP: string;
  NBSP: string;
  NDASH: string;
  NDASH_SP: string;
  NEWLINE: string;
  PIZZA: string;
  TRIANGLE_LEFT: string;
  TRIANGLE_RIGHT: string;
};
declare type Value = {
  horizontal: boolean;
} | null;
declare type ValueXYListenerCallback = (value: {
  x: number;
  y: number;
}) => unknown;
export declare const Vibration: typeof Vibration_2;
export declare type Vibration = typeof Vibration;
declare const Vibration_2: {
  vibrate: (pattern?: number | Array<number>, repeat?: boolean) => void;
  cancel: () => void;
};
export declare const View: typeof View_2;
export declare type View = typeof View;
declare const View_2: (
  props: Omit<
    ViewProps,
    keyof {
      ref?: React_2.Ref<
        React_2.ComponentRef<typeof ViewNativeComponent_MODULE_EXPORT>
      >;
    }
  > & {
    ref?: React_2.Ref<
      React_2.ComponentRef<typeof ViewNativeComponent_MODULE_EXPORT>
    >;
  }
) => React_2.ReactNode;
declare type View_3 = typeof View;
declare type ViewBaseProps = Readonly<{
  children?: React_2.ReactNode;
  style?: ViewStyleProp | undefined;
  collapsable?: boolean | undefined;
  collapsableChildren?: boolean | undefined;
  id?: string;
  testID?: string | undefined;
  nativeID?: string | undefined;
  needsOffscreenAlphaCompositing?: boolean | undefined;
  hitSlop?: EdgeInsetsOrSizeProp | undefined;
  pointerEvents?: ("auto" | "box-none" | "box-only" | "none") | undefined;
  removeClippedSubviews?: boolean | undefined;
}>;
declare const ViewNativeComponent: HostComponent<ViewProps>;
declare const ViewNativeComponent_MODULE_EXPORT: typeof ViewNativeComponent;
declare type ViewNativeComponent_MODULE_EXPORT =
  typeof ViewNativeComponent_MODULE_EXPORT;
export declare type ViewProps = Readonly<
  Omit<
    DirectEventProps,
    | keyof GestureResponderHandlers
    | keyof MouseEventProps
    | keyof PointerEventProps
    | keyof FocusEventProps
    | keyof TouchEventProps
    | keyof ViewPropsAndroid
    | keyof ViewPropsIOS
    | keyof AccessibilityProps
    | keyof ViewBaseProps
    | keyof {}
  > &
    Omit<
      GestureResponderHandlers,
      | keyof MouseEventProps
      | keyof PointerEventProps
      | keyof FocusEventProps
      | keyof TouchEventProps
      | keyof ViewPropsAndroid
      | keyof ViewPropsIOS
      | keyof AccessibilityProps
      | keyof ViewBaseProps
      | keyof {}
    > &
    Omit<
      MouseEventProps,
      | keyof PointerEventProps
      | keyof FocusEventProps
      | keyof TouchEventProps
      | keyof ViewPropsAndroid
      | keyof ViewPropsIOS
      | keyof AccessibilityProps
      | keyof ViewBaseProps
      | keyof {}
    > &
    Omit<
      PointerEventProps,
      | keyof FocusEventProps
      | keyof TouchEventProps
      | keyof ViewPropsAndroid
      | keyof ViewPropsIOS
      | keyof AccessibilityProps
      | keyof ViewBaseProps
      | keyof {}
    > &
    Omit<
      FocusEventProps,
      | keyof TouchEventProps
      | keyof ViewPropsAndroid
      | keyof ViewPropsIOS
      | keyof AccessibilityProps
      | keyof ViewBaseProps
      | keyof {}
    > &
    Omit<
      TouchEventProps,
      | keyof ViewPropsAndroid
      | keyof ViewPropsIOS
      | keyof AccessibilityProps
      | keyof ViewBaseProps
      | keyof {}
    > &
    Omit<
      ViewPropsAndroid,
      | keyof ViewPropsIOS
      | keyof AccessibilityProps
      | keyof ViewBaseProps
      | keyof {}
    > &
    Omit<
      ViewPropsIOS,
      keyof AccessibilityProps | keyof ViewBaseProps | keyof {}
    > &
    Omit<AccessibilityProps, keyof ViewBaseProps | keyof {}> &
    Omit<ViewBaseProps, keyof {}> & {}
>;
export declare type ViewPropsAndroid = Readonly<{
  nativeBackgroundAndroid?: AndroidDrawable | undefined;
  nativeForegroundAndroid?: AndroidDrawable | undefined;
  renderToHardwareTextureAndroid?: boolean | undefined;
  hasTVPreferredFocus?: boolean | undefined;
  nextFocusDown?: number | undefined;
  nextFocusForward?: number | undefined;
  nextFocusLeft?: number | undefined;
  nextFocusRight?: number | undefined;
  nextFocusUp?: number | undefined;
  focusable?: boolean | undefined;
  tabIndex?: 0 | -1;
  onClick?: ((event: GestureResponderEvent) => unknown) | undefined;
}>;
export declare type ViewPropsIOS = Readonly<{
  shouldRasterizeIOS?: boolean | undefined;
}>;
export declare type ViewStyle = ____ViewStyle_Internal;
declare type ViewStyleProp = ____ViewStyleProp_Internal;
declare type ViewStyleProp_2 = React_2.JSX.LibraryManagedAttributes<
  typeof View,
  React_2.ComponentProps<typeof View>
>["style"];
export declare const VirtualizedList: typeof VirtualizedList_3;
export declare type VirtualizedList = typeof VirtualizedList;
declare const VirtualizedList_2: typeof VirtualizedLists.VirtualizedList;
declare const VirtualizedList_3: VirtualizedListType;
export { VirtualizedListProps };
declare type VirtualizedListProps_2 = React_2.JSX.LibraryManagedAttributes<
  typeof VirtualizedList_2,
  React_2.ComponentProps<typeof VirtualizedList_2>
>;
declare type VirtualizedListType = typeof VirtualizedLists.VirtualizedList;
export declare const VirtualizedSectionList: typeof VirtualizedSectionList_2;
export declare type VirtualizedSectionList = typeof VirtualizedSectionList;
declare const VirtualizedSectionList_2: VirtualizedSectionListType;
export { VirtualizedSectionListProps };
declare type VirtualizedSectionListType =
  typeof VirtualizedLists.VirtualizedSectionList;
declare type WebPlatform = {
  OS: "web";
  get constants(): {
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: string | undefined;
    };
  };
  get isTV(): boolean;
  get isTesting(): boolean;
  get isDisableAnimations(): boolean;
  select: <T>(spec: PlatformSelectSpec<T>) => T;
};
declare type WindowsPlatform = {
  OS: "windows";
  get Version(): number;
  get constants(): {
    isTesting: boolean;
    isDisableAnimations?: boolean;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: string | undefined;
    };
    reactNativeWindowsVersion: {
      major: number;
      minor: number;
      patch: number;
    };
    osVersion: number;
  };
  get isTesting(): boolean;
  get isDisableAnimations(): boolean;
  get isTV(): boolean;
  select: <T>(spec: PlatformSelectSpec<T>) => T;
};
declare type WithAnimatedValue<T> = T extends Builtin | Nullable
  ? T
  : T extends Primitive
  ?
      | T
      | AnimatedNode
      | AnimatedAddition
      | AnimatedSubtraction
      | AnimatedDivision
      | AnimatedMultiplication
      | AnimatedModulo
      | AnimatedDiffClamp
      | AnimatedValue
      | AnimatedInterpolation<number | string>
      | AnimatedInterpolation<number>
      | AnimatedInterpolation<string>
  : T extends ReadonlyArray<infer P>
  ? ReadonlyArray<WithAnimatedValue<P>>
  : T extends {}
  ? { readonly [K in keyof T]: WithAnimatedValue<T[K]> }
  : T;
declare type WithDefault<
  Type extends DefaultTypes,
  Value extends (null | undefined | Type) | string
> = null | undefined | Type;
declare const Wrapper: (
  props: Omit<
    ScrollViewProps,
    keyof {
      ref?: React_2.Ref<PublicScrollViewInstance>;
    }
  > & {
    ref?: React_2.Ref<PublicScrollViewInstance>;
  }
) => React_2.ReactNode;
declare function Wrapper_2(
  $$PARAM_0$$: Omit<ModalRefProps, keyof ModalProps | keyof {}> &
    Omit<ModalProps, keyof {}> & {}
): React_2.ReactNode;
export declare type WrapperComponentProvider = (
  appParameters: Object
) => React_2.ComponentType<any>;
export {};
