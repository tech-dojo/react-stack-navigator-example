import { AppRegistry ,YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import  StackNav from './StackNavigator/StackNav' ;

/// Stack Navigator
AppRegistry.registerComponent('StackNavigator', () => StackNav);
