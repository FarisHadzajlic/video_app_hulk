import { useState, useEffect } from 'react'
import { FlatList, ActivityIndicator, View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { videosRequest } from '../../redux/action'
import { Searchbar } from 'react-native-paper'
import { Viewport } from '@skele/components'
import SwitchSelector from 'react-native-switch-selector'
import NetInfo from '@react-native-community/netinfo'
import Modal from 'react-native-modal'
import VideoItem from '../../../components/VideoItem'
import CacheVideo from '../../../components/Common/CacheVideo'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './styles'

const getData = async () => {
    try {
        const allKeys = await AsyncStorage.getAllKeys()
        const allValues = await AsyncStorage.multiGet(allKeys)
        const values = allValues.map(([key, value]) => value).filter(value => value !== null) as string[]
        return values
    } catch(error) {
        console.log("error", error)
    }
}

const HomeScreen = () => {
    const dispatch = useDispatch()
    const { 
        videos, 
        isLoading, 
        isError 
    } = useSelector((state : any) => state.reducer)

    // const [currentPage, setCurrentPage] = useState<number>(1) 

    const [isDeviceConnected, setIsDeviceConnected] = useState<boolean | null>()
    const [search, setSearch] = useState<string>("")  
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [showSearch, setShowSearch] = useState<boolean>(true)
    const [data, setData] = useState<[] | any>([])
    const [filteredData, setFilteredData] = useState(data)

    const switchOptions = [
        { label: "Offline", value: "0" },
        { label: "Online", value: "1" }
    ]

    const cacheVideos = async (videoUrls: any) => {
        for (var x = 0; x < videoUrls.length; x++) {
            const videoUrl = videoUrls[x]
            if (videoUrl) {
                await CacheVideo(videoUrl).catch((error) => {
                    console.log("error", error);
                })
            }
        }
    }    

    const handleSearch = (query: string) => {
        const lowerCaseQuery = query.toLowerCase()
        const filteredItems = data.filter((item: any) =>
            item.title.toLowerCase().includes(lowerCaseQuery))

        const uniqueFilteredItems = filteredItems.reduce((acc, item) => {
            const existingItem = acc.find((i) => i.title === item.title)
            if (!existingItem) {
                acc.push(item)
            }
            return acc
        }, [])

        setSearch(query)
        setFilteredData(uniqueFilteredItems)
    }

    const handleSwitch = (e: any) => {
        if(e === "0"){
            getData().then((values)=>{
                setData(values)
                setFilteredData(values)
                setShowSearch(false)
            }).catch(error => {
                console.log("error", error)
            })
        } else {
            setData(videos.videos)
            setFilteredData(videos.videos)
            setShowSearch(true)
        }
    }

    useEffect(() => {
        dispatch(videosRequest())
        NetInfo.fetch().then(state => {
            setIsDeviceConnected(state.isConnected)
        })
    }, [])
      
    useEffect(() => {
        if (videos && videos.videos) {
            setData(videos.videos)
            setFilteredData(videos.videos)
            const videoUrls = videos.videos.map((video: any) => video?.sources)
            cacheVideos(videoUrls)
        }      
        if (isError) {
            setIsModalVisible(true)
        }
    }, [videos])        

    // Fetch data in chunks
    // Params for API uri missing. Need param for API call to check how many records API should return. (Redux flow needs adjustments for that matter)

    // useEffect(() => {
    //     dispatch(videosRequest({page: currentPage}))
    // }, [currentPage]) 

    // const fetchMoreData = () => {
    //     if(!isListEnd && !isMoreLoading) {
    //         setCurrentPage(currentPage + 1)
    //     }
    // }

    // const renderFooter = () => {
    //     return (
    //         <View>
    //             {isMoreLoading && <ActivityIndicator />}
    //             {isListEnd && <Text>There are no more videos at the moment.</Text>}
    //         </View>
    //     )        
    // }
      
    return (
        <SafeAreaView>
            {
            isError ? 
                <View>
                    <Modal isVisible={isModalVisible} style={{borderRadius: 10}}>
                        <View style={{ backgroundColor: 'white', padding: 20 }}>
                        <Text style={{ fontSize: 16, color: 'red'}}>Opps, Something went wrong.</Text>
                        <Text style={{ fontSize: 16, color: 'red', marginBottom: 20}}>Please Try again later.</Text>
                        <Button title="Close" onPress={() => setIsModalVisible(!isModalVisible)} />
                        </View>
                    </Modal>
                </View> : 

                isLoading ? 
                <ActivityIndicator size="large" style={styles.loader} /> :

                <View>
                    <View style={styles.headerContainer}>
                        {showSearch && (
                            <Searchbar
                                placeholder="Search"
                                value={search}
                                onChangeText={handleSearch}
                                style={styles.searchBar}
                            />
                        )}

                        {!showSearch && (
                            <View style={{ flex: 1 }} />
                        )}

                        <SwitchSelector
                            options={switchOptions}
                            initial={isDeviceConnected ? 1 : 0}
                            onPress={handleSwitch}
                            style={{
                                width: 120,
                                alignSelf: showSearch ? 'flex-end' : 'flex-start', 
                                marginBottom: 20,
                                marginRight: 5,
                                marginTop: 5
                            }}
                        />
                    </View>
                    <Viewport.Tracker>
                        <FlatList
                            scrollEventThrottle={16}
                            data={filteredData}
                            style={styles.flatList}
                            renderItem={({ item }) => <VideoItem video={item} />}
                            // ListFooterComponent={renderFooter}
                            // onEndReachedThreshold={0.2}
                            // onEndReached={fetchMoreData}
                        />
                    </Viewport.Tracker>
                </View> 
            }
        </SafeAreaView>
    )
}

export default HomeScreen