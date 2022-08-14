import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStackScreen from './navigation/TabNavigation'
import DrawerContent from './screens/Drawer'
import { Provider } from 'react-redux'
import store from './store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'



const Drawer = createDrawerNavigator();

export default function App(props) {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="TabStackScreen" component={TabStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}