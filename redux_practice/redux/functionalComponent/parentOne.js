import React from "react";
import { Button, Text, View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "./middleware";




export function ParentComponenetOne() {
    const count = useSelector(state => state.counter.count);
    const value = useSelector(state => state.values.value);
    const { data, isLoading, isError } = useSelector(state => state.apiData)

    const dispatch = useDispatch();

    // if (isError) {
    //     return <View><Text>FAILED TO HANDLE THE REQUEST</Text></View>
    // }
    return (
        <View>
            <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1, padding: 20 }}>
                <Text style={{ fontSize: 25 }}>Counter : {count}</Text>
                <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })}></Button>
                <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })}></Button>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", borderWidth: 1 }}>
                <Text style={{ fontSize: 25 }}>value : {value}</Text>
                <Button title="Add" onPress={() => dispatch({ type: 'ADD' })}></Button>
                <Button title="Subtract" onPress={() => dispatch({ type: 'SUBTRACT' })}></Button>
                <Button title="Multiply" onPress={() => dispatch({ type: 'MULTIPICATION' })}></Button>
                <Button title="Division" onPress={() => dispatch({ type: 'DIVISION' })}></Button>
            </View>
            <View style={{ padding: 30 }}>
                <Button title="Get Data" onPress={() => (dispatch(getApiData()))}></Button>
            </View>
            {
                isLoading ? <View><Text>...Loading</Text></View> : <ScrollView>
                    {
                        data.map((val, index) => (
                            <View><Text>{val.title}</Text></View>
                        ))
                    }
                </ScrollView>
            }
            {isError ? <View><Text>...Loading</Text></View> : null}

        </View>
    )
}

