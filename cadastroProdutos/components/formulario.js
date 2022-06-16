import React, {useState, useContext} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import { ListaContatos } from './lista';

export default function Formulario(){
    const navigation = useNavigation();
    const [inputCodigo, setInputCodigo] = useState('');
    const [inputDescricao, setInputDescricao] = useState('');
    const [inputPreco, setInputPreco] = useState('');
    const [inputQuantidade, setInputQuantidade] = useState('');

    const {agenda} = useContext(ListaContatos);
    const {addContato} = useContext(ListaContatos);

    function novoContato(){
        if(inputCodigo == '' || inputDescricao == '' || inputPreco == '' || inputQuantidade == ''){
            alert('Os campos devem estar preenchidos');
            return;
        }
         
        addContato(agenda, inputCodigo, inputDescricao, inputPreco, inputQuantidade);

        navigation.navigate('Home');
    }

    return(
        <View style= {styles.container}>
            <View>
                <TextInput
                    style={styles.entrada}
                    placeholder='Código'
                    placeholderTextColor={'red'}
                    keyboardType="Numeric"
                    value={inputCodigo}
                    onChangeText={(text) => setInputCodigo(text)}/>           

                <TextInput
                    style={styles.entrada}
                    placeholder='Descrição'
                    placeholderTextColor={'red'}
                    value={inputDescricao}
                    onChangeText={(text) => setInputDescricao(text)}/>

                 <TextInput
                    style={styles.entrada}
                    placeholder='Preço'
                    placeholderTextColor={'red'}
                    keyboardType="Numeric"
                    value={inputPreco}
                    onChangeText={(text) => setInputPreco(text)}/>

                 <TextInput
                    style={styles.entrada}
                    placeholder='Quantidade'
                    placeholderTextColor={'red'}
                    keyboardType="Numeric"
                    value={inputQuantidade}
                    onChangeText={(text) => setInputQuantidade(text)}/>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={novoContato}>
                        <Text style={styles.textoBotao}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },entrada: {
        width: 250,
        textAlign: 'center',
        borderWidth: 2,
        marginBottom: 5,
        fontSize: 20,
    },botao: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        marginBottom: 5,
        borderRadius: 20,
        fontSize: 20,
    },textoBotao: {
        color: 'white',
        fontWeight: 'bold',
    }
});