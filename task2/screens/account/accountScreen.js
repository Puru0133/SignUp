import { View, Text } from "react-native";
import {AccountStyle} from "./accountStyle"

export function AccountScreen() {
    return(
        <View style = {AccountStyle.style}>
            <Text style = {AccountStyle.text}>Account</Text>
        </View>
    )
}