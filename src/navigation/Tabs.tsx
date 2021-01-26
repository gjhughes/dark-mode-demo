import React from "react"
import {Feather as FeatherIcon} from "@expo/vector-icons"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator} from "@react-navigation/stack"

import {Settings, Home} from "../screens"
import {TabsParamsList, HomeStackParamsList, SettingsStackParamsList} from "./types"

const Tabs = createBottomTabNavigator<TabsParamsList>()
const HomeStack = createStackNavigator<HomeStackParamsList>()
const SettingsStack = createStackNavigator<SettingsStackParamsList>()

export default function TabNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeStack"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({size, color}) => {
            return <FeatherIcon name="home" size={size} color={color} />
          }}}>
        {() => (
          <HomeStack.Navigator>
            <HomeStack.Screen component={Home} name="Home" />
          </HomeStack.Navigator>
        )}
      </Tabs.Screen>
      <Tabs.Screen
        name="SettingsStack"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({size, color}) => {
            return <FeatherIcon name="settings" size={size} color={color} />
          }}}>
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen component={Settings} name="Settings" />
          </SettingsStack.Navigator>
        )}
      </Tabs.Screen>
    </Tabs.Navigator>
  )
}
