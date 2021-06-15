import "react-native-gesture-handler";
import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import MainPage from "./screens/MainPage";
import SignUp from "./screens/SignUp";
import TabOneScreen from "./screens/TabOneScreen";
import TabTwoScreen from "./screens/TabTwoScreen";
import Quiz from "./screens/Quiz";
import Game from "./screens/Game";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainPage"
                component={MainPage}
            />
            <Stack.Screen name="SignUp"
                component={SignUp}
                options={{
                    title: 'Sign Up',
                    headerShown: false,
                }}
            />
            <Stack.Screen name="TabOneScreen"
                component={TabOneScreen}
                options={{
                    title: 'TabOneScreen',
                    headerShown: false,
                }}
            />
            <Stack.Screen name="TabTwoScreen"
                component={TabTwoScreen}
                options={{
                    title: 'TabTwoScreen',
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Quiz"
                component={Quiz}
                options={{
                    title: 'Quiz',
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Game"
                component={Game}
                options={{
                    title: 'Game',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                {/* <NavigationContainer>
                    <RootStack.Navigator mode="modal"
                        headerMode="none"
                    >
                        <RootStack.Screen name="MainPage"
                            component={StackScreen} />
                    </RootStack.Navigator>
                </NavigationContainer> */}
            </SafeAreaProvider>
        );
    }
}
