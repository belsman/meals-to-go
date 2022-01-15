import React from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";
import RestaurantInfo from "../components/restaurant-info-card.component";
import { Searchbar } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <FlatList
      data={[
        { key: 1 },
        { key: 2 },
        { key: 3 },
        { key: 4 },
        { key: 5 },
        { key: 6 },
        { key: 7 },
        { key: 8 },
        { key: 9 },
        { key: 10 },
        { key: 11 },
        { key: 12 },
        { key: 13 },
        { key: 14 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfo />
        </Spacer>
      )}
      keyExtractor={(item) => item.key}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);

export default RestaurantsScreen;
