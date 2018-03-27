import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
import afterLogin from './afterLogin';
import studentData from './drawerScreens/studentData';
import Drawer from './Drawer';
import React,{Component} from 'react';

export function registerScreens()
{
  Navigation.registerComponent('navigation.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('navigation.LoginScreen',()=>LoginScreen);
  Navigation.registerComponent('navigation.afterLogin',()=>afterLogin);
  Navigation.registerComponent('navigation.studentData',()=>studentData);
  Navigation.registerComponent('navigation.Drawer',()=>Drawer);
}
