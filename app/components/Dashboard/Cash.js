import React, { Comment } from 'react';
import { Text, View, StyleSheet } from 'react-native';



const Cash = () => {
    const { container } = styles

    return (
        <View style={container}>
            <Text>Cash</Text>
        </View>
    )
}
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
  });
  
export default Cash;