import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { TextWithCursorProps } from './props';
import useBlink from './hooks/useBlink';

const TextWithCursor = (textWithCursorProps: TextWithCursorProps) => {
  const { children, cursorVisible, style, cursorProps, ...rest } = textWithCursorProps;

  const blinkVisible = useBlink();

  const [isTyping, setIsTyping] = React.useState(false);

  const timeout = React.useRef<NodeJS.Timeout>();

  const cursorVisibility = React.useMemo(() => {
    return cursorVisible && (blinkVisible || isTyping);
  }, [blinkVisible, cursorVisible, isTyping]);

  const cursorFontSize = React.useMemo(() => {
    return StyleSheet.flatten([styles.text, style]).fontSize || 18;
  }, [style]);

  React.useEffect(() => {
    setIsTyping(true);
    timeout.current = setTimeout(() => {
      setIsTyping(false);
    }, 500);

    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [children]);

  return (
    <View style={styles.textWithCursorView}>
      <Text style={[styles.text, style]} {...rest}>
        {children}
      </Text>
      <Text
        {...cursorProps}
        style={[
          {
            fontSize: cursorFontSize * (cursorFontSize < 26 ? 1.42 : 1.25),
          },
          styles.cursor,
          cursorProps?.style,
          !cursorVisibility ? styles.cursorHidden : undefined,
        ]}
      >
        |
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textWithCursorView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
  cursor: {
    color: '#6495ed',
    marginTop: -7,
    marginLeft: -3,
  },
  cursorHidden: {
    color: 'transparent',
  },
});

export default TextWithCursor;
