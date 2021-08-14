import './App.css';
import {useState } from 'react';
import axios  from 'axios';

function App() {
  const [loginDetails, setloginDetails] = useState({email:'',password:''})
  const onChangeHandler = (e)=> {
    
    if(e.target.name === 'email')setloginDetails({...loginDetails,email:e.target.value})
    if(e.target.name === 'password')setloginDetails({...loginDetails,password:e.target.value})
  }

  const loginRegister = async() => {
  if(!loginDetails.email||!loginDetails.password) {alert('please provide all details');return}
    // 'http://localhost:7000/'
    const login = await axios.post('http://localhost:7000/login',{email:loginDetails.email,password:loginDetails.password});
    console.log(login)
  }
  return (
    <div className="App" onChange={onChangeHandler}>
        
        <input className='input'type='email' name='email' defaultValue='' value={loginDetails.email}/>
        <input className='input'type='password' name='password' defaultValue='' password={loginDetails.password}/>
        <input type='button' name='login' value='Login' onClick={loginRegister}/>
        
    </div>
  );
 }

export default App;
