import React ,{ Component } from 'react';
import { View , StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './app/reducers';
import AppNavigationBottom from './app/index'
import Header from './app/components/Header';

export default class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View style= {styles.appStyle}>
        <Header />
        <AppNavigationBottom />
      </View>
       </Provider>

    )
  }
  
}
  
const styles = StyleSheet.create({
  appStyle: {
    flex: 2
    
     
  }
})
