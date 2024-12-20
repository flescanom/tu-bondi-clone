import { StyleSheet, TouchableOpacity, View } from "react-native";
import Map from "../components/Map";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
      <Map />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0
  }
});
