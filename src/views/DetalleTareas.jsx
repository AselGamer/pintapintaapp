import React from 'react';
import { Box, Text, Button, VStack, HStack, Heading, ScrollView } from 'native-base';

const assignment = {
	id: 2,
	name: 'Assignment 2',
	description: 'Description of Assignment 2',
	start_date: '2023-12-01',
	end_date: '2023-12-15',
	submitted: false,
	grade: 10,
	send_date: '2023-12-15',
	graded_date: '2023-12-15',
};

const DetalleTareas = ({ route, navigation }) => {

	const { id } = route.params;

	return (
		<ScrollView flex={1} padding='4' bg='white'>
			<Box>
				<Heading size='lg' mb='4'>{assignment.name}</Heading>

				<VStack space='4'>
					<Box>
						<Text fontWeight='bold' fontSize='md'>Descripción:</Text>
						<Text mt='1' color='coolGray.600'>
							{assignment.description}
						</Text>

						<Text fontWeight='bold' fontSize='md'>Fecha Inicio: <Text mt='1' fontWeight='normal'>{assignment.start_date}</Text></Text>

						<Text fontWeight='bold' fontSize='md'>Fecha Fin: <Text mt='1' fontWeight='normal'>{assignment.end_date}</Text></Text>

						<Text fontWeight='bold' fontSize='md'>Entregado: {assignment.submitted ?
							<Text mt='1' color='green.900' fontWeight='normal'>Si</Text> :
							<Text mt='1' color='red.900' fontWeight='normal'>No</Text>}</Text>
					</Box>
					{assignment.grade &&
						<Box>
							<Text fontWeight='normal' fontSize='lg'>Información Nota</Text>
							<Box>
								<Text fontWeight='bold' fontSize='md'>Nota: <Text fontWeight='normal'>{assignment.grade}</Text></Text>
								<Text fontWeight='bold' fontSize='md'>Fecha entrega: <Text fontWeight='normal'>{assignment.send_date}</Text></Text>
								<Text fontWeight='bold' fontSize='md'>Fecha corregido: <Text fontWeight='normal'>{assignment.graded_date}</Text></Text>
							</Box>

						</Box>
					}
				</VStack>
				<Button
					mt='6'
					colorScheme='teal'
					// onPress={handleMarkAsSubmitted}
					isDisabled={assignment.submitted}>
					{assignment.submitted ? 'Entregado' : 'Marcar como entregado'}
				</Button>
				<Button
					mt='6'
					colorScheme='teal'
					onPress={() => navigation.navigate('Inicio')}>
					Volver
				</Button>
			</Box>
		</ScrollView>
	);
}

export default DetalleTareas;
