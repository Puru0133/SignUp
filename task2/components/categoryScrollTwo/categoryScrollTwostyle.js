import { StyleSheet } from "react-native";

const ScrollTwoStyle = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    mainText: {
        paddingLeft: 15,
        paddingTop: 15,
        color: "black",
        fontSize: 16,
        fontWeight: "bold"
    },
    innerContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        paddingLeft: 10
    },
    innerView: {
        margin: 14,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        paddingLeft: 10,
        marginHorizontal: 10,
        width: 70,
    },
    imageStyle: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: "#F0F2F5"
    },
    arrowStyle: {
        marginTop: 19,
        marginLeft: 18,
        paddingLeft: 15,
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: "#F0F2F5",
        paddingTop: 18
    },
    textStyle: {
        textAlign: "center",
        flex: 1,
        fontSize: 10,
        fontWeight: "bold",
        color: "black"
    },
    arrowtextStyle: {
        textAlign: "center",
        flex: 1,
        fontSize: 10,
        fontWeight: "bold",
        color: "black",
        marginLeft: 18
    },
    parentText: {
        // flex : 1,
        flexDirection: "row"
    },
    headingView: {
        // flex : 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    upperView: {
        flex: 1,
        // marginRight: 50,
        flexDirection: "row",
        // marginRight : 50
    },
    upperImage: {
        height: 80,
        width: 100,
        marginLeft: 50,
    },
    upperText: {
        paddingTop: 35,
        paddingLeft: 25,
        fontSize: 18,
        fontWeight: "bold",
        color: "#1262de"
    }
})

module.exports = { ScrollTwoStyle }