
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions
} from 'react-native';

const Inputs= props => {
  return (
        <View style={styles.ınputStyle}>
          <TextInput
          onChangeText={props.pChangeText}
          keyboardType={props.pKeyboardType}
          autoCapitalize="none"
          placeholder={props.pPlaceholder}
          ></TextInput>
        </View>
  );
};

const styles = StyleSheet.create({
  ınputStyle: {
    backgroundColor: '#eceff1',
        height:Dimensions.get("window").width / 10,
        
        margin: 20,
        borderRadius: 10,
  },
  
});

export {Inputs};
