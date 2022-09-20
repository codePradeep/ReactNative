/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ImprativeHandleHook from './app/viewModel/useImprativeHandleHook';
import UseTransitionHook from './app/viewModel/UseTransitionHook';



const App = () => {
  

  return (
    <SafeAreaView style={{flex:1}}>
      <UseTransitionHook />
    </SafeAreaView>
  );
};


export default App;
