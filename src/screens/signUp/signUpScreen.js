import { Image, ScrollView, Text, TextInput, View, TouchableOpacity, Button, Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { ASSETS } from "../../assets";
import styles from "./signUpStyle";
import UserIcon from 'react-native-vector-icons/AntDesign';
import EmailIcon from 'react-native-vector-icons/AntDesign';
import PasswordIcon from 'react-native-vector-icons/EvilIcons';
import DateIcon from 'react-native-vector-icons/Fontisto';
import CalenderIcon from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useCallback, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { MultiSelect } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from "react-redux";
import { userLoginPayload, userPayload } from "../../store/userSlice";
import Modal from "react-native-modal";
import * as ImagePicker from 'react-native-image-picker';
import { PLACEHOLDER_CONSTANTS } from "../../constants/constants";
import { SUBJECT_CONTANTS } from "../../constants/constants";
import { GENDER_CONSTANTS } from "../../constants/constants";
import { CONSTANTS } from "../../constants/constants";
import { ICON_CONSTANTS } from "../../constants/constants";
import TextInputFunction from "../../components/components";


const genderData = [
    {
        id: 1,
        value: GENDER_CONSTANTS.Male,
    },
    {
        id: 2,
        value: GENDER_CONSTANTS.Female,
    },
    {
        id: 3,
        value: GENDER_CONSTANTS.Others,
    },

];

const dropDownData = [
    { label: SUBJECT_CONTANTS.Mathematics, value: "1" },
    { label: SUBJECT_CONTANTS.Physics, value: "2" },
    { label: SUBJECT_CONTANTS.Biology, value: "3" },
    { label: SUBJECT_CONTANTS.Chemistry, value: "4" },
    { label: SUBJECT_CONTANTS.Geography, value: "5" },
    { label: SUBJECT_CONTANTS.Civics, value: "6" },
    { label: SUBJECT_CONTANTS.History, value: "7" },
    { label: SUBJECT_CONTANTS.Punjabi, value: "8" },
    { label: SUBJECT_CONTANTS.Hindi, value: "9" },

]

export function SignUpScreen({ route }) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState();
    const [selected, setSelected] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [pickerResponse, setPickerResponse] = useState(null);
    const newUserEmail = route?.params?.newUserEmail

    const initialEmail = newUserEmail?.loginEmail ? newUserEmail?.loginEmail : ''

    const usersData = useSelector(state => state.userData)

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    function signInPage() {
        navigation.navigate(CONSTANTS.SignInScreen)
    }
    const emailExists = (email) => {
        return usersData.find(users => users.email === email)
    }

    const handleConfirm = (selectDate, setFieldValue) => {
        setOpen(false);
        setDate(selectDate);
        const formattedDate = selectDate.toLocaleDateString();
        setFieldValue('DOB', formattedDate);
    };

    const onImageGalleryClick = useCallback((setFieldValue) => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: true
        };

        ImagePicker.launchImageLibrary(options, res => {
            if (res.didCancel) {
                console.log('User cancelled');
            } else if (res.errorCode) {
                console.log('ImagePickerError: ', res.errorMessage);
            } else {
                let imageUri = res.uri || res.assets?.[0]?.uri;
                setPickerResponse(imageUri);
                setFieldValue('profileImageUrl', imageUri);
                setModalVisible(false)
            }
        });
    }, []);

    const onCameraPress = useCallback((setFieldValue) => {
        const options = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: true,
        };

        ImagePicker.launchCamera(options, res => {
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.errorCode) {
                console.log('ImagePicker Error: ', res.errorMessage);
            } else {
                let imageUri = res.uri || res.assets?.[0]?.uri;
                setPickerResponse(imageUri);
                setFieldValue('profileImageUrl', imageUri);
                setModalVisible(false);
            }
        });
    }, []);



    const validateSchema = Yup.object().shape({
        firstName: Yup.string().required('FirstName is Required').label('FirstName')
            .matches(/^[a-zA-Z]{3,}$/, 'First Name must contain at least three characters'),
        lastName: Yup.string().optional('Name is Required').label('Name')
            .matches(/^[a-zA-Z]{3,}$/, 'First Name must contain at least three characters'),
        email: Yup.string().email('Please enter valid email').required("Email is Required").label('email')
            .test('email-exists', 'User is already existing', (value) => !emailExists(value)),
        password: Yup.string().matches(/[a-z]/, 'Password must have a small letter')
            .matches(/[A-Z]/, 'Password must have a capital letter')
            .matches(/\d/, 'Password must have a number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must have at least one special character')
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is Required')
            .label('Password'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is Required')
            .label('Confirm Password'),
        checkBox: Yup.bool().oneOf([true], 'You must agree to the terms and conditions'),
        option: Yup.string().required('Select One Option'),
        DOB: Yup.string().required("Select Date").label("Date"),
        dropDownItems: Yup.mixed().test(2, "Must have at least two selected", value => value.length >= 2)
    })

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: initialEmail, password: '', confirmPassword: '', option: '', DOB: '', dropDownItems: [], profileImageUrl: '' }}
            validationSchema={validateSchema}
            onSubmit={(values, { resetForm }) => {
                dispatch(userPayload(values)),
                    dispatch(userLoginPayload([values]))
                    , resetForm()
            }}>
            {({
                handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue
            }) => {
                // console.log("values----------", values)
                return (

                    <ScrollView>
                        <LinearGradient style={styles.outerContainer} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F5F7FE', '#F0F1FC', '#F4F6FF']} >
                            <Image style={styles.image} source={ASSETS.SignUpImage} />
                            <Text style={styles.createText}>Create Account</Text>
                            <Text style={styles.textContainer}>Go Ahead and sign up,let everyone know how awesome you are!</Text>

                            <TouchableOpacity onPress={toggleModal}>
                                <View style={styles.profileOuterView}>
                                    <Image style={styles.profileView} source={values.profileImageUrl ? { uri: values.profileImageUrl } : ASSETS.DefaultProfile} />
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.profileText}>Profile Image</Text>
                            <Modal isVisible={isModalVisible}>
                                <View style={styles.modalStyle}>
                                    <TouchableOpacity style={styles.closeModalBtn} onPress={toggleModal}><Text style={styles.closeModalText}>X</Text></TouchableOpacity>
                                    <View style={styles.profileBtn}>

                                        <TouchableOpacity style={styles.cameraBtn} onPress={() => onCameraPress(setFieldValue)}><Text style={styles.openCameraText}>Open Camera</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.galleryBtn} onPress={() => onImageGalleryClick(setFieldValue)} value={values.profileImageUrl} onChange={(items) => {
                                            setPickerResponse(items);
                                            setFieldValue('profileImageUrl', items);
                                        }}><Text style={styles.openCameraText}>From Gallery</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                            <TextInputFunction name={ICON_CONSTANTS.UserIcon} size={19} placeholder={PLACEHOLDER_CONSTANTS.FirstName}
                                onChangeText={handleChange("firstName")} onBlur={handleBlur('firstName')} value={values.firstName} autoCorrect={false}
                                errorName={firstName} />

                            <TextInputFunction renderLeftIcon={() => (
                                <Icon name={ICON_CONSTANTS.UserIcon} size={19} color='red' />
                            )} placeholder={PLACEHOLDER_CONSTANTS.LastName}
                                onChangeText={handleChange("lastName")} onBlur={handleBlur('lastName')} value={values.lastName} autoCorrect={false}
                                errorName={lastName} />

                            <TextInputFunction name={ICON_CONSTANTS.EmailIcon} size={19} placeholder={PLACEHOLDER_CONSTANTS.Email}
                                onChangeText={handleChange("email")} onBlur={handleBlur('email')} autoCapitalise={"none"} autoComplete={"email"}
                                keyBoardType={"email-address"} textContentType={"emailAddress"} value={values.firstName} autoCorrect={false}
                                errorName={email} />

                            <TextInputFunction name={ICON_CONSTANTS.PasswordIcon} size={19} placeholder={PLACEHOLDER_CONSTANTS.Password}
                                onChangeText={handleChange("password")} onBlur={handleBlur('password')} autoCapitalise={"none"}
                                textContentType={password} secuteTextENtry={false} value={values.password} autoCorrect={false}
                                errorName={password} />

                            <TextInputFunction name={ICON_CONSTANTS.PasswordIcon} size={19} placeholder={PLACEHOLDER_CONSTANTS.ConfirmPassword}
                                onChangeText={handleChange("confirmPassword")} onBlur={handleBlur('confirmPassword')} secuteTextEntry={false}
                                value={values.confirmPassword} autoCorrect={false} errorName={confirmPassword} />



                            {/* <View style={styles.inputViewUser}>
                                <UserIcon name={ICON_CONSTANTS.UserIcon} size={19} style={styles.inputIconStyle} />
                                <Text style={styles.textLine}>|</Text>
                                <TextInput style={styles.inputTextStyle} placeholder={PLACEHOLDER_CONSTANTS.FirstName} onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                    autoCorrect={false}></TextInput>
                            </View>

                            <View style={styles.errorView}>
                                {errors.firstName && touched.firstName && (
                                    <Text style={styles.errorStyle}>{errors.firstName}</Text>
                                )}
                            </View>



                            <View style={styles.inputViewUser}>
                                <UserIcon name={ICON_CONSTANTS.UserIcon} size={19} style={styles.inputIconStyle} />
                                <Text style={styles.textLine}>|</Text>
                                <TextInput style={styles.inputTextStyle} placeholder={PLACEHOLDER_CONSTANTS.LastName} onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}
                                    autoCorrect={false}></TextInput>
                            </View>
                            <View style={styles.errorView}>
                                {errors.lastName && touched.lastName && (
                                    <Text style={styles.errorStyle}>{errors.lastName}</Text>
                                )}
                            </View>


                            <View style={styles.inputViewEmail}>
                                <EmailIcon name={ICON_CONSTANTS.EmailIcon} size={18} style={styles.emailIconStyle} />
                                <Text style={styles.textLine}>|</Text>
                                <TextInput style={styles.inputTextStyle} placeholder={PLACEHOLDER_CONSTANTS.Email} onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    value={values.email}></TextInput>

                            </View>
                            <View style={styles.errorView}>
                                {errors.email && touched.email && (
                                    <Text style={styles.errorStyle}>{errors.email}</Text>
                                )}
                            </View>

                            <View style={styles.inputViewPassword}>
                                <PasswordIcon name={ICON_CONSTANTS.PasswordIcon} size={27} style={styles.passwordIconStyle} />
                                <Text style={styles.textLine}>|</Text>
                                <TextInput style={styles.inputTextStyle} placeholder={PLACEHOLDER_CONSTANTS.Password}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    autoCapitalize="none"
                                    secureTextEntry
                                    textContentType="password"
                                    value={values.password}></TextInput>
                            </View>
                            <View style={styles.errorView}>
                                {errors.password && touched.password && (
                                    <Text style={styles.errorStyle}>{errors.password}</Text>
                                )}
                            </View>

                            <View style={styles.inputViewCpassword}>
                                <PasswordIcon name={ICON_CONSTANTS.PasswordIcon} size={27} style={styles.passwordIconStyle} />
                                <Text style={styles.textLine}>|</Text>
                                <TextInput style={styles.inputTextStyle} placeholder={PLACEHOLDER_CONSTANTS.ConfirmPassword}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    secureTextEntry
                                    value={values.confirmPassword}></TextInput>
                            </View>
                            <View style={styles.errorView}>
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <Text style={styles.errorStyle}>{errors.confirmPassword}</Text>
                                )}
                            </View> */}

                            {/* <View style={styles.inputViewDate}>
                                <CalenderIcon name={ICON_CONSTANTS.CalendersIcon} size={17} style={styles.inputIconStyle} />
                                <Text style={styles.textLine}>|</Text>
                                <TextInput
                                    placeholder={PLACEHOLDER_CONSTANTS.DateFormat}
                                    style={styles.inputDateText}
                                    value={values.DOB}
                                    editable={false}
                                />
                                <TouchableOpacity onPress={() => setOpen(true)}>
                                    <DateIcon name="date" size={22} style={styles.dateIconColor} />
                                </TouchableOpacity>
                                <DatePicker
                                    modal
                                    open={open}
                                    date={date}
                                    mode={ICON_CONSTANTS.DateIcon}
                                    dateFormat="YYYY-MM-DD"
                                    onConfirm={(selectDate) => handleConfirm(selectDate, setFieldValue)}
                                    onCancel={() => setOpen(false)}
                                />
                            </View>
                            <View style={styles.errorView}>
                                {errors.DOB && touched.DOB && (
                                    <Text style={styles.errorStyle}>{errors.DOB}</Text>
                                )}
                            </View>

                            <View style={styles.dropDownContainer}>

                                <MultiSelect
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    search
                                    data={dropDownData}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={PLACEHOLDER_CONSTANTS.DropDownSelect}
                                    searchPlaceholder="Search..."
                                    value={selected}
                                    onChange={(items) => {
                                        setSelected(items);
                                        setFieldValue('dropDownItems', items);
                                    }}

                                    selectedStyle={styles.selectedStyle}
                                />
                            </View>
                            <View style={styles.errorView}>
                                {errors.dropDownItems && touched.dropDownItems && (
                                    <Text style={styles.errorStyle}>{errors.dropDownItems}</Text>
                                )}
                            </View>

                            <View style={styles.radioView}>
                                <Text style={styles.genderText}>{PLACEHOLDER_CONSTANTS.Gender}</Text>
                                <Text style={styles.radioLineText}>|</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    {genderData.map((item, index) => (
                                        <View style={{ flexDirection: 'row' }} key={index}>
                                            <TouchableOpacity onPress={() => {
                                                setSelectedRadio(item.id);
                                                setFieldValue('option', item.value);
                                            }}>
                                                <View style={styles.radioBtnView}>
                                                    <View style={styles.radio}>
                                                        {
                                                            selectedRadio === item.id ? <View style={styles.radioInner}></View> : null
                                                        }
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <Text style={styles.radioText} >{item.value}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                            <View style={styles.errorView}>
                                {touched.option && errors.option && (
                                    <Text style={styles.errorOption}>{errors.option}</Text>
                                )}
                            </View>

                            <TouchableOpacity onPress={handleSubmit}>
                                <LinearGradient style={styles.createBtn} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3669E1', '#7590F1']} >
                                    <Text style={styles.createBtnText}>Create Account</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.accountBtn} onPress={signInPage}>
                                <Text style={styles.accountText}>I already have an account</Text>
                            </TouchableOpacity> */}
                        </LinearGradient>
                    </ScrollView>
                )
            }

            }
        </Formik>
    )
}











// selectedTextStyle={styles.selectedTextStyle}
// inputSearchStyle={styles.inputSearchStyle}
// iconStyle={styles.iconStyle}


