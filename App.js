import React from 'react';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(createStackNavigator(
  {
    SearchScreen,
    DetailsScreen,
  },  
  {
    initialRouteName: 'SearchScreen',
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0892D0',
      },
    }
  }
));

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
