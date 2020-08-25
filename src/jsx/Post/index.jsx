import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Post = ({
  handleClick,
  handleChange,
  handleEnter,
  inputValue,
  isAllCompleted,
  isClickable,
}) => (
  <div className="Post">
    <div className="stateChange">
      <button type="button" onClick={handleClick} id="PostButton" />
      <label
        htmlFor="PostButton"
        className="fas fa-chevron-down"
        style={{
          color: isAllCompleted ? '#000' : '#e6e6e6',
          opacity: isClickable ? 1 : 0,
        }}
      />
    </div>
    <div className="postToDo">
      <input
        type="text"
        placeholder="What needs to be done"
        maxLength="200"
        onChange={handleChange}
        onKeyPress={handleEnter}
        value={inputValue}
      />
    </div>
  </div>
);

Post.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleEnter: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  isAllCompleted: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
    .isRequired,
  isClickable: PropTypes.number.isRequired,
};

export default Post;
