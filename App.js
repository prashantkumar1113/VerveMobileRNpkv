// import {REACT_APP_BACKEND_URL} from "@env";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, SafeAreaView, Image} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import colors from "./src/theme/colors";

import LandingScreen from "./src/screens/LandingScreen";
import LoginScreen from "./src/screens/LoginScreen";
// console.debug(REACT_APP_BACKEND_URL);
export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.rootContainer}>
                <LoginScreen />
                <StatusBar style="auto" />
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        // justifyContent: "center",
    },
});
