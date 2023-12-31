import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import { Drawer } from "expo-router/drawer";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Drawer
			screenOptions={{
				drawerActiveTintColor: "#000",
			}}
		>
			<Drawer.Screen
				name="index"
				options={{
					title: "Tab One",
					drawerIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
			<Drawer.Screen
				name="paises"
				options={{
					title: "Paises",
					drawerIcon: ({ color }) => <TabBarIcon name="flag" color={color} />,
				}}
			/>
		</Drawer>
	);
}
