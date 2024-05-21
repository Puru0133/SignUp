//Using Consumer

// import { Text } from "react-native";
import { Text } from "react-native";
import MyContext from "./createContext";


// export function ChildComponent() {
//     return(
//         <MyContext.Consumer>
//             {data => <Text>{data}</Text>}
//         </MyContext.Consumer> 
//     )
// }

import { useContext, useState } from "react"

export function ChildComponent() {
    const data = useContext(MyContext)
    return (
        <Text>{`${data} !!!!!!!!!!!!!!!!`}</Text>
    )
}