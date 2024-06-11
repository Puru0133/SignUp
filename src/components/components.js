import { Text, TextInput } from "react-native";
// import styles from "../screens/welcome/welcomeStyle";
import { ICON_CONSTANTS } from "../constants/constants";
import { PLACEHOLDER_CONSTANTS } from "../constants/constants";
import styles from "./componentsStyle";
import UserIcon from 'react-native-vector-icons/AntDesign';
import EmailIcon from 'react-native-vector-icons/AntDesign';
import PasswordIcon from 'react-native-vector-icons/EvilIcons';
import { View } from "react-native";


export default function TextInputFunction({ renderLeftIcon, placeholder, onChangeText, onBlur, value, autoCorrect, autoCapitalise, autoComplete, keyBoardType, textContentType, secureTextEntry, errorName }) {

    return (
        <>
            <View style={styles.inputViewUser}>
                {!!renderLeftIcon && <renderLeftIcon />}
                <Text style={styles.textLine}>|</Text>
                <TextInput style={styles.inputTextStyle} placeholder={placeholder} onChangeText={onChangeText}
                    onBlur={onBlur}
                    autoCapitalize={autoCapitalise}
                    autoComplete={autoComplete}
                    autoCorrect={autoCorrect}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyBoardType}
                    textContentType={textContentType}
                    value={value}
                >

                </TextInput>
            </View>

            {/* <View style={styles.errorView}>
                {errors.errorName && touched.errorName && (
                    <Text style={styles.errorStyle}>{errors.errorName}</Text>
                )}
            </View> */}
        </>
    )
}

export function Button() {

}