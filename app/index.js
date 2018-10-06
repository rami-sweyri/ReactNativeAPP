import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Dashboard from '../screen/Dashboard';
import Expenses from '../screen/Expenses';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const  AppNavigationBottom = createMaterialBottomTabNavigator ({

    Dashboard :  {
      screen: Dashboard,
      navigationOptions: {
        
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-clock" size ={26} color={tintColor} />
        )
      }
      
    },
    Expenses :  {
      screen: Expenses,
      navigationOptions: {
        tabBarLabel: 'Expenses',
        tabBarIcon: ({focused, tintColor }) => (
          <Icon name="ios-clock" size ={26} color={tintColor} />
        )
      }   
    }
              
     
  },{
    initialRouteName: 'Dashboard',
    activeColor: '#002',
    inactiveColor: '#023',
    barStyle: { backgroundColor: '#00EFC3' },
    shifting:true,
  
  })

  
  export default AppNavigationBottom;