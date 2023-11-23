import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuessedNumber = generateRandomBetween(1, 100, userNumber);
  const [guessedNumber, setGuessedNumber] = useState(initialGuessedNumber);
  const [maxNumber, setMaxNumber] = useState(100);
  const [minNumber, setMinNumber] = useState(1);

  const [gussedNumbersList, setGuessedNumbersList] = useState([
    initialGuessedNumber,
  ]);
  const higherNumberGuessHandler = () => {
    if (userNumber < guessedNumber) {
      Alert.alert(`Your number is not higher than ${guessedNumber}`);
      return;
    }

    const newGuessNumber = generateRandomBetween(
      guessedNumber,
      maxNumber,
      guessedNumber
    );
    setMinNumber(guessedNumber);
    setGuessedNumber(newGuessNumber);
    setGuessedNumbersList((prevValue) => [...prevValue, newGuessNumber]);
  };

  const lowerNumberGuessHandler = () => {
    if (userNumber > guessedNumber) {
      Alert.alert(`Your number is not lower than ${guessedNumber}`);
      return;
    }

    const newGuessNumber = generateRandomBetween(
      minNumber,
      guessedNumber,
      guessedNumber
    );
    setMaxNumber(guessedNumber);
    setGuessedNumber(newGuessNumber);
    setGuessedNumbersList((prevValue) => [...prevValue, newGuessNumber]);
  };

  const checkIfGameIsOver = () => {
    if (guessedNumber === userNumber) {
      console.log(guessedNumber);
      onGameOver();
    }
  };

  useEffect(() => {
    checkIfGameIsOver();
  }, [checkIfGameIsOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={lowerNumberGuessHandler}>-</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={higherNumberGuessHandler}>+</PrimaryButton>
        </View>
      </View>
      <View>
        <FlatList
          data={gussedNumbersList}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => {
            return item;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
