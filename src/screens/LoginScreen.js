import {useState, useRef} from "react";
import {
    SafeAreaView,
    Image,
    View,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Firebase
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../database/firebase";
// Verve Components
import VerveButton from "../components/VerveButton";
import VerveTextField from "../components/VerveTextField";
import appConstant from "../theme/appConstant";
import styles from "../theme/styles";

export default function LoginScreen({navigation}) {
    const [loginForm, setLoginForm] = useState({
        company: "",
        email: "",
        password: "",
    });

    const setInputValues = (key, value) => {
        setLoginForm({
            ...loginForm,
            [key]: value,
        });
    };

    const loginButtonHandler = async () => {
        console.debug("LoginForm: ", loginForm);
        let user = null;
        try {
            user = await loginToFirebase();
        } catch (error) {
            alert("Firebase error:", error.message);
            console.log(error.message);
        }

        console.debug("user :", user);
        navigation.navigate("SchedulesDashboard");
    };

    const loginToFirebase = async () => {
        const user = await signInWithEmailAndPassword(
            auth,
            loginForm.email,
            loginForm.password
        );
        return user;
    };

    const loginToVerve = async (userdata) => {
        try {
            // setVisible(true);
            console.log("----------------------------");
            var loginJson = {
                email: userdata,
                username: userdata,
                channel: "app",
            };
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(loginJson),
            };

            // fetch("" + url + "user-authentication/generate-token", requestOptions)
            fetch("" + url + "user/generatetoken", requestOptions)
                .then((response) => response.json())
                //Then with the data from the response in JSON...
                .then((data) => {
                    console.log("data ::", data);
                    // setVisible(false);
                    if (data.success) {
                        console.log("data :", JSON.stringify(data));
                        //  AsyncStorage.setItem("@userdata", JSON.stringify(data));
                        AsyncStorage.setItem(
                            "userdata",
                            JSON.stringify(data),
                            (err) => {
                                if (err) {
                                    console.log("an error");
                                    throw err;
                                }
                                console.log("success");
                            }
                        ).catch((err) => {
                            console.log("error is: " + err);
                        });
                        //  AsyncStorage.setItem("userToken", data.token);

                        // localStorage.setItem("userdata", JSON.stringify(data));
                        // localStorage.setItem("userToken", data.token);
                        console.log("data.token :", data.token);
                        getUserProfile(data.token);
                    } else {
                        // alert("loginToDB:", data.message);
                    }
                })
                //Then with the error genereted...
                .catch((error) => {
                    alert("Error: ----", error);
                    // setVisible(false);

                    console.error("Error:", error);
                });
        } catch (error) {
            // setVisible(false);
            alert("Error: ---- 111", error);
            console.log("error.message :", error.message);
        }
    };

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
                            autoCapitalize="sentences"
                            value={loginForm.company}
                            onChangeText={(text) =>
                                setInputValues("company", text)
                            }
                        />
                        <VerveTextField
                            placeholder="Email"
                            keyboardType="email-address"
                            value={loginForm.email}
                            onChangeText={(text) =>
                                setInputValues("email", text)
                            }
                        />
                        <VerveTextField
                            placeholder="Password"
                            password
                            value={loginForm.password}
                            onChangeText={(text) =>
                                setInputValues("password", text)
                            }
                        />
                        <VerveButton onPress={loginButtonHandler}>
                            Login
                        </VerveButton>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}
