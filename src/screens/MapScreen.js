import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import tw from 'twrnc';
import Map from '../components/Map/Map';
import NavigateCard from '../components/NavigateCard/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard/RideOptionsCard';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2 bg-red-800`}>
        <Map />
      </View>
      <View style={tw`h-1/2 bg-black`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
