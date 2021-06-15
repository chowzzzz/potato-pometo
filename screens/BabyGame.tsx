import * as React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image, FlatList } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'






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
  });