import React from 'react'

 function ShowCount({count,title}) {
    console.log(`rendering ${title}.....`);
    return (
        <div>
            <h4>{title} is {count}</h4>
            
        </div>
    )
}
export default React.memo(ShowCount);
