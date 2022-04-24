import React, { createContext } from "react";

export const RestaurantsContext = createContext();

export function RestaurantsContextProvider({ children }) {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
}
