import React from 'react'

import { createStackNavigator, StackCardStyleInterpolator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationContainerRef, NavigationState } from '@react-navigation/core'

import { IntroductionContainer } from '../containers/Introduction'
import { HomeContainer} from '../containers/Home'
import { ProfileContainer } from '../containers/Profile'

export type NavigationRootParamList = {
  Introduction: any,
  Home: any,
  Profile: any,
}

interface Props {
  /** To call navigation methods from outer elements */
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
      <Navigator screenOptions={{ headerTintColor: 'white', headerTruncatedBackTitle: 'Baaack' }}>
        <Screen name="Introduction" component={IntroductionContainer} />
        <Screen name="Home" component={HomeContainer} />
        <Screen name="Profile" component={ProfileContainer}/>
      </Navigator>
    </NavigationContainer>
  )

}