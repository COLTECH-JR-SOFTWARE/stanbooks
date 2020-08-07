import React from 'react';
import { View, ImageBackground, StyleSheet} from 'react-native';

import image from '~/assets/books/sol.jpg';

function DefaultBackground(props){
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        {props.children}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default DefaultBackground;
