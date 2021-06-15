import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import Search from "../components/Search";

export default function FinalResult() {
	const [ans1, setTextInputValueans1] = React.useState('');
	const [ans2, setTextInputValueans2] = React.useState('');
	const [ans3, setTextInputValueans3] = React.useState('');
	const [ans4, setTextInputValueans4] = React.useState('');
	const navigation = useNavigation();



	return (
		<View>
			<Text style={styles.header}>
				Final Results
			</Text>
			<Button title="back" 
            // onPress={() => navigation.navigate('FinalResult')} 
            />
		</View>

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
		width: '100%',
		color: 'red',
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	answer: {
		marginTop: 30,
		fontFamily: 'Futura',

	},
	header: {
		fontSize: 50,
		color: 'grey',
		fontFamily: 'Futura',
        textAlign: "center"
	}
});