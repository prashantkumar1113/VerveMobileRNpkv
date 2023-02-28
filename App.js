// import {REACT_APP_BACKEND_URL} from "@env";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import colors from "./src/theme/colors";
import LandingScreen from "./src/screens/LandingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SchedulesDashboardScreen from "./src/screens/SchedulesDashboardScreen";
import ScheduleInfoScreen from "./src/screens/ScheduleInfoScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ScheduleStack = createNativeStackNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: colors.secondary},
                headerTintColor: colors.white,
                headerTitleStyle: {fontWeight: "bold"},
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {backgroundColor: colors.secondary},
                // tabBarActiveBackgroundColor: colors.secondary,
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={SchedulesStackNavigator}
                options={{
                    tabBarLabel: "Schedules",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name="calendar-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name="person-circle-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            {/* <Tab.Screen // for hiding a tab bar button
                name="ScheduleInfo"
                component={ScheduleInfoScreen}
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            /> */}
        </Tab.Navigator>
    );
}

function SchedulesStackNavigator() {
    return (
        <ScheduleStack.Navigator
            screenOptions={{
                headerTintColor: colors.primary,
                headerShadowVisible: false,
                headerBackTitleVisible: false,
                // headerTransparent: true,
            }}
        >
            <ScheduleStack.Screen
                name="Schedules"
                component={SchedulesDashboardScreen}
                options={{headerShown: false}}
            />
            <ScheduleStack.Screen
                name="ScheduleInfo"
                component={ScheduleInfoScreen}
                options={({route, navigation}) => {
                    return {
                        title: route.params.date, // Passing the date to the screen title
                    };
                }}
            />
        </ScheduleStack.Navigator>
    );
}

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
                    <Stack.Screen
                        name="SchedulesDashboard"
                        component={TabNavigator}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="light" />
        </>
    );
}
