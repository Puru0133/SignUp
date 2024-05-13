import { Text, View, ScrollView, Image, TouchableOpacity, ChildComponent } from "react-native";
import { useState } from "react";
import { CategoryStyle } from "../../screens/category/categoryStyle"
import { ScrollOneStyle } from "./categoryScrollOneStyle"
import { allData } from "../../data/categoryPageData"


export function CategoryScrollOneView({datas, onPress, view}) {

    return (
        <ScrollView style={CategoryStyle.scrollViewOne} showsVerticalScrollIndicator={false}>

            {
                datas.data.map((val, index) => (
                    <TouchableOpacity onPress={()=> onPress(index)}>

                        <View style={view === index ? ScrollOneStyle.updateScrollView : ScrollOneStyle.scrollView}>
                            <Image style={view === index ? ScrollOneStyle.updtedImageStyle : ScrollOneStyle.imageStyle} source={val.image} />
                            <Text style={view === index ? ScrollOneStyle.updatedTextStyle : ScrollOneStyle.textStyle}>{val.text}</Text>
                        </View>
                    </TouchableOpacity>

                ))
            }

        </ScrollView>

    )
}

