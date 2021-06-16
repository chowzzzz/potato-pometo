import React from "react";
import {
	SafeAreaView,
	ScrollView,
	View,
	StyleSheet,
	Text,
	Image,
	FlatList,
	TouchableOpacity
} from "react-native";
import { Card } from "react-native-elements";
import { windowHeight } from "../utils/Dimensions";

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
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
		title: "Baked some fresh brownies! Anyone wanna be my guinea pig?",
		imageUrl:
			"https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/08/bundt-by-the-backyard-bakers-900x643.png",
		username: "aerrng",
		caption:
			"Hazelnut lava brownies dazzled with honey with a little surprise inside! Let me know if youre wanna try, dont mind delivering it to you (:"
	}
];

const Post = ({ title, imageUrl, username, caption, likes, url }) => (
	<Card containerStyle={styles.cardBox}>
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<TouchableOpacity>
				<Text style={{ fontSize: 15, fontWeight: "bold" }}>
					@{username}
				</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<Image
					source={require("../assets/icons/dots.png")}
					style={styles.threedot}
				/>
			</TouchableOpacity>
		</View>

		<Card.Divider />

		{imageUrl && <Image source={imageUrl} style={styles.image} />}

		{imageUrl && (
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity>
					<Hearts likes={likes} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../assets/icons/forward.png")}
						style={styles.heart}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../assets/icons/iconaeroplane.png")}
						style={styles.heart}
					/>
				</TouchableOpacity>
			</View>
		)}

		<Text style={{ fontWeight: "bold", fontSize: 16, marginVertical: 5 }}>
			{title}
		</Text>
		<Text>{caption}</Text>
		<TouchableOpacity
			style={{ textDecorationLine: "underline", marginVertical: 5 }}
		>
			{url}
		</TouchableOpacity>
	</Card>
);

function Hearts({ likes }) {
	if (likes === 0) {
		return (
			<Image
				source={require("../assets/icons/heart.png")}
				style={styles.heart}
			/>
		);
	} else {
		return (
			<Image
				source={require("../assets/icons/hearted.png")}
				style={styles.heart}
			/>
		);
	}
}

export default class MyPostsScreen extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {
			displayedData: posts
		};
	}
	componentDidMount() {
		this.setState({ displayedData: posts });
	}

	render() {
		const renderItem = ({ item }) => (
			<Post
				key={item.id}
				title={item.title}
				imageUrl={item.imageUrl}
				username={item.username}
				caption={item.caption}
				url={item.url}
				likes={item.likes}
			/>
		);

		return (
			<SafeAreaView>
				<ScrollView
					contentContainerStyle={styles.container}
					showsVerticalScrollIndicator={false}
				>
					<View>
						<Text style={styles.bigTitle}>📝 My Posts 📝</Text>
						<FlatList
							data={this.state.displayedData}
							renderItem={renderItem}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "stretch",
		justifyContent: "flex-start",
		height: windowHeight - 49
	},
	bigTitle: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 30,
		marginBottom: 10
	},
	title: {
		fontSize: 20,
		fontWeight: "bold"
	},
	icon: {
		width: 41,
		height: 31
	},
	cardBox: {
		borderRadius: 15,
		marginBottom: 15
	},
	threedot: {
		height: 25,
		width: 40
	},
	image: {
		height: 300,
		width: 300,
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
