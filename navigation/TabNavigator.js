import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';

const Tab = createMaterialBottomTabNavigator()

 const MaterialBottomTabNavigator=()=>{
  return (
    
      <Tab.Navigator 
      labeled = {false}
      barStyle = {styles.bottomTabStyle}
      screenOptions={({ route }) => ({ tabBarIcon: ({ focused, color, size }) =>{
        let iconName ;
        if(route.name === "Feed"){
          iconName = focused
          ?'home' :'home-outline'
        }
        else if(route.name === "CreateStory"){
          iconName = focused
          ?'add-circle' :'add-circle-outline'
        }
        return <Ionicons name ={iconName} size = {30} color = {color} style = {{width: 30}}/>

      },
    })}
      activeColor = {'#ee8249'}
      inactiveColor= {'gray'}
    >

      <Tab.Screen name = "Feed" component = {Feed}/>
      <Tab.Screen name = "CreateStory" component = {CreateStory}/>

      </Tab.Navigator>

    
  );
}

export default MaterialBottomTabNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabStyle:{
    backgroundColor: '#2f345d',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute'
  },
  icons: {
    width: RFValue(30),
    height : RFValue(30)
  }
});
