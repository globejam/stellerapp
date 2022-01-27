import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <Image
            source={require('../assets/main-icon.png')}
            style={{
              width: '40%',
              height: '40%',
              alignSelf: 'center',
            }}></Image>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Stellar App</Text>
          </View>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('SpaceCraft')}>
            <Text style={styles.routeText}>Space Crafts</Text>
            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('StarMap')}>
            <Text style={styles.routeText}>Star Map</Text>
            <Image
              source={require('../assets/star_map.png')}
              style={[styles.iconImage, { right: -1 }]}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('DailyPic')}>
            <Text style={styles.routeText}>Daily Pictures</Text>
            <Image
              source={require('../assets/daily_pictures.png')}
              style={[styles.iconImage, { right: -30 }]}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'brown',
    marginTop: -50,
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    position: 'absolute',
    height: 55,
    width: 80,
    resizeMode: 'contain',
    right: -1,
    top: -1,
    zIndex: 3,
  },
});
