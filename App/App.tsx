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
  StyleSheet,
} from 'react-native';
import { NavigationContainerRef } from '@react-navigation/core';

import {Navigation} from './navigation/navigation'

const App = () => {

  const navigationRef = React.useRef<NavigationContainerRef>(null)

  return (
    <SafeAreaView style={styles.parent}>
      <Navigation navigationRef={navigationRef}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
