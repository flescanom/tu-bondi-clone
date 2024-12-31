import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const BusList = ( {name, color} ) => {
  return (
    <View>
      <TouchableOpacity>
        <View 
          style={[styles.button]}>
          {/* <AntDesign name="plus" size={24} color="white" /> */}
          <Text style={{ fontSize: 30, color: color, fontWeight: 'bold'}}> { name } </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  button: {
    // position: "absolute",
    // top: 60,
    // right: 36,
    width: 60,
    height: 60,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#002746",
    shadowRadius: 2,
    shadowColor: "#002746",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
  }
});

export default BusList;
