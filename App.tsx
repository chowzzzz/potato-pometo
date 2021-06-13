import "react-native-gesture-handler";
import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
<<<<<<< HEAD
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainPage from "./screens/MainPage";
import SignUp from "./screens/SignUp";

=======

import Login from "./Login";
import SignUp from "./SignUp";

>>>>>>> 9fcf780... add search bar
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function StackScreen() {
	return (
		<Stack.Navigator>
<<<<<<< HEAD
			<Stack.Screen name="MainPage" component={MainPage} />
=======
			<Stack.Screen name="Login" component={Login} />
>>>>>>> 9fcf780... add search bar
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
<<<<<<< HEAD
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				{/* <Navigation colorScheme={colorScheme} /> */}
				<NavigationContainer>
					<RootStack.Navigator mode="modal" headerMode="none">
						<RootStack.Screen name="MainPage" component={StackScreen} />
					</RootStack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		);
	}
=======
	return (
		<NavigationContainer>
			<RootStack.Navigator mode="modal" headerMode="none">
				<RootStack.Screen name="Login" component={StackScreen} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
>>>>>>> 9fcf780... add search bar
}
