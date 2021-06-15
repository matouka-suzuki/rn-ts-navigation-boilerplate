import React from 'react'
import {View,Text} from 'react-native'

import {RouteProp} from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { NavigationRootParamList } from '../navigation/navigation'

export interface Props { }

type ScreenNavigationProp = StackNavigationProp<NavigationRootParamList, 'Profile'>
type ScreenRouteProp = RouteProp<NavigationRootParamList, 'Profile'>
type P = { navigation: ScreenNavigationProp, route: ScreenRouteProp }

export const ProfileContainer = (props: P) => {

  return (
    <View>
      <Text>This is Profile Screen</Text>
    </View>
  )
}