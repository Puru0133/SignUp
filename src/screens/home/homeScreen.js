import { Text } from "react-native";

export function HomeScreen({ route }) {
    const {loginUserData} = route.params
    console.log("------------", loginUserData)
    return (
        <>
            <Text>Welcome to home page</Text>
            <Text>FirstName: {loginUserData.firstName}</Text>
            <Text>LastName: {loginUserData.lastName}</Text>
            <Text>Email: {loginUserData.email}</Text>
            <Text>DOB: {loginUserData.DOB}</Text>
            <Text>Gender: {loginUserData.option}</Text>
        </>

    )
}