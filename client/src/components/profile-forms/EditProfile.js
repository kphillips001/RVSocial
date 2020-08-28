import React, { useEffect, useState } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    status: "",
    rvtype: "",
    wherefrom: "",
    agerange: "",
    preference: "",
    bio: "",
    activity: "",
    twitter: "",
    facebook: "",
    youtube: "",
    instagram: "",
    website: ""
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      status: loading || !profile.status ? '' : profile.status,
      rvtype: loading || !profile.rvtype ? '' : profile.rvtype,
      wherefrom: loading || !profile.wherefrom ? '' : profile.wherefrom,
      agerange: loading || !profile.agerange ? '' : profile.agerange,
      preference: loading || !profile.preference ? '' : profile.preference,
      bio: loading || !profile.bio ? '' : profile.bio,
      activities: loading || !profile.activities ? '' : profile.activities,
      twitter: loading || !profile.twitter ? '' : profile.twitter,
      facebook: loading || !profile.facebook ? '' : profile.facebook,
      youtube: loading || !profile.youtube ? '' : profile.youtube,
      instagram: loading || !profile.instagram ? '' : profile.instagram,
      website: loading || !profile.website ? '' : profile.website,
    });

  }, [loading, getCurrentProfile]);
  
  const {
    status,
    rvtype,
    wherefrom,
    agerange,
    bio,
    preference,
    activity,
    twitter,
    facebook,
    youtube,
    instagram,
    website
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Redirect to='/dashboard' />
  ) : (
    <>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to create your RV Social Profile!
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={onSubmit}>
      <div className='form-group'>
          <select name='status' value={status} onChange={onChange}>
            <option value='0'>* Select Rver Status</option>
            <option value='Full-time Retired Rver'>Full-time Retired Rver</option>
            <option value='Full-time Working Rver'>Full-time Working Rver</option>
            <option value='Vacationer'>Vacationer</option>
            <option value='Weekender'>Weekender</option>
           </select>
          <small className='form-text'>
            Give us an idea of what type of RV enthusiast you are!
          </small>
        </div>
        <div className='form-group'>
          <select name='rvtype' value={rvtype} onChange={onChange}>
            <option value='0'>* Select RV Type</option>
            <option value='Class A Motorhome'>Class A Motorhome</option>
            <option value='Class C Motorhome'>Class C Motorhome</option>
            <option value='Class B Camper Van'>Class B Camper Van</option>
            <option value='Fifth Wheeel Camper'>Fifth Wheeel Camper</option>
            <option value='Toy Hauler'>Toy Hauler</option>
            <option value='Travel Trailer'>Travel Trailer</option>
            <option value='Teardrop Camper'>Teardrop Camper</option>
            <option value='Truck Camper'>Truck Camper</option>
            <option value='Pop-up Camper'>Pop-up Camper</option>
           </select>
          <small className='form-text'>
            What kind of camper do you own?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Where are you from?'
            name='wherefrom'
            value={wherefrom}
            onChange={onChange}
          />
          <small className='form-text'>
            Where are you from?
          </small>
        </div>
        <div className='form-group'>
          <select name='agerange' value={agerange} onChange={onChange}>
            <option value='0'>* Select Your Age Range</option>
            <option value='Twenties'>Twenties</option>
            <option value='Thirties'>Thirties</option>
            <option value='Fourties'>Fourties</option>
            <option value='Fifty +'>Fifty +</option>
           </select>
          <small className='form-text'>
            What is your age range?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Boon-docking or hookups?'
            name='preference'
            value={preference}
            onChange={onChange}
          />
          <small className='form-text'>
            Do you prefer to camp off the grid or in campgrounds with hookups?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Hiking, canoeing, riding bikes, picnics, campfires, etc'
            name='activity'
            value={activity}
            onChange={onChange}
          />
          <small className='form-text'>
            Favorite activites to do while camping
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='A brief bio of yourself'
            name='bio'
            value={bio}
            onChange={onChange}
          />
          <small className='form-text'>
            Why do you like the camping lifestyle?
          </small>
        </div>
        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <>
            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={onChange}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={onChange}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={onChange}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={onChange}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fas fa-globe fa-2x' />
              <input
                type='text'
                placeholder='Website URL'
                name='website'
                value={website}
                onChange={onChange}
              />
            </div>
          </>
        )}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile },
)(withRouter(EditProfile));