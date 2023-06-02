import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "15%",
        paddingBottom: "5%",
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    item: {
        paddingBottom: 15,
        paddingRight: "5%",
        paddingLeft: "5%",
    },
    coverImageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
}); 
