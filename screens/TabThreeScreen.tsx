import React, { useState, useCallback } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { firebase } from "../firebase/config";
import { Divider } from "react-native-elements";
// import Carousel from "react-native-snap-carousel";

import FormButton from "../components/FormButton";

export default function TabThreeScreen({ navigation }) {
  const [name, setName] = useState();
  const [username, setUsername] = useState();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const dbRef = firebase.database().ref();
      dbRef
          .child("users")
          .child(user.uid)
          .get()
          .then((snapshot) => {
            if (!snapshot.exists()) {
              alert("User does not exist anymore.");
              return;
            }
            const user = snapshot.val();
            setName(user.name);
            setUsername(user.username);
          })
          .catch((error) => {
            alert(error);
          });
    } else {
      // User is signed out
      // ...
    }
  });

  const onLogoutPress = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
          navigation.navigate("OnboardingScreen");
        })
        .catch((error) => {
          alert(error);
        });
  };

  const renderItem = useCallback(
      ({ item, index }) => (
        <View
          style={{
            backgroundColor: "floralwhite",
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25,
          }}
        >
          <Text style={{ fontSize: 30 }}>{item.title}</Text>
          <Text>5 likes</Text>
        </View>
      ),
      [],
  );

  return (
    <View style={styles.container}>
      <View style={[styles.card, { flex: 1.1 }]}>
        <View style={styles.profileCard}>
          <View style={{ flex: 1 }}>
            <Image
              style={styles.myImage}
              source={require("../assets/images/profilepic.png")}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>@{username}</Text>
          </View>
        </View>
        <FormButton
          buttonTitle="View My Profile"
          bgColor="#d2afff"
          onPress={() => navigation.navigate("ProfileScreen")}
        />
      </View>

      <TouchableOpacity
        style={[styles.postsCard, styles.card]}
        onPress={() => {
          navigation.navigate("MyPostsScreen");
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <Text style={styles.title}>My Posts</Text>
          {/* <Icon
						style={{ alignSelf: "center" }}
						name="chevron-right"
						size={25}
						color="#666"
					></Icon> */}
        </View>
        <Divider orientation="horizontal" width={2} style={styles.hr} />

        <View style={[styles.postInfo, { width: "80%" }]}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.bigNo}>12</Text>
            <Text style={styles.smallWords}>Posts</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.bigNo}>60</Text>
            <Image
              source={require("../assets/icons/hearted.png")}
              style={styles.heart}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.btnCard}>
        <FormButton
          buttonTitle="Settings"
          bgColor="#d2afff"
          onPress={() => console.log("Oops, coming soon!")}
        />
        <FormButton
          buttonTitle="Sign Out"
          bgColor="#d2afff"
          onPress={() => onLogoutPress()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
  },
  card: {
    marginTop: 35,
    paddingHorizontal: 10,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgrey",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#FFF",
    marginVertical: 10,
    shadowColor: "#6c69eb",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 5,
    elevation: 2,
    paddingVertical: 14,
    marginHorizontal: 15,
    shadowOffset: { width: 2, height: 2 },
  },
  profileCard: {
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    height: 80,
    width: 80,
    margin: 5,
    alignSelf: "flex-end",
  },
  postsCard: {
    flex: 1,
  },
  btnCard: {
    flex: 1,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  cardBox: {
    borderRadius: 15,
    width: "100%",
  },
  threedot: {
    height: 25,
    width: 40,
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginBottom: 10,
  },
  heart: {
    height: 14,
    width: 14,
    alignSelf: "center",
  },
  postInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  bigNo: {
    fontSize: 80,
    fontWeight: "bold",
  },
  hr: {
    marginTop: 10,
    width: "90%",
  },
});
