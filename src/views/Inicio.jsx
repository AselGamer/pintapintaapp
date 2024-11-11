import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Text, VStack, Center, HStack } from 'native-base';
import axios from 'axios';

const Inicio = ({ navigation }) => {

	const [courses, setCourses] = useState({});

	useEffect(() => {
		axios.get('courses/all/enrolled').then((resp) => {
			setCourses(resp.data);
		}).catch((err) => {
			console.log(err);
		});
	}, []);

	const goToAssignments = (id) => {
		navigation.navigate('Tareas', { id: id });
	}

	const renderCourse = ({ item }) => (
		<TouchableOpacity onPress={() => { goToAssignments(item.id) }}>
			<Box
				mt='4'
				mb='4'
				borderColor='coolGray.200'
				borderRadius='sm'
				py='4'
				pb='0'
				shadow='3'
				bg='purple.600'
				style={styles.courseBox}>
				<VStack alignItems='center' space={2}>
					<Text fontSize='lg' fontWeight='bold' color='white'>
						{item.name}
					</Text>
					<Text fontSize='sm' color='white'>
						Duración: {item.duration}
					</Text>
				</VStack>
				<HStack
					mt='2'
					bg='purple.700'
					width='100%'
					px='4'
					justifyContent='center'>
					<Text color='white' shadow='2'>
						Abrir
					</Text>
				</HStack>
			</Box >
		</TouchableOpacity>
	);

	return (
		<Center flex={1} bg='gray.100'>
			<FlatList
				data={courses}
				renderItem={renderCourse}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{ alignItems: 'center', }}
			/>
		</Center>
	);
}

const styles = StyleSheet.create({
	courseBox: {
		borderWidth: 1,
		alignItems: 'center',
		minWidth: '90%',
	}
});
export default Inicio;
