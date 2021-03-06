import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export function LocationContextProvider({ children }) {
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (keyword.length === 0) {
      return;
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
