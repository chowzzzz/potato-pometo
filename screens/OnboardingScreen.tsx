import React from "react";
import { StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
	console.log(navigation);
	return (
		<Onboarding
			pages={[
				{
					backgroundColor: "#fff",
					image: (
						<Image
							source={require("../assets/illustrations/ginger-cat-work-from-home.png")}
						/>
					),
					title: "Tired of working from home all day?",
					subtitle:
						"Pometo is your virtual team building mobile application that keeps you happy and entertained at anytime of the day!"
				},
				{
					backgroundColor: "#fff",
					image: (
						<Image
							source={require("../assets/illustrations/ginger-cat-718.png")}
						/>
					),
					title: "What is a team without team bonding?",
					subtitle:
						"With a social feed, your team can bond together by having fun and keeping one another updated!"
				},
				{
					backgroundColor: "#fff",
					image: (
						<Image
							source={require("../assets/illustrations/ginger-cat-739.png")}
						/>
					),
					title: "Work hard, but also play hard!",
					subtitle:
						"Play mini games with one another in the team to get to know each other better and see who gets the highest scores!"
				}
			]}
		/>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});
