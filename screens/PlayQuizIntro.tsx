import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import Search from "../components/Search";

export default function PlayQuizIntro() {
	const [ans1, setTextInputValueans1] = React.useState('');
	const [ans2, setTextInputValueans2] = React.useState('');
	const [ans3, setTextInputValueans3] = React.useState('');
	const [ans4, setTextInputValueans4] = React.useState('');
	const navigation = useNavigation();



	return (
		<View>
			<Text style={styles.header}>
				A Quiz?
			</Text>
			<View  >
				<Text style={styles.text}>
					Want to know out more about your colleague, but unsure how to break the ice with them? This quiz is the purr-fect solution. Take this
					small quiz to find out their likes and dislikes, maybe this will be a great conversation starter for the two of you! Whether or not
					you're curious about someone and will want to know them better (wink wink), this minimizes any awkwardness when you want to talk to someone new.
					But no guarantees though....
					Oh, and did we mention that there is a point system to this as well?
				</Text>

				<Text style={styles.text}>
					Select the person you'd like to find out more about
				</Text>
				
			</View>


			<Button title="I'm ready!" onPress={() => navigation.navigate('FinalResult')} />
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
	text: {
		padding: 10,
		margin:10,
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
		fontSize: 40,
		color: 'grey',
		fontFamily: 'Futura',
		textAlign: "center"
	}
});