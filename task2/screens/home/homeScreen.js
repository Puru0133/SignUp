import { View, Text } from "react-native";
import {HomeStyle} from "./homeStyle"

export function HomeScreen() {
    return(
        <View style={HomeStyle.style}>
            <Text style={HomeStyle.text}>Home</Text>
        </View>
    )
}
