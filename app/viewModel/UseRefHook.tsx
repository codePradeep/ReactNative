import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Button, SafeAreaView, TextInput, TextInputComponent } from "react-native";

const UseRefHook =()=>{

const inputEl:any = useRef();
const onButtonClick = () => {
  // `current` points to the mounted text input element
  inputEl.current.focus();
};

    return(
    <SafeAreaView style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      
        <TextInput  style={{backgroundColor:"lightgray",width:"90%",height:50}} />
        
        <TextInput ref={(input)=>{inputEl.current=input}}  style={{backgroundColor:"lightgray",width:"90%",height:50}} />
        <Button  title="Focus the Input" onPress={()=>onButtonClick()} />

    </SafeAreaView>)
}
export default UseRefHook

