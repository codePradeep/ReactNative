import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Button, SafeAreaView, TextInput, TextInputComponent } from "react-native";

const ImprativeHandleHook =()=>{

    const FancyInput=(props: any, ref: React.Ref<any> | any) =>{
        const inputRef :any= useRef();
        useImperativeHandle(ref, () => ({
          focus: () => {
            inputRef.current.focus();
          }
        }));
        return <TextInput ref={(Input)=>{inputRef.current=Input}} style={{backgroundColor:"lightgray",width:"90%",height:50}}  />;
      }
 let Input = forwardRef(FancyInput);
 

    return(
    <SafeAreaView style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        {/* {FancyInput()} */}
        <TextInput  style={{backgroundColor:"lightgray",width:"90%",height:50}} />

        <Button  title="Focus the Input" onPress={()=>Input} />

    </SafeAreaView>)
}
export default ImprativeHandleHook
