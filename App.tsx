import "react-native-gesture-handler";
import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import SignUp from "./SignUp";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function StackScreen() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen
				name="SignUp"
				component={SignUp}
				options={{
					title: "Sign Up",
					headerShown: false
				}}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<RootStack.Navigator mode="modal" headerMode="none">
				<RootStack.Screen name="Login" component={StackScreen} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
