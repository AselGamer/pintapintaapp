import React, { useState, useEffect } from 'react';
import { VStack, FormControl, Input, Button, Text } from 'native-base';
import { Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { setToken, removeToken } from '../tokenManager';

const Login = ({ navigation }) => {

	const [formData, setData] = React.useState({});
	const [errors, setErrors] = React.useState({});

	useEffect(() => {
		axios.get('/courses/all')
			.then(() => {
				navigation.navigate('Inicio');
			})
			.catch(() => {
				removeToken();
			});
	}, []);

	const login = () => {
		axios.post('/auth/signin', {
			'email': formData.email,
			'password': formData.password
		}).then((res) => {
			setToken(res.data.token);
			navigation.navigate('Inicio');
		}).catch(() => {
			setErrors({ ...errors, login: 'La contraseña o el correo son incorrectos, intentelo otra vez.' })
		});
	}

	const validate = () => {
		setErrors({});
		setErrors(errors => {
			if (formData.email === undefined || formData.email === '') {
				return { ...errors, email: 'El email es obligatorio.' };
			} else {
				const { email, ...rest } = errors;
				return rest;
			}
		});

		setErrors(errors => {
			if (formData.password === undefined || formData.password === '') {
				return { ...errors, password: 'La contraseña es obligatoria.' };
			} else {
				const { password, ...rest } = errors;
				return rest;
			}
		});

		if (formData.email === undefined || formData.email === '' || formData.password === undefined || formData.password === '') {
			return false;
		}

		return true;
	};

	const submitLogin = () => {
		// Validar login
		validate() ? login() : '';
	}

	return (
		<VStack mx='3' style={styles.container}>
			<FormControl isRequired isInvalid={'email' in errors}>
				<FormControl.Label _text={{
					bold: true,
					fontSize: 'md'
				}}>
					Correo
				</FormControl.Label>
				<Input placeholder='sergio@almi.eus' type='text' fontSize='md' onChangeText={value => setData({
					...formData,
					email: value
				})} />
				{'email' in errors && <FormControl.ErrorMessage _text={{ fontSize: 'sm' }}>{errors.email}</FormControl.ErrorMessage>}
			</FormControl>
			<FormControl isRequired isInvalid={'password' in errors}>
				<FormControl.Label _text={{
					bold: true,
					fontSize: 'md'
				}}>
					Contraseña
				</FormControl.Label>
				<Input placeholder='Contraseña' type='password' fontSize='md' onChangeText={value => setData({
					...formData,
					password: value
				})} />
				{'password' in errors && <FormControl.ErrorMessage _text={{ fontSize: 'sm' }}>{errors.password}</FormControl.ErrorMessage>}
			</FormControl>
			{errors.login && <Text fontSize='sm' color='red.400'>{errors.login}</Text>}
			<Button mt='5' colorScheme='blue' onPress={submitLogin} >
				<Text fontSize='md' color='white'>Iniciar Sesion</Text>
			</Button>
		</VStack >
	);
}

const styles = StyleSheet.create({
	container: {
		width: '90%',
		height: '80%',
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: '3'
	},
});

export default Login;
