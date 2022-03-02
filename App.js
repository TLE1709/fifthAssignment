import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import CountContextProvider from './src/count';
import { useCountContext } from './src/count';
import Homepage from './src/Homepage';

export default function App() {


  const CountContext= useCountContext();
  console.log(CountContext);

  return (
    
    <CountContextProvider>
    <Homepage>

    </Homepage>
    </CountContextProvider>
  );
}

