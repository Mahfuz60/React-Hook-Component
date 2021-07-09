import React from 'react'

 function Title() {
    console.log('rendering title.....');
    return (
        <div>
            <h4>Used By CallBack Function....</h4>
            
            
        </div>
    )
}
export default React.memo(Title);
