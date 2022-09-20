import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

function CharacterCounter() {
  return (
    <View>
      <Input />
      <CharacterCount />
    </View>
  );
}

function Input() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event:any) => {
    setText(event);
  };

  return (
    <SafeAreaView>
     <TextInput onChangeText={(event:any)=>onChange(event)} style={{backgroundColor:"lightgray",width:"90%",height:50}} />
      <Text>{text}</Text>
    </SafeAreaView>
  );
}

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return (<Text>Character Count: {count}</Text>);
}


const App = () => {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
};

export default App;
