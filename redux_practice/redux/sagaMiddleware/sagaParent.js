import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { increaseRequest, increaseSuccess } from "./actions";
import { State } from "react-native-gesture-handler";
import { getUsersFetch } from "./actions";
import { useEffect } from "react";

const MainFunction = () => {
  const dispatch = useDispatch();

  const { loading, number } = useSelector(store => store.home)
  const user = useSelector(state => state.API_Data.users)
  // console.log("++++++++++++++++++++++",user)

  // useEffect(() => {
  //   console.log("number",number)
  // },[number])
  // useEffect(() => {
  //   console.log("loading", loading)
  // },[loading])

  // useEffect(() => {
  //   console.log("user", user)
  // },[user])


  const handleOnPress = () => {
    dispatch(increaseRequest(number));
  };

  return (
    <View>
      <View>
        <Text >The number is:{number}</Text>
      </View>

      <Button
        title='Increase'
        loading={loading}
        onPress={handleOnPress}
      />
      <View><Button title="Cklick Here!" onPress={() => dispatch(getUsersFetch())}></Button></View>
      <View><Text>{user.id}</Text></View>
    </View>

  )
}

export default MainFunction;