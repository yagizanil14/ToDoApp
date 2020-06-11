
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const MyButton= props => {
  return (
    <TouchableOpacity
    style={styles.buttonContainer}
    onPress={props.pButtonPress}
>
    <Text style={styles.textStyle}>{props.pButtonTitle}</Text>
</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#546e7a',
        width: Dimensions.get("window").width / 2,
        alignSelf: 'center',
        padding: 8,
        alignItems: 'center',
        borderRadius: 5,
        margin: 5
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export {MyButton};
