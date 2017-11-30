import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Bachelor from './src/screens/Bachelor';
import Phd from './src/screens/Phd';
import Intern from './src/screens/Intern';
import Master from './src/screens/Master';
import Training from './src/screens/Training';

const App = DrawerNavigator(
  {
    BA: {
      screen: Bachelor
    },
    MA: {
      screen: Master
    },
    PHD: {
      screen: Phd
    },
    INTERN: {
      screen: Intern
    },
    TRAIN: {
      screen: Training
    }
  },
  {
    initialRouteName: 'BA',
    drawerPosition: 'left',
    drawerWidth: 250,
    contentOptions: {
      activeTintColor: '#3AD285'
    }
  }
);

//to disable yellow warning
console.disableYellowBox = true;
//Render it to device
AppRegistry.registerComponent('FirstProject', () => App);
