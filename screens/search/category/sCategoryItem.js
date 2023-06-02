import {StyleSheet} from 'react-native';
import colors from "../../../util/Colors";

export default StyleSheet.create({
    container: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: 20,
    },
    img: {
        width: "100%",
        height: "75%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    text: {
        backgroundColor: colors.light,
        height: "25%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});
