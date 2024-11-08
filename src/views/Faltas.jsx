import { Box, Center, Text, VStack, HStack, View } from "native-base";
import { FlatList } from "react-native";

const faltas = [
	{ id: '1', title: 'Falta 1', count: 20 }
]

const Faltas = () => {
	const renderFaltas = ({ item }) => (
		<Box flex='1' flexDir='column' bg='red.50'>
			<HStack flex='1' flexDir='row'>
				<Text fontSize='lg'>{item.title}</Text>
				<Text fontSize='lg'>{item.count}</Text>
			</HStack>
		</Box>
	)

	return (
		<VStack flex={1}>
			<FlatList
				data={faltas}
				renderItem={renderFaltas}
				keyExtractor={(item) => item.id}
			/>
		</VStack>
	);
}

export default Faltas;
