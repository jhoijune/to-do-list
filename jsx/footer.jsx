import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = props => {
  const { left, location, isClearable, handleClick } = props;
  return (
    <div className="helpingSection">
      <p>{`${left} item left`}</p>
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
      <div className="deleteSection">
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
        })(isClearable)}
      </div>
    </div>
  );
};

Footer.propTypes = {
  left: PropTypes.number.isRequired,
  isClearable: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Footer;
