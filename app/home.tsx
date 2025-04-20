
import { useRouter } from 'expo-router';
import { Colors, Dimension, Styles } from "@/constants";
import { useColorScheme } from '../hooks/useColorScheme';
import { ThemedView } from '@/components/ui/ThemedView';
import { ThemedText } from '@/components/ui/ThemedText';
import { TopBar } from '@/components/nav/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Card, Search } from '@/components/ui';
import Filter from '@/components/ui/Filter';
import { View } from 'react-native';
import { BottomBar } from '@/components/nav';


export default function Page({ }) {

    const router = useRouter();
    const theme = useThemeColor();
    const s = Styles[theme];

    function SectionPopular({ }) {
        return (
            <View>
                <View style={[s.row, s.justify_between]}>
                    <View style={[{ height: Dimension.space(3), backgroundColor: Colors[theme].tint, width: Dimension.space(7) }, s.ml_2, s.mr_2]} />
                    <View style={[{ height: Dimension.space(3), backgroundColor: Colors[theme].tint, width: Dimension.space(7) }, s.ml_2, s.mr_2]} />
                </View>
                <View style={[s.mt_2]} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <View style={[s.row, s.g_4, s.ml_2, s.mr_2]}>
                        {[1, 2, 3, 4, 5, 6].map((item, index) => <Card card={"2"} key={index} />)}
                    </View>
                </ScrollView>
            </View>
        )
    }

    function SectionAvailale({ }) {
        return (
            <View>
                <View style={[s.row, s.justify_between]}>
                    <View style={[{ height: Dimension.space(3), backgroundColor: Colors[theme].tint, width: Dimension.space(7) }, s.ml_2, s.mr_2]} />
                    <View style={[{ height: Dimension.space(3), backgroundColor: Colors[theme].tint, width: Dimension.space(7) }, s.ml_2, s.mr_2]} />
                </View>
                <View style={[s.mt_2]} />
                <View style={[s.g_2, s.ml_2, s.mr_2]}>
                    {[1, 2, 3,].map((item, index) => <Card card={"3"} key={index} />)}
                </View>
            </View>
        )
    }

    return (
        <ThemedView style={[s.container]}>
            <TopBar style={[s.p_2]} />
            <ScrollView >
                <Search />
                <View style={[s.mt_4]} />
                <Filter />
                <View style={[s.mt_4]} />
                <SectionPopular />
                <View style={[s.mt_4]} />
                <SectionAvailale />
            </ScrollView>
            <BottomBar/>
        </ThemedView>
    );
}
