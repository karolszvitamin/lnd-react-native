import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/Game/GuessLogItem";

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
    console.log(guessedNumber, maxNumber);
    setMinNumber(guessedNumber + 1);
    setGuessedNumber(newGuessNumber);
    setGuessedNumbersList((prevValue) => [newGuessNumber, ...prevValue]);
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
    console.log(minNumber, guessedNumber);
    setMaxNumber(guessedNumber);
    setGuessedNumber(newGuessNumber);
    setGuessedNumbersList((prevValue) => [newGuessNumber, ...prevValue]);
  };

  const checkIfGameIsOver = () => {
    if (guessedNumber === userNumber) {
      onGameOver(gussedNumbersList.length);
    }
  };

  useEffect(() => {
    checkIfGameIsOver();
  }, [checkIfGameIsOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={lowerNumberGuessHandler}>
              <Ionicons name="md-remove" size={24} color="#ffffff" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={higherNumberGuessHandler}>
              <Ionicons name="md-add" size={24} color="#ffffff" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={gussedNumbersList}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={gussedNumbersList.length - index}
              guess={item}
            />
          )}
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
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
