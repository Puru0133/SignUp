import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth : 1,
        margin : 15,
        borderRadius : 10
    },
    welcomeHome: {
        fontSize: 26,
        padding: 20,
        textDecorationLine : "underline"
    },
    text: {
        fontSize: 20
    },
    logoutBtn: {
        marginTop: 20,
        borderRadius: 5,
        borderWidth: 1,
        padding: 15,
        backgroundColor: "#3D66FF",
    }
})

export default styles