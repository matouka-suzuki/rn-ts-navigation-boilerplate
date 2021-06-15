import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

import { RouteProp } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { NavigationRootParamList } from '../navigation/navigation'

export interface Props {
  // Example property to explain how you can pass props to next screen.
  message: string
}

type ScreenNavigationProp = StackNavigationProp<NavigationRootParamList, 'Home'>
type ScreenRouteProp = RouteProp<NavigationRootParamList, 'Home'>
type P = { navigation: ScreenNavigationProp, route: ScreenRouteProp }

export const HomeContainer = (props: P) => {

  const { navigation } = props
  const { message } = props.route.params

  const _handleNavigateToProfileScreen = () => {
    navigation.navigate("Profile", {})
  }

  return (
    <View style={styles.container}>
      <Text>This is Home Screen🏠</Text>
      <Text style={styles.message}>{message}</Text>
      <TouchableHighlight onPress={_handleNavigateToProfileScreen}>
        <Text>Press Me! Navgate to Profile Screen!</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 16,
    fontWeight: "600"
  }
})