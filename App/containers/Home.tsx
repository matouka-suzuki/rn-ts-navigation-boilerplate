import React from 'react'
import {View,Text} from 'react-native'

import {RouteProp} from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { NavigationRootParamList } from '../navigation/navigation'

export interface Props { }

type ScreenNavigationProp = StackNavigationProp<NavigationRootParamList, 'Home'>
type ScreenRouteProp = RouteProp<NavigationRootParamList, 'Home'>
type P = { navigation: ScreenNavigationProp, route: ScreenRouteProp }

export const HomeContainer = (props: P) => {

  return (
    <View>
      <Text>This is Home Screen🏠</Text>
    </View>
  )
}