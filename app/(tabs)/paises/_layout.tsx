import { Stack } from "expo-router";

export default function layout(){
	return(
		<Stack screenOptions={{headerShown:false}} >
			<Stack.Screen name="paises" />
			<Stack.Screen name="[paiscodigo]" />
		</Stack>
	)
}