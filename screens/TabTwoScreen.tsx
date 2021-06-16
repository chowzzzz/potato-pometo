import * as React from 'react';
import { SafeAreaView, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native"
import { Card, ListItem, Button } from 'react-native-elements'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Search from "../components/Search";
import { useNavigation } from '@react-navigation/native';
import { processFontFamily } from 'expo-font';

// import { TouchableOpacity } from 'react-native-gesture-handler';

//import {BasicButton} from '@phomea/react-native-buttons'

export default function TabTwoScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Card>
          <Card.Title> GAMES GALORE</Card.Title>
          <Card.Divider />
          <Card.Image style={styles.image} source={require('../assets/images/ginger-cat-robot-cat-twin.png')}>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => navigation.navigate('Quiz')}
            >
              <Text style={styles.textStyle}>
                Quiz
              </Text>
            </TouchableOpacity>
          </Card.Image>
          <Card.Divider />
          <View>
            <Card.Image style={styles.image} source={require('../assets/images/ginger-cat-736.png')}>
              <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate('BabyGame')}
              // type="solid"
              >
                <Text style={styles.textStyle}>
                  Baby Picture Guesser
                </Text>
              </TouchableOpacity>
            </Card.Image>
          </View>
        </Card>

      </ScrollView>
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
  }
});
