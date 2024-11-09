import React, { useEffect } from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import { Box, Text, VStack, HStack, Heading } from 'native-base';

const tareas = [
	{
		id: 1,
		name: 'Assignment 1',
		description: 'Description of Assignment 1',
		start_date: '2023-11-01',
		end_date: '2023-11-10'
	},
	{
		id: 2,
		name: 'Assignment 2',
		description: 'Description of Assignment 2',
		start_date: '2023-12-01',
		end_date: '2023-12-15'
	},
	// Add more assignments as needed
];

const Entregas = ({ route, navigation }) => {

	useEffect(() => {
		// Sacar las tareas
	}, []);

	const goToDetails = (id) => {
		navigation.navigate('DetalleTareas', { id: id });
	}

	const renderTarea = ({ item }) => (
		<TouchableHighlight
			activeOpacity={0.6}
			underlayColor='#DDDDDD'
			onPress={() => goToDetails(item.id)}>
			<Box borderBottomWidth='1' borderColor='coolGray.200' padding='4' mb='2'>
				<Heading size='md'>{item.name}</Heading>
				<Text color='coolGray.600' mt='1'>{item.description}</Text>
				<HStack mt='2' space='3'>
					<VStack>
						<Text fontWeight='bold'>Fecha inicio</Text>
						<Text>{item.start_date}</Text>
					</VStack>
					<VStack>
						<Text fontWeight='bold'>Fecha fin</Text>
						<Text>{item.end_date}</Text>
					</VStack>
				</HStack>
			</Box>
		</TouchableHighlight>
	);

	return (
		<Box flex={1} padding='4' bg='white'>
			<Heading mb='4'>Entregas</Heading>
			<FlatList
				data={tareas}
				renderItem={renderTarea}
				keyExtractor={(item) => item.id}
			/>
		</Box>
	);
}

export default Entregas;
