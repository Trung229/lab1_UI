/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSquare}>
      <View style={styles.containerInnerSquare}>
        <Image style={styles.imgView} source={{uri:'https://storage.googleapis.com/eldarion-site/media/images/2016/11/14/react.png'}}></Image>
        <View style={styles.containerText}>
          <Text style={{color:'white'}}>Tony Stark</Text>
          <Text style={{color:'white'}}>CEO</Text>
        </View>
      </View>
      <View style={styles.containerFooter}>
      <Text style={{color:'white'}}>Phone: 322-1234-9999</Text>
      <Text style={{color:'white'}}>tony@ironman.marvell</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#65afd2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  containerSquare:{
    width:'60%',
    height:200,
    backgroundColor:'#1bac9b',
    paddingTop:20,
  },
  imgView:{
    width:100,
    height:100,
    borderRadius:100,
  },
  containerInnerSquare:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal:20,
  },
  containerFooter:{
    position: 'absolute',
    bottom: 20,
    right:0,
    left:0,
    paddingHorizontal:20,
  },
  containerText:{
    paddingBottom:20,
    paddingRight:10,
  }
});

export default App;
