import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../../slices/navSlice';

const data = [
  {
    id: 8912,
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 265,
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 748,
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(selectTravelTimeInformation);

  console.log(travelTimeInfo);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelected(item)}
        style={tw`flex-row justify-between items-center px-10 ${
          item.id === selected?.id && 'bg-gray-200'
        }`}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
        />
        <View style={tw`-ml-6`}>
          <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
          <Text>{travelTimeInfo?.duration.text}</Text>
        </View>
        <Text style={tw`text-xl`}>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(
            (travelTimeInfo?.duration.value * SURGE_CHARGE_RATE * item.multiplier) / 100
          )}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a ride - {travelTimeInfo?.distance.text}
        </Text>
      </View>
      <FlatList data={data} keyExtractor={(item) => item.id} renderItem={renderItem} />
      <View>
        <TouchableOpacity
          style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
          disabled={!selected}
        >
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
