const initialState = {
  data: [
    {
      key: '1',
      title: 'Avatar',
      released: '18 Dec 2009',
      genre: 'Action, Adventure, Fantasy',
      plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      poster:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg',
      rating: 5,
    },
    {
      key: '2',
      title: 'I Am Legend',
      released: '14 Dec 2007',
      genre: 'Drama, Horror, Sci-Fi',
      plot: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
      poster:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg',
      rating: 3,
    },
    {
      key: '3',
      title: '300',
      released: '09 Mar 2007',
      genre: 'Action, Drama, Fantasy',
      plot: 'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
      poster:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lGv19gokQvgC7jgjWqapIachnxU.jpg',
      rating: 5,
    },
  ],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RATING':
      const index = action.payload.index;
      const stars = action.payload.stars;
      const newData = [...state.data];
      newData[index].rating = stars;
      return {
        ...state,
        data: newData,
      };
  }
  return state;
};

export default movieReducer;
