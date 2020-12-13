/// Simo Partanen 1900414

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    formContainer: {
        flexDirection: 'column',
        height: 200,
        width: 350,
        marginTop: 100,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        
    },
    input: {
        flexDirection: 'column',
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'black',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5,
        borderColor: 'gray',
        borderColor: 'gray',
        borderRadius: 3,
        borderWidth: 1,
        color: 'white',
    },
    extrainput: {
        flexDirection: 'column',
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'black',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5,
        borderColor: 'gray',
        borderColor: 'gray',
        borderRadius: 3,
        borderWidth: 1,
        color: 'white',
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: 'darkgreen',
        width: 80,
        alignItems: "center",
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    headerText: {
        color: 'darkgreen',
        fontSize: 24,
        alignItems: "center",
        justifyContent: 'center',
        paddingTop: 50,

    },
})