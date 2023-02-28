import {StyleSheet} from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
    },
    tabContainer: {
        flex: 1,
        alignItems: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    schedulesContainer: {
        flex: 1,
        margin: 16,
    },
    scheduleTile: {
        borderRadius: 16,
        backgroundColor: colors.white,
        marginBottom: 16,
        width: "100%",
        minHeight: 100,
        padding: 16,
        //shadow
        elevation: 4,
        // for iOS
        // shadowColor: colors.black,
        // shadowOffset: {width: 0, height: 1},
        // shadowRadius: 1,
        // shadowOpacity: 0.25,
        elevation: 5,
        shadowColor: "#171717",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});

export default styles;
