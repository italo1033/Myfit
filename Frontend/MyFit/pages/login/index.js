import { useState } from "react";
import { View, Image, Text } from "react-native";
import Button from "../../components/button";
import Input from "../../components/input";
import styles from "./style"
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
export function Login(){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [eye, setEye] = useState('eye-off-outline')
    const [eyeState, setEyeState] = useState(true)
    
    function HandleEye(){
        if (eye === 'eye-off-outline'){
            setEye('eye-outline');
            setEyeState(false);
        }
        else{
            setEye('eye-off-outline');
            setEyeState(true);
        }
    }

    return(
        <View style={styles.ContainerGeral}>
            <View style={styles.Header}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}/>
                <Text style={styles.titleImage}>MyFit</Text>
            </View>
            <View style={styles.Main}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Login:</Text>
                </View>
                <View style={styles.containerInput}>
                    <Icon name="user" size={30} color="gray" />
                    <Input
                        onChangeText={setLogin}
                        value={login}
                    />
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Senha:</Text>
                </View>
                <View style={styles.containerInput}>
                    <Icon name="lock" size={30} color="gray" />
                    <Input
                        onChangeText={setSenha}
                        value={senha}
                        password={eyeState}
                    />
                    <Icon2 onPress={HandleEye} name={eye} size={30} color="gray" />
                </View>
                <View style={styles.footer}>
                    <Button title='Acessar' />
                </View>
            </View>
        </View>
    )
}