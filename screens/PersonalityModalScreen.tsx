import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";

const displayedDATA = [
  {
    id: "abcd-0001",
    title: "SkyzaHealthcare's Protagonists",
    imageUrl:
      "https://i.pinimg.com/564x/14/12/7d/14127dac83cd355b19c0ce6d90c1c0f8.jpg",
    username: "tan.wee.wee",
    caption:
      "Anybody would love to be a protagonist in a movie, just like our very own Thomas Chua and Don Key whom have the same Protagonist personality of ENFJ! They love helping others so reach out to them if you ever need help 🤪",
  },
]

export default function PersonalityModalScreen({ setModal }) {
  const Post = ({ title, imageUrl, username, caption }) => (
    <Card containerStyle={styles.cardBox}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>@{username}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/icons/dots.png")}
            style={styles.threedot}
          />
        </TouchableOpacity>
      </View>
      <Card.Divider />
      <Image source={imageUrl} style={styles.image} />
      <Text style={{ fontWeight: "bold", fontSize: 16, marginVertical: 5 }}>
        {title}
      </Text>
      <Text>{caption}</Text>
    </Card>
  );

  const renderItem = ({ item }) => (
    <Post
      key={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      username={item.username}
      caption={item.caption}
    />
  );

  return (
    <View style={styles.container}>
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
        source={require("../assets/illustrations/ginger-cat-cats-love.png")}
        style={styles.picture}
      />
      <Text style={styles.title}>What's Your Type?</Text>
      <FlatList
        data={displayedDATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFF",
    width: '100%',
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
    fontWeight: 'bold',
    marginBottom: 50,
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
    position: 'absolute',
    height: 200,
    width: 200,
    zIndex: -10,
    margin: 3,
    opacity: 0.9,
  }
});
