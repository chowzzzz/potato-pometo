import * as React from 'react';
import { SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native"
import { Card, ListItem, Button} from 'react-native-elements'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Search from "../components/Search";
import Quiz from "./Quiz";
import { useNavigation } from '@react-navigation/native';

// import { TouchableOpacity } from 'react-native-gesture-handler';

//import {BasicButton} from '@phomea/react-native-buttons'

export default function TabTwoScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Search />
	<Card>
    <Card.Title> GAMES GALORE</Card.Title>
    <Card.Divider/>
    <Card.Image style ={styles.image} source= {require('../assets/images/ginger-cat-robot-cat-twin.png')}></Card.Image>
    <View>
      <TouchableOpacity style ={styles.buttonStyle}
        onPress = {() => navigation.navigate('Quiz')}
        // type="solid"
        >
          <Button
            buttonStyle={{height: '100%', backgroundColor:'#c4c3f7'}}
            title='Quiz'
          />
        </TouchableOpacity>
        </View>
      <Card.Divider/>
      <View>
      <Card.Image source= {require('../assets/images/ginger-cat-736.png')}></Card.Image>
      <TouchableOpacity style ={styles.buttonStyle}
        onPress = {() => navigation.navigate('BabyGame')}
        // type="solid"
        >
          <Button
            buttonStyle={{height:'100%', backgroundColor:'#c4c3f7'}}
            title='Baby Guesser'
          />
        </TouchableOpacity>
        </View>
    </Card>
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
    //height: '80%',
  },
  buttonStyle: {
    height: '100%',
    color: 'red',
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent: 'center',
  },
  image:{
    width:400,
    height:300,
  }
});
