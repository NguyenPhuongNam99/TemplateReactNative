
import React from 'react';
import { scale, Ultils, } from './src/config/Ultils'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




const App = () => {
  
  return (
    <SafeAreaView>
      <StatusBar  />
      <View style={{backgroundColor:'green'}}>
        <Text>Hello world</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
