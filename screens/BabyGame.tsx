import React, { Component } from "react";
import { SafeAreaView,ScrollView, View, StyleSheet, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export default function BabyGame() {
	const navigation = useNavigation();

	return (
		//if(score >= 10){}
    <SafeAreaView style={styles.container}>
		  <View>
			  <View style={styles.container}>
				  <Text style={styles.header}>
					  GUESS WHO 🤔
				  </Text>
        <ScrollView>
				  <Image 
				    style={styles.image}
				    source={require("../assets/images/iu-baby.jpg")}
				  />
				  <Text style={styles.modalContent}>
            Who is this beautiful baby? {"\n"}
				  <View style={styles.container}>
				    <TouchableOpacity style={styles.buttonStyle}
					    onPress={() => {alert("You're wrong :(")}}>
				  <Text style={styles.textStyle}>
					  Aerin
				  </Text>
				    </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
					    onPress={() => {alert("You're wrong :(")}}>
				  <Text style={styles.textStyle}>
					  Queenie
				  </Text>
				    </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
					    onPress={() => {alert("You're right!")}}>
				  <Text style={styles.textStyle}>
					  Ji Eun
				  </Text>
				    </TouchableOpacity>
            </View>
              </Text>

        <Image 
				style={styles.image}
				source={require("../assets/images/baby-Photo.jpg")}
				/>
				<Text style={styles.modalContent}
				> Who is this beautiful baby? {"\n"}
				<View style={styles.container}>
				<TouchableOpacity style={styles.buttonStyle}
					onPress={() => {alert("You're wrong :(")}}
				>
				<Text style={styles.textStyle}>
					Aerin
				</Text>
				</TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
					onPress={() => {alert("You're wrong :(")}}
				>
				<Text style={styles.textStyle}>
					Queenie
				</Text>
				</TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
					onPress={() => {alert("You're right!")}}
				>
				<Text style={styles.textStyle}>
					Julien
				</Text>
				</TouchableOpacity>
			</View>
				</Text>
        </ScrollView>
        
			</View>
    </View>
    </SafeAreaView>
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
		marginTop: 0,
		padding: 10,
		width: '100%',
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'center',
		backgroundColor: '#c4c3f7',
		height: 35,
		marginBottom: 0,
		borderRadius: 10,
	},
	answer: {
		marginTop: 30,

	},
	header: {
		fontSize: 40,
		color: '#404040',
    textAlign: "center",
		fontWeight: "bold"
	},
	image: {
		width: 350,
		height: 250,
		marginBottom: 50,
    borderRadius: 10
	},
	modalContent: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		padding:4,
		borderRadius: 6,
		textAlign: "center",
		borderColor: "c4c3f7",
		borderWidth: 2,
		height: 150,
		width: '100%',
		fontSize: 18,
	},
	textStyle: {
		color: 'black',
		fontSize:20,
	}
});