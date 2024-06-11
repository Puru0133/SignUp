import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./welcomeStyle";
import { ASSETS } from "../../assets/index"
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { CONSTANTS } from "../../constants/constants";

export function WelcomeScreen() {
    const navigation = useNavigation();

    function signUpPage() {
        navigation.navigate(CONSTANTS.SignUpScreen)
    }
    function signInPage() {
        navigation.navigate(CONSTANTS.SignInScreen)
    }
    return (
        <LinearGradient style={styles.outerContainer} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F5F7FE', '#F0F1FC', '#F4F6FF']} >

            <Image style={styles.image} source={ASSETS.WelcomeImage} />
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.text}>We're glad you're here!Enjoy this free </Text>
            <View style={styles.textContainer}>
                <Text style={styles.nextText}>prototype mode with</Text>
                <Text style={styles.underLineText}>Anima</Text>
            </View>
            <TouchableOpacity onPress={signUpPage}>
                <LinearGradient style={styles.startBtn} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3669E1', '#7590F1']} >
                    <Text style={styles.startText}>Get Started</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signBtn} onPress={signInPage} >
                <Text style={styles.signText}>Sign in</Text>
            </TouchableOpacity>

        </LinearGradient>
    )
}