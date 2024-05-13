import { CategoryScrollOneView } from "../../components/categoryScrollOne/categoryScrollOne";
import { CategoryScrooTwoView } from "../../components/categoryScrollTwo/categoryScrollTwo";
import { CategoryStyle } from "./categoryStyle"
import { View } from "react-native"
import { useState } from "react";
import { allData } from "../../data/categoryPageData";


export function CategoryScreen() {

    const [dataNedded, setdataNeeded] = useState()

    let getMainData = allData.find((value, index) => {
        return value.category === "Main"
    })

    const [view, setUpdatedView] = useState(null);
    function changeView(index) {
        setUpdatedView(index)

        if (index === 0) {
            let ForYouData = allData.filter((value, index) => {
                return value.category === "ForYou"
            })
            setdataNeeded(ForYouData)
        } else if (index === 1) {
            let FashionData = allData.filter((value, index) => {
                return value.category === "Fashion"
            })
            setdataNeeded(FashionData)
        } else if (index === 2) {
            let ApplianceData = allData.filter((value, index) => {
                return value.category === "Appliances"
            })
            setdataNeeded(ApplianceData)
        } else if (index === 3) {
            let MobileData = allData.filter((value, index) => {
                return value.category === "Mobiles"
            })
            setdataNeeded(MobileData)
        } else if (index === 4) {
            let ElectronicsData = allData.filter((value, index) => {
                return value.category === "Electronics"
            })
            setdataNeeded(ElectronicsData)
        } else if (index > 4) {
            let ForYouData = allData.filter((value, index) => {
                return value.category === "ForYou"
            })
            setdataNeeded(ForYouData)
        }
    }


    return (
        <View style={CategoryStyle.mainViewStyle}>
            <CategoryScrollOneView datas={getMainData} onPress={(index) => changeView(index)} view={view} />
            <CategoryScrooTwoView productData={dataNedded} getMainData={getMainData} />
        </View>
    )
}
