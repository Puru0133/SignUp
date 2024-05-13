import { StyleSheet } from "react-native";

const ContentStyle = StyleSheet.create({
    outerContainer: {
        flex: 1,
       
    },
    scrollContentOne: {
        // padding : 10,
        backgroundColor: "white",
        paddingBottom : 40,
        // height : 200,
        paddingHorizontal : 10,
        paddingTop : 10
    },
    scrollContentTwo: {
        backgroundColor: "white"
    },
    cardContainer : {
        borderWidth : 1,
        color : "red"
    },
    innerView: {
        borderWidth : 1,
        backgroundColor: "white",
        borderColor : "#d4d7d9",
        marginRight : 10,
        alignItems : "center", justifyContent : "center",
        height : 32,
        paddingHorizontal : 18,
        borderRadius : 25,
    },
    starView : {
        flexDirection : "row"
    },
    cardMainView : {
        paddingHorizontal : 5,
        flexDirection : "row",
        alignItems : "center",
    },
    cardImageStyle : {
        height : 70,
        width : 90,
        paddingHorizontal: 5,
        paddingTop: 50,
    },
    imageView : {
     paddingHorizontal : 5,
    },
    mainText : {
        fontSize : 16,
        color : "black"
    },
    price : {
        padding : 5,
        fontSize : 16,
        color : "green"
    },
    aboutPrice : {
        color : "green"
    },
    onExchange : {
        padding : 2,
        color : "black",
        fontSize : 14
    },
    delivery : { padding : 2,
        color : "black",
        fontSize : 12
    }
})

module.exports = { ContentStyle }