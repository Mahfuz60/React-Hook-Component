import React, { useState,useCallback,useReducer} from 'react';
import Button from './component/Button';
import ComplexCounter from './component/ComplexCounter';
import ComponentA from './component/ComponentA';
import Counter from './component/Counter';
import LayoutComponentOne from './component/LayoutComponentOne';
import Form from './component/Form';
import GetPost from './component/GetPost';
import GetPost2 from './component/GetPost2';
import MyComponent from './component/MyComponent';
import ShowCount from './component/ShowCount';
import Title from './component/Title';
import Todo from './component/Todo';
import LayoutComponentTwo from './component/LayOutComponentTwo';

export const counterContext=React.createContext();
const initialState=0;
const reducer =(state,action) =>{

    switch(action){
        case "increment": 
            return state+1;
        case "decrement":
            return state -1;

            default:
                return state;


    }

}


export default function App() {
  const [count1,setCount1]=useState(0);
  const [count5,setCount5]=useState(0);

  const handleCountOne=useCallback(()=>{
    setCount1((prevCount)=>prevCount+1);
  },[]);

  const handleCountFive=useCallback(()=>{
    setCount5((prevCount)=>prevCount+5);
  },[]);

  //useReducer Used
  const [count,dispatch]=useReducer(reducer, initialState);

  
  return (
    <div >
     
      {/* <Todo></Todo>
      <MyComponent></MyComponent>


      <Title></Title>
      <ShowCount count={count1} title='Counter 1'></ShowCount>
      <Button type='button' handleClick={handleCountOne}>Increment by one</Button>
      <hr />
      <ShowCount count={count5} title='Counter 5'></ShowCount>
      <Button type='button' handleClick={handleCountFive}>Increment by Five</Button>
      <hr /><hr />
      <Form></Form>
      <hr />
      <hr />
      
      <Counter></Counter>
      <ComplexCounter></ComplexCounter>
      <hr />
      <div>Count:{count}</div>

      <counterContext.Provider value={{countDispatch:dispatch}}>

          <ComponentA></ComponentA>

      </counterContext.Provider>
      <hr /><hr />
      <GetPost></GetPost>
      <hr /><hr />
      <GetPost2></GetPost2> */}


      <LayoutComponentOne></LayoutComponentOne>
      <LayoutComponentTwo></LayoutComponentTwo>
     

    </div>
  );
}


