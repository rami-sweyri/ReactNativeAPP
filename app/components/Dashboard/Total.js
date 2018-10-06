import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';


class Total extends Component {
    render() {
      return (
        <View style={styles.container}>
            <Text>{this.props.libraries.inc}</Text>
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
  

export default connect(mapStateToProps)(Total);
