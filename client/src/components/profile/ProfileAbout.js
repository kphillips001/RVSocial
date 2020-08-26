import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({ profile: {
  bio, 
  activities, 
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
    <h2 className='text-primary'>Favorite Camping Activities</h2>
    <div className='skills'>
      {activities.map((activity, index) => (
        <div key={index} className='p-1'>
           <i className='fas fa-arrow-circle-right' /> {activity}
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
