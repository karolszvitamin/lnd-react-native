import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const gameOverHandler = () => {
    setIsGameOver(true);
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

  if (isGameOver === true) {
    screen = <GameOverScreen />;
  }

  return (
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
