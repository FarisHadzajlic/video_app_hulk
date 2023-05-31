import { ResizeMode, Video } from "expo-av"
import { SafeAreaView } from "react-native-safe-area-context"

type VideoPlayerProps = {
    videoURI: string,
    thumbnailURI: string
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { videoURI, thumbnailURI } = props

    return (
        <SafeAreaView>
            <Video 
                source={{uri: videoURI}}
                posterSource={{uri: thumbnailURI}}
                posterStyle={{resizeMode: 'cover'}}
                usePoster={true}
                useNativeControls={true}
                shouldPlay={true}
                isLooping={false}
                resizeMode={ResizeMode.CONTAIN}
                style={{width: '100%', aspectRatio: 16/9}}
            />
        </SafeAreaView>
    )
}

export default VideoPlayer