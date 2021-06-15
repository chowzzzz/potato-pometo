import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import Search from "../components/Search";

export default function PlayQuiz() {
	const [ans1, setTextInputValueans1] = React.useState('');
	const [ans2, setTextInputValueans2] = React.useState('');
	const [ans3, setTextInputValueans3] = React.useState('');
	const [ans4, setTextInputValueans4] = React.useState('');
	const navigation = useNavigation();



	return (
		<View>
			<Text style={styles.header}>
				Quiz Time!
			</Text>
			<View style={styles.form}>
				<View>
					<Text  style={styles.answer} >What is your favourite food </Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							fontFamily: 'Futura',
							paddingLeft:10,
						}}
						onChangeText={text => setTextInputValueans1(text)}
						value={ans1}
						placeholder="Insert your answer"
					/>
				</View>

				<View>
					<Text  style={styles.answer} >What is your favourite music? </Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							paddingLeft:10,
							fontFamily: 'Futura',
						}}
						onChangeText={text => setTextInputValueans2(text)}
						value={ans2}
						placeholder="Insert your answer"
					// defaultValue="testing"
					/>
				</View>

				<View>
					<Text style={styles.answer} >What is your favourite music? </Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							fontFamily: 'Futura',
							paddingLeft:10,
						}}
						onChangeText={text => setTextInputValueans3(text)}
						value={ans3}
						placeholder="Insert your answer"
					// defaultValue="testing"
					/>
				</View>				
				<View >
					<Text style={styles.answer} >What is your favourite music? </Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							fontFamily: 'Futura',
							paddingLeft:10,
						}}
						onChangeText={text => setTextInputValueans4(text)}
						value={ans4}
						placeholder="Insert your answer"
					// defaultValue="testing"
					/>
				</View>
			</View>
			<Button title="Submit Quiz" onPress={() => navigation.navigate('FinalResult')} />
		</View>

	);

}


// export default class PlayQuiz extends Component {
// 	constructor(props: any) {
// 	  super(props);
// 	  this.state = {
// 		title: props.title || '',
// 		body: props.body || '',
// 	  };
// 	}
// 	render(){
// 		return(
// 			<View>
//  			<TextInput
// 				style={{
// 					height: 40,
// 					borderColor: 'gray',
// 					borderWidth: 1,
// 								}}
// 				onChangeText={text => this.setState({body: text})}
// 				value={this.props.body}
// 				defaultValue="testing"
// 			/>				
// 			</View>
// 		);
// 	}
//   }





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
		fontFamily: 'Futura'
	}
});