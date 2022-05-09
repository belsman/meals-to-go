import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details.screen";
const RestaurantsStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => (
  <RestaurantsStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <RestaurantsStack.Screen name="Home" component={RestaurantsScreen} />
    <RestaurantsStack.Screen
      name="Detail"
      component={RestaurantDetailsScreen}
    />
  </RestaurantsStack.Navigator>
);
