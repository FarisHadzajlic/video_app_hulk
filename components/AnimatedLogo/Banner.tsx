import { View, Text } from "react-native"
import styles from "./styles"

const Banner = ({ children }: any) => {

  const bannerTextStyle = [styles.bannerText]

  return (
    <View style={styles.banner}>
      {children}
      <Text style={bannerTextStyle}>
        Welcome
      </Text>
      <Text style={bannerTextStyle}>
        To
      </Text>
      <Text style={bannerTextStyle}>
        Video Player Clone
      </Text>
    </View>
  )
}

export default Banner