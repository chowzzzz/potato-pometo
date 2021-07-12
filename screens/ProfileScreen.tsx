import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.topheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/icons/back.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={styles.text}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.text2}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Image
          style={styles.myImage}
          source={require("../assets/images/profilepic.png")}
        />
        <Text style={styles.bio}>Aerin Ng Na Na @aerrng</Text>
        <Text style={styles.bio1}>SkyzarHealthcare Tech Intern</Text>
        <Text style={styles.bio1}>Join on 14 Feb 2021 📅</Text>
      </View>

      <ScrollView
        style={styles.cardsview}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.headerText}>More Info</Text>
          <Text style={styles.biotext}>👧: she/her </Text>
          <Text style={styles.biotext}>📧: aerrnana@gmail.com</Text>
          <Text style={styles.biotext}>
						💼: Tech Intern Feb - July
          </Text>
          <Text style={styles.biotext}>🎂: 18 June</Text>
          <Text style={styles.biotext}>♊: Gemini</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText}>Words From Aerin 📝</Text>
          <Text style={styles.biotext}>
						Hiii i love dancing especially hip hop! Sushi is my
						favourite and one fun fact about is I like to drink milo
						at night! Hit me up if you wanna dance and chill
						together (:
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText}>Personality test</Text>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.biotext}>
							My personality type is...{" "}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginTop: 7,
                fontSize: 16,
              }}
            >
							SWAGGER THE CARER
            </Text>
          </View>

          <Image
            source={require("../assets/images/swagger.png")}
            style={styles.swagger}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText}>Gamer Status</Text>
          <Text style={styles.biotext}>Advance Player 👾 </Text>
          <Text style={styles.biotext}>121 Points</Text>
          <Text style={styles.biotext}>
						#12 on SkyzarHealthcare Game League
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText}>Social Medias</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/instagram.png")}
                style={styles.smIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/facebook.png")}
                style={styles.smIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/twitter.png")}
                style={styles.smIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/youtube.png")}
                style={styles.smIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/linkedin.png")}
                style={styles.smIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText}>Ask Me A Question</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setText(val)}
            value={text}
            placeholder="Shoot it!"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topheader: {
    backgroundColor: "#d2afff",
    flexDirection: "row",
    paddingTop: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: "#d2afff",
    flexDirection: "column",
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  icon: {
    height: 16,
    width: 8,
    alignSelf: "flex-start",
  },
  myImage: {
    height: 100,
    width: 100,
    margin: 8,
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  bio: {
    fontSize: 20,
    color: "#000",
    marginBottom: 5,
    fontWeight: "bold",
  },
  bio1: {
    fontSize: 15,
    color: "#000",
    marginBottom: 5,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFF",
    marginVertical: 10,
    shadowColor: "#6c69eb",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 5,
    elevation: 2,
    paddingHorizontal: 18,
    alignItems: "flex-start",
    paddingVertical: 14,
    marginHorizontal: 15,
    shadowOffset: { width: 2, height: 2 },
  },
  cardsview: {
    borderRadius: 30,
  },
  smIcon: {
    height: 30,
    width: 30,
    margin: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 8,
  },
  swagger: {
    height: 110,
    width: 110,
    marginTop: 20,
    marginLeft: 15,
  },

  biotext: {
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 5,
    elevation: 2,
    // outlineWidth: 0,
    width: "100%",
    paddingHorizontal: 10,
  },
});
