import React from "react"
import {Text as RNText, TextProps} from "react-native"

import {useTheme} from "../hooks"

interface Props extends TextProps {
  children: string
}

export default function Text({children, style, ...props}: Props) {
  const {colors} = useTheme()
  return (
    <RNText style={[{color: colors.label}, style]} {...props}>
      {children}
    </RNText>
  )
}
