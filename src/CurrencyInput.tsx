import * as React from 'react';
import { TextInput } from 'react-native';

import formatNumber from './utils/formatNumber';
import type { CurrencyInputProps } from './props';

export default React.forwardRef<TextInput, CurrencyInputProps>((props, ref) => {
  const {
    value,
    onChangeText,
    onChangeValue,
    separator,
    delimiter,
    unit = '',
    precision = 2,
    maxValue,
    minValue,
    ignoreNegative,
    ...rest
  } = props;

  const [startNegative, setStartNegative] = React.useState(false);

  const formattedValue = React.useMemo(() => {
    if (!!value || value === 0 || value === -0) {
      return formatNumber(value, {
        separator,
        unit,
        precision,
        delimiter,
        ignoreNegative: !!ignoreNegative,
      });
    } else {
      return '';
    }
  }, [delimiter, ignoreNegative, precision, separator, unit, value]);

  React.useEffect(() => {
    onChangeText && onChangeText(formattedValue);
  }, [formattedValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeText = React.useCallback(
    (text: string) => {
      const textWithoutUnit = text.replace(unit, '');

      // Allow starting with a minus sign
      if (/^(-|-0)$/.test(textWithoutUnit) && !ignoreNegative) {
        setStartNegative(true);
        onChangeText && onChangeText(unit + '-');
        return;
      } else {
        setStartNegative(false);
      }

      const negative = textWithoutUnit.charAt(0) === '-';

      const textNumericValue = text.replace(/\D+/g, '');

      const numberValue = Number(textNumericValue) * (negative ? -1 : 1);

      const zerosOnValue = textNumericValue.replace(/[^0]/g, '').length;

      let newValue: number | null;

      if (!textNumericValue || (!numberValue && zerosOnValue === precision)) {
        // Allow to clean the value instead of beign 0
        newValue = null;
      } else {
        newValue = numberValue / 10 ** precision;
      }

      if (newValue && maxValue && newValue > maxValue) {
        return;
      } else if (newValue && minValue && newValue < minValue) {
        return;
      }

      onChangeValue && onChangeValue(newValue);
    },
    [
      unit,
      ignoreNegative,
      precision,
      maxValue,
      minValue,
      onChangeValue,
      onChangeText,
    ]
  );

  return (
    <TextInput
      value={startNegative ? unit + '-' : formattedValue}
      onChangeText={handleChangeText}
      keyboardType="numeric"
      {...rest}
      ref={ref}
    />
  );
});
