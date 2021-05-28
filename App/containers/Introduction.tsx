import React from 'react'
import {View,Text} from 'react-native'

import {RouteProp} from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { NavigationRootParamList } from '../navigation/navigation'

export interface Props { }

type ScreenNavigationProp = StackNavigationProp<NavigationRootParamList, 'Introduction'>
type ScreenRouteProp = RouteProp<NavigationRootParamList, 'Introduction'>
type P = { navigation: ScreenNavigationProp, route: ScreenRouteProp }

export const IntroductionContainer = (props: P) => {

  return (
    <View>
      <Text>This is Introduction Screen</Text>
    </View>
  )
}