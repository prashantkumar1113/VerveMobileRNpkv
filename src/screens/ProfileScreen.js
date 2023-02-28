import {Text, View, ScrollView} from "react-native";
import VerveButton from "../components/VerveButton";
import styles from "../theme/styles";

export default function ProfileScreen(props) {
    return (
        <ScrollView style={styles.schedulesContainer}>
            <Text>ProfileScreen</Text>
            <VerveButton
                variant="error"
                onPress={() => props.navigation.navigate("Welcome")}
            >
                Logout
            </VerveButton>
        </ScrollView>
    );
}
