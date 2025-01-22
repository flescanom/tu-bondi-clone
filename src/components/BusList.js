import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";

const BusList = ( {item, showButtons} ) => {

  const [isLineSelected, setIsLineSelected] = useState(item.isSelected);

  const handleSelect = () => {
    setIsLineSelected(!isLineSelected);    
    console.log(item);
    showButtons(!isLineSelected, item);
  }

  return (
    <View>
      <TouchableOpacity onPress={handleSelect}>
        <View
          style={ [styles.button, isLineSelected ? styles.buttonSelected : ''] }>
          <Text style={[ styles.text, { color: item.color } ]}> { item.name } </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
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
  },
  buttonSelected: {
    borderWidth: 3,
    borderColor: "#0063b4",
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold'
  }
});

export default BusList;
