import { View, Text } from 'react-native'
import React from 'react'
import { useMyData } from '../../context/DataContext'

import Loading from '../utils/Loading'
import HorizontalList from '../lists/HorizontalList'

export default function SuggestedMovies() {
  const data = useMyData()

  return (
    <View className="pt-2 h-64 flex column ">
      <Text className="p-2 pl-5 text-xl font-bold italic text-slate-400 "> Suggested</Text>
        {data ? data.map((movie) => {
          return(
            <HorizontalList movie={movie} />
          )
        }) : <Loading />}
    </View>
  )
}