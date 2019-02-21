import React from 'react';

const Error = ({ errorStatus, text }) => {
  const imgScr = {
    404: 'URL',
    400: 'URL',
  };
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Error;
