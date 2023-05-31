import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Video, ResizeMode } from 'expo-av'
import { Viewport } from '@skele/components'
import styles from './styles'

// import { useNavigation } from '@react-navigation/native'

type VideoItemProps = {
    video: {
        description: string,
        sources: string,
        subtitle: string,
        thumb: string,
        title: string
    }
}

const PRE_TRIGGER_RATIO = -0.4

const VideoItem = (props: VideoItemProps) => {
    const { video } = props
    const videoRef = useRef<any>(null)
    const ViewportAwareVideo = Viewport.Aware(Video)
    const [durationTime, setDurationTime] = useState<string>("")
    const [showFullText, setShowFullText] = useState<boolean>(false)

    // const navigation = useNavigation<any>()

    var truncatedDescription = ""
    var videoDescription = ""

    const millisToMinutesAndSeconds = (millis: number) => {
        var minutes = Math.floor(millis / 60000)
        var seconds = ((millis % 60000) / 1000).toFixed(0)
        if(seconds === "0"){
            seconds = "00"
        }
        setDurationTime(minutes + ":" + seconds)
    }

    if(video.description){
        videoDescription = video.description
        truncatedDescription = videoDescription.length > 81 ? videoDescription.slice(0, 81) + ' ...' : videoDescription
    }

    return (
        <SafeAreaView>

            <ViewportAwareVideo
                onViewportEnter={() => videoRef.current?.playAsync()}
                onViewportLeave={() => videoRef.current?.pauseAsync()}
                preTriggerRatio={PRE_TRIGGER_RATIO}
                retainOnceInViewport={false}  
            />

            <TouchableOpacity onPress={() => videoRef.current.playAsync()}>
                <Video
                    source={{uri: video.sources}}
                    ref={videoRef}
                    posterSource={{uri: "https://www.vidpaw.com/img/blog/youtube-not-showing-videos-thumbnails.jpg"}}
                    posterStyle={{resizeMode: 'cover'}}
                    usePoster={true}
                    isLooping={true}
                    useNativeControls={true}
                    resizeMode={ResizeMode.CONTAIN}
                    style={{width: '100%', aspectRatio: 16/9, marginBottom: 30}}
                    onPlaybackStatusUpdate={(status: any) => millisToMinutesAndSeconds(status.durationMillis)}
                />                    
            </TouchableOpacity>

            {/* If we want to navigate and play video in another screen we could use code bellow */}            
            {/* <TouchableOpacity onPress={() => navigation.navigate("VideoScreen", video)}>
                <Image style={styles.thumbnail} source={{uri: video.thumb}} />
                <View style={styles.duration}>
                    <Text style={styles.time}>{durationTime}</Text>
                </View>
            </TouchableOpacity> */}

            <View style={styles.titleSection}>
                <Image 
                    style={styles.avatar} 
                    source={{uri: "https://www.shutterstock.com/image-vector/avatar-man-icon-profile-placeholder-260nw-1229859850.jpg"}}
                />
                <View style={styles.middleSection}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subtitle}>{video.subtitle}</Text>
                </View>

                <View style={styles.duration}>
                    <Text style={styles.time}>{durationTime}</Text>
                </View>
            </View>

            <View style={styles.descriptionContainer}>
                <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
                    <Text style={styles.description}>{showFullText ? videoDescription : truncatedDescription}</Text>
                    {videoDescription.length > 81 && (
                        <Text style={styles.showMore}>{showFullText ? 'Show Less' : 'Show More'}</Text>
                    )}
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default VideoItem