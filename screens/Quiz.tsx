import * as React from 'react';
import { SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity,Text,View } from "react-native"
import { Card, ListItem, Button } from 'react-native-elements'
import EditScreenInfo from '../components/EditScreenInfo';
import Search from "../components/Search";
import { useNavigation } from '@react-navigation/native';

// import { TouchableOpacity } from 'react-native-gesture-handler';

//import {BasicButton} from '@phomea/react-native-buttons'

export default function Quiz() {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<Search />
			<Card>
				<Card.Title>PICK A CHOICE</Card.Title>
				<Card.Divider />
				<Card.Image style={styles.image} source={require('../assets/images/ginger-cat-robot-cat-twin.png')}>
					<TouchableOpacity style={styles.buttonStyle}
						onPress={() => navigation.navigate('PlayQuizIntro')}
					>
						<Text style={styles.textStyle}>Play Quiz</Text>
					</TouchableOpacity>
				</Card.Image>
				<Card.Divider />
				<View>
					<Card.Image style={styles.image} source={require('../assets/images/ginger-cat-729.png')}>
						<TouchableOpacity style={styles.buttonStyle}
							onPress={() => navigation.navigate('CreateQuiz')}
						// type="solid"
						>
							<Text style={styles.textStyle}>
								Create Quiz
							</Text>
							{/* <Button
                  buttonStyle={{ height: '100%', backgroundColor: '#c4c3f7' }}
                  title='Baby Guesser'
                /> */}
						</TouchableOpacity>
					</Card.Image>
				</View>
			</Card>
			{/* <View>
				<Button style={styles.buttonStyle}
					raised
					type="solid"
					title="Create Quiz"
				/>
				<Button style={styles.buttonStyle}
					title="Play Quiz"
					onPress={() => navigation.navigate('PlayQuiz')}
					raised
					type="solid"
				/>
			</View> */}
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
	buttonStyle: {
		marginTop: 200,
		padding: 10,
		width: '100%',
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'center',
		backgroundColor: '#c4c3f7',
		marginBottom: -100,
    borderRadius: 10,
	  },
	image: {
	  width: 350,
	  height: 200,
	  marginBottom: 50,
	},
  textStyle: {
    color: 'black',
    fontSize:20,
  },
});
