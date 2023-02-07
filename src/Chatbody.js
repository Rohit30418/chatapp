import React,{useState,useEffect,forwardRef} from 'react'
import Button from '@mui/material/Button';
import Massage from './Massage';
import "./main.css"
import db from './Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { css } from '@emotion/react';
import ScrollToBottom from 'react-scroll-to-bottom';
// import FlipMove from 'react-flip-move';
const Chatbody = (props) => {
 const [first, setfirst] = useState("")
 const [msgdata,setmsgdata] = useState([]);
 const ROOT_CSS = css({
  height: 600,
  width: 400
});
 console.log(props);
 function inputmsg(params) {
        setfirst(params.currentTarget.value)
        
    }

    function adddata() {
      db.collection("chat").add({
        "massage":first,
         "time":firebase.firestore.FieldValue.serverTimestamp()
      })
      setfirst("")
    }
    // settime(date.date.toLocaleTimeString())
    useEffect(() => {
      db.collection("chat").orderBy('time',"asc").onSnapshot(snapshot=>{
        setmsgdata(snapshot.docs.map(function name(doc) {
        return {
          msg:doc.data().massage,
          id:doc.id,
          time:new Date(doc.data().time.seconds*1000).toLocaleTimeString()
        } 
        })) 
      })
    }, [first])


  return (
    <div>
      <div className='chatbody'>
{msgdata.map(function name(params) {
   return <Massage profile={props.photoURL} userlogin={props.userlogin} data={params.msg} time={params.time?params.time:""} key={params.id}>
   </Massage>
 })}
      </div>
      
      <div className='msgcontainer'>
 <input placeholder='type your massage here...' value={first} type="text" onChange={(e)=>{
      inputmsg(e)
  }}></input>
  
  <Button  variant="contained" disabled={first==""?true:false} onClick={()=>
    adddata()
  }>Send</Button>
 </div>
    </div>
  )
}

export default Chatbody