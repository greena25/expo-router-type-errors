import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native"

export default () => {
    return <View style={style.container}>
        <ThemedText>Nested tab two</ThemedText>
        <Link
            asChild
            href={{
                pathname: '../',
            }}
        >
            <ThemedText style={style.back}>Back</ThemedText>
        </Link>
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        color: 'blue',
    }
});