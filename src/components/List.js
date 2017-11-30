import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';
import RowLayout from './RowLayout';
import axios from 'axios';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, scholarships: [], error: false };
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }
  componentWillMount() {
    axios.get(this.props.url)
        .then((response) => {
            this.setState({
              isLoading: false,
              scholarships: response.data
            });
          }
        )
        .catch(() => this.setState({
            scholarships: [], isLoading: false, error: true
          })
        );
  }
  render() {
    if (this.state.isLoading && !this.state.error) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator color='#3AD285' size='large' />
        </View>
      );
    } else if (this.state.error || typeof (this.state.scholarships) !== 'object') {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'red', fontSize: 16 }}>The server might encounter error...!</Text>
          <Text style={{ color: 'red', fontSize: 16 }}>Please contact the admin, Saingkoing SEA!</Text>
          <Text style={{ color: 'red', fontSize: 16, fontWeight: '500' }}>FB: facebook.com/sskdev</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, paddingTop: 5 }}>
        <ListView
          dataSource={this.dataSource.cloneWithRows(this.state.scholarships)}
          renderRow={
            (rowData) => <RowLayout data={rowData} /> //pass data to RowLayout
          }
        />
      </View>
    );
  }
}
