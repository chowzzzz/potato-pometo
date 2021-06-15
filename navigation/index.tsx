import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import MainPage from "../screens/MainPage";

import NotFoundScreen from "../screens/NotFoundScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignUp from "../screens/SignUp";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
	colorScheme
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "light" ? DefaultTheme : DarkTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="MainPage" component={MainPage} />
			<Stack.Screen
				name="OnboardingScreen"
				component={OnboardingScreen}
			/>
			<Stack.Screen
				name="SignUp"
				component={SignUp}
				options={{
					title: "Sign Up",
					headerShown: false
				}}
			/>
			<Stack.Screen name="Root" component={BottomTabNavigator} />
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: "Oops!" }}
			/>
		</Stack.Navigator>
	);
}
