import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export default function FinalResult() {
	const navigation = useNavigation();
	return (
		//if(score >= 10){}
		<View>
			<View style={styles.container}>
				<Text style={styles.header}>
					Final Results
				</Text>
				<Image 
				style={styles.image}
				source={require("../assets/images/lime-409.png")}
				/>
				<Text style={styles.modalContent}
				> Congratulations You're Aerin's best friend you got 5/5!🎉 {"\n"}
				<View style={styles.container}>
				<TouchableOpacity style={styles.buttonStyle}
					onPress={() => navigation.navigate('Quiz')}
				// type="solid"
				>
				<Text style={styles.textStyle}>
					Back
				</Text>
				</TouchableOpacity>
			</View>
				</Text>
			</View>
		</View>
		// //else{}
		// <View>
		// 	<View style={styles.container}>
		// 		<Text style={styles.header}>
		// 			Final Results
		// 		</Text>
		// 		<Image 
		// 		style={styles.image}
		// 		source={require("")}
		// 		/>
		// 		<Text style={styles.modalContent}
		// 		> Come on, You can do better!
		// 		</Text>
		// 	</View>
		// 	<View style={styles.container}>
		// 		<TouchableOpacity style={styles.buttonStyle}
		// 			onPress={() => navigation.navigate('BabyGame')}
		// 		// type="solid"
		// 		>
		// 		<Text style={styles.textStyle}>
		// 			Back
		// 		</Text>
		// 		</TouchableOpacity>
		// 	</View>
		// </View>
	);

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
	form: {
		margin: 10,
		marginTop: -20,
	},
	buttonStyle: {
		marginTop: 120,
		padding: 10,
		width: '100%',
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'center',
		backgroundColor: '#c4c3f7',
		height: 35,
		borderRadius: 10,
	},
	answer: {
		marginTop: 30,

	},
	header: {
		fontSize: 50,
		color: '#404040',
        textAlign: "center",
		fontWeight: "bold"
	},
	image: {
		width: 350,
		height: 250,
		marginBottom: 50,
	},
	modalContent: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		padding:8,
		borderRadius: 6,
		textAlign: "center",
		borderColor: "#c4c3f7",
		borderWidth: 2,
		height: 95,
		width: '90%',
		fontSize: 18,
	},
	textStyle: {
		color: 'black',
		fontSize:20,
	}
});