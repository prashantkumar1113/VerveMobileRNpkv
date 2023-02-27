import {StyleSheet, Image, Text, View} from "react-native";
import VerveButton from "../components/VerveButton";
import VerveTextField from "../components/VerveTextField";

export default function LoginScreen(props) {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require("../assets/verveware-horizontal-2line-white.png")}
                    style={{
                        width: 250,
                        height: 106,
                        marginTop: 60,
                        marginBottom: 20,
                    }}
                />
            </View>
            <View style={styles.container}>
                <Image
                    source={require("../assets/login-lottie2.gif")}
                    style={{width: 250, height: 250}}
                ></Image>
            </View>
            <View style={styles.container}>
                <VerveButton>Sign Up</VerveButton>
                <VerveButton>Sign In</VerveButton>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});
