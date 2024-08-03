import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default () => {
    return <View style={style.container}>
        <ThemedText>Nested tab one</ThemedText>
        <Link
            asChild
            href={{
                pathname: '/two', // No type issues here, but the route doesnt work
            }}
        >
            <ThemedText style={style.back}>Go to two (broken route, no type issue)</ThemedText>
        </Link>
        <Link
            asChild
            href={{
                pathname: '/nested/two'
            }}
        >
            <ThemedText style={style.back}>Go to two</ThemedText>
        </Link>
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