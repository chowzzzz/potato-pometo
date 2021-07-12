import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

import { windowWidth } from "../utils/Dimensions";
import { firebase } from "../firebase/config";

const makeid = (length: number) => {
  let result = "";
  const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(
        Math.floor(Math.random() * charactersLength),
    );
  }
  return result;
};

const CreateOrgIdScreen = ({ navigation }) => {
  const [orgName, setOrgName] = useState();
  const [orgId, setOrgId] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const createOrgId = () => {
    const id = makeid(7);

    firebase
        .database()
        .ref("organisations/" + id)
        .set({
          orgName: orgName,
        })
        .then(() => {
          setOrgId(id);
          setAlertVisible(true);
        })
        .catch((error) => {
          console.error(error);
        });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={require("../assets/illustrations/ginger-cat-739.png")}
      />

      <Text style={styles.title}>Generate Organisation ID</Text>

      <FormInput
        labelValue={orgName}
        onChangeText={(name) => setOrgName(name)}
        placeholder="Organisation Name"
        iconType=""
        style={styles.input}
      />

      <FormButton
        buttonTitle="Generate"
        bgColor="#6b5b95"
        onPress={() => createOrgId()}
      />

      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          navigation.navigate("SignUpScreen", { orgId: "" });
        }}
      >
        <Text style={styles.navButtonText}>
					Already have an Organisation ID? Sign up here
        </Text>
      </TouchableOpacity>

      <AwesomeAlert
        show={alertVisible}
        title="Your ID is"
        message={orgId}
        showConfirmButton={true}
        confirmText="Okay"
        confirmButtonColor="#6b5b95"
        contentContainerStyle={styles.alertContainer}
        confirmButtonStyle={styles.alertBtn}
        onConfirmPressed={() => {
          navigation.navigate("SignUpScreen", { orgId: orgId });
        }}
        onDismiss={() => setAlertVisible(false)}
      />
    </View>
  );
};

export default CreateOrgIdScreen;

const ratio = windowWidth / 1205;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a7a5f3",
  },
  illustration: {
    width: "100%",
    height: ratio * 912,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    margin: 20,
  },
  input: {
    paddingLeft: 15,
  },
  link: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2e64e5",
  },
  alertContainer: {
    textAlign: "center",
    width: 200,
  },
  alertBtn: {
    width: 80,
  },
});
