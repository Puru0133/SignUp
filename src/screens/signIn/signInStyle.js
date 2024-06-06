import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    outerContainer: {
        borderWidth: 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
        // paddingVertical: 10,
        // paddingHorizontal: 25
    },
    image: {
        marginBottom: 40,
        height: 340,
        width: 340,
        borderRadius: 12,
        marginTop: 35
    },
    welcomeBackText: {
        fontSize: 35,
        marginBottom: 15,
        // fontWeight : "bold",
        fontFamily: "serif",
        color: "black"
    },
    text: {
        flexDirection: "column",
        alignContent: "center",
        marginBottom: 45,
        // borderWidth: 1,
        paddingHorizontal: 40,
        textAlign: "center",
        color: "black",
        letterSpacing: 0.2,
        lineHeight: 20
    },
    textContainer: {
        flexDirection: "column",
        alignContent: "center",
        padding: 50,
        marginBottom: 45,

    },
    inputIconStyle: {
        color: "#91A1E1", paddingRight: 5, paddingLeft: 20
    },
    emailInputView: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        paddingVertical: 5,
        // paddingHorizontal: 40,
        // paddingLeft: 20,
        // paddingRight: 100,
        borderRadius: 10,
        marginBottom: 12,
        borderColor: "#DBE3FF",
        backgroundColor: "white"
    },
    passwordInputView: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        paddingVertical: 5,
        // paddingHorizontal: 40,
        // paddingLeft: 20,
        // paddingRight: 100,
        borderRadius: 10,
        marginBottom: 12,
        borderColor: "#DBE3FF",
        backgroundColor: "white"
    },
    signInViewBtn: {
        paddingHorizontal: 142,
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: 28
    },
    signInText: {
        color: "white"
    },
    forgetView: {
        paddingHorizontal: 98,
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: '#E3E8FC',
        marginBottom: 40
    },
    forgetText: {
        color: "#2F3C6A"
    }

})

export default styles