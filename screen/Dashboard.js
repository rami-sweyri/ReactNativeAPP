import React, { Component } from 'react';
import { Text, View, StyleSheet ,SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Cash from '../app/components/Dashboard/Cash';
import Total from '../app/components/Dashboard/Total';
import Income from '../app/components/Dashboard/Income';



export default class Dashboard extends Component  {
    render() {
        return (
            <SafeAreaView style={styles.container}>
               <DashboardItem />
            </SafeAreaView>
        )
    }
}

const DashboardItem = createMaterialTopTabNavigator({
    Income :  {
        screen: Income,
        navigationOptions: {
          tabBarLabel: 'Income',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-clock" size ={26} color={tintColor} />
          )
        }
        
      },
      Total :  {
        screen: Total,
        navigationOptions: {
          tabBarLabel: 'Total',
          tabBarIcon: ({focused, tintColor }) => (
            <Icon name="ios-clock" size ={26} color={tintColor} />
          )
        }   
      },

      Cash :  {
        screen: Cash,
      
        navigationOptions: {
          tabBarLabel: 'Cash',
          tabBarIcon: ({focused, tintColor }) => (
            <Icon name="ios-radio-button-off" size ={8} color={tintColor} />
          )
        }   
      }
} ,{
    initialRouteName: 'Income',
    tabBarPosition : 'bottom',
  
    tabBarOptions: {
        showLabel: false,

        activeTintColor: '#555',
        inactiveTintColor: '#999',
        indicatorStyle: {
            height: 0
        },
        style: {
            backgroundColor: 'rgba(0,0,0,0)',
            
        },
        showIcon: true
    }  
})
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
  });
  
