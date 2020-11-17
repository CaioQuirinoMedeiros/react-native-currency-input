import * as React from 'react';
import type { BlinkProps } from '../props';

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
