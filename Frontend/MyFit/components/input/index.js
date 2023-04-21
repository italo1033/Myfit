import { TextInput } from 'react-native';
import style from './style';
import styles from "./style"
function Input(props) {
    return (
        <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            secureTextEntry={props.password} 
        />
    );
}
export default Input