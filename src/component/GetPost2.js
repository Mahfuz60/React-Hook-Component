import React from "react";
import { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.result,
        error: "",
      };
      case "ERROR":
      return {
        loading: false,
        post: {},
        error: "Error Detected,Try to solve this problem"
      };

      default:
          return state;
  }
};


export default function GetPost2(){
    const [state, dispatch] =useReducer(reducer,initialState);
    const url=`https://jsonplaceholder.typicode.com/posts/20`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            dispatch({ type:'SUCCESS',result:data})
        })

        .catch(()=>{
            dispatch({ type:'ERROR'})})
    },[]);

    return (
        <div>
            <h1>GetPost-2 Used UsedReducer</h1>
            {state.loading?'loading....':state.post.title}
            {state.error?state.error :null};
            
        </div>
    )
}