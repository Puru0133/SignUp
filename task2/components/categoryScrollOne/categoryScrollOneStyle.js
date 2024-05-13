import {StyleSheet} from "react-native";

const ScrollOneStyle = StyleSheet.create({
    scrollView: {
            flex: 1,
            alignItems: "center",
            paddingVertical : 10,
            paddingHorizontal : 20,
            borderBottomWidth: 1,
            borderColor: "#e6e6e6",
            borderRadius: 20,
            backgroundColor: "#F0F2F5",
    },
    updateScrollView: {
        flex: 1,
        alignItems: "center",
        paddingVertical : 5,
        paddingTop : 10,
        backgroundColor: "white",
        borderLeftWidth: 4.5,
        borderTopLeftRadius: 5,
        borderLeftColor: "blue",
    },
    imageStyle: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    updtedImageStyle: {
        height: 45,
        width: 45,
        borderRadius: 50,
        backgroundColor: "#F0F2F5",
    },
    textStyle: {
        fontSize: 10
    },
    updatedTextStyle: {
        fontSize: 12,
        color: "#1055c2",
        fontWeight : "bold",
    }
})

module.exports = {ScrollOneStyle}