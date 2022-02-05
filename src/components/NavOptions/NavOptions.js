import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import tw from 'twrnc';


const data = [
    {
        id: 1,
        title: 'Get ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: 2,
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    }
]

const NavOptions = () => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <Image
                    source={{
                        uri: item.image
                    }}
                    style={{
                        width: 120,
                        height: 120,
                        resizeMode: 'contain'
                    }}
                />
                <Text>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            horizontal
            keyExtractor={item => item.id}
            data={data}
            renderItem={renderItem}
        />
    );
};

export default NavOptions;

const styles = StyleSheet.create({});
