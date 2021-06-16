import React, { useState, useCallback, useRef } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { firebase } from "../firebase/config";
// import Carousel from "react-native-snap-carousel";

import FormButton from "../components/FormButton";

const posts = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "My Yummy Lunch!",
		imageUrl:
			"https://www.topasiatour.com/pic/Singapore/guide/bak-kut-teh-2.jpg",
		username: "aerrng",
		caption:
			"Delivered from ichigo bakuteh bowl from @tan.wee.wee, this was outstanding! The ground pork on hand, shredded carrots, coleslaw cabbage mix; substituted Maggi seasoning and Tabasco with good balance of soy sauce and Sriracha. Served it with red quinoa which was tasty mixed together. There were no left overs ;-)"
	},
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "My Yummy Lunch!",
		imageUrl:
			"https://www.topasiatour.com/pic/Singapore/guide/bak-kut-teh-2.jpg",
		username: "aerrng",
		caption:
			"Delivered from ichigo bakuteh bowl from @tan.wee.wee, this was outstanding! The ground pork on hand, shredded carrots, coleslaw cabbage mix; substituted Maggi seasoning and Tabasco with good balance of soy sauce and Sriracha. Served it with red quinoa which was tasty mixed together. There were no left overs ;-)"
	},
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "My Yummy Lunch!",
		imageUrl:
			"https://www.topasiatour.com/pic/Singapore/guide/bak-kut-teh-2.jpg",
		username: "aerrng",
		caption:
			"Delivered from ichigo bakuteh bowl from @tan.wee.wee, this was outstanding! The ground pork on hand, shredded carrots, coleslaw cabbage mix; substituted Maggi seasoning and Tabasco with good balance of soy sauce and Sriracha. Served it with red quinoa which was tasty mixed together. There were no left overs ;-)"
	}
];

export default function TabThreeScreen({ navigation }) {
	const [name, setName] = useState();
	const [username, setUsername] = useState();

	const [activeIndex, setActiveIndex] = useState(0);
	const [carouselItems, setCarouselItems] = useState(posts);
	const ref = useRef(null);

	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			const dbRef = firebase.database().ref();
			dbRef
				.child("users")
				.child(user.uid)
				.get()
				.then((snapshot) => {
					if (!snapshot.exists()) {
						alert("User does not exist anymore.");
						return;
					}
					const user = snapshot.val();
					setName(user.name);
					setUsername(user.username);
				})
				.catch((error) => {
					alert(error);
				});
		} else {
			// User is signed out
			// ...
		}
	});

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

	const renderItem = useCallback(
		({ item, index }) => (
			<View
				style={{
					backgroundColor: "floralwhite",
					borderRadius: 5,
					height: 250,
					padding: 50,
					marginLeft: 25,
					marginRight: 25
				}}
			>
				<Text style={{ fontSize: 30 }}>{item.title}</Text>
				<Text>5 likes</Text>
			</View>
		),
		[]
	);

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.card,
					{ flex: 1, border: "solid lightgrey 1px", borderRadius: 10 }
				]}
			>
				<View style={styles.profileCard}>
					<View style={{ flex: 1 }}>
						<Image
							style={styles.myImage}
							source={require("../assets/images/profilepic.png")}
						/>
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							marginLeft: 15
						}}
					>
						<Text style={styles.title}>{name}</Text>
						<Text style={styles.subtitle}>@{username}</Text>
					</View>
				</View>
				<FormButton
					buttonTitle="View My Profile"
					onPress={() => navigation.navigate("ProfileScreen")}
				/>
			</View>

			<View style={[styles.postsCard, styles.card]}>
				<Text style={styles.title}>My Posts</Text>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						justifyContent: "center"
					}}
				>
					{/* <Carousel
						layout="default"
						ref={ref}
						data={carouselItems}
						sliderWidth={300}
						itemWidth={300}
						renderItem={renderItem}
						onSnapToItem={(index) => setActiveIndex(index)}
					/> */}
				</View>
			</View>
			<View style={styles.btnCard}>
				<FormButton
					buttonTitle="Settings"
					onPress={() => console.log("Oops, coming soon!")}
				/>
				<FormButton
					buttonTitle="Sign Out"
					onPress={() => onLogoutPress()}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		color: "#000"
	},
	title: {
		fontSize: 20,
		fontWeight: "bold"
	},
	subtitle: {
		fontSize: 15
	},
	card: {
		marginTop: 20,
		paddingHorizontal: 10,
		width: "85%",
		justifyContent: "center",
		alignItems: "center"
	},
	profileCard: {
		justifyContent: "space-between",
		flexDirection: "row"
	},
	myImage: {
		height: 60,
		width: 60,
		margin: 5,
		alignSelf: "flex-end"
	},
	postsCard: {
		flex: 2
	},
	btnCard: {
		flex: 1,
		width: "95%",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 15
	},
	cardBox: {
		borderRadius: 15,
		width: "100%"
	},
	threedot: {
		height: 25,
		width: 40
	},
	image: {
		height: 200,
		width: 200,
		alignSelf: "center",
		marginBottom: 10
	},
	heart: {
		height: 14.7,
		width: 17,
		marginVertical: 8,
		marginLeft: 0,
		marginRight: 15
	}
});
