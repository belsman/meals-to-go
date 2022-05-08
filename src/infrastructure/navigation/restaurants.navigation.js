import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = createNativeStackNavigator();

function MockDetails() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Restaurants Details!</Text>
    </View>
  );
}

export const RestaurantsNavigator = () => (
  <RestaurantsStack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <RestaurantsStack.Screen name="Home" component={RestaurantsScreen} />
    <RestaurantsStack.Screen name="Detail" component={MockDetails} />
  </RestaurantsStack.Navigator>
);
