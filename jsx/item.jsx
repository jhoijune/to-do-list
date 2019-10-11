/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-unused-expressions */
import React from 'react';

const Item = props => {
  const {
    changeable,
    deleteable,
    itemId,
    name,
    isCompleted,
    handleDoubleClick,
    handleChange,
    handleOnBlur,
    handleEnter,
    handleStateChange,
    handleDelete,
    handleMouseOver,
    handleMouseOut,
  } = props;
  return (
    <li>
      <input
        type="checkbox"
        onClick={handleStateChange(itemId)}
        checked={isCompleted}
      />
      {(isInputable => {
        if (isInputable) {
          return (
            <input
              type="text"
              value={name}
              onChange={handleChange(itemId)}
              onBlur={handleOnBlur(itemId)}
              onKeyUp={handleEnter(itemId)}
            />
          );
        }
        return (
          <div>
            <p
              onMouseOver={handleMouseOver(itemId)}
              onMouseOut={handleMouseOut}
              onDoubleClick={handleDoubleClick(itemId)}
            >
              {name}
            </p>
            <button
              type="button"
              onClick={handleDelete(itemId)}
              style={{ display: deleteable ? 'none' : 'inline-block' }}
            >
              X
            </button>
          </div>
        );
      })(changeable)}
    </li>
  );
};

export default Item;
