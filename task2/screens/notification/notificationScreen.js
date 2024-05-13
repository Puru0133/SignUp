import {View, Text} from "react-native";
import {NotificationStyle} from "./notificationStyle"

export function NotificationScreen() {
    return(
        <View style = {NotificationStyle.style}>
            <Text style = {NotificationStyle.text}>Notifications</Text>
        </View>
    )
}