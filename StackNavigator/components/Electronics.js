import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

class Electronics extends React.Component
{
    static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
     title: `${navigation.state.routeName}`,
     headerTitleStyle: {flex: 1, textAlign: 'center'},
    };
}
  state={
    visible: false,
    category: ["Show", "Hide"],
    backButton:  this.props.navigation.getParam('name', ''),
    present:  this.props.navigation.state.routeName
  }

  constructor(props)
  {
    super(props);
    this.showCategory= this.showCategory.bind(this);
  }

showCategory= ()=>{
  this.setState(
    {
      visible: ! (this.state.visible),

    }
  )}

 render() {
   let category= this.state.visible;
   let show=  (category) ? "Hide Category" : "Show Category"
   return(
     <View>
       <Button title={show}
        onPress= { ()=> { this.showCategory();  } }
       />
       {
         this.state.visible &&
         <View>

         <Button title="Desktop and Laptops"
          onPress= { ()=> { this.props.navigation.navigate('PC', {name: this.state.present}) } }
         />

       <Button title="Electric Instruments"
        onPress= { ()=> { this.props.navigation.navigate('ElectricInstrument', {name: this.state.present})} }
       />

       <Button title="Speakers and Headphones"
        onPress= { ()=> { this.props.navigation.navigate('Speakers', {name: this.state.present}) } }
       />

     </View>
     }
     </View>
   )
 }
}

const styles = StyleSheet.create({
  title : {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20
  },
});
export default Electronics;
