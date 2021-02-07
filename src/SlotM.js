import React from 'react';
import Match from './Match';
import Unmatch from './Unmatch';
// let x='😄';
// let y= '😄';
// let z='😄';
//using if and else
// const SlotM=(props)=>{
//     if((props.x===props.y)&&(props.y===props.z))
//     {
//     return(
//         <>
//          <h1>
//              {" "}
//              {props.x} {props.y} {props.z}
//          </h1> 
//          <h1>This is matching</h1> 
//          <hr/>
//           </>
//          )

//     }
//     else{
//         return(
//         <>

//          <h1>
//              {" "}
//              {props.x} {props.y} {props.z}
//          </h1> 
//          <h1>This is not matching</h1> 
//          <hr/>


//         </>
//         )
//     }
// }

//using conditional operator
const SlotM=(props)=>{
    return(
        <>
        { (props.x===props.y===props.z)?<Match a={props.x} b={props.y} c={props.z}/>
            
        :<Unmatch a={props.x} b={props.y} c={props.z}/>}
        </>
    )
}


export default SlotM;