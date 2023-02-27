import {StyleSheet, View, Text, TextInput} from "react-native";
import colors from "../theme/colors";
export default function VerveTextField({
    placeholder,
    autoCapitalize = "none",
    autoCorrect = true,
    password = false,
    ...props
}) {
    return (
        <TextInput
            style={styles.textInput}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            placeholder={placeholder}
            secureTextEntry={password}
            {...props}
        />
    );
}
const styles = StyleSheet.create({
    textInput: {
        // height: 50,
        marginVertical: 10,
        minWidth: 300,
        padding: 16,
        fontSize: 14,
        // color: colors.white,
        backgroundColor: colors.white,
        // borderBottomColor: colors.secondary,
        // borderBottomWidth: 2,
        borderRadius: 16,
        // Shadow
        elevation: 4, // android only
        // for iOS
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});
