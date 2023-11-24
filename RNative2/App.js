import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import FONTS from "./constants/fonts";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [amountOfGuesses, setAmountOfGuesses] = useState(0);

  const { bold, regular } = FONTS;
  const [fontsLoaded] = useFonts({
    [regular]: require("./assets/fonts/OpenSans-Regular.ttf"),
    [bold]: require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const obj = {
    [bold]: 1,
    [regular]: 2,
  };

  if (fontsLoaded === false) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  const gameOverHandler = (amountOfGuesses) => {
    setIsGameOver(true);
    setAmountOfGuesses(amountOfGuesses);
  };

  const startNewGameHandler = () => {
    setPickedNumber(null);
    setIsGameOver(false);
    setAmountOfGuesses(null);
  };

  const pickedNumberHandler = (number) => {
    setPickedNumber(number);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (pickedNumber !== null) {
    screen = (
      <GameScreen onGameOver={gameOverHandler} userNumber={pickedNumber} />
    );
  }

  if (isGameOver === true && pickedNumber !== null) {
    screen = (
      <GameOverScreen
        numberToGuess={pickedNumber}
        amountOfGuesses={amountOfGuesses}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style={"light"}></StatusBar>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
