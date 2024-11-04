import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
} from 'react-native';

function App(): React.JSX.Element {

	console.log("hola");
	return (
		<>
			<NavigationContainer>
				<NativeBaseProvider>
				</NativeBaseProvider>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
});

export default App;
