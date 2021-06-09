import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './Login';
import {
  StyleSheet,
} from 'react-native';


const Stack = createStackNavigator();
const RootStack = createStackNavigator();
console.disableYellowBox = true;

function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login"
                          component={Login}
                                  /> 
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode = "modal"
                                 headerMode = "none"
            >
                <RootStack.Screen name="Login"
                                  component={StackScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: 10,
        margin: 15,
        marginTop: 30,
        height: 40,
        width: '50%',
        marginLeft: 100,
        alignItems: 'center',
    },
    loginText: {
        color: '#fff8dc',
        fontFamily: 'Futura',
    },
    signUpButton: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: 10,
        margin: 15,
        height: 40,
        marginLeft: 100,
        marginBottom: -50,
        width: '50%',
        alignItems: 'center',
    },
    signUpText: {
        color: '#fff8dc',
        fontFamily: 'Futura',
    },
    startButton: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: 10,
        margin: 15,
        marginTop: 30,
        height: 40,
        alignItems: 'center'
    },
    startButtonText: {
        color: '#fff8dc',
        fontFamily: 'Futura',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//           <Login></Login>
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }
