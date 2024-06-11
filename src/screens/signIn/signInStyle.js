import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    outerContainer: {
        borderWidth: 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    image: {
        marginBottom: 40,
        height: 340,
        width: 340,
        borderRadius: 12,
        marginTop: 35
    },
    welcomeBackText: {
        fontSize: 32,
        marginBottom: 15,
        fontFamily: "serif",
        color: "black",
        fontWeight: "700"
    },
    text: {
        flexDirection: "column",
        alignContent: "center",
        marginBottom: 45,
        paddingHorizontal: 22,
        textAlign: "center",
        color: "black",
        letterSpacing: 0.4,
        lineHeight: 20,
        fontWeight: "400"
    },
    textContainer: {
        flexDirection: "column",
        alignContent: "center",
        padding: 50,
        marginBottom: 45,

    },
    inputIconStyle: {
        color: "#91A1E1",
        paddingRight: 10,
        paddingLeft: 20
    },
    passwordIconStyle: {
        color: "#91A1E1",
        paddingRight: 1,
        paddingLeft: 16
    },
    textLine: {
        color: "#DBE3FF",
        paddingRight: 5
    },
    inputTextStyle: {
        flex: 1,
        fontSize: 16,
    },
    emailInputView: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        paddingVertical: 5,
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
        borderRadius: 10,
        marginBottom: 20,
        borderColor: "#DBE3FF",
        backgroundColor: "white",
    },
    errorStyle: {
        color: "red",
        paddingBottom: 10,
        marginLeft: 4
    },
    signInViewBtn: {
        paddingHorizontal: 142,
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: 20
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
    },
    errorView: {
        alignSelf: "flex-start"
    },

})

export default styles





// paddingHorizontal: 40,
// paddingLeft: 20,
// paddingRight: 100,