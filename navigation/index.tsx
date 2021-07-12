import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ColorSchemeName } from "react-native";
import { firebase } from "../firebase/config.js";

import LoginScreen from "../screens/LoginScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignUpScreen from "../screens/SignUpScreen";
import CreateOrgIdScreen from "../screens/CreateOrgIdScreen";
import { RootStackParamList } from "../types";
import AuthStack from "./AuthStack";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}
    >
      {/* theme={colorScheme === 'light' ? DefaultTheme : DarkTheme}> */}
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    firebase.auth().onAuthStateChanged((u) => {
      if (u) {
        dbRef
            .child("users")
            .child(u.uid)
            .get()
            .then((snapshot) => {
              const data = snapshot.val();
              setUser(data);
            })
            .catch((error) => {
            });
      }
      setLoading(false);
    });
  }, []);

  console.log("user: " + user);

  if (loading) {
    return <></>;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      {user ? (
				<Stack.Screen name="Root" component={BottomTabNavigator} />
			) : (
				// <AuthStack />
				<>
				  <Stack.Screen
				    name="OnboardingScreen"
				    component={OnboardingScreen}
				  />
				  <Stack.Screen name="LoginScreen" component={LoginScreen} />
				  <Stack.Screen
				    name="CreateOrgIdScreen"
				    component={CreateOrgIdScreen}
				  />
				  <Stack.Screen
				    name="SignUpScreen"
				    component={SignUpScreen}
				  />
				</>
			)}

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
