import { StyleSheet, View, Image, Text, useWindowDimensions } from "react-native";

const SplashScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View>
        <Image
          source={require("../../assets/images/cbaciudad.jpg")}
          style={styles.image}
        />
        <Text style={styles.text}>Cargando... </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##1AA3D1",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text: {
    position: "absolute",
    bottom: 30,
    left: 20,
    color: "#fff",
    fontSize: 24,
  },
});
