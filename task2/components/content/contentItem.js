import { Text, View, ScrollView } from "react-native";
import { ContentStyle } from "./contentItemStyle";
import { Image } from 'react-native';
import { IMAGE } from "../../images/index"
import StarIcon from 'react-native-vector-icons/Entypo'
import HeartIcon from 'react-native-vector-icons/Fontisto'
import RupeeIcon from 'react-native-vector-icons/FontAwesome5'
import DownArrowIcon from 'react-native-vector-icons/AntDesign'
import { productData } from "../../data/categoryPageData"
import { filterData } from "../../data/categoryPageData";

export function ContentItems() {
    return (
        <View style={ContentStyle.outerContainer}>
            <ScrollView horizontal={true} contentContainerStyle={ContentStyle.scrollContentOne} showsHorizontalScrollIndicator={false}>

                {/* <View style={ContentStyle.innerView}>
                    <Text style={{color : "black",  fontSize : 14, textAlign : "center", borderWidth : 1}}>{"jjjjjjjjjjjj"}</Text>
                    </View> */}
                {filterData.map((value, index) => (
                    <View style={ContentStyle.innerView}>
                        <Text style={{ color: "black", textAlign: "center", fontSize: 14 }}>{value.title}</Text>
                    </View>
                ))}
            </ScrollView>
            <ScrollView style={ContentStyle.scrollContentTwo}>
                {
                    productData.map((value, index) => (
                        <View style={{ borderBottomWidth: 1, borderBottomColor: "#c0c1c2", padding: 3 }}>
                            {(value.best ? <View style={{ flexDirection: "row", paddingTop: 10, paddingLeft: 5, justifyContent: "space-between" }}><Text style={{ backgroundColor: "#03A696", paddingHorizontal: 8, color: "white", fontSize: 10, borderRadius: 3 }}>{value.best}</Text>
                            </View> : null)}
                            <View style={{ justifyContent: "flex-end", alignItems: "flex-end", position: "absolute", right: 8, top: 8 }}>
                                <HeartIcon name="heart-alt" size={17} style={{ color: "lightgrey", }} />
                            </View>
                            <View style={ContentStyle.cardMainView}>
                                <View style={ContentStyle.imageView}>
                                    <Image style={ContentStyle.cardImageStyle} source={value.image} />
                                </View>
                                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                    <Text>{value.sponser}</Text>
                                    <Text style={ContentStyle.mainText}>{value.textContent}</Text>
                                    <View style={ContentStyle.starView}>
                                        <StarIcon name="star" size={17} style={{ color: "green" }} />
                                        <StarIcon name="star" size={17} style={{ color: "green" }} />
                                        <StarIcon name="star" size={17} style={{ color: "green" }} />
                                        <StarIcon name="star" size={17} style={{ color: "green" }} />
                                        <StarIcon name="star" size={17} style={{ color: "green" }} />
                                        <Text>({value.ratings})</Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <DownArrowIcon name="arrowdown" size={18} style={{ color: "green", paddingTop: 7, fontWeight: "bold" }} />
                                        <Text style={ContentStyle.price}>{value.percentage}</Text>
                                        <Text style={{ color: "grey", fontSize: 16, paddingTop: 5, textDecorationLine: "line-through" }}>{value.discount}</Text>
                                        <RupeeIcon name="rupee-sign" size={18} style={{ color: "black", paddingTop: 4, paddingLeft: 1 }} />
                                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>{value.price}</Text>
                                        <Image style={{ height: 30, width: 60 }} source={IMAGE.AssuredImage} resizeMode="contain" />
                                    </View>
                                    <Text style={ContentStyle.aboutPrice}>{value.aboutPrice}</Text>
                                    <Text style={ContentStyle.onExchange}>{value.exchange}</Text>
                                    <Text style={ContentStyle.delivery}>{value.delivery}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", paddingRight: 180 }}>
                                <View style={{ borderWidth: 1, borderColor: "grey", margin: 4, padding: 5 }}><Text style={{ fontSize: 12 }}>Annual Power Usage: 744.54 W</Text></View>
                                <View style={{ borderWidth: 1, borderColor: "grey", margin: 4, padding: 5 }}><Text style={{ fontSize: 12 }}>Room Size: 111 - 150 sqrt</Text></View>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>

    )
}