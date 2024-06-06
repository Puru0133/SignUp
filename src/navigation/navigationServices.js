import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens/welcome/welcomeScreen';
import { SignUpScreen } from '../screens/signUp/signUpScreen';
import { SignInScreen } from '../screens/signIn/signInScreen';
import { HomeScreen } from '../screens/home/homeScreen';

const Stack = createNativeStackNavigator();

export default function NavigationService() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}