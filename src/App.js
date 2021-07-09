import React, { useState,useCallback} from 'react';
import Button from './component/Button';
import Form from './component/Form';
import MyComponent from './component/MyComponent';
import ShowCount from './component/ShowCount';
import Title from './component/Title';
import Todo from './component/Todo';


function App() {
  const [count1,setCount1]=useState(0);
  const [count5,setCount5]=useState(0);

  const handleCountOne=useCallback(()=>{
    setCount1((prevCount)=>prevCount+1);
  },[]);

  const handleCountFive=useCallback(()=>{
    setCount5((prevCount)=>prevCount+5);
  },[]);
  
  return (
    <div >
     
      <Todo></Todo>
      <MyComponent></MyComponent>


      <Title></Title>
      <ShowCount count={count1} title='Counter 1'></ShowCount>
      <Button type='button' handleClick={handleCountOne}>Increment by one</Button>
      <hr />
      <ShowCount count={count5} title='Counter 5'></ShowCount>
      <Button type='button' handleClick={handleCountFive}>Increment by Five</Button>
      <hr /><hr />
      <Form></Form>

    </div>
  );
}

export default App;
