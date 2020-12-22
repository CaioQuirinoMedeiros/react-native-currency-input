import * as React from 'react';
import type { ViewProps } from 'react-native';
export interface BlinkProps extends ViewProps {
  /**
   * Blink rate in milliseconds. Defaults to 500.
   */
  blinkRate?: number;
}

export default (blinkProps?: BlinkProps) => {
  const { blinkRate = 500 } = blinkProps || {};

  const [visible, setVisible] = React.useState(true);

  const interval = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    interval.current = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, blinkRate);

    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [blinkRate]);

  return visible;
};
