import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    outerContainer: {
        borderWidth: 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingVertical: 10,
        paddingHorizontal: 30,
        // margin : 10
    },
    image: {
        marginBottom: 40,
        height: 340,
        width: 340,
        borderRadius: 12,
        marginTop: 35
    },
    createText: {
        fontSize: 35,
        color: "black",
        marginBottom: 15,
        // fontWeight : "bold",
        fontFamily: "serif"
    },
    textContainer: {
        color: "black",
        // alignItems: "center",
        textAlign: "center",
        marginBottom: 45,
        paddingHorizontal: 60,
        letterSpacing: 0.2,
        lineHeight: 20

    },
    profileOuterView: {
        paddingBottom: 20,
        paddingHorizontal: 82,
        marginBottom: 12,
    },
    profileView: {
        borderWidth: 1,
        height: 160,
        width: 160,
        // padding: 82,
        // borderRadius: 41,
        backgroundColor: "white",
        borderRadius: 80
    },
    profileText: {
        color: "black",
        fontSize: 20,
        paddingLeft: 20
    },
    profileBtn: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 2,
        marginTop: 20,
    },
    cameraBtn: {
        borderWidth: 1,
        paddingVertical: 13,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "#3D66FF"
    },
    galleryBtn: {
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 13,
        borderRadius: 20,
        backgroundColor: "#3D66FF"
    },
    inputIconStyle: {
        color: "#91A1E1", paddingRight: 5, paddingLeft: 20
    },
    inputViewUser: {
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
    inputViewEmail: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        paddingVertical: 5,
        // paddingHorizontal: 141,
        // paddingLeft: 20,
        // paddingRight: 233,
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
        // paddingHorizontal: 127,
        // paddingLeft: 12,
        // paddingRight: 206,
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
        // paddingHorizontal: 100,
        // paddingLeft: 12,
        // paddingRight: 130,
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
        // paddingHorizontal: 100,
        paddingLeft: 16,
        paddingRight: 28,
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
    createBtn: {
        paddingHorizontal: 115,
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: 28,
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


    radioView: {
        flexDirection: "row",
        alignContent: "center",
        borderWidth: 2,
        paddingVertical: 14,
        // paddingHorizontal: 24,
        paddingRight: 20,
        paddingLeft: 15,
        borderRadius: 10,
        marginBottom: 28,
        borderColor: "#DBE3FF",
        backgroundColor: "white"
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
    radioInner: {
        width: 14,
        height: 14,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'blue',
        backgroundColor: "#3D66FF"
    },
    errorStyle: {
        color: "red",
        // marginLeft: -10,
        paddingBottom: 10,
        marginLeft : 4
    },
    errorOption: {
        color: "red",
        paddingBottom: 10,
        marginLeft : 6
    },

    //888888888888888888888888888888888888888888888888888888888
    dropDownContainer: {
        borderWidth: 2,
        borderColor: "#DBE3FF",
        width: Dimensions.get("screen").width - 60,
        marginBottom: 12,
        borderRadius: 8,
        paddingVertical: 12,
        backgroundColor: "white"
    },
    dropdown: {
        backgroundColor: "white",
    },
    placeholderStyle: {
        fontSize: 12,
        // borderWidth: 2,
        //   paddingHorizontal : 120,
        //   paddingVertical : 10,
    },
    selectedTextStyle: {
        fontSize: 14,
        width: Dimensions.get("screen").width - 60,
        // borderWidth: 1
        //   paddingLeft : 400
    },
    iconStyle: {
        width: 20,
        height: 20,
        borderWidth: 1
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