import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Chicken republic",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Flat 18, NWRI, mando road Kaduna",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const RestaurantCard = styled(Card)`
    background-color: white;
  `;

  const RestaurantCardCover = styled(Card.Cover)`
    background-color: white;
    padding: 8px;
  `;

  const Title = styled.Text`
    padding-top: 8px;
  `;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
