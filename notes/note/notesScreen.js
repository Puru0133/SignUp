import React, { useEffect } from "react";
import { useState } from 'react';
import {
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { secondSheet } from "./noteStyle";


export function SecondScreen({ route, navigation }) {
  const { inputData, count } = route.params
  const [data, setData] = useState(inputData);
  const [inputIndex, setInputIndex] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();

  


  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => { navigation.goBack('Second') }} title="Go Back" />
    )
  })

  useEffect(() => {
    setData(inputData)
  }, [inputData])

  const handleRemoveingNotes = (index) => {
    let dataLeft = data.filter((val, ind) => index !== ind)
    setData(dataLeft);
  }


  function colorChange(index) {
    const comingIndex = index;

    // likeIndex = [...inputIndex, comingIndex];
    //     setInputIndex([...inputIndex, comingIndex])
    
    // let ans = inputIndex.map((val, ind) => {
    //   if(ind !== index){
        
    //   }
    // })
    console.log("ans", inputIndex);
    let ans = inputIndex.map((val, ind) => {
      if(val !== ind) {
        likeIndex = [...inputIndex, comingIndex];
        setInputIndex([...inputIndex, comingIndex])
      }
      return likeIndex
    })
    console.log("likeIndex",ans)

   
  }

  // console.log("likeIndex", inputIndex)
  
  return (
    <View>
      <ScrollView>
        {data?.map((val, index) => (
          <View style={secondSheet.content} key={index}>
            <View style={secondSheet.inputContentBox}>
              <TextInput value={val} />
            </View>
            <Icon name="star" style={secondSheet.addStar} size={25} color={selectedIndex === index                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ? "red" : "white"} onPress={() => colorChange(index)} />
            <TouchableOpacity style={secondSheet.addBox} onPress={() => { handleRemoveingNotes(index) }}>
              <Icon name="trash" size={25} color="#000" />
            </TouchableOpacity>
          </View>

        ))}
      </ScrollView>
    </View>
  );
}