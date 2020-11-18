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
        <CurrencyInput
          value={valor}
          style={styles.inputBasic}
          onChangeValue={setValor}
          delimiter=""
          separator="."
          precision={3}
        />
        <FakeCurrencyInput
          value={valor}
          style={styles.inputMask}
          containerStyle={styles.inputMaskContainer}
          onChangeValue={setValor}
          caretColor="red"
          unit={'R$ '}
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

        <View style={styles.buttonsWrapper}>
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
  screenContainer: {
    flex: 1,
  },
});
