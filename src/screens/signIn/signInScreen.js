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
import { Formik } from 'formik';
import * as Yup from 'yup';

const validateSchema = Yup.object().shape({
    loginEmail: Yup.string().email('Please enter valid email').required("Email is Required").label('email'),
    loginPassword: Yup.string().matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        // .matches(/\d/, "Password must have a number")
        // .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is Required').label('Password'),
})



export function SignInScreen() {
    // const [loginEmail, setloginEmail] = useState('');
    // const [loginPassword, setloginPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const usersData = useSelector(state => state.userData)
    console.log("=======", usersData)
    const navigation = useNavigation();

    function signUpPage(values) {
        console.log("-----", values)

    }

    function validatingUser(values) {
        const { loginEmail, loginPassword } = values;
        const user = usersData.find(user => user.email === loginEmail);

        console.log("feeeeeeeeeee", user)

        if (user) {
            if (user.password === loginPassword) {
                navigation.navigate("Home", {
                    loginUserData: user
                });
            } else {
                setErrorMessage("Invalid Password");
            }
        } else {

            setTimeout(() => {
                navigation.navigate("SignUp", {
                    newUserEmail: values
                })
            }, 5000)
            setErrorMessage("Email does not exist");
        }
    }


    return (
        <Formik
            initialValues={{ loginEmail: '', loginPassword: '' }}
            validationSchema={validateSchema}
            onSubmit={values => validatingUser(values)}>
            {({
                handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue
            }) => {
                // console.log(errors)
                return (
                    <ScrollView>
                        <LinearGradient style={styles.outerContainer} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F5F7FE', '#F0F1FC', '#F4F6FF']} >
                            <Image style={styles.image} source={ASSETS.SignUpImage} />
                            <Text style={styles.welcomeBackText}>Welcome Back</Text>
                            <Text style={styles.text}>Go Ahead and sign in. Get access to your increadible account!</Text>
                            <View style={styles.emailInputView}>
                                <EmailIcon name="mail" size={22} style={styles.inputIconStyle} />
                                <Text style={{ color: "#DBE3FF", paddingRight: 5 }}>|</Text>
                                <TextInput style={{ fontSize: 15, flex: 1 }} placeholder="Email" onChangeText={handleChange('loginEmail')}
                                    onBlur={handleBlur('loginEmail')}
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    value={values.loginEmail}></TextInput>
                            </View>

                            <View style={{ alignSelf: "flex-start" }}>
                                {errors.loginEmail && touched.loginEmail && (
                                    <Text style={styles.errorStyle}>{errors.loginEmail}</Text>
                                )}
                            </View>


                            <View style={styles.passwordInputView}>
                                <PasswordIcon name="lock" size={34} style={styles.inputIconStyle} />
                                <Text style={{ color: "#DBE3FF", paddingRight: 5 }}>|</Text>
                                <TextInput style={{ fontSize: 15, flex: 1 }} placeholder="Password" onChangeText={handleChange('loginPassword')}
                                    onBlur={handleBlur('loginPassword')}
                                    autoCapitalize="none"
                                    secureTextEntry
                                    textContentType="password"
                                    value={values.loginPassword}></TextInput>
                            </View>

                            <View style={{ alignSelf: "flex-start" }}>
                                {errors.loginPassword && touched.loginPassword && (
                                    <Text style={styles.errorStyle}>{errors.loginPassword}</Text>
                                )}
                            </View>


                            {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
                            <TouchableOpacity onPress={handleSubmit}>
                                <LinearGradient style={styles.signInViewBtn} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3669E1', '#7590F1']} >
                                    <Text style={styles.signInText}>Sign In</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.forgetView} onPress={signUpPage}>
                                <Text style={styles.forgetText}>Create New Account</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </ScrollView>

                )
            }}
        </Formik>
    )
}




