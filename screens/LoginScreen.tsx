import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

import { windowWidth } from "../utils/Dimensions";
import { firebase } from "../firebase/config";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const onLoginPress = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((response) => {
				const uid = response.user.uid;
				const dbRef = firebase.database().ref();
				dbRef
					.child("users")
					.child(uid)
					.get()
					.then((snapshot) => {
						if (!snapshot.exists()) {
							alert("User does not exist anymore.");
							return;
						}
						const user = snapshot.val();
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
				style={styles.logo}
				source={require("../assets/images/pometo.png")}
			/>

			<Text style={styles.title}>Welcome back!</Text>

			<FormInput
				labelValue={email}
				onChangeText={(userEmail) => setEmail(userEmail)}
				placeholder="Email"
				iconType="user"
				keyboardType="email-address"
				autoCapitalize="none"
				autoCorrect={false}
			/>

			<FormInput
				labelValue={password}
				onChangeText={(userPassword) => setPassword(userPassword)}
				placeholder="Password"
				iconType="lock"
				secureTextEntry={true}
			/>

			<FormButton buttonTitle="Sign In" onPress={() => onLoginPress()} />

			<TouchableOpacity
				style={styles.link}
				onPress={() => {
					navigation.navigate("SignUpScreen", { orgId: "" });
				}}
			>
				<Text style={styles.navButtonText}>
					Don't have an account? Sign up here
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;

const ratio = windowWidth / 1205;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#a7a5f3"
	},
	logo: {
		height: ratio * 733,
		width: "100%",
		resizeMode: "cover"
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#fff",
		margin: 20
	},
	text: {
		fontSize: 28,
		marginBottom: 10
	},
	navButton: {
		marginTop: 15
	},
	link: {
		marginVertical: 35
	},
	navButtonText: {
		fontSize: 14,
		fontWeight: "500",
		color: "#2e64e5"
	}
});
