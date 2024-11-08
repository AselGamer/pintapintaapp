import { Box, Center, Text, VStack, HStack, View } from "native-base";
import { FlatList, StyleSheet } from "react-native";

const faltas = [
	{ id: '1', title: 'Redes 2024', count: 20 }
]

const Faltas = () => {
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
				{item.title}
			</Text>
			<Text flex={1} textAlign="center">
				{item.count}
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
					Asignaturas
				</Text>
				<Text flex={1} textAlign="center" fontWeight="bold">
					Faltas
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
