import { Text, ScrollView, Image, View, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { ASSETS } from "../../assets";
import styles from "./signInStyle";
import EmailIcon from 'react-native-vector-icons/AntDesign';
import PasswordIcon from 'react-native-vector-icons/EvilIcons';
import DatePicker from 'react-native-date-picker'
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";

export function SignInScreen() {
    const [loginEmail, setloginEmail] = useState('');
    const [loginPassword, setloginPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const usersData = useSelector(state => state.userData)
    console.log("=======", usersData)
    const navigation = useNavigation();

    // console.log("value-----", ans)

    function signUpPage() {
        navigation.navigate("SignUp")
    }

    // function validatingUser() {
    //     let ans = usersData.map((value, index) => {
    //         if (value.email === loginEmail && value.password === loginPassword) {
    //             navigation.navigate("Home")
    //         } else {
    //             console.log("----------------------------------------error")
    //             setErrorMessage('Invalid email or password');
    //         }
    //     })

    // }

    function validatingUser() {
        let matchFound = usersData.some((value, index) => {
            return value.email === loginEmail && value.password === loginPassword;
        });

        if (matchFound) {
            navigation.navigate("Home");
        } else {
            setErrorMessage('Invalid email or password');
        }
    }


    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validateSchema}
            onSubmit={values => dispatch(userPayload(values))}>
            {({
                handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue
            }) => (
                <ScrollView>
                    <LinearGradient style={styles.outerContainer} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F5F7FE', '#F0F1FC', '#F4F6FF']} >
                        <Image style={styles.image} source={ASSETS.SignUpImage} />
                        <Text style={styles.welcomeBackText}>Welcome Back</Text>
                        <Text style={styles.text}>Go Ahead and sign in. Get access to your increadible account!</Text>
                        <View style={styles.emailInputView}>
                            <EmailIcon name="mail" size={22} style={styles.inputIconStyle} />
                            <Text style={{ color: "#DBE3FF", paddingRight: 5 }}>|</Text>
                            <TextInput value={loginEmail} onChangeText={setloginEmail} style={{ fontSize: 15, flex: 1 }} placeholder="Email"></TextInput>
                        </View>
                        <View style={styles.passwordInputView}>
                            <PasswordIcon name="lock" size={34} style={styles.inputIconStyle} />
                            <Text style={{ color: "#DBE3FF", paddingRight: 5 }}>|</Text>
                            <TextInput value={loginPassword} onChangeText={setloginPassword} style={{ fontSize: 15, flex: 1 }} placeholder="Password"></TextInput>
                        </View>
                        {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
                        <TouchableOpacity onPress={validatingUser}>
                            <LinearGradient style={styles.signInViewBtn} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3669E1', '#7590F1']} >
                                <Text style={styles.signInText}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.forgetView} onPress={signUpPage}>
                            <Text style={styles.forgetText}>Create New Account</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </ScrollView>

            )}
        </Formik>
    )
}


