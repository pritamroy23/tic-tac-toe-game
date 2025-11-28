import React from 'react';
const Square = (props) => {
    return (
        <div
        onClick={props.onClick} //whenever we r clicking on square this onClick event will be triggered
        style ={{
                border:"2px solid", 
                color: '#8A2BE2',
                height:"100px",
                width:"100px", 
                display:"flex", 
                justifyContent:"center", 
                alignItems:"center", 
                fontSize:"20px", 
                borderRadius:"10px",
                cursor:"pointer"
            }}
        className='square'>
            <h5>{props.value}</h5>

        </div>

    );
}
export default Square;