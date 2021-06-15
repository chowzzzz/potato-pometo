import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { windowWidth } from "../utils/Dimensions";
import { firebase } from "../firebase/config.js";

const SignUpScreen = ({ navigation }) => {
	// const [teamId, setTeamId] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [name, setName] = useState();
	const [username, setUsername] = useState();
	// const [gender, setGender] = useState();
	// const [profilePic, setProfilePic] = useState();

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
					username
				};
				const usersRef = firebase
					.database()
					.ref("users/" + uid)
					.set({
						username: username,
						email: email,
						name: name
					})
					.then(() => {
						navigation.navigate("Root", { user: data });
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
			<Text style={styles.title}>Sign up with us</Text>

			{/* <FormInput
				labelValue={teamId}
				onChangeText={(userTeamId) => setTeamId(userTeamId)}
				placeholder="Team ID"
				iconType=""
			/> */}
			<FormInput
				labelValue={email}
				onChangeText={(userEmail) => setEmail(userEmail)}
				placeholder="Email"
				iconType=""
				keyboardType="email-address"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<FormInput
				labelValue={password}
				onChangeText={(userPassword) => setPassword(userPassword)}
				placeholder="Password"
				iconType=""
				secureTextEntry={true}
			/>

			<FormInput
				labelValue={confirmPassword}
				onChangeText={(userConfirmPassword) =>
					setConfirmPassword(userConfirmPassword)
				}
				placeholder="Confirm Password"
				iconType=""
				secureTextEntry={true}
			/>

			<FormInput
				labelValue={name}
				onChangeText={(userName) => setName(userName)}
				placeholder="Name"
				iconType=""
			/>
			<FormInput
				labelValue={username}
				onChangeText={(username) => setUsername(username)}
				placeholder="Username"
				iconType=""
			/>

			<FormButton buttonTitle="Sign Up" onPress={() => onSignupPress()} />

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
		backgroundColor: "#a7a5f3"
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#fff",
		margin: 20
	},
	logo: {
		height: ratio * 733,
		width: "100%",
		resizeMode: "cover"
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
