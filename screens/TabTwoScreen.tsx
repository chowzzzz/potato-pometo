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
    <View>
      <Button style ={styles.buttonStyle}
        onPress = {() => navigation.navigate('Quiz')}
        type="solid"
        title="Quiz"
        />
      <Button style ={styles.buttonStyle}
        title="Baby Photo Guesser"
        raised
        type="solid"
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
