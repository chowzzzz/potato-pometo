import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";

import FormButton from "../components/FormButton";
import { windowWidth } from "../utils/Dimensions";

const OnboardingScreen = ({ navigation }) => {
	const [alertVisible, setAlertVisible] = useState(false);

	return (
		<View style={styles.container}>
			<Image
				style={styles.illustration}
				source={require("../assets/illustrations/ginger-cat-718.png")}
			/>
			<Text
				style={[
					{
						fontWeight: "bold",
						fontSize: 28
					},
					styles.text
				]}
			>
				What is a team without team bonding?
			</Text>
			<Text style={[styles.text, { marginBottom: 50, fontSize: 14 }]}>
				Welcome to Pometo! Where there are games and fun that allow you
				to interact with your team mates and bond together even meeting
				each other
			</Text>
			<FormButton
				buttonTitle="Login"
				onPress={() => navigation.navigate("LoginScreen")}
			></FormButton>

			<AwesomeAlert
				show={alertVisible}
				title="Do you have an Organisation ID?"
				showCancelButton={true}
				showConfirmButton={true}
				cancelText="No"
				confirmText="Yes"
				confirmButtonColor="#6b5b95"
				alertContainerStyle={styles.alertContainer}
				cancelButtonStyle={styles.alertBtn}
				confirmButtonStyle={styles.alertBtn}
				onCancelPressed={() => {
					navigation.navigate("CreateOrgIdScreen");
				}}
				onConfirmPressed={() => {
					navigation.navigate("SignUpScreen", { orgId: "" });
				}}
				onDismiss={() => setAlertVisible(false)}
			/>

			<FormButton
				buttonTitle="Sign up"
				onPress={() => setAlertVisible(true)}
			></FormButton>
		</View>
	);
};

export default OnboardingScreen;
const ratio = windowWidth / 1216;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#a7a5f3"
	},
	illustration: {
		width: "100%",
		height: ratio * 912
	},
	text: {
		paddingHorizontal: 30,
		paddingBottom: 10,
		color: "#fff"
	},
	alertContainer: {
		textAlign: "center"
	},
	alertBtn: {
		width: 80
	}
});
