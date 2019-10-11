import React from 'react';

const Footer = props => {
  const { left, location, isClearable, handleClick } = props;
  return (
    <div>
      <p>{`${left} items left`}</p>
      <a href="/" className={location === 'all' ? 'active' : ''}>
        all
      </a>
      <a href="/active" className={location === 'active' ? 'active' : ''}>
        active
      </a>
      <a href="completed" className={location === 'completed' ? 'active' : ''}>
        completed
      </a>
      <button
        type="button"
        style={{ display: isClearable ? 'display' : 'none' }}
        onClick={handleClick}
      >
        Clear completed
      </button>
    </div>
  );
};

export default Footer;

// router 참고해서 location 바꿔야 함
