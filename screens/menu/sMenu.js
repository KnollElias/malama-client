import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: "20%",
        paddingRight: "10%",
        paddingLeft: "10%",
    },
    heading: {
        marginBottom: 50
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
        width: "100%"
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10
    }
});
