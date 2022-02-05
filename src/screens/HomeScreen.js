import { Image, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions/NavOptions';

const HomeScreen = () => {
  return (
    <View style={tw`p-5`}>
      <Image
        source={{
          uri: 'https://links.papareact.com/gzs',
        }}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
        }}
      />
      <NavOptions />
    </View>
  );
};

export default HomeScreen;
