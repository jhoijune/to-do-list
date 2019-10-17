import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const {
    handleClick,
    handleChange,
    handleEnter,
    headerInput,
    isAllCompleted,
    isClickable,
  } = props;
  return (
    <div className="heading">
      <div className="headingLeft">
        <button
          type="button"
          onClick={handleClick}
          style={{
            display: 'none',
          }}
          id="headerButton"
        />
        <label
          htmlFor="headerButton"
          className="fas fa-chevron-down"
          style={{
            color: isAllCompleted ? '#000' : '#e6e6e6',
            opacity: isClickable ? 1 : 0,
          }}
        />
      </div>
      <div className="headingRight">
        <input
          type="text"
          placeholder="What needs to be done"
          onChange={handleChange}
          onKeyPress={handleEnter}
          value={headerInput}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleEnter: PropTypes.func.isRequired,
  headerInput: PropTypes.string.isRequired,
  isAllCompleted: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
    .isRequired,
  isClickable: PropTypes.number.isRequired,
};

export default Header;
