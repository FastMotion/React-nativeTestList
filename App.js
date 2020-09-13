import 'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home'
import Films from './Screens/Films'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle : {
            backgroundColor: '#f5f5f5',
            height: 100,
          },
          headerTintColor: '#e10246',
          headerTitleStyle: {
            alignSelf: 'center',
            color: '#333333',
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'SUPER FILMS'
          }}
        />
        <Stack.Screen
          name="Films"
          component={Films}
          options={{
            title: 'SUPER FILMS',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


