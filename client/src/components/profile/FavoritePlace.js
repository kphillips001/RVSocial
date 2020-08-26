import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const FavoritePlace = ({ favplaces: 
  { location, city, state, from, to, description }
}) => {
  return (
    <div>
      <h3 className='text-dark'>{location} - {city}, {state}</h3>
      <h5>
        <Moment format='MM/DD/YY'>{moment.utc(from)}</Moment> to {''}
        <Moment format='MM/DD/YY'>{moment.utc(to)}</Moment>
      </h5>
      <p>{description}</p>
    </div>
  )
}

FavoritePlace.propTypes = {
  favplaces: PropTypes.array.isRequired
}

export default FavoritePlace;
