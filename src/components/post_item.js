import React from 'react';

const PostItem = (props) => {
  return (
    <div>
      Post {props.match.params.id} detail
    </div>
  )
}

export default PostItem;
