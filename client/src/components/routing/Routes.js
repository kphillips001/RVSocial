import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../../components/profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddFavPlaces from '../profile-forms/AddFavPlaces';
import Profiles from '../../components/profiles/Profiles';
import Profile from '../../components/profile/Profile';
import Posts from '../../components/posts/Posts';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-favPlaces' component={AddFavPlaces} />  
        <PrivateRoute exact path='/posts' component={Posts} />  
      </Switch>
    </section>
  )
}

export default Routes;