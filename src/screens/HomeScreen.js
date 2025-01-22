import { StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import Map from "../components/Map";
import BusList from "../components/BusList";
import { busLines } from "../data/lines";
import { useState } from "react";
import ButtonPlace from "../components/ButtonPlace";

const HomeScreen = () => {
  const { width } = useWindowDimensions();

  const [showButtons, setShowButtons] = useState(false);
  const [busSelected, setBusSelected] = useState(null);
  const [points, setPoints] = useState(null);

  const showButtonsPlace = (isShowButtons, itemBus) => {
    setShowButtons(isShowButtons);
    setBusSelected(itemBus);
  };

  const drawPoints = () => {
    setPoints(busSelected.stops)
    console.log('Puntos: ', points);
  }

  return (
    <View style={styles.container}>
      <Map points={points} />
      <FlatList
        style={[styles.list, { width: width - 50 }]}
        data={busLines}
        horizontal={true}
        renderItem={({ item }) => (
          <BusList key={item.id} item={item} showButtons={showButtonsPlace} />
        )}
      />

      {showButtons ? (
        <View style={styles.buttons}>
          <ButtonPlace origin={busSelected.departurePoint.name} destination={busSelected.arrivalPoint.name} showPoints={drawPoints}  />
        </View>
      ) : (
        <></>
      )}
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
  list: {
    position: "absolute",
    top: 60,
    right: 50,
    height: 70,
    fontSize: 24,
    borderRadius: 30,
  },
  buttons: {
    position: "absolute",
    top: 150,
  },
});
