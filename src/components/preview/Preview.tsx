import {
  View,
  Text,
  Image,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Movie } from "../../types/Movies";
import {API_KEY} from '@env'

interface PreviewProps {
  movie: Movie;
}

export default function Preview<PreviewProps>({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}?api_key=${API_KEY}`;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Alert.alert("Hello");
      }}
    >
        <View>
      <View className="min-h-[250] m-1 min-w-[300] bg-gray-800 focus:opacity-75">
        <Image source={{ uri: imageUrl }} style={{position:'absolute', top:0, left:0,bottom:0, right:0}} />
        <Text className="text-white absolute bottom-20 left-5 text-lg font-bold">{movie.title}</Text>
      </View>
        </View>
    </TouchableWithoutFeedback>
  );
}


// https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg?api_key=bd5fc92908ededc1955d47ba56ad8695