import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonPlace = ({ origin, destination, showPoints }) => {

  const handleButton = () => {
    showPoints();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Text style={styles.text}>
          {origin} a {destination}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
          {destination} a {origin}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#002746",
    width: "auto",
    height: "auto",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    shadowRadius: 2,
    shadowColor: "#002746",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
  },
});

export default ButtonPlace;
