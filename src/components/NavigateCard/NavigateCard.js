import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../../slices/navSlice';
import { toInputStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from '../NavFavorites/NavFavorites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onDestinationPress = (data, details = null) => {
    dispatch(
      setDestination({
        location: details.geometry.location,
        description: data.description,
      })
    );

    navigation.navigate('RideOptionsCard');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Matheus</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            placeholder="Where to?"
            returnKeyType={'search'}
            minLength={2}
            enablePoweredByContainer={false}
            onPress={onDestinationPress}
            fetchDetails={true}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            styles={toInputStyles}
          />
        </View>
        <NavFavorites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon name="car" type="font-awesome" color={'white'} size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon name="fast-food-outline" type="ionicon" color={'black'} size={16} />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
