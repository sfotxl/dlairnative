import Main from './screens/MainComponent';
import { StyleSheet, Text, View } from 'react-native';
import ProductsScreen from './screens/ProductsScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled
        activeColor='yellow'
        barStyle={{ backgroundColor: 'maroon' }}
        inactiveColor='#FFFFFF'
        tabBarOptions={{
          activeTintColor: 'yellow',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Home' component={Main} />
        <Tab.Screen name='Products' component={Main} />
        <Tab.Screen name='Map' component={Main} />
        {/* <Tab.Screen name='Contact Us' component={Main} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
