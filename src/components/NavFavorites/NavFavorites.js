import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';

const data = [
  {
    id: 5,
    icon: 'home',
    location: 'Home',
    destination: 'Rua Manoel Cardoso, Belo Horizonte, MG',
  },
  {
    id: 6,
    icon: 'briefcase',
    location: 'Work',
    destination: 'BH Shopping, Belo Horizonte, MG',
  },
];

const NavFavorites = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={tw`flex-row items-center p-5`}>
      <Icon
        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
        name={item.icon}
        type="ionicon"
        color={'white'}
        size={18}
      />
      <View>
        <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
        <Text style={tw`text-gray-500`}>{item.destination}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`, { height: 0.5 }]} />}
    />
  );
};

export default NavFavorites;
