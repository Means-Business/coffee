import React from 'react';

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h3 id="footer__component">
              all&nbsp;rights&nbsp;reserved &copy;
              {new Date().getFullYear().toString()}{' '}
              <span>Means&nbsp;Business&nbsp;Ltd.</span>
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
