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
      <div className="middleLeft">
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
      </div>
      {(isInputable => {
        if (isInputable) {
          return (
            <div className="middleRight">
              <input
                type="text"
                value={name}
                onChange={handleChange(itemId)}
                onBlur={handleOnBlur(itemId)}
                onKeyPress={handleEnter(itemId)}
                autoFocus
              />
            </div>
          );
        }
        return (
          <div
            className="middleRight"
            onMouseOver={handleMouseOver(itemId)}
            onMouseOut={handleMouseOut}
            onDoubleClick={handleDoubleClick(itemId)}
          >
            <span className={isCompleted ? 'itemName completed' : 'itemName'}>
              {name}
            </span>
            <span className="deleteButton">
              <button
                type="button"
                id={`item${order}Delete`}
                onClick={handleDelete(itemId)}
                style={{ display: 'none' }}
              />
              <label
                htmlFor={`item${order}Delete`}
                className="fas fa-times"
                style={{ display: deletable ? 'inline' : 'none' }}
              />
            </span>
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
