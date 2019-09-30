import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const getRatingPercentage = (rating) => {
  return `${rating * 10}%`
};


const RatingBar = ({ rating, voteCount }) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.ratingText}>{rating}/10</Text>
        <Text style={styles.grey}>({voteCount} votes)</Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.bar, {width: getRatingPercentage(rating)}]}/>
      </View>
    </View>
  );
};

RatingBar.propTypes = {
  rating: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    borderColor: 'black', 
    borderWidth: 2,
    marginBottom: 30,
  },

  ratingText: {
    fontWeight: 'bold',
    fontSize: 20,  
  },

  bar: {
    height: 20,
    backgroundColor: 'powderblue',
  },

  row: {
    flexDirection: 'row',
  },

  grey: {
    color: '#545454',
    paddingTop: 5,
    paddingLeft: 5,
	},
});

export default RatingBar;