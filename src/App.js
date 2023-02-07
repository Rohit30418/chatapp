import Chatbody from './Chatbody';
import './App.css';
import { auth, provider } from './Firebase'
import { useState } from 'react';

function App() {
  const[user,setuser]=useState(false);
  const[name,setname]=useState("")
  function signin(params) {
    const res= auth.signInWithPopup(provider).then(result=>{
       console.log(result);
       setuser(true);
       setname(result.additionalUserInfo.profile.picture);
    })
   }
  return (
    
    <div className="App">
      <h1>Chat app</h1>
      {user?<Chatbody photoURL={name} userlogin={user}></Chatbody>:<button onClick={signin}>signin</button>}
   
    </div>
  );
}

export default App;
