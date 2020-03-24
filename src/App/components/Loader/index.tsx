import React from 'react';
import ReactLoaderSpinner from 'react-loader-spinner'

function Loader() {
  return (
    <div className="loading-container">
      <ReactLoaderSpinner
        type="Bars"
        color="#333"
      />
    </div>
  )
}

export default Loader;
