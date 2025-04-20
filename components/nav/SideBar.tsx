import { ViewProps, ViewStyle } from "react-native";
import { Card, ThemedText, ThemedView } from "../ui";
import { Pressable } from "../ui";
import { Styles } from "@/constants";
import { useThemeColor } from "@/hooks/useThemeColor";

export function SideBar(props: ViewProps) {
	const theme = useThemeColor();
	const s = Styles[theme];

	const routeNames = props.state.routeNames.filter(route => route !== "+not-found" && route !== "_sitemap");

	return (
		<ThemedView style={[s.container]}>
			<Card card={"1"}></Card>
			{routeNames.map((route, index) => (
				<Pressable
					key={index}
					onPress={() => props.navigation.navigate(route)}
					innerStyle={[s.p_4,]}
				>
					<ThemedText>{route}</ThemedText>
				</Pressable>
			))}
		</ThemedView>
	);
}
