import React, { useEffect, useState } from 'react';
import { Box, Center, Text, VStack, HStack, View } from "native-base";
import { FlatList, StyleSheet } from "react-native";
import axios from 'axios';

const Faltas = ({ route }) => {

	const [faltas, setFaltas] = useState({});

	useEffect(() => {
		axios.get('/enrollments/absences/mine')
			.then((resp) => {
				setFaltas(resp.data);
			})
			.catch();
	}, []);

	const renderFaltas = ({ item }) => (
		<HStack
			space={4}
			justifyContent="space-between"
			px={4}
			py={3}
			borderBottomWidth={1}
			borderColor="coolGray.200"
		>
			<Text flex={1} textAlign="center">
				{item.date}
			</Text>
		</HStack>
	)

	return (
		<Box flex={1} safeArea bg="coolGray.100">
			<HStack
				space={4}
				justifyContent="space-between"
				px={4}
				py={3}
				borderBottomWidth={2}
				borderColor="coolGray.300"
				bg="coolGray.200"
			>
				<Text flex={1} textAlign="center" fontWeight="bold">
					Fecha
				</Text>
			</HStack>
			<FlatList
				data={faltas}
				renderItem={renderFaltas}
				keyExtractor={(item) => item.id}
			/>
		</Box>
	);
}

export default Faltas;
