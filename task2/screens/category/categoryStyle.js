import { StyleSheet, Dimensions } from "react-native";

const CategoryStyle = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white"
    },
    scrollViewOne: {
        backgroundColor: "#F0F2F5",
    },
    scrollViewTwo: {
        width: Dimensions.get("screen").width,
    },
})

module.exports = {CategoryStyle}