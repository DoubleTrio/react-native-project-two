import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

const MovieItem = ({ posterPath, releaseDate, title, voteAverage, id, handleMovieSelection }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={() => handleMovieSelection(title, id)}>
      <Image 
        style={styles.poster}
        source={{uri: posterPath}}
      />
      <View style={styles.ml}>
        <Text style={styles.title}>{title}</Text>
        <Text>Release Date: {releaseDate}</Text>
        <Text>Rating: {voteAverage}/10</Text>
      </View>
    </TouchableOpacity>
  );
};

MovieItem.propTypes = {
  posterPath: PropTypes.string,
  releaseDate: PropTypes.string,
  title: PropTypes.string.isRequired,
  voteAverage: PropTypes.number,
  id: PropTypes.string.isRequired,
  handleMovieSelection: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
  },

  poster: {
    width: 50,
    aspectRatio: 2/3,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  ml: {
    marginLeft: 12,
  },
});

export default MovieItem;