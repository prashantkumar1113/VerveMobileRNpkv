import {StyleSheet, View, Text, Pressable} from "react-native";
import {useFonts} from "expo-font";
import colors from "../theme/colors";
// import appFonts from "../theme/appFonts";

export default function VerveButton({
    children,
    variant = "secondary",
    onPress,
}) {
    const [loaded] = useFonts({
        "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) =>
                    pressed
                        ? [
                              styles.buttonInnerContainer,
                              {backgroundColor: colors[variant]},
                              styles.pressed,
                          ]
                        : [
                              styles.buttonInnerContainer,
                              {backgroundColor: colors[variant]},
                          ]
                }
                onPress={onPress}
                // android_ripple={{color: `${colors.primary}`}}
            >
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        // backgroundColor: colors.secondary,
        marginVertical: 8,
        borderRadius: 16,
        minWidth: 160,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        padding: 16, // Shadow
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
        fontFamily: "Rubik-Bold",
    },
    pressed: {
        opacity: 0.75,
    },
});
