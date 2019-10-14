import React from 'react';
import { Link } from 'react-router';

const Footer = props => {
  const { left, location, isClearable, handleClick } = props;
  return (
    <div>
      <p>{`${left} items left`}</p>
      <a
        href="/"
        className={
          location === '/all' ? 'active' : location === '/' ? 'active' : ''
        }
      >
        all
      </a>
      <a href="/active" className={location === '/active' ? 'active' : ''}>
        active
      </a>
      <a href="completed" className={location === '/completed' ? 'active' : ''}>
        completed
      </a>
      <button
        type="button"
        style={{ display: isClearable ? 'block' : 'none' }}
        onClick={handleClick}
      >
        Clear completed
      </button>
    </div>
  );
};

export default Footer;
