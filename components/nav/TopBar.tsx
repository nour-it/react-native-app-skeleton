import { ViewStyle } from "react-native";
import { ThemedText } from "../ui";
import { Pressable } from "../ui";
import { useNavigation } from "expo-router";

interface TopBarProps {
	children?: React.ReactNode;
	style?: ViewStyle;
}

export function TopBar({ children, style }: TopBarProps) {
	const navigation = useNavigation();
	const toggleDrawer = () => navigation.toggleDrawer();
	return (
		<Pressable innerStyle={style} onPress={toggleDrawer}>
			<ThemedText>Top bar</ThemedText>
		</Pressable>
	);
}
