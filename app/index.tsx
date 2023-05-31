import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import store from './redux/store'
import VideoScreen from './screens/VideoScreen/VideoScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer independent={true}>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}    
                    >
                        <Stack.Screen 
                            name="Home"
                            component={HomeScreen}
                        />
                        <Stack.Screen 
                            name="VideoScreen"
                            component={VideoScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>   
            </SafeAreaProvider>
        </Provider>

    )
}

export default Navigation