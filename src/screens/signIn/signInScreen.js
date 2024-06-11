import { Text, ScrollView, Image, View, TextInput, TouchableOpacity, Alert } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { ASSETS } from "../../assets";
import styles from "./signInStyle";
import EmailIcon from 'react-native-vector-icons/AntDesign';
import PasswordIcon from 'react-native-vector-icons/EvilIcons';
import DatePicker from 'react-native-date-picker'
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { PLACEHOLDER_CONSTANTS } from "../../constants/constants";
import { CONSTANTS } from "../../constants/constants";
import { ICON_CONSTANTS } from "../../constants/constants";
import { TaskAbortError } from "@reduxjs/toolkit";
import { userLoginPayload, userPayload } from "../../store/userSlice";

const validateSchema = Yup.object().shape({
    loginEmail: Yup.string().email('Please enter valid email').required("Email is Required").label('email'),
    loginPassword: Yup.string().matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .required('Password is Required').label('Password'),
})



export function SignInScreen() {
    const [errorMessage, setErrorMessage] = useState('');

    const usersData = useSelector(state => state.userData)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    console.log("userData", usersData)

    function signUpPage() {
        navigation.navigate(CONSTANTS.SignUpScreen)

    }

    function validatingUser(values) {
        const { loginEmail, loginPassword } = values;
        const user = usersData.filter(user => user.email === loginEmail);

        if (user.length > 0) {
            console.log("user", user)
            let userPassword = user.map((value, index) => (
                value.password
            ))

            let comingPassword = userPassword.pop();
            console.log(loginPassword)
            if (loginPassword === comingPassword) {
                dispatch(userLoginPayload(user))
            } else {
                setErrorMessage("Invalid Password");
            }
        } else {

            Alert.alert(
                'User does not exist',
                'Please create account to move further',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    {
                        text: 'OK', onPress: () => navigation.navigate(CONSTANTS.SignUpScreen, {
                            newUserEmail: values
                        })
                    },
                ],
                { cancelable: false }
            );
            //     setErrorMessage("Email does not exist");
        }
    }


    return (
        <Formik
            initialValues={{ loginEmail: '', loginPassword: '' }}
            validationSchema={validateSchema}
            onSubmit={(values, { resetForm }) => { validatingUser(values), resetForm() }}>
            {({
                handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue
            }) => {

                return (
                    <ScrollView>
                        <LinearGradient style={styles.outerContainer} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F5F7FE', '#F0F1FC', '#F4F6FF']} >
                            <Image style={styles.image} source={ASSETS.SignInImage} />
                            <Text style={styles.welcomeBackText}>Welcome Back</Text>
                            <Text style={styles.text}>Go Ahead and sign in. Get access to your increadible account!</Text>
                            <View style={styles.emailInputView}>
                                <EmailIcon name={ICON_CONSTANTS.EmailIcon} size={22} style={styles.inputIconStyle} />
                                <Text style={styles.textLine}>|</Text>
                                <TextInput style={styles.inputTextStyle} placeholder={PLACEHOLDER_CONSTANTS.Email} onChangeText={handleChange('loginEmail')}
                                    onBlur={handleBlur('loginEmail')}
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    value={values.loginEmail}></TextInput>
                            </View>

                            <View style={styles.errorView}>
                                {errors.loginEmail && touched.loginEmail && (
                                    <Text style={styles.errorStyle}>{errors.loginEmail}</Text>
                                )}
                            </View>


                            <View style={styles.passwordInputView}>
                                <PasswordIcon name={ICON_CONSTANTS.PasswordIcon} size={34} style={styles.passwordIconStyle} />
                                <Text style={styles.textLine}>|</Text>
                                <TextInput style={styles.inputTextStyle} placeholder={PLACEHOLDER_CONSTANTS.Password} onChangeText={handleChange('loginPassword')}
                                    onBlur={handleBlur('loginPassword')}
                                    autoCapitalize="none"
                                    secureTextEntry
                                    textContentType="password"
                                    value={values.loginPassword}></TextInput>
                            </View>

                            <View style={styles.errorView}>
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





