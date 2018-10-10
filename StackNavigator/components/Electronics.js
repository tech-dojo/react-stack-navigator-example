import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

class Electronics extends React.Component
{
  ///////////////////////////////////////////
  static navigationOptions = ({ navigation, navigationOptions }) => {
  //  console.log("Look at this", navigation.state.routeName);
  //  let nice= navigation.state.routeName;
  //  console.log("Put Nice things Here ", nice);

    return {
     title: `${navigation.state.routeName}`,
     headerTitleStyle: {flex: 1, textAlign: 'center'},
    };
  }
  /////////////////////////////////////////
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
  )
  console.log(`showCategory Clicked !!`);
}
 render()
 {
   //console.log("Feels Good ",this.state.present)
   console.log(`My Previous Screen is ${this.state.backButton}`);
   console.log(`My Current Screen is ${this.state.present}`);

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
