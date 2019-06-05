import React from 'react';

const Wrapper = (props) => {

  if (props.role === 'admin') {
    return (
      <div>{props.children}</div>
    );
  } else {
    return (
      <div>Access denied</div>
    );
  }

}

export default Wrapper;