import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import RestaurantInfo from "../components/restaurant-info-card.component";
import SearchInput from "../components/SearchInput";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <SearchInput />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfo />
    </RestaurantListContainer>
  </SafeArea>
);

export default RestaurantsScreen;
