import React from 'react';

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
          color: isAllCompleted ? 'black' : 'grey',
          opacity: isClickable ? 1 : 0,
        }}
      >
        V
      </button>
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

export default Header;
