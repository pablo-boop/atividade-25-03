import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#121212'
    },
    user: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1f1b24',
        width: 300,
        height: 500,
        padding: 15,
        borderRadius: 10
    },
    txt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500'
    },
    userActions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20
    },
    editButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7c5295',
        padding: 10,
        borderRadius: 10,
        width: 120,
        margin: 15
    },
    buttonTxt: {
        color: '#fff',
        fontSize: 20
    }
})

export default styles;