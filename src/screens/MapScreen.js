import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Map from '../components/Map/Map';

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2 bg-red-800`}>
        <Map />
      </View>
      <View style={tw`h-1/2 bg-black`}></View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
