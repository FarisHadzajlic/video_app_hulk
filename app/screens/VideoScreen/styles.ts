import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    videoPlayer: {
        width: '100%',
        aspectRatio: 16/9
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
    description: {
        color: 'gray',
        fontSize: 10,
        fontWeight: '300',
        marginTop: 15
    },
    videoInfo: {
        marginHorizontal: 15,
        marginTop: 5
    }
})

export default styles