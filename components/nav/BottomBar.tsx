import { View, ViewStyle } from "react-native";
import { ThemedText } from "../ui";
import { Pressable } from "../ui";
import { useNavigation } from "expo-router";
import { Colors, Dimension, Styles } from "@/constants";
import { useThemeColor } from "@/hooks/useThemeColor";

interface TopBarProps {
	children?: React.ReactNode;
	style?: ViewStyle;
}

export function BottomBar({ children, style }: TopBarProps) {
	const navigation = useNavigation();
	const toggleDrawer = () => navigation.toggleDrawer();
	const theme = useThemeColor();
	const s = Styles[theme];

	return (
		<View style={[s.row, s.justify_center, s.p_2, s.g_4, {}]}>
			<Pressable innerStyle={{ backgroundColor: Colors[theme].tint, height: Dimension.space(2), }} outerStyle={{ width: Dimension.space(2) }} onPress={toggleDrawer}>
			</Pressable>
			<Pressable innerStyle={{ backgroundColor: Colors[theme].tint, height: Dimension.space(2), }} outerStyle={{ width: Dimension.space(2) }} onPress={toggleDrawer}>
			</Pressable>
			<Pressable innerStyle={{ backgroundColor: Colors[theme].tint, height: Dimension.space(2), }} outerStyle={{ width: Dimension.space(2) }} onPress={toggleDrawer}>
			</Pressable>
		</View>
	);
}
