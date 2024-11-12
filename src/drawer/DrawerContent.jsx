import React, { useEffect, useState } from 'react';
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem
} from '@react-navigation/drawer';
import { View, Text, Image } from 'native-base';
import { SafeAreaView, StyleSheet, BackHandler } from 'react-native';
import axios from 'axios';


const DrawerContent = (props) => {

	const [user, setUser] = useState({});

	const logoutButton = () => {
		props.navigation.navigate('Login');
	}

	useEffect(() => {
		axios.get('/users/profile')
			.then((resp) => {
				setUser(resp.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}, []);

	return (
		<DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView} >
			<SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: 20,
						backgroundColor: '#f6f6f6',
						marginBottom: 10,
					}}>
					<View>
						<Text>{user.firstname}</Text>
						<Text>{user.email}</Text>
					</View>
					<Image
						source={{
							uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fdefault-user-icon%2Fdefault-user-icon-13.jpg&f=1&nofb=1&ipt=92012585abee88f8a1b9030631ab688a3a66c93cd5118307e53972415b2f228b&ipo=images',
						}}
						alt='Foto perfil'
						style={{ width: 60, height: 60, borderRadius: 30 }}
					/>
				</View>
				<DrawerItemList {...props} />
			</SafeAreaView>
			<SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
				<DrawerItem
					label='Cerrar Sesion'
					onPress={logoutButton}
					labelStyle={{ color: '#E23F44' }}
				/>
				<DrawerItem
					label='Salir'
					onPress={() => BackHandler.exitApp()}
					labelStyle={{ color: 'red' }}
				/>
			</SafeAreaView>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	}
});

export default DrawerContent;
