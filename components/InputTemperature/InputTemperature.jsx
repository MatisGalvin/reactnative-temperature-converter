import { Text, TextInput, View } from "react-native";
import { s } from "./InputTemperature.style";

export function InputTemperature({ defaultValue, setInputValue, currentUnit }) {


  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        keyboardType="numeric"
        maxLength={4}
        placeholder="Tappe une température"
        defaultValue={defaultValue}
        onChangeText={setInputValue}
      />
      <Text style={s.unit}>{currentUnit}</Text>
    </View>
  );
}
