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

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [amountOfGuesses, setAmountOfGuesses] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

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
    <StatusBar style={"light"}>
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
    </StatusBar>
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
