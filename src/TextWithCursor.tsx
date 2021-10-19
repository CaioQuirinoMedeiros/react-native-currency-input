import * as React from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';

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
    <Text style={[styles.text, style]} {...rest}>
      {children}
      <View style={styles.cursorView}>
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
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: -3.2,
  },
  cursorView: {},
  cursor: {
    color: '#6495ed',
    marginLeft: -3.2,
    top: Platform.OS === 'ios' ? 1 : 10,
  },
  cursorHidden: {
    color: 'transparent',
  },
});

export default TextWithCursor;
