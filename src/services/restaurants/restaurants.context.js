import React, { createContext, useContext, useEffect, useState } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../../services/location/location.context";

export const RestaurantsContext = createContext();

export function RestaurantsContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  const locationContext = useContext(LocationContext);

  useEffect(() => {
    retrieveRestaurants(locationContext);
  }, [locationContext]);

  const retrieveRestaurants = ({ location }) => {
    setRestaurants([]);
    setIsLoading(true);
    restaurantsRequest(`${location.lat},${location.lng}`)
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
