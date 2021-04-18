import type { FormatNumberOptions } from '../props';

interface AddSignPrefixAndSuffixProps {
  sign?: '+' | '-' | '';
  prefix?: string;
  suffix?: string;
  signPosition: 'beforePrefix' | 'afterPrefix';
}

export const addSignPrefixAndSuffix = (
  value: any,
  options: AddSignPrefixAndSuffixProps
) => {
  const { prefix, sign, suffix, signPosition } = options;

  switch (signPosition) {
    case 'beforePrefix':
      return `${sign}${prefix}${value}${suffix}`;
    case 'afterPrefix':
      return `${prefix}${sign}${value}${suffix}`;
  }
};

export default (input: number, options?: FormatNumberOptions) => {
  const {
    precision,
    separator = ',',
    delimiter = '.',
    prefix = '',
    suffix = '',
    ignoreNegative,
    showPositiveSign,
    signPosition = 'afterPrefix',
  } = options || {};

  const negative = ignoreNegative ? false : input < 0;
  const sign = negative ? '-' : showPositiveSign ? '+' : '';

  const string = Math.abs(input).toFixed(precision);

  const parts = string.split('.');
  const buffer = [];

  let number = parts[0];
  while (number.length > 0) {
    buffer.unshift(number.substr(Math.max(0, number.length - 3), 3));
    number = number.substr(0, number.length - 3);
  }

  let formattedNumber = '';
  formattedNumber = buffer.join(delimiter);

  const decimals = parts[1];
  if (!!precision && decimals) {
    formattedNumber += separator + decimals;
  }

  return addSignPrefixAndSuffix(formattedNumber, {
    prefix,
    suffix,
    sign,
    signPosition,
  });
};
