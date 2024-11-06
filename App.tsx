import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
	SafeAreaView,
	StyleSheet,
	Text,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';

import Inicio from './src/views/Inicio';
import Login from './src/views/Login';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {

	// Para bloquear el boton de atras
	useEffect(
		React.useCallback(() => {
			const subscription = BackHandler.addEventListener(
				'hardwareBackPress',
				() => true
			);

			return () => subscription.remove();
		}, [])
	);

	return (
		<>
			<GestureHandlerRootView>
				<NativeBaseProvider>
					<NavigationContainer>
						<Drawer.Navigator initialRouteName='Login' screenOptions={{
							swipeEnabled: true,
						}}>
							<Drawer.Screen name='Login' component={Login} options={{
								headerLeftContainerStyle: { display: 'none' },
								drawerItemStyle: { display: 'none' },
								swipeEnabled: false,
							}} />
							<Drawer.Screen name='Inicio' component={Inicio} />
						</Drawer.Navigator>
					</NavigationContainer>
				</NativeBaseProvider>
			</GestureHandlerRootView>
		</>
	);
}

const styles = StyleSheet.create({
});

export default App;
