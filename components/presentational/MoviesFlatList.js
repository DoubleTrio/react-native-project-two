import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

export const MoviesFlatList = ({ movies, handleMovieSelection }) => {
  renderItem = ({ item }) => {
    return (
      <MovieItem {...item} handleMovieSelection={handleMovieSelection} />
    );
  };
  return (
    <FlatList 
      data={movies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.mb}
    />
  );
};

MoviesFlatList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      posterPath: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      voteAverage: PropTypes.number.isRequired,
    })
  ),
  handleMovieSelection: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  mb: {
    marginBottom: 20,
  },
});

export default MoviesFlatList;