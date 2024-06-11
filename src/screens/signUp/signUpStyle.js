import { Dimensions, StyleSheet } from "react-native";

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
    createText: {
        fontSize: 32,
        color: "black",
        marginBottom: 15,
        fontFamily: "serif",
        fontWeight: "700"
    },
    textContainer: {
        color: "black",
        textAlign: "center",
        marginBottom: 45,
        paddingHorizontal: 30,
        letterSpacing: 0.2,
        lineHeight: 20,
        letterSpacing: 0.4,
        fontWeight: "400"

    },
    profileOuterView: {
        paddingBottom: 20,
        paddingHorizontal: 82,
    },
    profileView: {
        borderWidth: 1,
        height: 160,
        width: 160,
        backgroundColor: "white",
        borderRadius: 80
    },
    profileText: {
        color: "black",
        fontSize: 20,
        paddingLeft: 12,
        marginBottom: 20
    },
    profileBtn: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: 2,
        marginTop: 40,
    },
    cameraBtn: {
        paddingVertical: 13,
        paddingHorizontal: 14,
        borderRadius: 10,
        backgroundColor: "#3D66FF"
    },
    galleryBtn: {
        paddingVertical: 15,
        paddingHorizontal: 17,
        borderRadius: 10,
        backgroundColor: "#3D66FF"
    },
    openCameraText: {
        color: "white"
    },

    modalStyle: {
        borderRadius: 15,
        backgroundColor: "white",
        paddingBottom: 20

    },
    closeModalBtn: {
        top: 10,
        right: 20,
        position: "absolute",
        marginBottom : 10
    },
    closeModalText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold"
    },

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
    inputViewDate: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        paddingVertical: 6,
        paddingLeft: 2,
        paddingRight: 40,
        borderRadius: 10,
        marginBottom: 12,
        borderColor: "#DBE3FF",
        backgroundColor: "white"
    },
    inputDateText: {
        fontSize: 16,
        paddingRight: 125,
        textDecorationLine: "underline"
    },
    dateIconColor: {
        color: "#91A1E1"
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

    //888888888888888888888888888888  RADIO BUTTON

    radioView: {
        flexDirection: "row",
        alignContent: "center",
        borderWidth: 2,
        paddingVertical: 12,
        paddingRight: 18,
        paddingLeft: 10,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: "#DBE3FF",
        backgroundColor: "white"
    },
    radioBtnView: {
        flexDirection: 'row',
        margin: 10,
        marginRight: 4

    },
    radioText: {
        fontSize: 15,
        marginTop: 10,
    },
    radio: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#3D66FF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    genderText: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingRight: 5
    },
    radioLineText: {
        color: "#DBE3FF",
        paddingTop: 10,
        paddingRight: 5
    },
    radioInner: {
        width: 14,
        height: 14,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'blue',
        backgroundColor: "#3D66FF"
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

    //888888888888888888888888888888  DROP DOWN CONTAINER
    dropDownContainer: {
        borderWidth: 2,
        borderColor: "#DBE3FF",
        width: Dimensions.get("screen").width - 64,
        marginBottom: 12,
        borderRadius: 8,
        paddingVertical: 11,
        backgroundColor: "white",
        paddingRight: 10
    },
    dropdown: {
        backgroundColor: "white",
    },
    placeholderStyle: {
        fontSize: 16,
        paddingLeft: 20
    },
    selectedTextStyle: {
        fontSize: 14,
        width: Dimensions.get("screen").width - 60,
    },
    iconStyle: {
        width: 20,
        height: 20,
        borderWidth: 1,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    selectedStyle: {
        borderRadius: 12,
    },

})

export default styles