import React from 'react'
import { View, Text } from 'react-native'

export default function Header() {
  return (
    <View className="flex-1 p-2 border-b-2 border-red-600">
      <Text className="text-red-700 font-bold text-2xl text-center ">Fakeflix</Text>
    </View>
  )
}