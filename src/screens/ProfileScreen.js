import {useState, useEffect} from "react";
import {Text, View, ScrollView} from "react-native";
import {BASE_URL, API_DASHBOARDVIEW, AUTH_TOKEN} from "../theme/appConstant";
import VerveButton from "../components/VerveButton";
import VerveTextField from "../components/VerveTextField";
import styles from "../theme/styles";

export default function ProfileScreen(props) {
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        const fetchProfileData = async () => {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", AUTH_TOKEN);
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
            };
            const response = await fetch(
                `${BASE_URL}/${API_DASHBOARDVIEW}`,
                requestOptions
            );
            const data = await response.json();
            // console.debug("DATA: ", data);
            setProfileData(data.data.caregiver);
        };
        fetchProfileData();
    }, []);
    return (
        <ScrollView style={{flex: 1}}>
            <View
                style={{
                    margin: 10,
                    alignItems: "center",
                }}
            >
                <Text style={{marginBottom: 20}}>My Profile</Text>
                <Text style={{marginBottom: 20}}>
                    ID: {profileData.employeeId}
                </Text>
                <Text style={{marginBottom: 20}}>
                    First Name: {profileData.firstName}
                </Text>
                <Text style={{marginBottom: 20}}>
                    Last Name: {profileData.lastName}
                </Text>
                <Text style={{marginBottom: 20}}>
                    Email: {profileData.email}
                </Text>
                {/* <VerveTextField placeholder="First Name" editable={false}>
                    First Name
                </VerveTextField>
                <VerveTextField placeholder="Last Name" />
                <VerveTextField>Email</VerveTextField> */}
                <VerveButton
                    variant="danger"
                    onPress={() => props.navigation.navigate("Welcome")}
                >
                    Logout
                </VerveButton>
            </View>
        </ScrollView>
    );
}
