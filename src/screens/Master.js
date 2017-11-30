import React, { Component } from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import List from '../components/List';


export default class Master extends Component {
  static navigationOptions = {
    drawerLabel: 'Master',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name='school' size={24} style={{color: tintColor}} />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, paddingBottom: 6, backgroundColor: '#c5cae9' }}>
        <Header headerText={'MA Scholarships'} nav={this.props.navigation} />
        <List url={'http://koingapi.000webhostapp.com/master.php'} />
      </View>
    );
  }
}
