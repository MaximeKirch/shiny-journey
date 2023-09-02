import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from "@expo/vector-icons/AntDesign"

import HomeScreen from './src/views/Home';
import Account from './src/views/account/Account';
import Header from './src/components/header/Header';
import { DataProvider } from './src/context/DataContext'; 

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <DataProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerStyle: { backgroundColor: 'black' },
            headerRight: () => (
        
                <AntDesign 
                  color="#fff" 
                  size={24} 
                  name="user"
                  onPress={() => Alert.alert('Menu')}
                />
            )
          }}
        />
        <Stack.Screen name='Account' component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
