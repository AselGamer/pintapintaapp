import React from 'react';
import { FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Box, Text, VStack, Center, HStack } from 'native-base';

const courses = [
	{ id: '1', title: 'ICloud Native - I TUTORIA (ITUT)', duration: '5 Horas' },
	{ id: '2', title: 'Cloud Computing Fundamentals', duration: '5 Horas' },
	{ id: '3', title: 'Advanced Cloud Infrastructure', duration: '5 Horas' },
	{ id: '4', title: 'Serverless Applications', duration: '5 Horas' },
	{ id: '5', title: 'AI in the Cloud', duration: '5 Horas' },
];

const Inicio = ({ navigation }) => {

	const goToAssignments = (id) => {
		console.log(id);
		navigation.navigate('Tareas', { id: id });
	}

	const renderCourse = ({ item }) => (
		<TouchableOpacity onPress={() => { goToAssignments(item.id) }}>
			<Box
				mt='4'
				mb="4"
				borderColor="coolGray.200"
				borderRadius="sm"
				py="4"
				pb='0'
				shadow="3"
				bg='purple.600'
				style={styles.courseBox}>
				<VStack alignItems="center" space={2}>
					<Text fontSize="lg" fontWeight="bold" color="white">
						{item.title}
					</Text>
					<Text fontSize="sm" color="white">
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
		<Center flex={1} bg="gray.100">
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
