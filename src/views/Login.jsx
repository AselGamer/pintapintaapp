import React, { useState, useEffect } from 'react';
import { VStack, FormControl, Input, Button } from 'native-base';


const Login = ({ navigation }) => {

	const [isLoggedIn, getIsLoggedIn] = useState(false);

	const [formData, setData] = React.useState({});
	const [errors, setErrors] = React.useState({});

	useEffect(() => {
		if (isLoggedIn) {
			navigation.navigate('Inicio');
		}
	}, []);

	return (
		<VStack width='90%' height='80%' mx='3' alignSelf='center' justifyContent='center' marginTop='3'>
			<FormControl>
				<FormControl.Label _text={{
					bold: true
				}}>
					Correo
				</FormControl.Label>
				<Input placeholder='sergio@almi.eus' type='text' onChangeText={value => setData({
					...formData,
					name: value
				})} />
				<FormControl.ErrorMessage _text={{
					fontSize: 'xs'
				}}>
					Error Correo
				</FormControl.ErrorMessage>
			</FormControl>
			<FormControl>
				<FormControl.Label _text={{
					bold: true
				}}>
					Contraseña
				</FormControl.Label>
				<Input placeholder='Contraseña' type='password' onChangeText={value => setData({
					...formData,
					name: value
				})} />
				<FormControl.ErrorMessage _text={{
					fontSize: 'xs'
				}}>
					Error Contra
				</FormControl.ErrorMessage>
			</FormControl>
			<Button mt='5' colorScheme='cyan' onPress={() => {navigation.navigate('Inicio')}}>
				Iniciar Sesion
			</Button>
		</VStack>
	);
}

export default Login;
