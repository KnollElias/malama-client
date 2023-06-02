import {StyleSheet} from 'react-native';
import Colors from "../../../util/Colors";

export default StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: Colors.dimLight,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    img: {
        width: "33%",
        aspectRatio: 1,
        marginRight: 15,
        borderRadius: 20
    },
    dataContainer: {
        // Without this, text goes off-screen. Why?
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    additionalDetails: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textBP: {
        paddingBottom: 10
    }
});
