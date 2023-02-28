import {Text, View, ScrollView} from "react-native";
import styles from "../theme/styles";

export default function SchedulesInfoScreen({route}) {
    const {date} = route.params;
    return (
        <ScrollView style={styles.schedulesContainer}>
            <Text>SchedulesInfoScreen {date}</Text>
        </ScrollView>
    );
}
