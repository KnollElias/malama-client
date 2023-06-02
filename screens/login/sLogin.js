import {StyleSheet, Dimensions} from 'react-native';
import colors from "../../util/Colors";

export default StyleSheet.create({
    input: {
        width: "70%",
        height: 50,
        borderColor: "transparent",
        borderBottomColor: colors.dark,
        borderWidth: 4,
        marginBottom: 10
    },
    button: {
        marginTop: 50,
        backgroundColor: colors.button,
        borderColor: colors.light,
        borderWidth: 1.5,
        borderRadius: 15,
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 60,
        paddingLeft: 60,
    },
    buttonText: {
        color: colors.light,
    },
    linkb: {
        color: colors.light,
        marginTop: 30
    },
    linkd: {
        color: colors.dark,
        marginTop: 30
    },
    alignLeft: {
        alignSelf: "flex-start", 
        marginLeft: "15%",
    },
});
