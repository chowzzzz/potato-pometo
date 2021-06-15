import * as React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image, FlatList } from "react-native";
import { Card, ListItem, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
//import {BasicButton} from '@phomea/react-native-buttons';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import Search from "../components/Search";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    imageUrl: '',
    username: 'aerr',
    caption: 'Hello world'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    imageUrl: '',
    username: 'wheeegeeeeee',
    caption: 'Hello world'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    imageUrl: '',
    username: 'wooooohoooo',
    caption: 'Hello world'
  },
];

export default function Game(props:any) {

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <Search />
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
	  <View>
		  <Text>
			  Games Landing Page
		  </Text>
    <View style={styles.fixToText}>
      <Button
        title="Quiz"
        //animation = "bounce"
        //color = '#6c69eb'

        //onPress = {() => navigation.navigate('BabyGame')}
        
        type="outline"
        />
      <Button
        title="Baby Photo Guesser"
        raised
        type="outline"
        />
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
    color:'#6c69eb'
  },
  fixToText: {
    flexDirection:'column',
    justifyContent: 'space-around'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
