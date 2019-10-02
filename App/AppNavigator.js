import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CardScreen from "./Screens/CardScreen"
import React, { Component } from 'react';
import MechanicsScreen  from "./Screens/MechanicsScreen"
import  SearchScreen  from "./Screens/SearchScreen"

const AppNavigator = createStackNavigator({
    CardScreen: { screen: CardScreen },
    MechanicsScreen: { screen: MechanicsScreen },
    SearchScreen: { screen: SearchScreen }
},
    {
        initialRouteName: 'CardScreen'
    }


);
export default createAppContainer(AppNavigator);
