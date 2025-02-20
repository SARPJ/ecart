
import { useState } from 'react';
import './file.css'
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Signup() {
  
  const [inputs,setInput] = useState({})

  const handleChange=(event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}));
  }
  const handleForm=(event)=>{

  event.preventDefault();   
  
  axios.post('http://localhost:80/api/user/save', inputs)
  console.log(inputs);
  }
  return (
   <>
   <section>
    {/* <div className='container'> */}
      <div className='row'>
        <div className='col side-image'>
          <img src='images/Side_Image.png' alt='img'/>
        </div>
        <div className='col p-5 d-flex flex-column justify-content-center'>
          <form onSubmit={handleForm}>
            <h1>Create an account</h1>
            <span>Enter your details below</span>
            <div className='d-flex flex-column gap-4 mt-3'>
            <input className="form-control form-control-lg " type="text" placeholder="Name" name="name" onChange={handleChange}/>
            <input className="form-control form-control-lg " type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input className="form-control form-control-lg " type="tel" placeholder="Phone Number" name="mob" onChange={handleChange}/>
            <input className="form-control form-control-lg" type="password" placeholder="Password" name='pas' onChange={handleChange}/>
            <button type="submit" className="btn btn-danger btn-lg">Create Account</button>
            <div className='sign_google'>
              <img src="images/Icon-Google.png" alt=""/> Sign up with Google
            </div> 
            <span>Already have account?<a href='/'>Log in</a></span> 
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            </div>
          </form>
        </div>
      </div>
    {/* </div> */}
   </section>
   </>
  )
}

export default Signup