import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    switchSelector: {
        width: 120, 
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    headerContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        marginTop: 20
    },
    searchBar: {
        alignSelf: 'flex-start',
        width: 270,
        marginLeft: 5,
        marginRight: 10,
        marginBottom: 10
    },
    loader: {
        marginTop: 300
    },
    flatList: {
        marginBottom: 200
    },
    video: {
        width: '100%',
        height: '100%',
    }
})

export default styles