import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/add-favplaces' className='btn btn-light'>
        <i className='fas fa-campground text-primary' /> Add Favorite Places to Camp
      </Link>
      {/* <Link to='/add-education' className='btn btn-light'>
        <i className='far fa-comment text-primary' /> Add Camping Advice
      </Link> */}
    </div>
  );
};

export default DashboardActions;