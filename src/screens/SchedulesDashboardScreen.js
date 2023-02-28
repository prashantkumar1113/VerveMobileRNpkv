import {useNavigation} from "@react-navigation/native";
import {Text, View, ScrollView, Pressable, SafeAreaView} from "react-native";
import styles from "../theme/styles";

const ScheduleTile = ({children}) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={styles.scheduleTile}
            onPress={() => {
                navigation.navigate("ScheduleInfo", {date: children});
            }}
        >
            <View>
                <Text>{children}</Text>
            </View>
        </Pressable>
    );
};

export default function SchedulesDashboardScreen() {
    return (
        <SafeAreaView style={styles.schedulesContainer}>
            <ScrollView>
                {/* <View style={styles.container}>
                    <Text style={styles.title}>Schedules</Text>
                </View> */}
                <ScheduleTile>2/27</ScheduleTile>
                <ScheduleTile>2/28</ScheduleTile>
            </ScrollView>
        </SafeAreaView>
    );
}
