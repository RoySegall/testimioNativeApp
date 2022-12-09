import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "90%"
    },
    card: {
        flexDirection: "row",
        alignContent: "space-between",
        justifyContent: "space-between",
        backgroundColor: "#fafafa",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        width: "100%",
        padding: 10,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 5,
        marginBottom: 15
    },
    cardColumn: {
        flexDirection: "column",
    },
    text: {
        fontFamily: "HelveticaNeue-Light",
        fontSize: 18
    },
    title: {
        fontFamily: "HelveticaNeue-Light",
        fontWeight: "bold",
        fontSize: 18,
        paddingBottom: 10,
    },
});
