import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addFavPlaces } from '../../actions/profile';

const AddFavPlaces = ({ addFavPlaces, history }) => {
  const [formData, setFormData] = useState({
    location: "",
    state: "",
    from: "",
    to: "",
    description: ""
  })

  const { location, state, from, to, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className='large text-primary'>
         Add a Favorite Place to Camp</h1>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addFavPlaces(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='State'
            name='state'
            value={state}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <h4>Date of Stay</h4>
          <input
            type='date'
            name='from'
            value={from}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <h4>Till Date</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={onChange}
          />
          <div className='form-group'>
          <textarea 
            placeholder='Description'
            name='description'
            cols='30'
            rows='5'
            value={description}
            onChange={onChange}
          />
          <small className='form-text'>
            Why is this one of your favorite places to camp?
          </small>
        </div>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </>
  )
}

AddFavPlaces.propTypes = {
  addFavPlaces: PropTypes.func.isRequired
}

export default connect(
  null,
  { addFavPlaces }
)(withRouter(AddFavPlaces));