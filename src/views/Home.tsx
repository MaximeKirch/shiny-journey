import { View, Text, Button } from 'react-native'
import React, { PureComponent } from 'react'

import SuggestedMovies from '../components/explore/SuggestedMovies';

export default function HomeScreen({navigation}) {

  return (
    <View 
      className="flex-1 bg-black pt-4"
    >
      <SuggestedMovies />
    </View>
  )
}

