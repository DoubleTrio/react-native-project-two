import React from 'react';
import { StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { fetchMovieById } from '../api'; 
import MovieDetails from '../components/presentational/MovieDetails';

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  };

  state = {
    movieInfo: null,
  };

  async componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.getMovieInfo(id);
  };

  getMovieInfo = async (id) => {
    const results = await fetchMovieById(id);
    this.setState({movieInfo: results});
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {!this.state.movieInfo && (
          <ActivityIndicator color='#0000ff' size='large'/>
        )}
        {this.state.movieInfo && (
          <MovieDetails movieInfo={this.state.movieInfo}/>   
        )}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 20,
    width: '100%',
    height: '100%'
  },
});