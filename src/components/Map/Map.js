import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../../slices/navSlice';

const Map = () => {
  const { location, description } = useSelector(selectOrigin);

  return (
    <MapView
      style={tw`flex-1`}
      mapType={'mutedStandard'}
      initialRegion={{
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {location && (
        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
          title="Origin"
          description={description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
