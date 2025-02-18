
import './file.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function signup() {
  return (
   <>
   <section>
    {/* <div className='container'> */}
      <div className='row'>
        <div className='col side-image'>
          <img src='images/Side_Image.png' alt='img'/>
        </div>
        <div className='col p-5 d-flex flex-column justify-content-center'>
          <form  >
            <h1>Create an account</h1>
            <span>Enter your details below</span>
            <div className='d-flex flex-column gap-4 mt-3'>
            <input className="form-control form-control-lg " type="text" placeholder="Name"/>
            <input className="form-control form-control-lg " type="text" placeholder="Email or Phone Number"/>
            <input className="form-control form-control-lg" type="text" placeholder="Password"/>
            <button type="button" className="btn btn-danger btn-lg">Create Account</button>
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

export default signup