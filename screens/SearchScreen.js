import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { fetchMovies } from '../api';
import PropTypes from 'prop-types';
import SearchBar from '../components/containers/SearchBar';
import MoviesFlatList from '../components/presentational/MoviesFlatList';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Search for Movies',
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  state = {
    movies: [],
  }

  searchMovies = async (searchTerm) => {
    if (searchTerm.length >= 3) {
      const results = await fetchMovies(searchTerm)
      this.setState({
        movies: results
      })
    }
    else {
      this.setState({
        movies: []
      })
    }
  }

  handleMovieSelection = (title, id) => {
    this.props.navigation.navigate('DetailsScreen', {
      title,
      id,
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <SearchBar searchMovies={this.searchMovies}/>
        {this.state.movies.length >= 1 && (
          <MoviesFlatList movies={this.state.movies} handleMovieSelection={this.handleMovieSelection}/>
        )}
        {this.state.movies.length === 0 && (
          <Text>No results found</Text>
        )}
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 20,
    width: '100%',
    height: '100%'
  },

  movieList: {
    paddingBottom: 20,
  },
});