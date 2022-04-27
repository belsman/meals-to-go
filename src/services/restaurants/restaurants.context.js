import React, { createContext, useEffect, useState } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export function RestaurantsContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  // TODO:
  // Use the <location context provider> to get the current location!
  // From the location context! Perform a search operation with a call to the retrieve
  // the restaurants based on the current location

  useEffect(() => {
    // Set current location from the Parent <Location Context>
    // use the location to retreive the value!
    retrieveRestaurants();
  }, []);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    restaurantsRequest()
      .then(restaurantsTransform)
      .then((results) => {
        setIsLoading(false);
        setRestaurants(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
}
