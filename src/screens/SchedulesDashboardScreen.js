import {useState, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    SafeAreaView,
} from "react-native";
import {useFonts} from "expo-font";
import appColors from "../theme/colors";
import {windowWidth, windowHeight, fontSizes} from "../theme/appConstant";
import {Ionicons} from "@expo/vector-icons";
// import styles from "../theme/styles";

const ScheduleTile = ({children}) => {
    const navigation = useNavigation();

    return (
        <Pressable
            style={[
                styles.scheduleContainer,
                {backgroundColor: appColors.white},
            ]}
            onPress={() => {
                navigation.navigate("ScheduleInfo", {date: children});
            }}
        >
            <View style={styles.timeContainer}>
                <View>
                    <Text
                        style={[
                            styles.date,
                            // {
                            //     color: today(item.createdAt)
                            //         ? appColors.white
                            //         : appColors.date,
                            // },
                        ]}
                    >
                        {/* {today(item.createdAt)
                            ? i18next.t("TXT_TODAY")
                            : moment(moment(item.timeIn)).from(new Date())} */}
                        {children}
                    </Text>
                    <Text
                        style={[
                            styles.time,
                            // {
                            // color: today(item.createdAt)
                            //     ? appColors.white
                            // :
                            appColors.button,
                            // },
                        ]}
                    >
                        11:00 AM - 12:00 PM
                        {/* {moment(item.timeIn).format("hh:mm A")} -{" "}
                        {moment(item.timeOut).format("hh:mm A")} */}
                    </Text>
                </View>
                <Ionicons
                    name="calendar-outline"
                    color={appColors.block}
                    size={32}
                />
            </View>
        </Pressable>
    );
};

export default function SchedulesDashboardScreen() {
    const [schedules, setSchedules] = useState([]);
    const [isCaregiver, setIsCaregiver] = useState(false);
    const BASE_URL = "https://kz9hu6e5pl.execute-api.us-east-2.amazonaws.com";
    const API_ROUTE = "user/check-caregiver";
    useFonts({
        "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
        "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    });

    useEffect(() => {
        const fetchIsCaregiver = async () => {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Authorization", authToken);
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({email: "pj@gmail.com"}),
            };
            const response = await fetch(
                `${BASE_URL}/${API_ROUTE}`,
                requestOptions
            );
            const data = await response.json();
            console.debug("DATA: ", data);
            setIsCaregiver(data.data);
        };
        fetchIsCaregiver();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ScheduleTile>2/27</ScheduleTile>
                <ScheduleTile>2/28</ScheduleTile>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scheduleContainer: {
        width: "90%",
        paddingVertical: windowHeight(2.5),
        alignSelf: "center",
        marginTop: windowHeight(2),
        borderRadius: windowWidth(3),
        paddingHorizontal: windowWidth(3),
        elevation: 5,
        shadowColor: appColors.shadow,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    timeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    date: {
        fontSize: fontSizes.FONT5,
        fontFamily: "Rubik-SemiBold", //appFonts.rubikMedium,
    },
    time: {
        fontSize: fontSizes.FONT6HALF,
        fontFamily: "Rubik-SemiBold", //appFonts.rubikMedium,
        marginVertical: windowHeight(1),
    },
    detailContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    clientImageContainer: {
        width: windowWidth(12),
        height: windowWidth(12),
        borderRadius: windowWidth(6),
        overflow: "hidden",
    },
    client: {
        width: windowWidth(12),
        height: windowHeight(8),
    },
    clientDetailContainer: {
        marginLeft: windowWidth(2),
    },
    clientDetail: {
        fontSize: fontSizes.FONT3HALF,
        fontFamily: "Rubik-SemiBold", //appFonts.rubikMedium,
    },
});
