import {
    StyleSheet,
    Image,
    Text,
    View,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import VerveButton from "../components/VerveButton";
import VerveTextField from "../components/VerveTextField";

export default function LoginScreen(props) {
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position">
                <View style={styles.containerCenter}>
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
                <View style={styles.containerCenter}>
                    <Image
                        source={require("../assets/login-lottie2.gif")}
                        style={{width: 250, height: 250, marginBottom: 20}}
                    ></Image>
                </View>
                {/* <Text>Verveware</Text> */}
                <View style={styles.containerCenter}>
                    <VerveTextField placeholder="Company Name" autoCapitalize />
                    <VerveTextField placeholder="Email" />
                    <VerveTextField placeholder="Password" password />
                    <VerveButton>Login</VerveButton>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerCenter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
