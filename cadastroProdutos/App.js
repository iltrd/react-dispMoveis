import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navegacao from './components/navegacao';
import Lista from './components/lista';

export default function App() {
  return (
    <NavigationContainer>
      <Lista>
        <Navegacao />
      </Lista>
    </NavigationContainer>
  );
}
