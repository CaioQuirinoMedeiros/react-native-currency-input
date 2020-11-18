import type {
  TextInputProps,
  ViewProps,
  TextProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface FormatNumberOptions {
  /**
   * Character for thousands delimiter.
   */
  delimiter?: string;

  /**
   * Set this to true to disable negative values.
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
  unit?: string;
}

export interface CurrencyInputProps extends Omit<TextInputProps, 'value'> {
  /**
   * Character for thousands delimiter.
   */
  delimiter?: string;

  /**
   * Set this to true to disable negative values.
   */
  ignoreNegative?: boolean;

  /**
   * Max value allowed on input.
   * Notice that this might cause unexpected behavior if you pass a value higher than this direct to the input. In that case, consider do your own validation instead of using this property
   */
  maxValue?: number;

  /**
   * Min value allowed on input.
   * Notice that this might cause unexpected behavior if you pass a value lower than this direct to the input. In that case, consider do your own validation instead of using this property
   */
  minValue?: number;

  /**
   * Callback that is called when the input's value changes.
   * @param value The changed number value.
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
  unit?: string;

  /**
   * The number value of the input.
   * IMPORTANT: this is not the input's text value, the input is controlled by it's number value.
   */
  value: number | null;
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

export interface BlinkProps extends ViewProps {
  /**
   * Blink rate in milliseconds. Defaults to 500.
   */
  blinkRate?: number;
}
