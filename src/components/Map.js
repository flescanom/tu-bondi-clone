import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const userLocation = require("../../assets/icons/user-location.png");
const finishFlag = require("../../assets/icons/finish-flag.png");
const initialFlag = require("../../assets/icons/initial-flag.png");
const bus = require("../../assets/icons/bus.png");
const busStop = require("../../assets/icons/bus-stop.png");

const Map = ({ points }) => {
  const [origin, setOrigin] = useState(null);
  const [pointToDraw, setPointToDraw] = useState([]);

  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setOrigin({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  if (!origin) {
    return (
      <View>
        <Text>Cargando ubicacion...</Text>
      </View>
    );
  }

  const onMarkerSelected = (marker) => {
    console.log({marker});
  }

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          coordinate={origin}
          image={userLocation}
          title="Mi ubicación"
          description="Estoy aquí"

        />

        {pointToDraw.map((marker, index) => (
          <Marker 
          key={marker.id}
          image={busStop}
          coordinate={marker} 
          onPress={() => onMarkerSelected(marker)} 
        />
        ))}
      </MapView>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
