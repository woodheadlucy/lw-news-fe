import React from 'react';

const Error = ({ errorStatus, text }) => {
  return (
    <div>
      <p>Error status: {errorStatus}</p>
      <p>Something has gone wrong :(</p>
    </div>
  );
};

export default Error;
