import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

import { RouteProp } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { NavigationRootParamList } from '../navigation/navigation'

export interface Props { }

type ScreenNavigationProp = StackNavigationProp<NavigationRootParamList, 'Introduction'>
type ScreenRouteProp = RouteProp<NavigationRootParamList, 'Introduction'>
type P = { navigation: ScreenNavigationProp, route: ScreenRouteProp }

export const IntroductionContainer = (props: P) => {

  const { navigation } = props

  const _handleNavigateToHomeScreen = () => {
    navigation.navigate({ name: 'Home', params: { message: "Hello, can you see my messsage?\nThis is passed by prev screen." } })
  }

  return (
    <View style={styles.container}>
      <Text>This is Introduction Screen</Text>
      <TouchableHighlight onPress={_handleNavigateToHomeScreen}>
        <Text>Press Me! Navigate to Home Screen🏠</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})