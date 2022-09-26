import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

interface CounterScreenProps {
  onChange: (event: any) => void;
  text: string;
  count:number
}

function CounterScreen(props: CounterScreenProps) {
  const {onChange, text,count}=props
  return (
    <SafeAreaView>
      <SafeAreaView>
        <TextInput
          onChangeText={(event: any) => onChange(event)}
          style={{backgroundColor: 'lightgray', width: '90%', height: 50}}
        />
        <Text>{text}</Text>
      </SafeAreaView>
      <Text>Character Count: {count}</Text>
    </SafeAreaView>
  );
}
export default CounterScreen;
