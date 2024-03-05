import logo from './logo.svg';
import './App.css';
import {UseState1} from './components/UseState/UseState1';
import { UseReducer } from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { ArrayUseState } from './components/Immutable State/ArrayUseState';
import { Parent } from './components/Parent Child/Parent';
import { ParentOne } from './components/Optimization/ParentOne';
import { ChildOne } from './components/Optimization/ChildOne';
import { GrandParent } from './components/Optimization/GrandParent';
import { ParentTwo } from './components/Optimization/ParentTwo';
import { ParentThree } from './components/Incorrect Optimization/ParentThree';
import { ParentFour } from './components/Incorrect Optimization/ParentFour';
import { ContextParent } from './components/Context/ContextParent';
import { ChildA } from './components/Context/ContextChildren';

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA/>
      </ContextParent>
      
      {/*<ParentFour/>*/}
      
      {/*<ParentThree/>
      <ParentTwo/>
      <GrandParent/>
      <Parent/>
      <ArrayUseState/>
      <ObjectUseState/>
      <UseReducer/>
      <UseState1/>*/}
    </div>
  );
}

export default App;
