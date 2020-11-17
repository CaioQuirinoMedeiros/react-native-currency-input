import * as React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CurrencyInput, { CurrencyInputMask } from 'react-native-currency-input';

export default function App() {
  const [valorText, setValorTexto] = React.useState('');
  const [valor, setValor] = React.useState<number | null>(null);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <CurrencyInputMask
        value={valor}
        onChangeText={setValorTexto}
        style={styles.inputMask}
        containerStyle={styles.inputMaskContainer}
        onChangeValue={(value) => {
          console.log('valor mudou para: ', value);
          setValor(value);
        }}
        // ignoreNegative
        selectionColor="orange"
        caretColor="green"
        keyboardType="numeric"
        precision={3}
        // separator="-"
        // delimiter="."
        unit={'R$ '}
        // unit="US$ "
      />
      <CurrencyInput
        value={valor}
        onChangeText={setValorTexto}
        style={styles.input}
        onChangeValue={setValor}
        keyboardType="numeric"
        precision={2}
        ignoreNegative
        // maxValue={92738.86}
        // minValue={-2239}
        separator=","
      />

      <Text>valor numerico: {valor}</Text>
      <Text>valor texto: {valorText}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setValor(2385.23);
        }}
      >
        <Text>2385.23</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setValor(0);
        }}
      >
        <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setValor(null);
        }}
      >
        <Text>null</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setValor(-927391.23);
        }}
      >
        <Text>-927391.23</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#cddccd',
    alignItems: 'center',
    margin: 4,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 8,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderRadius: 8,
    height: 46,
    fontSize: 18,
  },
  inputMask: {
    fontSize: 23,
    // fontStyle: 'italic',
    // borderWidth: 1,
  },
  inputMaskContainer: {
    borderColor: '#cdcdcd',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    borderBottomWidth: 1,
  },
});
