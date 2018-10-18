import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Card from './hoc/card'

const Profile = (props) => {

  const redir = () => {
//    return(
//      <Redirect to="/" />
//    );
    props.history.push('/');
  }

  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>Take me to /profile/posts</Link>

      {redir()}
    </div>
  )
}

export default Profile;
