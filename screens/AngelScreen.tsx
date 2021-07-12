import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-elements";

const displayedDATA = [
  {
    id: "abcd-0001",
    title: "Some orange juice will be good in this hot weather!",
    username: "Wishlist #1",
  },
  {
    id: "abcd-0002",
    title: "Craving for chicken rice today ><><",
    username: "Wishlist #2",
  },
  {
    id: "abcd-0003",
    title: "Love some laksaaaaa! Omnomnomz",
    username: "Wishlist #3",
  },
  {
    id: "abcd-0004",
    title: "Happy dumpling day! I miss having ba zhangs",
    username: "Wishlist #4",
  },
  {
    id: "abcd-0005",
    title: "Oooh green apple milk tea with 80% sugar, no pearls ((: Thanks angel",
    username: "Wishlist #5",
  },
  {
    id: "abcd-0006",
    title: "I love classical chicken pizza!!!!",
    username: "Wishlist #6",
  },
];

export default function AngelScreen({ setModal }) {
  const Post = ({ title, username }) => (
    <Card containerStyle={styles.cardBox}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 2,
        }}
      >
        <TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{username}</Text>
        </TouchableOpacity>
      </View>
      <Card.Divider />
      <Text style={{ fontWeight: "bold", fontSize: 16, marginVertical: 5 }}>
        {title}
      </Text>
    </Card>
  );

  const renderItem = ({ item }) => (
    <Post
      key={item.id}
      title={item.title}
      username={item.username}
    />
  );

  return (
    <View style={{ backgroundColor: "#fff", alignItems: "center", flex: 1 }}>
      <TouchableOpacity
        style={{ alignSelf: "flex-start" }}
        onPress={() => setModal(0)}
      >
        <Image
          source={require("../assets/icons/cross.png")}
          style={styles.cross}
        />
      </TouchableOpacity>
      <Image
        source={require("../assets/images/angelcat.png")}
        style={styles.picture}
      />
      <Text style={styles.title}>Angel & Mortal</Text>
      <Text
        style={{
          fontSize: 15,
          marginBottom: 10,
          marginTop: 10,
          textAlign: "center",
        }}
      >
        @joooooseph is your angel! {"\n"}Gift him something special today (-:
      </Text>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={displayedDATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <Button
        title="Send A Wish To YOUR Angel!"
        buttonStyle={styles.testbutt}
        titleStyle={{ fontSize: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFF",
    width: "100%",
  },
  cross: {
    height: 25,
    width: 25,
    marginTop: 15,
    marginLeft: 7,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  cardBox: {
    borderRadius: 15,
  },
  threedot: {
    height: 25,
    width: 40,
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: "center",
    marginBottom: 10,
  },
  picture: {
    height: 130,
    width: 130,
  },
  testbutt: {
    backgroundColor: "#f19687",
    color: "#FFF",
    margin: 10,
    fontSize: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    padding: 7,
    paddingHorizontal: 25,
  },
});
