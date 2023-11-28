import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const FavouritesScreen = () => {
  const favouriteMealCtx = useContext(FavouritesContext);
  const displayedMeals = MEALS.filter((meal) =>
    favouriteMealCtx.ids.includes(meal.id)
  );

  console.log({ displayedMeals });

  return <MealsList items={displayedMeals} />;
};

export default FavouritesScreen;
