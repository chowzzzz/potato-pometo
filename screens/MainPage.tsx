import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
	StyleSheet,
	View,
	Image,
	StatusBar,
	TextInput,
	TouchableOpacity,
	Text,
	Keyboard,
	TouchableWithoutFeedback,
	Alert,
	SafeAreaView
} from "react-native";

import Search from "../components/Search";

export default class MainPage extends Component {
	constructor(props: any) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	// handleEmail = (email) => {
	//     this.setState({ email: email })
	// }

	// handlePassword = (password) => {
	//     this.setState({ password: password })
	// }

	login = () => {
		this.props.navigation.navigate('TabOneScreen')
	};
	signUp = () => {
		this.props.navigation.navigate("SignUp");
	};

	render() {
		return (
			<View style={styles.loginContainer}>
				<Search />
				<Image
					source={require("../assets/images/pometo.png")}
					style={styles.myImage}
				/>
				<View style={styles.inputs}>
					{/* <Icon name="email" size={16} style={styles.emailIcon} /> */}
					<TextInput
						style={styles.emailBox}
						placeholder="Email"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType={"emailAddress"}
						onChangeText={this.handleEmail}
					/>
				</View>
				<View style={styles.inputs}>
					{/* <Icon name="locked" size={16} style={styles.passwordIcon} /> */}
					<TextInput
						style={styles.passwordBox}
						placeholder="Password"
						autoCapitalize="none"
						autoCorrect={false}
						secureTextEntry={true}
						textContentType={"password"}
						onChangeText={this.handlePassword}
					/>
				</View>
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => this.login()}
				>
					<Text style={styles.loginText}> Login </Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.signUpButton}
					onPress={() => this.signUp()}
				>
					<Text style={styles.loginText}> Sign Up </Text>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		alignItems: "center"
	},
	myImage: {
		height: 400,
		height: 370,
		marginTop: 1
	},
	loginContainer: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		marginBottom: 1,
		marginTop: 1,
		backgroundColor: "#9896f1"
	},
	loginButton: {
		backgroundColor: "#6b5b95",
		justifyContent: "center",
		borderRadius: 20,
		padding: 1,
		marginTop: 100,
		margin: 15,
		height: 40,
		height: 200,
		alignItems: "center"
	},
	emailBox: {
		height: 40,
		color: "black",
		marginLeft: -45,
		borderBottomColor: "grey",
		fontSize: 16,
		borderBottomWidth: 2,
		height: "80%",
		textAlign: "center",
		fontFamily: "Futura",
		alignItems: "center",
		marginTop: 10
	},
	signUpButton: {
		backgroundColor: "#6b5b95",
		justifyContent: "center",
		borderRadius: 20,
		padding: 1,
		marginTop: 10,
		margin: 15,
		height: 40,
		height: 200,
		alignItems: "center"
	},
	loginText: {
		color: "#fff8dc",
		fontFamily: "Gill Sans",
		fontSize: 20
	},
	inputs: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 50,
		marginTop: 10
	},
	passwordBox: {
		height: 40,
		marginTop: 30,
		color: "black",
		marginLeft: -45,
		borderBottomColor: "grey",
		fontSize: 16,
		borderBottomWidth: 2,
		height: "80%",
		textAlign: "center",
		fontFamily: "Futura",
		alignItems: "center"
	}
});
