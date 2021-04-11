import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import Login from '../containers/screens/Login/Login';
import Register from '../containers/screens/Login/Register';
import HomeNews from '../containers/screens/Feed/HomeNews'
import StateNews from '../containers/screens/Feed/StateNews'
import Topic from '../containers/screens/Topic'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

function NavStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      {/* <Stack.Screen name="HomeNews" component={NavDrawer} /> */}
    </Stack.Navigator>
  );
}

export default function NavDrawer() {
  return (
    <View>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Stack" component={NavStack} />
           <Drawer.Screen name="HomeNews" component={Topic} />
          <Drawer.Screen name="StateNews" component={StateNews} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}
