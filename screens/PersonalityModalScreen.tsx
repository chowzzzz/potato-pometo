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
    title: "SkyzaHealthcare's Protagonists",
    imageUrl:
      "https://i.pinimg.com/originals/db/29/29/db292938bdda2ed76ccf0e0fe5376e1d.png",
    username: "tan.jun.wee",
    others: "...and 3 others!",
    caption:
      "Anybody would love to be a protagonist in a movie, just like our very own Thomas Chua and Don Key whom have the same Protagonist personality of ENFJ! They love helping others so reach out to them if you ever need help 🤪",
  },
  {
    id: "abcd-0002",
    title: "Curiosity doesn't kill the cat!",
    imageUrl:
      "https://static.neris-assets.com/images/personality-types/avatars/intp-logician.png",
    username: "dom.lim",
    others: "...and 1 other!",
    caption:
      "Curious, logical and innovative? Yes, we want you! Candace, our Marketing Director and Joseph, our newly joined Engineer are both Logicians. Being INTPs, being curious is part of them so be prepared to pick your brains when talking to them!",
  },
  {
    id: "abcd-0003",
    title: "Keep dat Swagger",
    imageUrl:
      "https://i.pinimg.com/originals/0b/b5/20/0bb52077456664681199bafa9c12b6d3.png",
    username: "don.key",
    others: "...and 6 others!",
    caption:
      "Anybody would love to be a protagonist in a movie, just like our very own Thomas Chua and Don Key whom have the same Protagonist personality of ENFJ! They love helping others so reach out to them if you ever need help 🤪",
  },
  {
    id: "abcd-0004",
    title: "Wise as a Shifu",
    imageUrl: "http://www.16personalities.com/images/types/estj.png",
    username: "marinthekitchen",
    others: "...and 2 others!",
    caption:
      "Curious, logical and innovative? Yes, we want you! Candace, our Marketing Director and Joseph, our newly joined Engineer are both Logicians. Being INTPs, being curious is part of them so be prepared to pick your brains when talking to them!",
  },
];

export default function PersonalityModalScreen({ setModal }) {
  const Post = ({ title, imageUrl, username, caption, others }) => (
    <Card containerStyle={styles.cardBox}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>@{username}</Text>
        </TouchableOpacity>

        <Text
          style={{
            alignSelf: "flex-end",
            fontWeight: "bold",
            color: "	#D3D3D3",
          }}
        >
          {others}
        </Text>
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
      others={item.others}
    />
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
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
      <Text style={{ fontSize: 12, marginBottom: 50 }}>~ just for fun ~</Text>
      <FlatList
        data={displayedDATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Take Our Test!"
        buttonStyle={styles.testbutt}
        titleStyle={{ fontSize: 15 }}
      />
    </ScrollView>
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
    position: "absolute",
    height: 200,
    width: 200,
    zIndex: -10,
    margin: 3,
    opacity: 0.9,
  },
  testbutt: {
    backgroundColor: "#8d92f2",
    color: "#FFF",
    margin: 5,
    fontSize: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    padding: 3,
    paddingHorizontal: 25,
  },
});
