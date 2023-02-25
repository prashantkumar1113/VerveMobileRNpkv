import {Image, Text, View} from "react-native";
import VerveButton from "../components/VerveButton";
import VerveTextField from "../components/VerveTextField";

export default function LoginScreen(props) {
    return (
        <>
            <Image
                source={require("../assets/verveware-horizontal-2line-white.png")}
                style={{
                    width: 250,
                    height: 106,
                    marginTop: 60,
                    marginBottom: 20,
                }}
            />

            <Image
                source={require("../assets/login-lottie2.gif")}
                style={{width: 250, height: 250, marginBottom: 20}}
            ></Image>
            {/* <Text>Verveware</Text> */}
            <VerveTextField placeholder="Company Name" autoCapitalize />
            <VerveTextField placeholder="Email" />
            <VerveTextField placeholder="Password" password />
            <VerveButton>Login</VerveButton>
        </>
    );
}
