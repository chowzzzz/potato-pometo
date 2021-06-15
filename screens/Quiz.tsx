import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Search from "../components/Search";

export default class Quiz extends Component {
	constructor(props: any) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}
	login = () => {
		// this.props.navigation.navigate('TabOneScreen')
	};
	signUp = () => {
		// this.props.navigation.navigate("SignUp");
	};

	render() {
		return (
			<View>
				<Search />
				<View>
					{/* <Icon name="email" size={16} style={styles.emailIcon} /> */}
					<TextInput
						placeholder="Email"
						autoCapitalize="none"
						autoCorrect={false}
						textContentType={"emailAddress"}
						onChangeText={this.handleEmail}
					/>
				</View>
				<View >
					{/* <Icon name="locked" size={16} style={styles.passwordIcon} /> */}
					<TextInput
					
						placeholder="Password"
						autoCapitalize="none"
						autoCorrect={false}
						secureTextEntry={true}
						textContentType={"password"}
						onChangeText={this.handlePassword}
					/>
				</View>
				{/* <TouchableOpacity
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
				</TouchableOpacity> */}
			</View>
		);
	}
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });