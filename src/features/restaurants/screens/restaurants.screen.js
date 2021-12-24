import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import styled from "styled-components";
import RestaurantInfo from "../components/restaurant-info-card.component";
import SearchInput from "../components/SearchInput";

const RestaurantScreen = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
  margin-top: ${String(StatusBar.currentHeight) + "px"};
`;

const SearchView = styled(View)`
  padding: 16px;
`;

const RestaurantList = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const RestaurantsScreen = () => {
  return (
    <RestaurantScreen>
      <SearchView>
        <SearchInput />
      </SearchView>
      <RestaurantList>
        <RestaurantInfo />
      </RestaurantList>
    </RestaurantScreen>
  );
};

export default RestaurantsScreen;
