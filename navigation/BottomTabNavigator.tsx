import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
} from "../types";

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import Quiz from '../screens/Quiz';
import PlayQuiz from '../screens/PlayQuiz';
import PlayQuizIntro from '../screens/PlayQuizIntro';
import FinalResult from '../screens/FinalResult';
import GamerTimer from '../screens/GamerTimer';
import BabyGame from "../screens/BabyGame";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(navigation: any) {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: "#883677",
        inactiveTintColor: "#AB8FDC",
      }}
    >
      <BottomTab.Screen
        name="Feed"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Games"
        component={TabTwoNavigator}
        // children={()=><Quiz/>}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="game-controller" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator initialRouteName="TabTwoScreen"
      screenOptions={{ headerShown: false }}>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Game' }}
      />
      <TabTwoStack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerTitle: 'Quiz' }}
      />
      <TabTwoStack.Screen
        name="PlayQuiz"
        component={PlayQuiz}
        options={{ headerTitle: 'PlayQuiz' }}
      />
      <TabTwoStack.Screen
        name="PlayQuizIntro"
        component={PlayQuizIntro}
        options={{ headerTitle: 'Introduction' }}
      />
      <TabTwoStack.Screen
        name="FinalResult"
        component={FinalResult}
        options={{ headerTitle: 'FinalResult' }}
      />
      <TabTwoStack.Screen
        name="GamerTimer"
        component={GamerTimer}
        options={{ headerTitle: 'GamerTimer' }}
      />
      <TabTwoStack.Screen
        name="BabyGame"
        component={BabyGame}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: "Tab Three Title" }}
      />
    </TabThreeStack.Navigator>
  );
}
