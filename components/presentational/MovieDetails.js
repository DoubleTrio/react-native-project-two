import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import RatingBar from './RatingBar';

const MovieDetails = ({ movieInfo }) => {
  const { 
    backdropPath, budget, overview, 
    popularity, releaseDate, revenue, 
    tagline, voteAverage, voteCount, 
    runtime, imdbId, title,
  } = movieInfo;

  return (
    <View>
      <Image
        style={[styles.image, styles.mb]}
        source={{uri: backdropPath}} 
      />
      <View style={styles.row}>
        <Text style={styles.headerText}>{title || 'NA'}</Text>
        <Text style={styles.grey}>({releaseDate})</Text>
      </View>
      <Text style={[styles.italics, styles.mb]}>{tagline || 'NA'}</Text>
      <View style={[styles.row, styles.mbSmall]}>
        <Text>{runtime || 'NA'}</Text>
        <Text> | Popularity {popularity || 'NA'}</Text>
        <Text> | IMDB ID: {imdbId || 'NA'}</Text>
      </View>
      <Text>Budget: {budget || 'NA'}</Text>
      <Text style={styles.mb}>Revenue: {revenue || 'NA'}</Text>
      <Text style={styles.headerText}>Overview:</Text>
      <Text style={styles.mb}>{overview || 'NA'}</Text>
      <RatingBar voteCount={voteCount} rating={voteAverage}/>
    </View>
  );
};

MovieDetails.propTypes = {
  movieInfo: PropTypes.shape({
    imdbId: PropTypes.string,
    backdropPath: PropTypes.string,
    budget: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    releaseDate: PropTypes.string,
    revenue: PropTypes.string,
    runtime: PropTypes.string,
    tagline: PropTypes.string,
    title: PropTypes.string.isRequired,
    voteAverage: PropTypes.isRequired,
    voteCount: PropTypes.isRequired,
  }),
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,  
  },

  image: {
    width: '100%', 
    aspectRatio: 100/70,
    borderRadius: 20,
  },

  grey: {
    color: '#545454',
    paddingTop: 5,
    paddingLeft: 5,
	},

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  mb: {
    marginBottom: 10,
  },

  mbSmall: {
    marginBottom: 5,
  },

  italics: {
    fontStyle: 'italic',
  },
});

export default MovieDetails;