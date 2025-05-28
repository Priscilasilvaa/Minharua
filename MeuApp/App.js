import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'; // Importe o componente Home do arquivo home.js
import DescarteResiduo from './src/screens/DescarteResiduos';
import AgendarResiduo from './src/screens/AgendarResiduo';
import ConfirmarResiduo from './src/screens/ConfirmarResiduo';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
      
        {/* Adicione outras telas conforme necessário */}
        <Stack.Screen 
          name="DescarteResiduo" 
          component={DescarteResiduo}
          options={{ 
            title: 'Descartar Resíduo'}} 
        />
         <Stack.Screen 
          name="AgendarResiduo" 
          component={AgendarResiduo}
          options={{ title: 'Agendar Descarte' }}
        />

        <Stack.Screen 
          name="ConfirmarResiduo" 
          component={ConfirmarResiduo}
          options={{ title: 'Confirmar Agendamento' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;