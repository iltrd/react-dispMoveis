import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import formulario from './formulario';
import home from './home';

const Stack = createNativeStackNavigator();

function Navegacao(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={home}/>
            <Stack.Screen name='Formulario' component={formulario}/>
        </Stack.Navigator>
    );
}
export default Navegacao;