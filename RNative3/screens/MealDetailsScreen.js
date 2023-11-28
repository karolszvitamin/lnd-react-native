import { useLayoutEffect, useMemo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();
  const mealData = useMemo(() => {
    const mealData = MEALS.find((meal) => meal.id === mealId);
    return mealData;
  }, [MEALS]);

  const mealIsFavourite = favouriteMealsIds.includes(mealId);

  useLayoutEffect(() => {
    const changeFavouritesStatusHandler = () => {
      if (mealIsFavourite) {
        dispatch(removeFavourite({ id: mealId }));
      } else {
        dispatch(addFavourite({ id: mealId }));
      }
    };

    navigation.setOptions({
      title: "About the Meal",
      headerRight: () => (
        <IconButton
          onPress={changeFavouritesStatusHandler}
          icon={mealIsFavourite ? "star" : "star-outline"}
          color="#ffffff"
        />
      ),
    });
  }, [mealData, navigation, mealIsFavourite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealData.title}</Text>
      <View style={styles.details}>
        <Text style={styles.textStyle}>{mealData.duration}m</Text>
        <Text style={styles.textStyle}>
          {mealData.complexity.toUpperCase()}
        </Text>
        <Text style={styles.textStyle}>
          {mealData.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List dataArray={mealData.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List dataArray={mealData.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 350,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
    gap: 8,
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#ffffff",
  },
  listContainer: {
    width: "80%",
    justifyContent: "center",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});

export default MealDetailsScreen;
