import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem
} from '@react-navigation/drawer';
import { View, Text, Image } from 'native-base';
import { SafeAreaView, StyleSheet, BackHandler } from 'react-native';


const DrawerContent = (props) => {

	const logoutButton = () => {
		props.navigation.navigate('Login');
	}

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
						<Text>John Doe</Text>
						<Text>example@email.com</Text>
					</View>
					<Image
						source={{
							uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
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
