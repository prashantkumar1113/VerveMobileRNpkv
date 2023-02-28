import {StyleSheet, View, Text, Pressable} from "react-native";
import colors from "../theme/colors";

export default function VerveHeader(props) {
    return (
        <View>
            <Text>Verveware</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.secondary,
        color: colors.white,
    },
});
