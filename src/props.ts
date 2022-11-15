import type React from 'react';
import type { TextInputProps, StyleProp, ViewStyle, TextProps } from 'react-native';

export interface FormatNumberOptions {
  /**
   * Character for thousands delimiter.
   */
  delimiter?: string;

  /**
   * Set this to `true` to disable negative values.
   */
  ignoreNegative?: boolean;

  /**
   * Decimal precision. Defaults to 2.
   */
  precision?: number;

  /**
   * Decimal separator character.
   */
  separator?: string;

  /**
   * Character to be prefixed on the value.
   */
  prefix?: string;

  /**
   * Character to be suffixed on the value.
   */
  suffix?: string;

  /**
   * Set this to `true` to show the `+` character on positive values.
   */
  showPositiveSign?: boolean;

  /**
   * Where the negative/positive sign (+/-) should be placed. Defaults to "afterPrefix".
   * Use `showPositiveSign` if you want to show the `+` sign.
   */
  signPosition?: 'beforePrefix' | 'afterPrefix';
}

export interface CurrencyInputProps extends Omit<TextInputProps, 'value'> {
  renderTextInput?: (props: TextInputProps) => JSX.Element;
  /**
   * Character for thousands delimiter.
   */
  delimiter?: string;

  /**
   * Max value allowed on input.
   * Notice that this might cause unexpected behavior if you pass a value higher than this on input `value`. In that case, consider do your own validation instead of using this property
   */
  maxValue?: number;

  /**
   * Min value allowed on input.
   * Notice that this might cause unexpected behavior if you pass a value lower than this on input `value`. In that case, consider do your own validation instead of using this property
   */
  minValue?: number;

  /**
   * Callback that is called when the input's value changes.
   * @param value The number value.
   */
  onChangeValue?(value: number | null): void;

  /**
   * Decimal precision. Defaults to 2.
   */
  precision?: number;

  /**
   * Decimal separator character.
   */
  separator?: string;

  /**
   * Character to be prefixed on the value.
   */
  prefix?: string;

  /**
   * Character to be suffixed on the value.
   */
  suffix?: string;

  /**
   * @deprecated. Use `prefix` instead.
   */
  unit?: string;

  /**
   * The number value of the input.
   * IMPORTANT: This is used to control the component, but keep in mind that this is not the final `value` property of the `TextInput`
   */
  value: number | null;

  /**
   * Set this to `true` to show the `+` character on positive values.
   */
  showPositiveSign?: boolean;

  /**
   * Where the negative/positive sign (+/-) should be placed. Defaults to "afterPrefix".
   * Use `showPositiveSign` if you want to show the `+` sign.
   */
  signPosition?: 'beforePrefix' | 'afterPrefix';
}

export interface FakeCurrencyInputProps extends CurrencyInputProps {
  /**
   * Style for the container View that wraps the Text
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Color of the caret. Defaults to #6495ed
   */
  caretColor?: string;
}

export interface TextWithCursorProps extends TextProps {
  children?: React.ReactNode;

  /**
   * Show or hides the cursor. Defaults to false
   */
  cursorVisible?: boolean;

  /**
   * Props for the cursor. Use this to set a custom `style` prop.
   */
  cursorProps?: TextProps;
}
