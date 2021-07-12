import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { windowWidth } from "../utils/Dimensions";
import { firebase } from "../firebase/config.js";

const SignUpScreen = ({ route, navigation }) => {
  const { orgId } = route.params;
  const [id, setId] = useState(orgId);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  // const [gender, setGender] = useState();
  // const [profilePic, setProfilePic] = useState();

  const checkOrgId = () => {
    return orgId === "";
  };

  console.log("check org id: " + checkOrgId());
  const onSignupPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid;
          const data = {
            id: uid,
            email,
            name,
            username,
          };
          const usersRef = firebase
              .database()
              .ref("users/" + uid)
              .set({
                orgId: id,
                username: username,
                email: email,
                name: name,
              })
              .then(() => {
                navigation.navigate("Root");
              })
              .catch((error) => {
                alert(error);
              });
        })
        .catch((error) => {
          alert(error);
        });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={require("../assets/illustrations/ginger-cat-721.png")}
      />
      <Text style={styles.title}>Sign up with us</Text>

      <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 25,
          color: "#fff",
        }}
      >
				Organisation ID
      </Text>
      <FormInput
        labelValue={id}
        onChangeText={(orgId) => setId(orgId)}
        placeholder="Organisation ID"
        iconType=""
        editable={checkOrgId()}
        style={styles.input}
      />
      <FormInput
        labelValue={name}
        onChangeText={(userName) => setName(userName)}
        placeholder="Name"
        iconType=""
        style={styles.input}
      />
      <FormInput
        labelValue={username}
        onChangeText={(username) => setUsername(username)}
        placeholder="Username"
        iconType=""
        style={styles.input}
      />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
        iconType=""
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholder="Password"
        iconType=""
        secureTextEntry={true}
        style={styles.input}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userConfirmPassword) =>
          setConfirmPassword(userConfirmPassword)
        }
        placeholder="Confirm Password"
        iconType=""
        secureTextEntry={true}
        style={styles.input}
      />

      <FormButton
        buttonTitle="Sign Up"
        bgColor="#6b5b95"
        onPress={() => onSignupPress()}
      />

      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        <Text style={styles.navButtonText}>
					Already have an account? Sign in here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

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
    height: ratio * 912 * 0.8,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  logo: {
    height: ratio * 733,
    width: "100%",
    resizeMode: "cover",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
  },
  navButton: {
    marginTop: 15,
  },
  link: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2e64e5",
  },
  input: {
    paddingLeft: 15,
  },
});
