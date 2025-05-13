import React from "react";
import { filmes } from "../data/homeData";
import { topRated } from "../data/topRated";
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import FilmeItem from "../components/FilmesItem";
import RatedItem from "../components/TopRated";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput style={styles.searchInput} placeholder="Search 🔍 ..." />
        <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.title}>Popular Movies</Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={filmes}
          horizontal
          renderItem={({ item }) => <FilmeItem imageUrl={item.imageUrl} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.topRatedContainer}>
        <Text style={styles.title}>Top Rated Movies</Text>
        <FlatList
          contentContainerStyle={styles.ratedList}
          data={topRated}
          renderItem={({ item }) => <RatedItem imageUrl={item.imageUrl} />}
          keyExtractor={(item) => item.imageUrl}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  searchRow: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    gap: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 10,
    width: "90%",
  },
  listContainer: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10
  },
  list: {
    flexDirection: "row",
    height: 250,
    margin: 5,
  },
  topRatedContainer: {
    flex: 1,
    marginBottom: 20,
  },
  ratedList: {
    alignItems: "center",
  },
});
