import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        flexDirection: "column",
        backgroundColor: "#fafafa",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        width: "75%",
        heigh: "75%",
        padding: 10,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
    },

    input: {
        borderBottomWidth: 1,
        borderColor: 'gray'
    },

    section: {
        flexDirection: "row",
        alignContent: "space-between",
        justifyContent: "space-between",
        paddingBottom: 10,
        paddingTop: 10,
    },
});