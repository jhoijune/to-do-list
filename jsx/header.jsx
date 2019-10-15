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
    <div>
      <button
        type="button"
        onClick={handleClick}
        style={{
          opacity: isClickable ? 1 : 0,
          display: 'none',
        }}
        id="headerButton"
      />
      <label
        htmlFor="headerButton"
        className="fas fa-chevron-down"
        style={{ color: isAllCompleted ? 'black' : 'grey' }}
      />
      <input
        type="text"
        placeholder="What needs to be done"
        onChange={handleChange}
        onKeyPress={handleEnter}
        value={headerInput}
      />
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
