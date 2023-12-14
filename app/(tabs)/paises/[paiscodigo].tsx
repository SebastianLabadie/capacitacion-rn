import { AntDesign } from "@expo/vector-icons";
import { Box, Button, ButtonText, Text } from "@gluestack-ui/themed";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Linking } from "react-native";
import PaisSeccion2 from "../../../components/PaisSeccion2";

export default function paiscodigo() {
	const { paiscodigo } = useLocalSearchParams();
	const [pais, setPais] = useState(null);

	//https://restcountries.com/v3.1/alpha/{code}

	//crear funcion para obtener los detalles del pais OBTENERPAIS
	//usar useeffect para llamar a funcion OBTENERPAIS
	//guardar el resultado de la api en un estado/variable

	useEffect(() => {
		obtenerPais();
	}, []);

	async function obtenerPais() {
		try {
			const respuesta = await axios.get("https://restcountries.com/v3.1/alpha/" + paiscodigo);
			console.log(respuesta.data);
			setPais(respuesta.data[0]);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Box alignItems="center" >
			<Text>hola {paiscodigo}</Text>
			{pais && (
				<Box width={'100%'}  alignItems="center"> 
					<Box bgColor="#fff" borderWidth={1} padding={20} width={'98%'} borderRadius={'$md'} alignItems="center" my={10}>
						<Text bold>{pais.name.common}</Text>
						<Text bold>{pais.translations.spa.official}</Text>
					</Box>

					<PaisSeccion2 pais={pais} />
					
				</Box>
			)}
		</Box>
	);
}
