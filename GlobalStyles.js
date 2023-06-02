import {StyleSheet, Dimensions} from 'react-native';
import FontNames from "./util/FontNames";
import fonts from "./util/FontSizes";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    sideContainer: {
        alignSelf: "flex-end",
        paddingTop: "20%",
        width: Dimensions.get("screen").width*0.8,
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    background: {
        opacity: 0.4,
        backgroundColor: "#9a6f00"
    },
    heading: {
        fontSize: fonts.heading,
        fontFamily: FontNames.Montserrat_600SemiBold()
    },
    subHeading: {
        fontSize: fonts.subHeading,
        fontFamily: FontNames.Montserrat_500Medium()
    },
    bigText: {
        fontSize: fonts.big,
        fontFamily: FontNames.Montserrat_500Medium()
    },
    text: {
        fontSize: fonts.regular,
        fontFamily: FontNames.Montserrat_500Medium()
    },
    smallText: {
        fontSize: fonts.small,
        fontFamily: FontNames.Montserrat_500Medium()
    },
    bold: {
        fontWeight: "bold"
    },
    interfaceBackground: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 10,
        height: Dimensions.get("screen").height,
    },
    closeIcon: {
        width: 30, 
        height: 30,  
        marginRight: "15%",
    },
    logo: {
        marginBottom: 30,
        width: 300*0.7,
        height: 200*0.7
    },
});
