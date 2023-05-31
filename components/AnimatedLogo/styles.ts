import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    animatedLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'lightblue'
    },
    banner: {
        position: 'relative',
        display: 'flex',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 1000
      },
      bannerText: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold'
      },
      centralBannerText: {
        fontSize: 60
      }
})

export default styles