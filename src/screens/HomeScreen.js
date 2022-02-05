import { Image, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const HomeScreen = () => {
    return (
        <View style={tw`p-5`}>
            <Image
                source={{
                    uri: 'https://links.papareact.com/gzs'
                }}
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain'
                }}
            />
        </View>
    );
};

export default HomeScreen;
