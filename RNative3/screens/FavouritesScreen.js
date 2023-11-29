import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";
const FavouritesScreen = () => {
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
  const displayedMeals = MEALS.filter((meal) =>
    favouriteMealsIds.includes(meal.id)
  );

  console.log({ displayedMeals });

  return <MealsList items={displayedMeals} />;
};

export default FavouritesScreen;
