import {View, Text, Image} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
const Details = () => {
  const movies = useSelector(state => state.data);
  const index = useRoute().params.index;
  const movie = movies[index];

  const dispatch = useDispatch();

  const handleStars = qtd => {
    dispatch({
      type: 'SET_RATING',
      payload: {
        index,
        stars: qtd,
      },
    });
  };

  return (
    <View>
      <Image
        source={{uri: movie.poster}}
        style={{
          width: '100%',
          height: 400,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
          marginHorizontal: 10,
        }}>
        {movie.title}
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginHorizontal: 10,
        }}>
        {movie.released}
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginHorizontal: 10,
        }}>
        {movie.genre}
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginHorizontal: 10,
        }}>
        {movie.plot}
      </Text>
      <View
        style={{
          marginTop: 30,
          width: '50%',
          alignSelf: 'center',
        }}>
        <StarRating
          maxStars={5}
          rating={movie.rating}
          starSize={30}
          fullStarColor="#f1c40f"
          selectedStar={qtd => handleStars(qtd)}
        />
      </View>
    </View>
  );
};

export default Details;
