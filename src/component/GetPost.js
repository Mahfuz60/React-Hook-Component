import React from 'react';
import {useState,useEffect} from 'react';

export default function GetPost() {
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const [post,setPost]=useState({});
    const url=`https://jsonplaceholder.typicode.com/posts/50`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false);
            setPost(data);
            setError('');
        })

        .catch(()=>{
            setLoading(false);
            setPost({});
            setError('There was a Some error detected plz solve this problem!');
        })
    },[])
    

    return (
        <div>
            <h1>GetPost-1 Used UsedEffect</h1>
           {loading?'loading....':post.title}
            {error?error :null};
            
        </div>
    )
}
