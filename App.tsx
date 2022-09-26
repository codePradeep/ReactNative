import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import { CharacterCounter } from './app/viewModel';



const App = () => {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
};

export default App;
