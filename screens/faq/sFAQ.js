import {Dimensions, StyleSheet} from 'react-native';

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
        marginTop: 10,
        marginBottom: -10,
        textAlign: "center",
        fontSize: 20,
        color: "#000",
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
    questiomIcon: {
        height: 25,
        marginRight: 10
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10
    },
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
    question: {
        fontWeight: "bold",
        fontSize: 14,
        width: "100%",
        display: "flex",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    answer: {
        marginTop: 20,
        fontSize: 14,
        width: "100%",
        display: "flex",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    fragment: {
        alignSelf: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: "90%",
        flexDirection: "column",
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    questionRow: {
        flexDirection: "row",
        alignItems: "center",
        width: "92.5%",
    },
    arrowImage: {
        width: 20, 
        height: 20,
    },
});
