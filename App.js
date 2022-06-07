import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import StarScreen from './screens/StarScreen';
import { Icon } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const AppStackNavigator = createStackNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions: {
      headerTitleStyle: {
        color: '#0A369D',
        alignSelf: 'center',
        fontSize: 30
      },
      headerStyle: {
        backgroundColor: '#CFDEE7'
      }
    }
  },
  StarScreen : {
    screen: StarScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Star Description",
      headerTitleStyle: {
        color: '#0A369D',
        fontSize: 30
      },
      headerStyle: {
        backgroundColor: '#CFDEE7'
      },
      headerLeft: () => <Icon name = "arrow-left" size = {30} onPress = {() => {navigation.goBack()}} type = "feather" color = "#1583D8" containerStyle = {{margin: 10}} activeOpacity = {0.8} selectionColor = "#EEE"/>
    })
  }
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppStackNavigator)