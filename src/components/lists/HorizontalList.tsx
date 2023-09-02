import { View, Text } from 'react-native'
import React from 'react'
import { Movie } from '../../types/Movies'
import Preview from '../preview/Preview';

interface HorizontalListProps {
    movie: Movie;
}

export default function HorizontalList<HorizontalListProps>({movie}) {
   
  return (
    <View>
      <Preview movie={movie}/>
    </View>
  )
}