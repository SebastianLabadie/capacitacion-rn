import { AntDesign } from "@expo/vector-icons";
import { Box, Button, ButtonText, Text } from "@gluestack-ui/themed";
import { Linking } from "react-native";

export default function PaisSeccion2({pais}:any) {
	return (
		<Box bgColor="#fff" borderWidth={1} padding={20} width={"98%"} borderRadius={"$md"} my={10}>
			<Box flexDirection="row">
				<Text bold>Region: </Text>
				<Text>{pais.region}</Text>
			</Box>
			<Box flexDirection="row">
				<Text bold>Subregion: </Text>
				<Text>{pais.subregion}</Text>
			</Box>

			<Box flexDirection="row">
				<Text bold>Capital: </Text>
				<Text>{pais.capital[0]}</Text>
			</Box>

			<Box flexDirection="row">
				<Text bold>Paises Limitrofes: </Text>
				<Text>{pais?.borders?.join(", ")}</Text>
			</Box>

			<Box flexDirection="row">
				<AntDesign name="chrome" size={18} color="black" />
				<Text> {pais?.tld?.join(", ")}</Text>
			</Box>

			<Button
				onPress={() => {
					console.log("ver mapa");
					Linking.openURL(pais.maps.googleMaps);
				}}
			>
				<ButtonText>Ver Mapa</ButtonText>
			</Button>
		</Box>
	);
}
