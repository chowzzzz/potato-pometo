import "react-native-gesture-handler";
import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

<<<<<<< HEAD
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
=======
	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
			</SafeAreaProvider>
		);
	}
>>>>>>> 5f53800a131811a872cff9296d8335ed2577bcef
}
