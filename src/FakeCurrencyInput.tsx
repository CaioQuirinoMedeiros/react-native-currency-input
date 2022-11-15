import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { CurrencyInput } from './CurrencyInput';
import TextWithCursor from './TextWithCursor';
import type { FakeCurrencyInputProps } from './props';

/**
 * This component hides the real currency input and use a Text to imitate the input. So you won't get the flickering issue, but will lost selection functionality.
 * The cursor is not a real cursor, but a pipe character (|) and it'll be always at the end of the text.
 */
const FakeCurrencyInput = React.forwardRef<TextInput, FakeCurrencyInputProps>(
  (props, ref) => {
    const {
      value,
      style,
      onChangeText,
      containerStyle,
      caretHidden,
      caretColor,
      selectionColor,
      onFocus,
      onBlur,
      ...rest
    } = props;

    const [focused, setFocused] = React.useState(false);
    const [formattedValue, setFormattedValue] = React.useState('');

    return (
      <View style={[containerStyle, styles.inputContainer]}>
        <TextWithCursor
          style={style}
          cursorVisible={focused && !caretHidden}
          cursorProps={{ style: { color: caretColor || selectionColor } }}
        >
          {formattedValue}
        </TextWithCursor>
        <CurrencyInput
          value={value}
          onChangeText={(text) => {
            setFormattedValue(text);
            onChangeText && onChangeText(text);
          }}
          {...rest}
          selectionColor="transparent"
          caretHidden
          onFocus={(e) => {
            setFocused(true);
            onFocus && onFocus(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur && onBlur(e);
          }}
          style={styles.inputHidden}
          ref={ref}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  inputHidden: {
    color: 'transparent',
    position: 'absolute',
    top: 0,
    left: -20,
    right: 0,
    bottom: 0,
    fontSize: 1,
  },
});

export default FakeCurrencyInput;
