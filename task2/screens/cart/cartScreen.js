import { Text, View, Scree } from "react-native";
import {CartStyle} from "./cartStyle"

export function CartScreen() {
    return(
        <View style = {CartStyle.style}>
            <Text style = {CartStyle.text}>My Cart</Text>
        </View>
    )
}