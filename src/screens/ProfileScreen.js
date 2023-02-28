import {Text, View} from "react-native";
import VerveButton from "../components/VerveButton";

export default function ProfileScreen(props) {
    return (
        <View>
            <Text>ProfileScreen</Text>
            <VerveButton
                variant="danger"
                onPress={() => props.navigation.navigate("Welcome")}
            >
                Logout
            </VerveButton>
        </View>
    );
}
