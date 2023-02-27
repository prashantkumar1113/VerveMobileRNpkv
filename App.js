// import {REACT_APP_BACKEND_URL} from "@env";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import colors from "./src/theme/colors";
import LandingScreen from "./src/screens/LandingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SchedulesDashboardScreen from "./src/screens/SchedulesDashboardScreen";

const Stack = createNativeStackNavigator();

// console.debug(REACT_APP_BACKEND_URL);

export default function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        title: "",
                        // headerStyle: {backgroundColor: colors.primary},
                        headerTintColor: colors.secondary,
                        headerBackTitleVisible: false,
                        headerTransparent: true,
                    }}
                >
                    <Stack.Screen
                        name="Welcome"
                        component={LandingScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={SignupScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </>
    );
}
