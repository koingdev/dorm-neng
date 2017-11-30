import React from 'react';
import { View, Text, Image } from 'react-native';

const RowLayout = (props) => {
  return (
    <View style={styles.rowLayoutContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.data.image }} />
        </View>
        <View style={styles.infoContainer}>
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Text style={styles.title}>{props.data.title}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={styles.date}>{props.data.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  rowLayoutContainer: {
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 2,
    marginTop: 6,
    marginLeft: 5,
    marginRight: 5,
    overflow: 'hidden'  //to make the border radius work well
  },
  rowContainer: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row', //horizontal layout
    borderColor: '#ddd',
    position: 'relative',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    resizeMode: 'stretch',
    flex: 1,
    height: 120,
    width: 160
  },
  infoContainer: {
    padding: 5,
    flex: 1
  },
  title: {
    color: '#005005',
    fontWeight: '500',
    fontSize: 15
  },
  date: {
    color: 'red',
    fontWeight: '500',
    fontSize: 15,
  }
};

export default RowLayout;
