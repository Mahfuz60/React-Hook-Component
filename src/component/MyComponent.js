import React, { useEffect, useState } from 'react'

export default function MyComponent() {
    const [count,setCount]=useState(0);
    const [date,setDate]=useState(new Date());
    const [text,setText]=useState('')

    const tick=()=>{
        setDate(new Date())
    }
    useEffect(()=>{
        console.log('updating document title');
        document.title=`Clicked ${count} Times`;
    },[count]);

    useEffect(()=>{
        console.log('timer Starts');
        setInterval(tick,1000);
    },[]);
    
    const addClick=()=>{
        setCount((prevCount)=>prevCount+1);
    }
    
    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}> Clicked</button>
            </p>
            <hr />
            <h5>Input Box</h5>
            <input type="text" value={text} onChange={((e)=>{setText(e.target.value)})} />


            <hr />
            <hr />
            
        </div>
    )
}
