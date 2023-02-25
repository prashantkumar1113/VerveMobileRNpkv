import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, SafeAreaView, Image} from "react-native";
import colors from "./src/theme/colors";

import LandingScreen from "./src/screens/LandingScreen";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <LandingScreen />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        // justifyContent: "center",
    },
});
