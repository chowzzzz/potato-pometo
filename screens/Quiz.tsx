import * as React from 'react';
import { SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native"
import { Card, ListItem, Button} from 'react-native-elements'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Search from "../components/Search";
import { useNavigation } from '@react-navigation/native';

// import { TouchableOpacity } from 'react-native-gesture-handler';

//import {BasicButton} from '@phomea/react-native-buttons'

export default function Quiz() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

      <Search />
      <Button style ={styles.buttonStyle}
		raised
        type="solid"
        title="Create Quiz"
        />
      <Button style ={styles.buttonStyle}
        title="Play Quiz"
		onPress = {() => navigation.navigate('PlayQuiz')}
        raised
        type="solid"
        />
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
    width: '100%',
    color: 'red',
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent: 'center'
  }
});
