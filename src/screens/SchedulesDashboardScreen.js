import {Text, View, Pressable} from "react-native";

export default function SchedulesDashboardScreen({navigation}) {
    return (
        <Pressable
            onPress={() => {
                navigation.navigate("ScheduleInfo");
            }}
        >
            <View>
                <Text>SchedulesDashboardScreen</Text>
            </View>
        </Pressable>
    );
}
