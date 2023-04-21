import { useState } from "react";
import { View, Image, Text } from "react-native";
import Button from "../../components/button";
import Input from "../../components/input";
import styles from "./style"
export function Login(){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

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
                <Input
                    onChangeText={setLogin}
                    value={login}
                />
                <View style={styles.containerText}>
                    <Text style={styles.text}>Senha:</Text>
                </View>
                <Input
                    onChangeText={setSenha}
                    value={senha}
                    password={true}
                />
                <View style={styles.footer}>
                    <Button title='Acessar' />
                </View>
            </View>
        </View>
    )
}