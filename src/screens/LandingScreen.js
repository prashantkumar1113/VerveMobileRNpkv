import {SafeAreaView, Image, View} from "react-native";
import VerveButton from "../components/VerveButton";
import styles from "../theme/styles";

export default function LoginScreen({navigation}) {
    return (
        <SafeAreaView style={styles.splashContainer}>
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
                <VerveButton
                    onPress={() => {
                        navigation.navigate("Signup");
                    }}
                >
                    Sign Up
                </VerveButton>
                <VerveButton
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    Sign In
                </VerveButton>
            </View>
        </SafeAreaView>
    );
}
