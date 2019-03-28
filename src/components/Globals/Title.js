import React from 'react';

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1
          id="title_js__component"
          className="display-4 text-capitalize font-weight-bold"
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
