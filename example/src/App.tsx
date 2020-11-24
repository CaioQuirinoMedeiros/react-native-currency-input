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
  const [valor, setValor] = React.useState<number | null>(null);

  return (
    <KeyboardAvoidingView style={styles.screenContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>CurrencyInput</Text>
        <CurrencyInput
          value={valor}
          style={styles.inputBasic}
          onChangeValue={setValor}
          delimiter=""
          separator="."
          precision={3}
        />
        <CurrencyInput
          value={valor}
          style={styles.inputBasic}
          onChangeValue={setValor}
          unit="US$ "
          ignoreNegative
          delimiter=","
          precision={2}
          separator="."
        />
        <CurrencyInput
          value={valor}
          style={styles.inputBasic}
          onChangeValue={setValor}
          precision={7}
          delimiter=","
          separator="."
          unit={'LAT: '}
        />
        <Text style={styles.label}>FakeCurrencyInput</Text>
        <FakeCurrencyInput
          value={valor}
          style={styles.inputMask}
          containerStyle={styles.inputMaskContainer}
          onChangeValue={setValor}
          precision={7}
          delimiter=","
          separator="."
          unit={'LAT: '}
        />

        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setValor(238551.23);
            }}
          >
            <Text>238551.23</Text>
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
              setValor(-927.863942);
            }}
          >
            <Text>-927.863942</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
  },
  screenContainer: {
    flex: 1,
  },
});
