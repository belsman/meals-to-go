import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: { padding: 8, backgroundColor: "white" },
  title: {
    paddingTop: 8,
  },
});

export default RestaurantInfoCard;
