import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens/welcome/welcomeScreen';
import { SignUpScreen } from '../screens/signUp/signUpScreen';
import { SignInScreen } from '../screens/signIn/signInScreen';
import { HomeScreen } from '../screens/home/homeScreen';
import { CONSTANTS } from '../constants/constants';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function NavigationService() {
    const isSignedIn = useSelector(state => state.isSignedIn);
    // console.log("-----", isSignedIn)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    isSignedIn ? (
                        <>
                            <Stack.Screen name={CONSTANTS.WelcomeScreen} component={WelcomeScreen} options={{ headerShown: false }} />
                            <Stack.Screen name={CONSTANTS.SignUpScreen} component={SignUpScreen} options={{ headerShown: false }} />
                            <Stack.Screen name={CONSTANTS.SignInScreen} component={SignInScreen} options={{ headerShown: false }} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name={CONSTANTS.HomeScreen} component={HomeScreen} options={{ headerShown: false }} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}