import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

class CardScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
   };
render() {
 return (
  <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
<Button title="Go to Profile screen"
    onPress={() => this.props.navigation.navigate('Search')}
   />
  </View>
);
}
}
export default CardScreen;