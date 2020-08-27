import React from 'react';
import PropTypes from 'prop-types';

const FavoritePlace = ({ favplaces: 
  { location, city, state, from, to, description }
}) => (
  <div>
    <h4 className='text-dark'>{location}</h4>
    <p className='italic'>{city}, {state}</p>
    <p>{description}</p>
  </div>
  
)

FavoritePlace.propTypes = {
  favplaces: PropTypes.array.isRequired
}

export default FavoritePlace;
