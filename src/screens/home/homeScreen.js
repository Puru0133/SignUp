import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from "./homeStyle";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { CONSTANTS } from "../../constants/constants";
import { logoutUser } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

export function HomeScreen() {
    console.log("================================")
    const userHomedata = useSelector(state => state.loggedinUserData)

    const dispatch = useDispatch();

    return (
        <View style={styles.homeContainer}>

            {
                userHomedata.map((value, index) => (
                    <View key={index}>
                        <Text style={styles.welcomeHome}>Welcome to Home Page</Text>
                        <Text style={styles.text}>FirstName: {value.firstName}</Text>
                        <Text style={styles.text}>LastName: {value.lastName}</Text>
                        <Text style={styles.text}>Email: {value.email}</Text>
                        <Text style={styles.text}>DOB: {value.DOB}</Text>
                        <Text style={styles.text}>Gender: {value.option}</Text>
                    </View>
                ))
            }

            <TouchableOpacity style={styles.logoutBtn} onPress={() => dispatch(logoutUser())}><Text style={{ color: "white" }}>LOG OUT</Text></TouchableOpacity>
        </View>

    )
}


