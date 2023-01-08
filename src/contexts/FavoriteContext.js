import { createContext, useContext, useState } from "react";

export const FavoriteStateContext = createContext(undefined);
export const FavoriteDispatchContext = createContext(undefined);

const FavoriteContextProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoriteStateContext.Provider value={{ favorite }}>
      <FavoriteDispatchContext.Provider value={{ setFavorite }}>
        {children}
      </FavoriteDispatchContext.Provider>
    </FavoriteStateContext.Provider>
  );
};

export default FavoriteContextProvider;

export const useFavoriteContext = () => {
  const favoriteState = useContext(FavoriteStateContext);
  const favoriteDispatch = useContext(FavoriteDispatchContext);

  if (favoriteState === undefined || favoriteDispatch === undefined)
    throw new Error(
      "useFavoriteContext must be used within FavoriteContextProvider"
    );
  return { favoriteState, favoriteDispatch };
};
