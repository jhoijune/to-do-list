import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = props => {
  const { left, location, isClearable, handleClick } = props;
  return (
    <div className="helpingSection">
      <p>{`${left} items left`}</p>
      <div className="movingSection">
        <NavLink exact to="/">
          All
        </NavLink>
        <NavLink exact to="/active">
          Active
        </NavLink>
        <NavLink exact to="completed">
          Completed
        </NavLink>
      </div>
      {(det => {
        if (det) {
          return (
            <button
              type="button"
              style={{ display: isClearable ? 'block' : 'none' }}
              onClick={handleClick}
            >
              Clear completed
            </button>
          );
        }
        return <div />;
      })(isClearable)}
    </div>
  );
};

Footer.propTypes = {
  left: PropTypes.number.isRequired,
  isClearable: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Footer;
