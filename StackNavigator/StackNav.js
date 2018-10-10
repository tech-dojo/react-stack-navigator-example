import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Electronics from './components/Electronics';
import PC from './components/PC';
import ElectricInstrument from './components/EInstruments';
import Speakers from './components/Speakers';

class StackNav extends React.Component{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    return(
     <RootStack />
    )
  }
}

// It Contains the List of pages that I can explore
 // return <RootStack />;


const RootStack = createStackNavigator(
  {

  Electronics: {  screen: Electronics },
  PC: { screen: PC },
  ElectricInstrument: {screen: ElectricInstrument},
  Speakers : {screen: Speakers},
},
{
  initialRouteName: 'Electronics'
}

);



export default StackNav;
