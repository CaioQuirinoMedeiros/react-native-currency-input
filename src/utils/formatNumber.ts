interface FormatNumberOptions {
  precision?: number;
  separator?: string;
  delimiter?: string;
  unit?: string;
  ignoreNegative?: boolean;
}

export default (input: number, options?: FormatNumberOptions) => {
  const {
    precision,
    separator = ',',
    delimiter = '.',
    unit = '',
    ignoreNegative,
  } = options || {};

  const negative = ignoreNegative ? false : input < 0;
  const sign = negative ? '-' : '';

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

  formattedNumber = `${unit}${sign}${formattedNumber}`;

  return formattedNumber;
};
