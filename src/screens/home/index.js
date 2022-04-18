import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const movies = useSelector(state => state.data);

  const Stars = ({n}) => {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(
        <Text key={i} style={{color: '#f1c40f'}}>
          ⭐
        </Text>,
      );
    }
    return <View style={{flexDirection: 'row'}}>{stars}</View>;
  };

  return (
    <FlatList
      data={movies}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {item, index})}
          style={{width: '100%', marginBottom: 10}}>
          <Image
            source={{uri: item.poster}}
            style={{
              width: 120,
              height: 120,
            }}
          />
          <Text>{item.title}</Text>
          <Text>{item.released}</Text>
          <Text>{item.genre}</Text>
          <Text>{item.plot}</Text>
          <View>
            <Stars n={item.rating} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Home;
