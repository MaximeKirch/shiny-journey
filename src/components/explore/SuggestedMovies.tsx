import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useMyData } from '../../context/DataContext'

import Loading from '../utils/Loading'
import HorizontalList from '../lists/HorizontalList'
import Preview from '../preview/Preview'

export default function SuggestedMovies() {
  const data = useMyData();

  return (
    <View className="pt-2 h-64 flex row ">
      <Text className="p-2 text-xl font-semi-bold text-slate-300 "> Suggested</Text>
        {data ? 
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item}) => 
              <Preview movie={item} />
            }
            keyExtractor={(item, index) => item.id}
          /> 
          : 
          <Loading />}
    </View>
  )
}