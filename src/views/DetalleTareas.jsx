import React, { useEffect, useState } from 'react';
import { Box, Text, Button, VStack, HStack, Heading, ScrollView } from 'native-base';
import axios from 'axios';

const DetalleTareas = ({ route, navigation }) => {

	const [assignment, setAssignment] = useState({});
	const [submission, setSubmission] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [reload, setReload] = useState(false);

	const { id } = route.params;

	const handleMarkAsSubmitted = () => {
		axios.post('/assignments/submissions/add', {
			'assignment_id': id
		}).then(() => {
			setReload(true);
		});
	}

	useEffect(() => {
		axios.get('/assignments/' + id)
			.then((resp) => {
				setAssignment(resp.data);
				axios.get('/assignments/user/submissions/' + id)
					.then((resp) => {
						setSubmitted(true);
						setSubmission(resp.data.submission);
					})
					.catch(() => {
						setSubmitted(false);
						setSubmission({});
					});
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id, reload]);

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

						<Text fontWeight='bold' fontSize='md'>Entregado: {submitted ?
							<Text mt='1' color='green.900' fontWeight='normal'>Si</Text> :
							<Text mt='1' color='red.900' fontWeight='normal'>No</Text>}</Text>
					</Box>
					{submission.grade !== null && submission.grade !== undefined &&
						<Box>
							<Text fontWeight='normal' fontSize='lg'>Información Nota</Text>
							<Box>
								<Text fontWeight='bold' fontSize='md'>Nota: <Text fontWeight='normal'>{submission.grade}</Text></Text>
								<Text fontWeight='bold' fontSize='md'>Fecha entrega: <Text fontWeight='normal'>{submission.send_date}</Text></Text>
								<Text fontWeight='bold' fontSize='md'>Fecha corregido: <Text fontWeight='normal'>{submission.graded_date}</Text></Text>
							</Box>

						</Box>
					}
				</VStack>
				<Button
					mt='6'
					colorScheme='teal'
					onPress={handleMarkAsSubmitted}
					isDisabled={submitted}>
					{submitted ? 'Entregado' : 'Marcar como entregado'}
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
