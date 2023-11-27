import { useLayoutEffect, useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const mealData = useMemo(() => {
    const mealData = MEALS.find((meal) => meal.id === mealId);
    return mealData;
  }, [MEALS]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealData.title,
    });
  }, [mealData, navigation]);

  console.log(mealData.imageUrl);
  return (
    <View>
      <Image
        source={{ uri: mealData.imageUrl }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{mealData.title}</Text>
      <View style={styles.details}>
        <Text>{mealData.duration}m</Text>
        <Text>{mealData.complexity.toUpperCase()}</Text>
        <Text>{mealData.affordability.toUpperCase()}</Text>
      </View>
      <Text>Ingredients</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
    gap: 8,
  },
});

export default MealDetailsScreen;
