import { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./homeStyle";


export function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0)
  const [inputValue, setinputValue] = useState([]);
  const [text, setText] = useState('');

  function notes() {
    if (text === "") {
      setCount(count)
      Alert.alert("Error", "Please enter the note")
    } else {
      const newTask = text;
      const inputData = [...inputValue, newTask];
      if (inputData) {
        navigation.navigate('Second', { inputData, count })
      }
      setinputValue([...inputValue, newTask]);
      setCount(count + 1)
      setText('');
    }
  }



  return (

    <View style={styles.outerContainer}>
      <View style={styles.header}>
        <Text style={styles.mainHeading}>NotePad {count}</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.inputBox}
          placeholder='Enter Your Note Here'
        />
        <TouchableOpacity style={styles.addBtn} onPress={() => notes()}>
          <Icon name="arrow-up" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function Notifications() {
  return (
    <Text>Notifications</Text>
  )
}

export function StarredNotes() {
  return (
    <Text>StarredNotes</Text>
  )
}

export function Trash() {
  return (
    <Text>Trash</Text>
  )
}

