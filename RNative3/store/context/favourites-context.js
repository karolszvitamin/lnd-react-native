import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  // eslint-disable-next-line no-unused-vars
  addFavourite: (id) => {},
  // eslint-disable-next-line no-unused-vars
  removeFavourite: (id) => {},
});

const FavouritesContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavourite = (id) => {
    setFavouriteMealIds((prevValue) => [...prevValue, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteMealIds((prevValue) =>
      prevValue.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
