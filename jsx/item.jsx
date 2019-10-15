import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  const {
    changeable,
    deletable,
    order,
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
        id={`item${order}State`}
        onClick={handleStateChange(itemId)}
        style={{ display: 'none' }}
      />
      <label
        htmlFor={`item${order}State`}
        className={`far ${isCompleted ? 'fa-check-circle' : 'fa-circle'}`}
      />
      {(isInputable => {
        if (isInputable) {
          return (
            <input
              type="text"
              value={name}
              onChange={handleChange(itemId)}
              onBlur={handleOnBlur(itemId)}
              onKeyPress={handleEnter(itemId)}
            />
          );
        }
        return (
          <div
            onMouseOver={handleMouseOver(itemId)}
            onMouseOut={handleMouseOut}
          >
            <p onDoubleClick={handleDoubleClick(itemId)}>{name}</p>
            <button
              type="button"
              id={`item${order}Delete`}
              onClick={handleDelete(itemId)}
              style={{ display: 'none' }}
            />
            <label
              htmlFor={`item${order}Delete`}
              className="fas fa-times"
              style={{ display: deletable ? 'inline-block' : 'none' }}
            />
          </div>
        );
      })(changeable)}
    </li>
  );
};

Item.propTypes = {
  changeable: PropTypes.bool.isRequired,
  deletable: PropTypes.bool.isRequired,
  order: PropTypes.number.isRequired,
  itemId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  handleDoubleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  handleEnter: PropTypes.func.isRequired,
  handleStateChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
};

export default Item;
