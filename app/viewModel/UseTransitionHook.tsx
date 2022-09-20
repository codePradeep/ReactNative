import React, { forwardRef, useImperativeHandle, useRef, useState, useTransition } from "react";
import { ActivityIndicator, Button, SafeAreaView, Text, TextInput, TextInputComponent } from "react-native";

const UseTransitionHook =()=>{

    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
    
    function handleClick() {
      startTransition(() => {
        setCount(c => c + 1);
      })
    }

    return(
    <SafeAreaView style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      
      {isPending && <ActivityIndicator />}
      <Text>{isPending ? `pending`:`not pending`}</Text>
      <Text>{count}</Text>
        <Button  title="Count" onPress={()=>handleClick()} />

    </SafeAreaView>)
}
export default UseTransitionHook

