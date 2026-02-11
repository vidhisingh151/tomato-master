// import React, { useContext, useState } from 'react'
// import './LoginPopup.css'
// import {assets} from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext'
// import axios from "axios"


// const LoginPopup = ({setShowLogin}) => {

//     const {url,setToken}=useContext(StoreContext)

//     const [currState,setCurrState]=useState("Sign-Up")
//     const [data,setData] =useState({
//         name:"",
//         email:"",
//         password:""
//     })

//     const onChangeHandler=(event) =>{
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data =>({...data,[name]:value}))
//     }

//     const OnLogin = async (event)=>{
//         event.preventDefault()
//         let newUrl= url;
//         if (currState==="Login") {
//             newUrl +="/api/user/login"
//         }
//         else{
//             newUrl +="/api/user/register"
//         }

//     const response =await axios.post(newUrl,data);
//         if (response.data.success) {
//             setToken(response.data.token);
//             localStorage.setItem("token",response.data.token)
//             setShowLogin(false)
//         }
//         else{
//             alert(response.data.message)
//         }


//     }
//   return (
//     <div className='login-popup'>
//         <form onSubmit={OnLogin} className='login-popup-container'>
//             <div className='login-popup-title'>
//                 <h2>{currState}</h2>
//                 <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''></img>
//             </div>
//             <div className="login-popup-inputs">
//                 {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler}  value={data.name} type='text' placeholder='Your Name' required/>}     
//                 <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Your Email' required/>
//                 <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Password' required/>

//             </div>
//             <button type='submit'>{currState==="Sign-Up"?"Create Account":"Login"}</button>
//            <div className="login-popup-condition">
//             <input type='checkbox' required></input>
//             <p>By continuing,I agree to the terms of use & privacy policy.</p>
//            </div>
//            {currState==="Login"
//                 ?<p>Create a new account?<span onClick={()=>setCurrState("Sign-Up")}>Click here</span></p>
//                 :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                
//             }
//         </form>

//     </div>
//   )
// }

// export default LoginPopup








import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {

  const { url, setToken } = useContext(StoreContext)

  const [currState, setCurrState] = useState("Sign-Up")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const OnLogin = async (e) => {
    e.preventDefault();

    const endpoint =
      currState === "Login"
        ? "/api/user/login"
        : "/api/user/register";

    try {
      const res = await axios.post(url + endpoint, data);

      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        setShowLogin(false);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Backend not running or API error");
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={OnLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign-Up" &&
            <input name='name' value={data.name} onChange={onChangeHandler} placeholder='Your Name' required />
          }
          <input name='email' value={data.email} onChange={onChangeHandler} placeholder='Your Email' required />
          <input name='password' value={data.password} onChange={onChangeHandler} placeholder='Password' type='password' required />
        </div>

        <button type='submit'>
          {currState === "Sign-Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms & privacy policy.</p>
        </div>

        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign-Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup;
