
import { useState } from "react";
import { ChildComponent } from "./child";
import MyContext from "./createContext";
import { Text } from "react-native";

export function ParentComponenet() {
    const [data, setData] = useState("Hello")

    return (
        <MyContext.Provider value={data}>
            <Text>{`${data}, How are you`}</Text>
            <ChildComponent data={data} />
        </MyContext.Provider>
    )
}