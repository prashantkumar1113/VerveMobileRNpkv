import {StyleSheet, View, Text} from "react-native";
import colors from "../theme/colors";
export default function VerveButton({children, variant, size}) {
    if (!variant) {
        variant = "secondary";
    }
    return (
        <View style={[styles.button, {backgroundColor: colors[variant]}]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        // backgroundColor: colors.secondary,
        marginTop: 8,
        padding: 16,
        borderRadius: 16,
        // Shadow
        elevation: 4, // android only
        // for iOS
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    text: {
        color: colors.white,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
});
