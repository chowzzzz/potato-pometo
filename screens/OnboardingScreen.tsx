import React from "react";
import {
	StyleSheet,
	Image,
	View,
	Dimensions,
	Text,
	TouchableOpacity
} from "react-native";
import FormButton from "../components/FormButton";
import { windowWidth } from "../utils/Dimensions";

const OnboardingScreen = ({ navigation }) => {
	console.log(navigation);
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
						fontSize: 25,
						textAlign: "center"
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
			<FormButton
				buttonTitle="Sign up"
				onPress={() => navigation.navigate("SignUpScreen")}
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
		textAlign: "center",
		paddingHorizontal: 30,
		paddingBottom: 10,
		color: "#fff"
	}
});
