import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        justifyContent: "center",
    },
    input: {
        backgroundColor: "white",
        borderRadius: 12,
        height: 50,
        paddingLeft: 25,
    },
    unit: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingRight: 25,
        fontSize: 30,
    },
});

export { s };
