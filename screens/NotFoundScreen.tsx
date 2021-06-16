import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { firebase } from "../firebase/config.js";

import { RootStackParamList } from "../types";

export default function NotFoundScreen({
	navigation
}: StackScreenProps<RootStackParamList, "NotFound">) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const dbRef = firebase.database().ref();
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				dbRef
					.child("users")
					.child(user.uid)
					.get()
					.then((snapshot) => {
						const user = snapshot.val();
						setUser(user);
					})
					.catch((error) => {
						console.error(error);
					});
			} else {
				console.error("User not logged in");
			}
		});
	}, []);

	console.log("user: " + user);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>This screen doesn't exist.</Text>
			<TouchableOpacity
				onPress={() =>
					navigation.replace(user ? "Root" : "OnboardingScreen")
				}
				style={styles.link}
			>
				<Text style={styles.linkText}>Go to home screen!</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 20
	},
	title: {
		fontSize: 20,
		fontWeight: "bold"
	},
	link: {
		marginTop: 15,
		paddingVertical: 15
	},
	linkText: {
		fontSize: 14,
		color: "#2e78b7"
	}
});
