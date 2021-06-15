import React from 'react'

import { createStackNavigator, StackCardStyleInterpolator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationContainerRef, NavigationState } from '@react-navigation/core'

import { IntroductionContainer, Props as IntroductionContainerProps } from '../containers/Introduction'
import { HomeContainer, Props as HomeContainerProps } from '../containers/Home'
import { ProfileContainer, Props as ProfileContainerProps } from '../containers/Profile'

// Properties for Profile screens flow
type ProfileNavigationParamList = {
  Profile: ProfileContainerProps
}

/** 
 * Type Checking the navigator: Properties for Whole screens flow
 * https://reactnavigation.org/docs/typescript/
 */
export type NavigationRootParamList = {
  Introduction: IntroductionContainerProps,
  Home: HomeContainerProps,
} & ProfileNavigationParamList

interface Props {
  /** To call Navigator's navigation methods from outer elements */
  navigationRef: React.Ref<NavigationContainerRef>
}

const { Navigator, Screen } = createStackNavigator<NavigationRootParamList>()

export const Navigation = (props: Props) => {

  const { navigationRef } = props

  const _onNavigationStateChange = (state?: NavigationState) => {
    if (!state) return
    const currentScreen = state.routes[state.index]
    // ToDo: Track Screen via Google Analytics, Firebase Analytics, etc.
  }

  return (
    <NavigationContainer ref={navigationRef} onStateChange={_onNavigationStateChange}>
      <Navigator screenOptions={{ headerTintColor: 'black', headerTruncatedBackTitle: 'Baaack' }}>
        <Screen name="Introduction" component={IntroductionContainer} />
        <Screen name="Home" component={HomeContainer} />
        <Screen name="Profile" component={ProfileContainer} />
      </Navigator>
    </NavigationContainer>
  )

}