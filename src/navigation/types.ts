import {CompositeNavigationProp, RouteProp} from '@react-navigation/native'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {StackNavigationProp} from '@react-navigation/stack'

export type TabsParamsList = {
  HomeStack: undefined
  SettingsStack: undefined
}

export type HomeStackParamsList = {
  Home: undefined
}

export type SettingsStackParamsList = {
  Settings: undefined
}

type TabsNavigationProp = BottomTabNavigationProp<
  TabsParamsList,
  keyof TabsParamsList
>

type HomeStackNavigationProp = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamsList, 'Home'>,
  TabsNavigationProp
>

type SettingsStackNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SettingsStackParamsList, 'Settings'>,
  TabsNavigationProp
>

export interface HomeStackProps {
  route: RouteProp<HomeStackParamsList, 'Home'>
  navigation: HomeStackNavigationProp
}

export interface SettingsStackProps {
  route: RouteProp<SettingsStackParamsList, 'Settings'>
  navigation: SettingsStackNavigationProp
}
