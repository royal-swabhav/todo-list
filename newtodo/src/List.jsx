import React from "react";

export default function List(props) {
 return   <>
    <li>{props.value}</li><button onClick={()=>{props.sendData(props.id)}}>button</button>
    </>
}
