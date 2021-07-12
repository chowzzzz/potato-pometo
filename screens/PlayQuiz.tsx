import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Search from "../components/Search";

export default function PlayQuiz(route: any) {
  const [ans1, setTextInputValueans1] = React.useState("");
  const [ans2, setTextInputValueans2] = React.useState("");
  const [ans3, setTextInputValueans3] = React.useState("");
  const [ans4, setTextInputValueans4] = React.useState("");
  const navigation = useNavigation();
  const chosenColleague = route.params;


  return (
    <View>
      <Text style={styles.header}>
				Quiz Time!
      </Text>
      <Card containerStyle={{borderRadius: 15}}>
        <View style={styles.form}>
          <View>
            <Text style={styles.answer} >What is Josh's favourite food </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                fontFamily: "Futura",
                paddingLeft: 10,
              }}
              onChangeText={(text) => setTextInputValueans1(text)}
              value={ans1}
              placeholder="Insert your answer"
            />
          </View>

          <View>
            <Text style={styles.answer} >What is Josh's favourite music? </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                paddingLeft: 10,
                fontFamily: "Futura",
              }}
              onChangeText={(text) => setTextInputValueans2(text)}
              value={ans2}
              placeholder="Insert your answer"
              // defaultValue="testing"
            />
          </View>

          <View>
            <Text style={styles.answer} >How often does Josh has Bakuteh? </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                fontFamily: "Futura",
                paddingLeft: 10,
              }}
              onChangeText={(text) => setTextInputValueans3(text)}
              value={ans3}
              placeholder="Insert your answer"
              // defaultValue="testing"
            />
          </View>
          <View >
            <Text style={styles.answer} >What is Josh's personality type? </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                fontFamily: "Futura",
                paddingLeft: 10,
              }}
              onChangeText={(text) => setTextInputValueans4(text)}
              value={ans4}
              placeholder="Insert your answer"
              // defaultValue="testing"
            />
          </View>
          <View >
            <Text style={styles.answer} >Which department is Josh working in? </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                fontFamily: "Futura",
                paddingLeft: 10,
              }}
              onChangeText={(text) => setTextInputValueans4(text)}
              value={ans4}
              placeholder="Insert your answer"
              // defaultValue="testing"
            />
          </View>
        </View>
      </Card>

      <Button style={{marginTop: 20}}title="Submit Quiz" onPress={() => navigation.navigate("FinalResult")} />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  form: {
    margin: 10,
    marginTop: -20,
  },
  buttonStyle: {
    marginTop: 120,
    padding: 10,
    width: "100%",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#c4c3f7",
    height: 35,
    borderRadius: 10,
  },
  answer: {
    marginTop: 30,
    fontFamily: "Futura",

  },
  header: {
    fontSize: 50,
    color: "grey",
    fontFamily: "Futura",
  },
});
