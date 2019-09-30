import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  state = {
    q: '',
  };

  static propTypes = {
    searchMovies: PropTypes.func.isRequired,
  };

  handleChange = (q) => {
    this.setState({ q }, () => { 
      this.props.searchMovies(q)
    });
  };

  render() {
    return (
      <TextInput style={styles.textField} placeholder="Search..." value={this.state.q} onChangeText={this.handleChange}/> 
    );
  }
};

const styles = StyleSheet.create({
  textField: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: '80%',
    padding: 5,
    borderRadius: 3,
    height: 40,
    fontSize: 18,
  },
});

export default SearchBar;

