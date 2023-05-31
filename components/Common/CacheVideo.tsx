import AsyncStorage from '@react-native-async-storage/async-storage'
import * as FileSystem from 'expo-file-system'

const storeData = async (url: string, value: string) => {
    try {
        await AsyncStorage.setItem(url, value)
    } catch (error) {
        console.log("Error saving to storage:", error)
    }
}
  
const CacheVideo = async (url : any)=> {
    const filename = url?.substring(url.lastIndexOf("/") + 1) 
    const { exists } = await FileSystem.getInfoAsync(`${FileSystem.cacheDirectory}${filename}`)

    const cacheVideo = async () => {
        const downloadDest = `${FileSystem.cacheDirectory}${filename}`
        try {
            const { uri } = await FileSystem.downloadAsync(url, downloadDest)
            await storeData(url, uri)
        } catch (error) {
            console.log("Error downloading video:", error)
        }        
    }

    if(exists){
        return
    } else {
        cacheVideo()
    }
}

export default CacheVideo