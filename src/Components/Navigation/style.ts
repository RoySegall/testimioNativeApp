import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        borderWidth: 1,
        backgroundColor: "#e8ecf8",
        borderColor: "#a6a3a3"
    },
    scroll: {
        marginLeft: 25,
        paddingRight: 30,
    },
    iconTextWrapper: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 15,
        marginRight: 20,
    },
    text: {
        paddingTop: 10,
        fontSize: 20,
        color: "#313131",
        fontFamily: "HelveticaNeue-Light",
        textDecorationLine: "underline"
    },
});
