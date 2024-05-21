import { Text, View, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { CategoryStyle } from "../../screens/category/categoryStyle";
import { ScrollTwoStyle } from "./categoryScrollTwostyle"
import { allData } from "../../data/categoryPageData"
import { IMAGE } from "../../images/index"
import ArrowIcon from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";




export function CategoryScrooTwoView({ productData, getMainData }) {
    const navigation = useNavigation()

    let ForYouData = allData.filter((value, index) => {
        return value.category === "ForYou"
    })

    const [expand, setExpand] = useState(false)

    const CategoryExpansion = (categoryId) => {
        setExpand((prevExpanded) => ({
            ...prevExpanded,
            [categoryId]: !prevExpanded[categoryId],
        }));
    };

    return (
        <ScrollView style={CategoryStyle.scrollViewTwo}>
            {
                ForYouData.map((val, index) => (
                    <>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['white', '#F0F2F5', '#c1d5f5']} >
                            <View style={ScrollTwoStyle.upperView}>
                                <View style={ScrollTwoStyle.parentText}>
                                    <Text style={ScrollTwoStyle.upperText}>{val.title}</Text>
                                    <ArrowIcon name="right" size={15} style={{ color: "blue", paddingTop: 42 }} onPress={() => Alert.alert("Message", "Yes Clicked!")} />
                                </View>
                                <Image style={ScrollTwoStyle.upperImage} source={val.bannerImage} />
                            </View>
                        </LinearGradient>


                        <View style={ScrollTwoStyle.outerContainer}>

                            <View style={ScrollTwoStyle.headingView}>
                                <Text style={ScrollTwoStyle.mainText}>{val.title}</Text>
                                <ArrowIcon name="rightcircle" size={24} style={{ color: "blue", paddingEnd: 32, paddingTop: 11 }} onPress={() => Alert.alert("Message", "Yes Clicked!")} />
                            </View>
                            <View style={ScrollTwoStyle.innerContainer}>
                                {
                                    (val.data).map((value, ind) => (
                                        expand[val.id] || ind < 7 ? (
                                            <TouchableOpacity
                                                key={ind}
                                                style={ScrollTwoStyle.innerView}
                                                onPress={() => navigation.navigate("ContentScreen")}
                                            >
                                                <Image
                                                    style={ScrollTwoStyle.imageStyle}
                                                    source={value.image}
                                                    resizeMode="contain"
                                                />
                                                <Text style={ScrollTwoStyle.textStyle}>{value.text}</Text>
                                            </TouchableOpacity>
                                        ) : null
                                    ))
                                }
                                {val.data.length > 7 && (

                                    <TouchableOpacity onPress={() => CategoryExpansion(val.id)} key={val.id} >
                                        <View >
                                            {expand[val.id] ?
                                                <View key={val.id}>
                                                    <ArrowIcon style={ScrollTwoStyle.arrowStyle} name='arrowup' size={35} color={'#0F52BA'} />
                                                    <Text style={ScrollTwoStyle.arrowtextStyle}>View Less</Text>
                                                </View> :
                                                <View key={val.id}>
                                                    <ArrowIcon style={ScrollTwoStyle.arrowStyle} name='arrowdown' size={35} color={'#0F52BA'} />
                                                    <Text style={ScrollTwoStyle.arrowtextStyle}>View More</Text>
                                                </View>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    </>

                ))
            }
        </ScrollView>

    )
}
