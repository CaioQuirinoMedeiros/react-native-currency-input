import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import type { TextWithCursorProps } from './props';
import useBlink from './hooks/useBlink';

const TextWithCursor = (textWithCursorProps: TextWithCursorProps) => {
  const {
    children,
    cursorVisible,
    style,
    cursorProps,
    ...rest
  } = textWithCursorProps;

  const blinkVisible = useBlink();

  const cursorVisibility = React.useMemo(() => {
    return cursorVisible && blinkVisible;
  }, [blinkVisible, cursorVisible]);

  const cursorFontSize = React.useMemo(() => {
    return StyleSheet.flatten([styles.text, style]).fontSize || 18;
  }, [style]);

  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
      <Text
        {...cursorProps}
        style={[
          {
            fontSize: cursorFontSize * (cursorFontSize < 26 ? 1.32 : 1.25),
          },
          styles.cursor,
          cursorProps?.style,
          !cursorVisibility ? styles.cursorHidden : undefined,
        ]}
      >
        |
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: -2,
  },
  cursor: {
    color: '#6495ed',
  },
  cursorHidden: {
    color: 'transparent',
  },
});

export default TextWithCursor;
