import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import TabNavigator from './src/navigation/Tabnavigation';

enableScreens(); // Optimizes navigation for performance

const Stack = createNativeStackNavigator();

// const HomeScreen = ({ navigation }: { navigation: any }) => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Home Screen</Text>
//     <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
//   </View>
// );

// const DetailsScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Details Screen</Text>
//   </View>
// );


const App: React.FC = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

