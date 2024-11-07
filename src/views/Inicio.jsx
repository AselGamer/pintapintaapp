import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Box, Text, VStack, Center } from 'native-base';

const courses = [
	{ id: '1', title: 'ICloud Native - I TUTORIA (ITUT)', duration: '5 Horas' },
	{ id: '2', title: 'Cloud Computing Fundamentals', duration: '5 Horas' },
	{ id: '3', title: 'Advanced Cloud Infrastructure', duration: '5 Horas' },
	{ id: '4', title: 'Serverless Applications', duration: '5 Horas' },
	{ id: '5', title: 'AI in the Cloud', duration: '5 Horas' },
];

const Inicio = () => {
	const renderCourse = ({ item }) => (
		<Box
			marginTop='4'
			borderColor="coolGray.200"
			borderRadius="sm"
			bg="primary.700"
			p="4"
			mb="4"
			shadow="3"
			background='purple.600'
			style={styles.courseBox}>
			<VStack alignItems="center" space={2}>
				<Text fontSize="lg" fontWeight="bold" color="white">
					{item.title}
				</Text>
				<Text fontSize="sm" color="white">
					Duración: {item.duration}
				</Text>
			</VStack>
		</Box >
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
