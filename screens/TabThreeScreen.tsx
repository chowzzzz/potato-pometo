import * as React from "react";
import { StyleSheet } from "react-native";
import { firebase } from "../firebase/config";

import EditScreenInfo from "../components/EditScreenInfo";
import FormButton from "../components/FormButton";
import { Text, View } from "../components/Themed";

export default function TabThreeScreen({ navigation }) {
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
	return (
		<View style={styles.container}>
			<FormButton
				buttonTitle="Sign Out"
				onPress={() => onLogoutPress()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		fontSize: 20,
		fontWeight: "bold"
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%"
	}
});
