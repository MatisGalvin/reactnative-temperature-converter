import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { TemperatureDislay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { DEFAULT_TEMPERATURE, UNITS, DEFAULT_UNIT } from "./constant";
import { useEffect, useState } from "react";
import {
  getOppositeUnit,
  convertTemperatureTo,
  isIceTemperature,
} from "./services/temperature-service";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositUnit = getOppositeUnit(currentUnit);

  const [currentBackground, setCurrentBackground] = useState();

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);

    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldBackground : hotBackground)
    }
  }, [inputValue]);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositUnit, valueAsFloat).toFixed(1);
  }

  return (
    <ImageBackground source={currentBackground} style={s.container}>
      <View style={s.workSpace}>
        <TemperatureDislay
          unit={oppositUnit}
          value={getConvertedTemperature()}
        />
        <InputTemperature
          setInputValue={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
          currentUnit={currentUnit}
        />
        <View>
          <ButtonConvert
            unit={currentUnit}
            onPress={() => {
              setCurrentUnit(oppositUnit);
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
