import {StyleSheet} from 'react-native';
import Colors from "../../../util/Colors";

export default StyleSheet.create({
    header: {
        paddingTop: "15%",
        paddingRight: "10%",
        paddingLeft: "5%",
        paddingBottom: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchBar: {
        backgroundColor: Colors.light,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10,
        width: "80%",
        height: 50,
        opacity: 0.75
    },
    categoryContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "5%",
        paddingTop: 0
    },
    categoryItem: {
        width: "50%",
        padding: 10
    }
});
