import { FlatList, StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../../slices/navSlice';

const data = [
  {
    id: 1,
    title: 'Get ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: 2,
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        onPress={() => navigation.navigate(item.screen)}
        disabled={!origin}
      >
        <View style={tw`${!origin && 'opacity-40'}`}>
          <Image
            source={{
              uri: item.image,
            }}
            style={{
              width: 120,
              height: 120,
              resizeMode: 'contain',
            }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
            type="antdesign"
            name="arrowright"
            color="white"
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
