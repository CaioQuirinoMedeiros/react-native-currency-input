import * as React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CurrencyInput, { FakeCurrencyInput } from 'react-native-currency-input';

export default function App() {
  const [valor, setValor] = React.useState<number | null>(0);

  return (
    <KeyboardAvoidingView style={styles.screenContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>CurrencyInput Examples</Text>
        <CurrencyInput
          value={valor}
          style={styles.inputBasic}
          onChangeValue={setValor}
          minValue={0}
          prefix="R$ "
          precision={2}
        />
        <CurrencyInput
          value={valor}
          style={styles.inputBasic}
          onChangeValue={setValor}
          prefix={'U$ '}
          signPosition="beforePrefix"
          delimiter=","
          precision={2}
          separator="."
        />
        <CurrencyInput
          value={valor}
          style={styles.inputBasic}
          onChangeValue={setValor}
          precision={0}
          delimiter=""
          suffix={' meters'}
        />
        <FakeCurrencyInput
          value={valor}
          style={styles.inputMask}
          containerStyle={styles.inputMaskContainer}
          onChangeValue={setValor}
          precision={7}
          showPositiveSign
          delimiter=","
          separator="."
          prefix={'LAT: '}
        />

        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setValor(123456.78);
            }}
          >
            <Text>123456.78</Text>
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
              setValor(-9257.863942);
            }}
          >
            <Text>-9257.863942</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#ddd',
    flexGrow: 1,
    alignItems: 'center',
    margin: 4,
    justifyContent: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputBasic: {
    marginVertical: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#cdcdcd',
    paddingHorizontal: 12,
    height: 54,
  },
  inputMask: {
    fontSize: 18,
  },
  inputMaskContainer: {
    borderColor: '#cdcdcd',
    height: 54,
    marginVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderWidth: 1,
  },
  label: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'center',
  },
  screenContainer: {
    flex: 1,
  },
});
