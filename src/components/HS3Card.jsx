import React from 'react';

export default function HS3CardList(props) {
  
  return (
    <div className="HS3-Card">
      <img src={require("../images/"+props.image).default} />
      <h1>{props.title}</h1>  
      <p>
      {props.desc}
      </p>
    </div>
  )
}
