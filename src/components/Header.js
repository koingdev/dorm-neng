//Import libraries
import React from 'react';
import { Text, View, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
      <View style={{ paddingRight: 5, justifyContent: 'center'} }>
        <MaterialIcons name='menu' size={32} onPress={ () => {props.nav.navigate('DrawerOpen')} } />
      </View>
    </View>
  );
};

const paddingValue = Platform.select({
  ios: 20,
  android: 0
});
const heightValue = Platform.select({
  ios: 55,
  android: 50
});

const styles = {
  viewStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowRadius: 10,
    backgroundColor: '#3AD285',
    flexDirection: 'row',
    paddingTop: paddingValue,
    height: heightValue,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 }, //horizontal 2
    shadowOpacity: 0.3,
    elevation: 3,
    position: 'relative',
    zIndex: 999
  },
  textStyle: {
    marginLeft: 30,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
};

//Make the component available to other parts of app
export default Header;
