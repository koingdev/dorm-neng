import React, { Component } from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import List from '../components/List';


export default class Bachelor extends Component {
  static navigationOptions = {
    drawerLabel: 'Bachelor',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name='school' size={24} style={{color: tintColor}} />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, paddingBottom: 6, backgroundColor: '#c5cae9' }}>
        <Header headerText={'BA Scholarships'} nav={this.props.navigation} />
        <List url={'http://koingapi.000webhostapp.com/bachelor.php'}/>
      </View>
    );
  }
}
