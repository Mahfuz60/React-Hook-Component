// import React, { useEffect, useState } from "react";
import useWindowWidth from './CustomHook/useWindowWidth'

export default function LayoutComponentOne() {
    // const [onSmallScreen,setOnSmallScreen]=useState(false);

    // const checkScreenSize=()=>{
    //     setOnSmallScreen(window.innerWidth<768);
    // }
    // useEffect(()=>{
    //     checkScreenSize();
    //     window.addEventListener("resize",checkScreenSize);
    //    return()=> window.removeEventListener("resize",checkScreenSize);

    // },[])

    const onSmallScreen=useWindowWidth();
    
  return (
    <div>
      <h3>You are Browsing On {onSmallScreen? 'small':'large'} Device</h3>
    </div>
  );
}
