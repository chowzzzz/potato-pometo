import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import Search from "../components/Search";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "My Yummy Lunch!",
    imageUrl:
      "https://www.topasiatour.com/pic/Singapore/guide/bak-kut-teh-2.jpg",
    username: "aerrng",
    caption:
      "Delivered from ichigo bakuteh bowl from @tan.wee.wee, this was outstanding! The ground pork on hand, shredded carrots, coleslaw cabbage mix; substituted Maggi seasoning and Tabasco with good balance of soy sauce and Sriracha. Served it with red quinoa which was tasty mixed together. There were no left overs ;-)",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "WTS??? WHATS THIS",
    imageUrl: "https://yp.sg/wp-content/uploads/2017/06/ufo2.png",
    username: "wheee.geee",
    caption:
      "Saw this alien like thing flew past my window? Anyone got any idea?? Are we getting eaten by aliens?!?!",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Yo anyone wna join me to watch this?",
    imageUrl:
      "https://i1.sndcdn.com/artworks-xJyBsmHzLbJgaAr6-yDrC3A-t500x500.jpg",
    username: "tan.wee.wee",
    caption:
      "Dope af remix! Anyone down to watch phua chu kang new hit song with me this Saturdayday 10pm? Open jio everyone!",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "My Dog Bobby",
    imageUrl:
      "https://4cxqn5j1afk2facwz3mfxg5r-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/Pet-Dog.jpg",
    username: "don_key",
    caption:
      "Just adopted a new dog over the weekend! Say hi to bobby (: He's a german shepard mix maltese and he looooooooooooves grapes ((((:",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Baked some fresh brownies! Anyone wanna be my guinea pig?",
    imageUrl:
      "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/08/bundt-by-the-backyard-bakers-900x643.png",
    username: "caniscan",
    caption:
      "Hazelnut lava brownies dazzled with honey with a little surprise inside! Let me know if youre wanna try, dont mind delivering it to you (:",
  },
];

// TODO: pass in items param to render this for all posts
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

    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity>
        <Image
          source={require("../assets/icons/heart.png")}
          style={styles.heart}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../assets/icons/forward.png")}
          style={styles.heart}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../assets/icons/iconaeroplane.png")}
          style={styles.heart}
        />
      </TouchableOpacity>
    </View>

    <Text style={{ fontWeight: "bold", fontSize: 16, marginVertical: 5 }}>
      {title}
    </Text>
    <Text>{caption}</Text>
  </Card>
);

export default function TabOneScreen(props: any) {
  const renderItem = ({ item }) => (
    <Post
      title={item.title}
      imageUrl={item.imageUrl}
      username={item.username}
      caption={item.caption}
    />
  );

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={{ fontSize: 15, fontFamily: "ChalkboardSE" }}>
            Good Afternoon 👋
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "ChalkboardSE-Bold",
              fontWeight: "bold",
            }}
          >
            Elizabeth Lee
          </Text>
        </View>
        <Image
          source={require("../assets/images/profilepic.png")}
          style={styles.myImage}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.actionRow}>
            <Search />
            <TouchableOpacity style={styles.addContainer}>
              <Image
                source={require("../assets/icons/writeicon.png")}
                style={styles.writeicon}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 20,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Categories
          </Text>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.iconBox}>
              <Image
                source={require("../assets/images/cake.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}>
              <Image
                source={require("../assets/images/burger.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}>
              <Image
                source={require("../assets/images/controller.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}>
              <Image
                source={require("../assets/images/cloudbubble.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            Your Feed
          </Text>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    height: 660,
  },
  header: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    marginVertical: 10,
  },
  actionRow: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  headerText: {
    flex: 1,
    alignContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  myImage: {
    height: 60,
    width: 60,
    margin: 5,
    alignSelf: "flex-end",
  },
  icon: {
    width: 41,
    height: 31,
  },
  writeicon: {
    width: 20,
    height: 20,
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    //   borderColor: '#C0C0C0',
    borderRadius: 30,
    //   borderWidth: 2,
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
  },
  iconBox: {
    backgroundColor: "#E8E8E8",
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBox: {
    borderRadius: 15,
  },
  threedot: {
    height: 25,
    width: 40,
  },
  image: {
    height: 250,
    width: 315,
    alignSelf: "center",
    marginBottom: 10,
  },
  heart: {
    height: 15,
    width: 17,
    marginVertical: 8,
    marginLeft: 0,
    marginRight: 15,
  },
});
