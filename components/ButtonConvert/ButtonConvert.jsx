import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonConvert.style";

export function ButtonConvert({unit, onPress}){
return <TouchableOpacity onPress={onPress} style={s.btn}>
  <Text style={s.text}>Convertir en {unit}</Text>
</TouchableOpacity>
}