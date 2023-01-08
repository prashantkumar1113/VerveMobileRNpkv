import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, SafeAreaView, Image} from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    source={require("./src/assets/verveware-horizontal-2line-white.png")}
                    style={{width: 250, height: 106, marginTop: 100}}
                />
            </View>
            <Image
                source={require("./src/assets/login-lottie2.gif")}
                style={{width: 100, height: 100}}
            ></Image>
            <Text>Verveware</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF5732",
        alignItems: "center",
        // justifyContent: "center",
    },
});
