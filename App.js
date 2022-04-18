import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import movieReducer from './src/reducers/movieReducer';

import Home from './src/screens/home';
import Details from './src/screens/details';

const App = () => {
  const Store = createStore(movieReducer);
  const Stack = createStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
