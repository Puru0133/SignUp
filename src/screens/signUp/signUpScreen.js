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
import { userPayload } from "../../store/userSlice";
import Modal from "react-native-modal";
import * as ImagePicker from 'react-native-image-picker';


const genderData = [
    {
        id: 1,
        value: "Male",
    },
    {
        id: 2,
        value: "Female",
    },
    {
        id: 3,
        value: "Others",
    },

];

const dropDownData = [
    { label: "Mathematics", value: "1" },
    { label: "Physics", value: "2" },
    { label: "Biology", value: "3" },
    { label: "Chemistry", value: "4" },
    { label: "Geography", value: "5" },
    { label: "Civics", value: "6" },
    { label: "History", value: "7" },
    { label: "Punjabi", value: "8" },
    { label: "Hindi", value: "9" },

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
    // console.log(newUserEmail?.loginEmail)

    const usersData = useSelector(state => state.userData)

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    function signInPage() {
        navigation.navigate("SignIn")
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
            }
        });
    }, []);



    const validateSchema = Yup.object().shape({
        firstName: Yup.string().required('FirstName is Required').label('FirstName'),
        lastName: Yup.string().optional('Name is Required').label('Name'),
        email: Yup.string().email('Please enter valid email').required("Email is Required").label('email')
            .test('email-exists', 'User is already existing', (value) => !emailExists(value)),
        password: Yup.string().matches(/\w*[a-z]\w*/, 'Password must have a small letter')
            .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
            .matches(/\d/, "Password must have a number")
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is Required').label('Password'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is Required')
            .label('Confirm Password'),
        checkBox: Yup.bool().oneOf([true], 'You must agree to the terms and conditions'),
        option: Yup.string().required('Select One Option'),
        DOB: Yup.string().required("Select Date").label("Date"),
        dropDownItems: Yup.mixed().test(2, "Must have at least one checked", value => value.length >= 2)
    })

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: initialEmail, password: '', confirmPassword: '', option: '', DOB: '', dropDownItems: [], profileImageUrl: '' }}
            validationSchema={validateSchema}
            onSubmit={values => dispatch(userPayload(values))}>
            {({
                handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue
            }) => {
                // console.log({ errors })
                return (

                    <ScrollView>
                        <LinearGradient style={styles.outerContainer} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F5F7FE', '#F0F1FC', '#F4F6FF']} >
                            <Image style={styles.image} source={ASSETS.SignUpImage} />
                            <Text style={styles.createText}>Create Account</Text>
                            <Text style={styles.textContainer}>Go Ahead and sign up,let everyone know how awesome you are!</Text>

                            <TouchableOpacity onPress={toggleModal}>
                                <View style={styles.profileOuterView}>
                                    <Image style={styles.profileView} source={values.profileImageUrl ? { uri: values.profileImageUrl } : ASSETS.DefaultProfile} />
                                    <Text style={styles.profileText}>Profile Image</Text>
                                </View>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible}>
                                <View style={styles.modalStyle}>
                                    <View style={styles.profileBtn}>
                                        <TouchableOpacity style={styles.cameraBtn} onPress={() => onCameraPress(setFieldValue)}><Text style={{ color: "white" }}>Open Camera</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.galleryBtn} onPress={() => onImageGalleryClick(setFieldValue)} value={values.profileImageUrl} onChange={(items) => {
                                            console.log("-----", items)
                                            setPickerResponse(items);
                                            setFieldValue('profileImageUrl', items); // Update the dropDownItems array
                                        }}><Text style={{ color: "white" }}>From Gallery</Text></TouchableOpacity>
                                    </View>

                                    <TouchableOpacity style={styles.closeModalBtn} onPress={toggleModal}><Text>Close</Text></TouchableOpacity>
                                </View>
                            </Modal>



                            <View style={styles.inputViewUser}>
                                <UserIcon name="user" size={19} style={{ color: "#91A1E1", paddingRight: 5, paddingLeft: 20 }} />
                                <Text style={{ color: "#DBE3FF", paddingRight: 5 }}>|</Text>
                                <TextInput style={{ fontSize: 16, flex: 1 }} placeholder="FirstName" onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                    autoCorrect={false}></TextInput>
                            </View>

                            <View style={{ alignSelf: "flex-start" }}>
                                {errors.firstName && touched.firstName && (
                                    <Text style={styles.errorStyle}>{errors.firstName}</Text>
                                )}
                            </View>



                            <View style={styles.inputViewUser}>
                                <UserIcon name="user" size={19} style={styles.inputIconStyle} />
                                <Text style={{ color: "#DBE3FF", paddingRight: 5 }}>|</Text>
                                <TextInput style={{ fontSize: 16, flex: 1 }} placeholder="LastName" onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}
                                    autoCorrect={false}></TextInput>
                            </View>
                            <View style={{ alignSelf: "flex-start" }}>
                                {errors.lastName && touched.lastName && (
                                    <Text style={styles.errorStyle}>{errors.lastName}</Text>
                                )}
                            </View>


                            <View style={styles.inputViewEmail}>
                                <EmailIcon name="mail" size={18} style={styles.inputIconStyle} />
                                <Text style={{ color: "#DBE3FF", paddingRight: 5 }}>|</Text>
                                <TextInput style={{ fontSize: 16, flex: 1 }} placeholder="Email" onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    value={values.email}></TextInput>

                            </View>
                            <View style={{ alignSelf: "flex-start" }}>
                                {errors.email && touched.email && (
                                    <Text style={styles.errorStyle}>{errors.email}</Text>
                                )}
                            </View>

                            <View style={styles.inputViewPassword}>
                                <PasswordIcon name="lock" size={27} style={styles.inputIconStyle} />
                                <Text style={{ color: "#DBE3FF", paddingRight: 5 }}>|</Text>
                                <TextInput style={{ fontSize: 16, flex: 1 }} placeholder="Password"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    autoCapitalize="none"
                                    secureTextEntry
                                    textContentType="password"
                                    value={values.password}></TextInput>
                            </View>
                            <View style={{ alignSelf: "flex-start" }}>
                                {errors.password && touched.password && (
                                    <Text style={styles.errorStyle}>{errors.password}</Text>
                                )}
                            </View>

                            <View style={styles.inputViewCpassword}>
                                <PasswordIcon name="lock" size={27} style={styles.inputIconStyle} />
                                <Text style={{ color: "#DBE3FF", paddingRight: 5 }}>|</Text>
                                <TextInput style={{ fontSize: 16, flex: 1 }} placeholder="Confirm Password"
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    secureTextEntry
                                    value={values.confirmPassword}></TextInput>
                            </View>
                            <View style={{ alignSelf: "flex-start" }}>
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <Text style={styles.errorStyle}>{errors.confirmPassword}</Text>
                                )}
                            </View>

                            <View style={styles.inputViewDate}>
                                <CalenderIcon name="calendar" size={17} style={{ color: "#91A1E1", paddingRight: 5 }} />
                                {/* <Text style={{ paddingRight: 170, fontSize: 18 }}>{date.toLocaleDateString("en-US")}</Text> */}
                                <Text style={{ color: '#E5E8FC', paddingRight: 5 }}>|</Text>
                                <TextInput
                                    placeholder='DD/MM/YYYY'
                                    style={styles.inputDateText}
                                    value={values.DOB}
                                    editable={false}
                                />
                                <TouchableOpacity onPress={() => setOpen(true)}>
                                    <DateIcon name="date" size={22} style={{ color: "#91A1E1" }} />
                                </TouchableOpacity>
                                <DatePicker
                                    modal
                                    open={open}
                                    date={date}
                                    mode="date"
                                    dateFormat="YYYY-MM-DD"
                                    // onConfirm={(date) => {
                                    //     setOpen(false)
                                    //     setDate(date)
                                    // }}
                                    // onCancel={() => {
                                    //     setOpen(false)
                                    // }}
                                    onConfirm={(selectDate) => handleConfirm(selectDate, setFieldValue)}
                                    onCancel={() => setOpen(false)}
                                />
                            </View>
                            <View style={{ alignSelf: "flex-start" }}>
                                {errors.DOB && touched.DOB && (
                                    <Text style={styles.errorStyle}>{errors.DOB}</Text>
                                )}
                            </View>

                            <View style={styles.dropDownContainer}>

                                <MultiSelect
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    // selectedTextStyle={styles.selectedTextStyle}
                                    // inputSearchStyle={styles.inputSearchStyle}
                                    // iconStyle={styles.iconStyle}
                                    search
                                    data={dropDownData}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select item"
                                    searchPlaceholder="Search..."
                                    value={selected}
                                    // onChange={item => {
                                    //     setSelected(item);
                                    // }}
                                    onChange={(items) => {
                                        console.log("-----", items)
                                        setSelected(items);
                                        setFieldValue('dropDownItems', items); // Update the dropDownItems array
                                    }}

                                    // renderLeftIcon={() => (
                                    //     <AntDesign
                                    //         style={styles.icon}
                                    //         color="black"
                                    //         name="Safety"
                                    //         size={20}
                                    //     />
                                    // )}
                                    selectedStyle={styles.selectedStyle}
                                />
                            </View>
                            <View style={{ alignSelf: "flex-start" }}>
                                {errors.dropDownItems && touched.dropDownItems && (
                                    <Text style={styles.errorStyle}>{errors.dropDownItems}</Text>
                                )}
                            </View>

                            <View style={styles.radioView}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', paddingTop: 8, paddingRight: 5 }}>Gender</Text>
                                <Text style={{ color: "#DBE3FF", paddingTop: 10, paddingRight: 5 }}>|</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    {genderData.map((item, index) => (
                                        <View style={{ flexDirection: 'row' }} key={index}>
                                            <TouchableOpacity onPress={() => {
                                                setSelectedRadio(item.id);
                                                setFieldValue('option', item.value); // Update Formik value
                                            }}>
                                                <View style={{ flexDirection: 'row', margin: 10, marginRight: 4 }}>
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
                            <View style={{ alignSelf: "flex-start" }}>
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
                            </TouchableOpacity>
                        </LinearGradient>
                    </ScrollView>
                )
            }

            }
        </Formik>
    )
}














