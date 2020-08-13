import React from 'react'

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>RV Social</h1>
          <p className='lead'>
            Create a RV profile, socialize, share posts and get acquainted with your fellow RVer!
          </p>
          <div className='buttons'>
            <a href='register.html' className='btn btn-primary'>Sign Up</a>
            <a href='login.html' className='btn btn-light'>Login</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing;