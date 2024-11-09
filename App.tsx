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
import Entregas from './src/views/Entregas';
import Faltas from './src/views/Faltas';
import Tareas from './src/views/Tareas';
import DetalleTareas from './src/views/DetalleTareas';

import DrawerContent from './src/drawer/DrawerContent';

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
						<Drawer.Navigator initialRouteName='Login' drawerContent={DrawerContent} screenOptions={{
							swipeEnabled: true,
							swipeEdgeWidth: 100,
						}}>
							<Drawer.Screen name='Login' component={Login} options={{
								headerLeftContainerStyle: { display: 'none' },
								drawerItemStyle: { display: 'none' },
								swipeEnabled: false,
								headerShown: false
							}} />
							<Drawer.Screen name='Tareas' component={Tareas} options={{
								drawerItemStyle: { display: 'none' },
							}} />
							<Drawer.Screen name='DetalleTareas' component={DetalleTareas} options={{
								headerShown: false,
								drawerItemStyle: { display: 'none' },
							}} />
							<Drawer.Screen name='Inicio' component={Inicio} />
							<Drawer.Screen name='Entregas' component={Entregas} />
							<Drawer.Screen name='Faltas' component={Faltas} />
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
