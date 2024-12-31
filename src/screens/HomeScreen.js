import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Map from "../components/Map";
import BusList from "../components/BusList";
import { busLines } from "../data/lines";

const HomeScreen = () => {

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Map />
      <FlatList
        style={[styles.list, { width: width - 50 }]}
        data={busLines}
        horizontal={true}
        renderItem={({ item }) => (
          // <View style={{
          //   backgroundColor: item.color,
          //   height: 50,
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}>
          //   <Text style={{ height: 50 }} key={item.id}>{item.name}</Text>
          // </View>
          <BusList name={item.name} color={item.color} />
        )}
      />

      {/* <FlatList
        style={{ height: 50, position: "absolute", width: "100%" }}
        data={[
          { key: "a", color: "red" },
          { key: "b", color: "green" },
        ]}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: item.color,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ height: 50 }}>{item.key}</Text>
          </View>
        )}
      /> */}
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
    // width: 'auto',
    height: '70',
    // alignItems: "center",
    // justifyContent: "center",
    fontSize: 24,
    borderRadius: 30,
    // shadowRadius: 10,
    // shadowColor: "#002746",
    // shadowOpacity: 0.5,
    // shadowOffset: { width: 0, height: 10 },
  },
});
