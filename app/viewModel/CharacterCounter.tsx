import React from "react";
import { SafeAreaView, View } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "../recoil/atoms/counter";
import { charCountState } from "../recoil/selectors/counter";
import CounterScreen from "../views/CounterScreen/CounterScreen";

function CharacterCounter() {

    const [text, setText] = useRecoilState(textState);
    
    const count = useRecoilValue(charCountState);
    
    const onChange = (event:any) => {
      setText(event);
    };
    
    return (
      <CounterScreen {...{
        text,
        onChange,
        count
      }} />
    );
  }
export default CharacterCounter