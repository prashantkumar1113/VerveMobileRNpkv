import {
    SafeAreaView,
    Image,
    View,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import VerveButton from "../components/VerveButton";
import VerveTextField from "../components/VerveTextField";
import styles from "../theme/styles";

export default function SignupScreen({navigation}) {
    return (
        <SafeAreaView style={styles.splashContainer}>
            <ScrollView>
                <KeyboardAvoidingView behavior="position">
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
                            style={{width: 200, height: 200, marginBottom: 20}}
                        ></Image>
                    </View>
                    {/* <Text>Verveware</Text> */}
                    <View style={styles.container}>
                        <VerveTextField
                            placeholder="Company Name"
                            autoCapitalize
                        />
                        <VerveTextField
                            placeholder="Employee ID"
                            keyboardType="numeric"
                        />
                        <VerveTextField placeholder="Employee Email" />
                        <VerveButton
                            onPress={() => {
                                navigation.navigate("Dashboard");
                            }}
                        >
                            Sign Up
                        </VerveButton>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}
