import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    duration: {
        backgroundColor: '#00000099',
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        position: 'absolute',
        right: 5,
        bottom: 30
    },
    thumbnail: {
        width: '100%',
        aspectRatio: 16/9
    },
    time: {
        color: 'white',
        fontWeight: 'bold'
    },
    titleSection: {
        flexDirection: 'row',
        padding: 10
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 5
    },
    subtitle: {
        color: 'gray',
        fontSize: 12,
        fontWeight: "400"
    },
    middleSection: {
        marginHorizontal: 15,
        flex: 1
    },
    dotIcon: {
        marginTop: 5
    },
    description: {
        color: 'gray',
    },
        showMore: {
        color: '#2ca3a0',
        marginTop: 4
    },
    descriptionContainer: {
        margin: 10, 
        marginTop: 5, 
        marginBottom: 30
    }
})

export default styles