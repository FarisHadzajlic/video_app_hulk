import { View, Text } from 'react-native'
import styles from './styles'
import VideoPlayer from '../../../components/VideoPlayer'

const VideoScreen = (props: any) => {
    return (
        <View>
            <VideoPlayer videoURI={props.route.params.sources} thumbnailURI={props.route.params.thumb}/>
            <View style={styles.videoInfo}>
                <Text style={styles.title}>{props.route.params.title}</Text>
                <Text style={styles.subtitle}>{props.route.params.subtitle}</Text>
                <Text style={styles.description}>{props.route.params.description}</Text>
            </View>
        </View>
    )
}

export default VideoScreen