import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({ profile: {
  bio, 
  favplaces, 
  user: { name }
}}) => {
  return (
    <div className='profile-about bg-light p-2'>
    {bio && (
      <>
        <h2 className='text-primary'>{name.trim().split(' ')[0]}'s Bio</h2>
        <p>{bio}</p>
        <div className='line' />
      </>
    )}
    <h2 className='text-primary'>Favorite Places to Camp</h2>
    <div className='skills'>
      {favplaces.map((fav, index) => (
        <div key={index} className='p-1'>
           <i className='fas fa-campground' /> {fav.location}
        </div>
      ))}
    </div>
  </div>
    
  )
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileAbout
