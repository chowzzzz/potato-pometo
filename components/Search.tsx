import React from "react";
import { SearchBar, Image } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";

export default function Search ({ setSearchQuery }) {
  const [search, setSearch] = React.useState('');

  const updateSearch = (search: string) => {
    setSearch(search);
    setSearchQuery(search);
  };

  return (
    <View style={styles.container}>
      {/* <SearchBar
        lightTheme
        round
        placeholder="Search here!"
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
      /> */}
      <View style={styles.searchcontainer}>
        <TextInput
          style={{ color: "#A9A9A9", fontSize: 15, outlineWidth: 0 }}
          placeholder="Search here!"
          onChangeText={updateSearch}
          value={search}
          selectionColor="#000"
        />
        {/* https://github.com/necolas/react-native-web/pull/1707 enterKeyHint warning seems to occur on react native web */}
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/searchicon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
  },
  // searchBar: {
  //   border: 0,
  //   backgroundColor: "transparent",
  //   borderRadius: 30,
  //   width: "75vw",
  // },
  // searchBarInput: {
  //   backgroundColor: "#FFFFFF",
  //   border: 0,
  // },
  icon: {
    width: 18,
    height: 18,
    color: "#C0C0C0",
  },
  searchcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
});
