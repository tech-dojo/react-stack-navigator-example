import React from 'react';
import {Text, StyleSheet, Button, View, ScrollView, TouchableOpacity} from 'react-native';

class ElectricInstrument extends React.Component
{
  ///////////////////////////////////////////
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
     title: `${navigation.state.routeName}`,
     ////////////////////////////////////////////////////////////////////////////
     /////////////////////////////////////////////////////////////////////////
      headerLeft: (
        <TouchableOpacity  onPress= { ()=> { navigation.goBack()} }>
           <Text style={{fontWeight: 'bold', paddingLeft: 10}} > {" Back To \n  "+ navigation.getParam('name', '')} </Text>
        </TouchableOpacity>
                ),
    ////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
     headerTitleStyle: {flex: 1, textAlign: 'center'},
    };
  }
  /////////////////////////////////////////
  state={
    InstrumentList: ["Electric Guitar", "Daxophpne", "Electic Cello", "Tapboard"],
    backButton:  this.props.navigation.getParam('name', ''),
    present:  this.props.navigation.state.routeName
  }
  constructor(props)
  {
    super(props);
  }

 render()
 {
   return(
     <View>

       <ScrollView>
         {
           this.state.InstrumentList.map((item, key) => (
              <View key = {key} >

                <TouchableOpacity style={styles.button}>
                    <Text>{item}</Text>
                </TouchableOpacity>

              </View>
            ))
         }
       </ScrollView>

     </View>
   )
 }
}

const styles = StyleSheet.create({
  title : {
        alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  text: {
     fontSize: 15,
  },
})
export default ElectricInstrument;
