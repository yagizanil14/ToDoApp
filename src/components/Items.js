
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

const Items= props => {
    const icon = props.Item.myToDo === 1
    ? require("../assets/tickOk.webp")
    : require('../assets/crossTick.png');
  return (
    <TouchableOpacity
    onPress={()=> props.onSelect(props.Item)}>
        <View style={props.Item.myToDo===1?styles.ItemsContainerTrue:styles.ItemsContainerFalse }>
      <View style={styles.ItemflexDirection}>
      <Image source={icon} style={styles.ItemsDot}/>
        <View><Text style={{textDecorationLine:props.Item.myToDo===1?"line-through":"none"}}>{props.Item.myEntry}</Text></View>
      </View>
        <View style={styles.ItemsToDo}><Text>{props.Item.myToDo === 1 ? "Yapıldı":"Yapılmadı"}</Text></View>
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    ItemsContainerFalse: {
        flex:1,
        flexDirection:"row",
        backgroundColor:"#ffa4a2",
        justifyContent:"space-between",
        height: Dimensions.get("window").width / 10,
        padding: 8,
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
        marginHorizontal:25
    },
    ItemsContainerTrue: {
      flex:1,
      flexDirection:"row",
      backgroundColor:"#b2fab4",
      justifyContent:"space-between",
      height: Dimensions.get("window").width / 10,
      padding: 8,
      alignItems: 'center',
      borderRadius: 10,
      margin: 5,
      marginHorizontal:25
  },
    ItemflexDirection:{
      flex:1,
      flexDirection:"row",
      justifyContent:"flex-start"
    },
    ItemsDot: {
        width:15,
        height:15,
        borderRadius:20,
        alignSelf:"center",
        marginRight:10
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
});

export {Items};
