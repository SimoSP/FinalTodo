/// Simo Partanen 1900414

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    modal: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
          flexDirection: 'column',
        height: 200,
        width: 350,
        marginTop: 40,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 10,
        justifyContent:'space-between'
       },
    input: {
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
    antDesign: {
     flexDirection: 'row',
     justifyContent: 'flex-end',
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: 'darkgreen',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    closeButton: {
        height: 47,
        borderRadius: 5,
        backgroundColor: 'red',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    nameText: {
        fontSize: 20,
        color: 'white'
    },
    dateText: {
        fontSize: 20,
        color: 'darkgreen'
    },
    contentText: {
        fontSize: 20,
        color: 'gray'
    },
})