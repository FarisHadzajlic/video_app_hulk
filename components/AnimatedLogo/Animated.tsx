import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'
import styles from './styles'
import Banner from './Banner'

//Unused, idea was to use it instead of normal loader, but loader suits better.

const AnimatedLogo = ({onAnimEnd}: any) => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true
      }
    ).start(onAnimEnd)
  }, [])

  return (
    <Animated.View style={[styles.animatedLogo, { opacity: fadeAnim }]}>
      <Banner />
    </Animated.View>
  )
}

export default AnimatedLogo