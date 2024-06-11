import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    outerContainer: {
        borderWidth: 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 25
    },
    image: {
        marginBottom: 40,
        height: 340,
        width: 340,
        borderRadius: 12
    },
    welcomeText: {
        fontSize: 50,
        marginBottom: 15,
        fontFamily: "serif",
        color: "black",
        fontWeight : "800"
    },
    textContainer: {
        flexDirection: "row",
        alignContent: "center",
        marginBottom: 45,

    },
    text: {
        paddingHorizontal: 40,
        letterSpacing: 0.2,
        lineHeight: 20,
        color: "black",
        letterSpacing : 0.8,
        lineHeight: 22,
        fontWeight : "400"
    },
    nextText: {
        paddingEnd: 3,
        color: "black",
        letterSpacing : 0.8,
        fontWeight : "400"
    },
    underLineText: {
        textDecorationLine: 'underline',
        color: "black",
        fontWeight : "400"
    },
    startBtn: {
        paddingHorizontal: 130,
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: 28
    },
    startText: {
        color: "white"
    },
    signBtn: {
        paddingHorizontal: 142,
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: '#E3E8FC'
    },
    signText: {
        color: "#2F3C6A"
    }
})

export default styles