import { FlatList, StyleSheet } from "react-native";
import axios from "axios";

import { useEffect, useState } from "react";
import { Box, Text, Image, Input, InputSlot, InputIcon } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";
import { SearchIcon } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

export default function paises() {
	const [listaPaises, setListaPaises] = useState([]);
	const [filtroNombrePais, setFiltroNombrePais] = useState("");

	useEffect(() => {
		obtenerPaises();
		console.log("asd");
	}, []);

	useEffect(() => {
		console.log("filtroNombrePais ", filtroNombrePais);
		obtenerPaises();
	}, [filtroNombrePais]);

	async function obtenerPaises() {
		try {
			const res = await axios.get("https://restcountries.com/v3.1/all");
			let listaPaises = res.data;
			if (filtroNombrePais) {
				listaPaises = listaPaises.filter((pais: any) =>
					pais.name.common.toLowerCase().includes(filtroNombrePais.toLowerCase())
				);
			}

			setListaPaises(listaPaises);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Box alignItems="center">
			{/* FILTRO POR NOMBRE */}

			<Input width={"60%"} my="$6">
				<InputSlot pl="$3">
					<InputIcon as={SearchIcon} />
				</InputSlot>
				<InputField placeholder="Buscar..." value={filtroNombrePais} onChangeText={setFiltroNombrePais} />
			</Input>

			<Text>{filtroNombrePais}</Text>

			{/* MOSTRAR LISTA DE PAISES */}
			{/* ONPRESS PAIS IR A PANTALLLA PAIS CON MAS DETALLES */}
			<Box width={"100%"} alignItems="center">
				<FlatList
					data={listaPaises}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={()=>{
							console.log('aprete el pais: ',item)
							router.push(`/(tabs)/paises/${item.ccn3}`)
						}}>
							<Box
								borderTopWidth={1}
								borderBottomWidth={1}
								borderColor="#e3e5e9"
								bgColor="$white"
								my={"$2"}
								padding={"$4"}
							>
								<Box flexDirection="row">
									<Image
										source={{ uri: item.flags.png }}
										width={50}
										height={50}
										rounded={"$md"}
										alt="asdasddas"
									/>

									<Box marginLeft={"$4"}>
										<Text>
											{item?.idd?.root}
											{item?.idd?.suffixes?.join(", ")}
										</Text>
										<Text bold>{item?.name?.common}</Text>
									</Box>
								</Box>
							</Box>
						</TouchableOpacity>
					)}
				/>
			</Box>
		</Box>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
