import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';

const FavPlaces = ({ favplaces }) => {
  const favoritePlaces = favplaces.map(fav => (
    <td key={fav._id}>
      <td>{fav.location}</td>
      <td>{fav.state}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{fav.from}</Moment> - {''}
        <Moment format='YYYY/MM/DD'>{fav.to}</Moment>
      </td>
      <button className='btn btn-danger'>Delete</button>
    </td>
  ))

  return (
    <>
      <h2 className='my-2'>Favorite Places to Camp</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Location</th>
            <th className='hide-sm'>State</th>
            <th />
          </tr>
        </thead>
        <tbody>{favplaces}</tbody>
      </table>
    </>
  )
}

FavPlaces.propTypes = {
  favplaces: PropTypes.array.isRequired
};

export default FavPlaces;
