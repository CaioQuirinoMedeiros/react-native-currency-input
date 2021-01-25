<h1 align="center">React Native Currency Input</h1>

<p align="center">
  <img src="https://img.shields.io/badge/platform-Android%20%7C%20iOS-brightgreen" />
  <img src="https://img.shields.io/npm/dm/react-native-currency-input" />
  <img src="https://img.shields.io/github/issues-closed-raw/CaioQuirinoMedeiros/react-native-currency-input" />
  <img src="https://img.shields.io/bundlephobia/min/react-native-currency-input" />
  <img src="https://img.shields.io/npm/types/react-native-currency-input" />
  <img src="https://img.shields.io/npm/v/react-native-currency-input" />
  <img src="https://img.shields.io/github/license/CaioQuirinoMedeiros/react-native-currency-input" />
</p>

A simple currency input component for both iOS and Android.

The goal of `react-native-currency-input` is to offer a simple and effective way to handle number inputs with custom format, usually a currency input case, but it can actually be used for other purposes.

<p align="center">
  <img src="https://media.giphy.com/media/q2D5lPppXYQef8YtSs/giphy.gif" />
</p>

## Features

- A simple and practical component for number inputs
- It's just a [`<TextInput/>`](https://facebook.github.io/react-native/docs/textinput.html) component, so you can use its props and it's easy to customize
- Set precision, delimiter, separator and unit so you can actually have any number format you want
- It handles negative values, in addition to having a prop to disable it
- Set minimun and maximum value
- Use React Native ES6 and React Hooks

**BONUS**

- [`<FakeCurrencyInput />`](#fakecurrencyinput): A fake input that hides the real TextInput in order to terminate the [flickering issue](https://reactnative.dev/docs/textinput#value)
- [`formatNumber()`](#formatnumbervalue-options): A function that formats number

## Installation

```sh
npm install react-native-currency-input
```

or

```sh
yarn add react-native-currency-input
```

## Usage

```javascript
import CurrencyInput from 'react-native-currency-input';

function MyComponent() {
  const [value, setValue] = React.useState(2310.458); // can also be null

  return (
    <CurrencyInput
      value={value}
      onChangeValue={setValue}
      unit="$"
      delimiter=","
      separator="."
      precision={2}
      onChangeText={(formattedValue) => {
        console.log(formattedValue); // $2,310.46
      }}
    />
  );
}
```

## Props

This component uses the same props as [`<TextInput/>`](https://facebook.github.io/react-native/docs/textinput.html). Below are the additional props for this component:

| Prop                 | Type     | Default | Description                                                                                                                                  |
| -------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **`value`**          | number   |         | The value for controlled input. **REQUIRED**                                                                                                 |
| **`onChangeValue`**  | function |         | Callback that is called when the input's value changes. **REQUIRED**                                                                         |
| **`unit`**           | string   |         | Character to be prefixed on the value.                                                                                                       |
| **`delimiter`**      | string   | ,       | Character for thousands delimiter.                                                                                                           |
| **`separator`**      | string   | .       | Decimal separator character.                                                                                                                 |
| **`precision`**      | number   | 2       | Decimal precision.                                                                                                                           |
| **`ignoreNegative`** | boolean  | false   | Set this to true to disable negative values.                                                                                                 |
| **`maxValue`**       | number   |         | Max value allowed. This might cause unexpected behavior if you pass a value higher than this direct to the input.                            |
| **`minValue`**       | number   |         | Min value allowed. This might cause unexpected behavior if you pass a value lower than this direct to the input.                             |
| **`onChangeText`**   | function |         | Callback that is called when the input's text changes. **IMPORTANT**: This does not control the input value, you should use `onChangeValue`. |

## Example

See [EXAMPLE](example)

```sh
git clone https://github.com/caioquirinomedeiros/react-native-currency-input.git
cd react-native-currency-input/example
yarn
yarn android / yarn ios
```

<br>

## `FakeCurrencyInput`

This component hides the real currency input and use a Text to imitate the input, so you won't get the flickering issue but will lost the selection functionality. The cursor is not a real cursor, but a pipe character (|) that will be always at the end of the text. It also have a wrapper View with position 'relative' on which the Text Input is stretched over.

- Pros
  - No [flickering issue](https://reactnative.dev/docs/textinput#value) as a controlled input component
  - The cursor is locked at the end, avoiding the user to mess up with the mask
- Cons
  - Lost of selection functionality... The user will still be able to copy/paste, but with a bad experience
  - The cursor is locked at the end... You may have users who won't like that

### `FakeCurrencyInput` Usage

```javascript
import { FakeCurrencyInput } from 'react-native-currency-input';

function MyComponent() {
  const [value, setValue] = ReactuseState(0); // can also be null

  return (
    <FakeCurrencyInput
      value={value}
      onChangeValue={setValue}
      unit="$"
      delimiter=","
      separator="."
      precision={2}
      onChangeText={(formattedValue) => {
        // ...
      }}
    />
  );
}
```

### `FakeCurrencyInput` Props

It includes the same props of the CurrencyInput with the additional of the following:

| Prop                 | Type       | Default | Description                                       |
| -------------------- | ---------- | ------- | ------------------------------------------------- |
| **`containerStyle`** | style prop |         | Style for the container View that wraps the Text. |
| **`caretColor`**     | string     | #6495ed | Color of the caret.                               |

<br>

## `formatNumber(value, options)`

```javascript
import { formatNumber } from 'react-native-currency-input';

const value = -2375923.3;

const formattedValue = formatNumber(value, {
  separator: ',',
  unit: 'R$ ',
  precision: 2,
  delimiter: '.',
  ignoreNegative: true,
});

console.log(formattedValue); // R$ 2.375.923,30
```

### `options` (optional)

| Name                 | Type    | Default | Description                                  |
| -------------------- | ------- | ------- | -------------------------------------------- |
| **`unit`**           | string  |         | Character to be prefixed on the value.       |
| **`delimiter`**      | string  | ,       | Character for thousands delimiter.           |
| **`separator`**      | string  | .       | Decimal separator character.                 |
| **`precision`**      | number  | 2       | Decimal precision.                           |
| **`ignoreNegative`** | boolean | false   | Set this to true to disable negative values. |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

react-native-currency-input is released under the MIT license. See [LICENSE](LICENSE) for details.

Any question or support will welcome.
