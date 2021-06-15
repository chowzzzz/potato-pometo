import React from "react";
import { SearchBar, Text, Image } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity } from "react-native";

export default class Search extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search: string) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        {/* <SearchBar
          lightTheme
          round
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={search}
          style={styles.searchBar}
        /> */}
        <View style={styles.searchcontainer}>
          <Text style={{ color: "#A9A9A9", fontSize: 15 }}>Search here!</Text>
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
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
  },
  searchBar: {
    width: "85%",
  },
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
    //   borderColor: '#C0C0C0',
    borderRadius: 30,
    //   borderWidth: 2,
    backgroundColor: "#FFFFFF",
  },
});
