import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './screens/Inicio';
import Series from './screens/Series';
import Peliculas from './screens/Peliculas';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { watchMovie } from './Redux/reducers/media';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}} />
          <Stack.Screen name="Series" component={Series} options={{headerShown: false}} />
          <Stack.Screen name="Peliculas" component={Peliculas} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
