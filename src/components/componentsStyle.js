import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    inputIconStyle: {
        color: "#91A1E1",
        paddingRight: 5,
        paddingLeft: 20
    },
    passwordIconStyle: {
        paddingLeft: 18,
        color: "#91A1E1",
        paddingRight: 1
    },
    emailIconStyle: {
        paddingLeft: 21,
        color: "#91A1E1",
        paddingRight: 6
    },
    inputTextStyle: {
        flex: 1,
        fontSize: 16,
    },
    textLine: {
        color: "#DBE3FF",
        paddingRight: 5
    },
    passwordTextLine: {
        color: "#DBE3FF",
        paddingRight: 5
    },
    inputViewUser: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 12,
        borderColor: "#DBE3FF",
        backgroundColor: "white",
        flexWrap: "wrap"
    },
    inputViewEmail: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 12,
        borderColor: "#DBE3FF",
        backgroundColor: "white"
    },
    inputViewPassword: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 12,
        borderColor: "#DBE3FF",
        backgroundColor: "white"
    },
    inputViewCpassword: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 12,
        borderColor: "#DBE3FF",
        backgroundColor: "white"
    },
    createBtn: {
        paddingHorizontal: 115,
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    createBtnText: {
        color: "white"
    },
    accountBtn: {
        paddingHorizontal: 82,
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: '#E3E8FC',
        marginBottom: 40
    },
    accountText: {
        color: "#2F3C6A"
    },


    //888888888888888888888888888888  ERROR

    errorView: {
        alignSelf: "flex-start"
    },
    errorStyle: {
        color: "red",
        paddingBottom: 10,
        marginLeft: 4
    },
    errorOption: {
        color: "red",
        marginTop: -15,
        paddingBottom: 10,
        marginLeft: 6
    },

})

export default styles