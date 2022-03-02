import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import CountContextProvider from './count';
import { useCountContext } from './count';

export default function Homepage() {
    const CountContext= useCountContext();
    console.log(CountContext);

  return (
   
    <View>
      
      <View style={styles.bg}>
     
      <Text style={styles.heading}>Welcome To Homepage</Text>
       <Text style={styles.heading}>Click the button to increase</Text>      
      <Text style={styles.text}>{CountContext.count}</Text>
      <Button title='Press'   color="#203239" onPress={()=> CountContext.setCount(CountContext.count+1)}></Button>
      <Text style={styles.text}>{CountContext.count2}</Text>
      <Button title='Press'  color="#203239" onPress={()=> CountContext.setCount2(CountContext.count+1)}></Button>
     
    
    </View>
    
    </View>
 
  );
}

const styles = StyleSheet.create({
  heading:{
    fontWeight:'bold',
    marginBottom:40,
    fontSize:20
  },
  bg: {
    marginTop:200,
    backgroundColor: '#DADBBD',
    padding:110,
    alignItems:'center'
  },

});