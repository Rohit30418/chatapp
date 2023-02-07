import React from 'react'
import "./massage.css";
// import FlipMove from 'react-flip-move';
const Massage = (props) => {

//   <div style={{"textAlign":"end"}}>
//   <img src={props.profile}>
//   </img>
// </div>
  return (
    <>
    <div className='msgcont' >
    <div className='img-cont' style={{"textAlign":"end"}}>
      <img src={props.profile}>
      </img>
    </div>
    <div  className='msgcontin' style={{"backgroundColor":`${props.profile?"#5a81ff":"#ff0e61"}`}}>
        <p className='msg'>{props.data}</p>
        <p className='time'><small>{props.time}</small></p>

    </div>
    </div>
</>
    
  )
}

export default Massage