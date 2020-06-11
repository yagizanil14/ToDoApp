
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import {MyButton, Inputs,Items} from './src/components'

const App=()=> {
 
  const [list, setlist] = useState([])
  const [ıtems, setItems] = useState({ toDo:0,name:""})

  const changeText = (getName) => {
    ıtems.toDo = 0
    ıtems.name = getName
    setItems(ıtems)
  }

  const setName =()=>{
    let newToDo = [...list]
    newToDo.push({myEntry:ıtems.name, myToDo:ıtems.toDo})
    setlist(newToDo)
  }

  const onSelect =(item)=>{
    let newList = [...list]
    item.myToDo = item.myToDo === 0 ? 1 : 0
   console.log(item)
   setlist(newList)
  }

  return (
    <View style={{backgroundColor:"#c1d5e0", flex:1}}>
    <SafeAreaView>
     <FlatList
     keyExtractor={(item,index)=>index.toString()}
      data={list}
      renderItem={({ item }) => (
        <Items
            Item={item}
            onSelect={onSelect}/>
      )}/>
        <View>
          <Inputs pPlaceholder="Yapılacaklar" pChangeText={changeText}/>
          <MyButton pButtonTitle="Listeye Ekle" pButtonPress={setName}/>
        </View>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "gray"
  },
});

export default App;
