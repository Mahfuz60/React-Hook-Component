// import React, { useEffect, useState } from "react";

import useWindowWidth from "./CustomHook/useWindowWidth";


export default function LayoutComponentTwo() {
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
    <div className={onSmallScreen? 'small':'large'}>
      <h3>You are Browsing On Another   Device</h3>
    </div>
  );
}
