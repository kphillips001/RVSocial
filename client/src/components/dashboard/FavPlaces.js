import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteFavPlaces } from '../../actions/profile';

const FavPlaces = ({ favplaces, deleteFavPlaces }) => {
  const favoritePlaces = favplaces.map(fav => (
    <tr key={fav._id}>
      <td>{fav.location}</td>
      <td>{fav.city} </td>
      <td>{fav.state}</td>
    <td>
      <Moment format='MM/DD/YYYY'>{fav.from}</Moment> - {''}
      <Moment format='MM/DD/YYYY'>{fav.to}</Moment>
    </td>
    <td>
      <button 
        onClick={()=> deleteFavPlaces(fav._id) }
        className='btn btn-danger'>
         Delete
      </button>
    </td>
    </tr>
  ));

  return (
    <>
      <h2 className='my-2'>Favorite Places Where I Camped</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Location</th>
            <th>City</th>
            <th>State</th>
            <th>Dates Stayed</th>
            <th />
          </tr>
        </thead>
        <tbody>{favoritePlaces}</tbody>
      </table>
    </>
  )
}

FavPlaces.propTypes = {
  favplaces: PropTypes.array.isRequired,
  deleteFavPlaces: PropTypes.func.isRequired
}

export default connect(null, {deleteFavPlaces})(FavPlaces);