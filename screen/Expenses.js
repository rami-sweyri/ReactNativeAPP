import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';



class Expenses extends Component {
    render() {
      return (
        <View style={styles.container}>
            <Text>{this.props.libraries.exp}</Text>
        </View>
    )
}
}
const mapStateToProps = state => {
    return { libraries: state.libraries}
  };
  
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
  });
  
//export default Expenses;
export default connect(mapStateToProps)(Expenses);