import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => (
  <RestaurantsStack.Navigator initialRouteName="Home">
    <RestaurantsStack.Screen name="Home" component={RestaurantsScreen} />
  </RestaurantsStack.Navigator>
);
