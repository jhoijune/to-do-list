import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const Helping = ({ left, isClearable, handleClick }) => (
  <div className="Helping">
    <p>{`${left} item left`}</p>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            All
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/active">
            Active
          </NavLink>
        </li>
        <li>
          <NavLink exact to="completed">
            Completed
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="removeComplete">
      {(det => {
        if (det) {
          return (
            <button
              title="Clear completed"
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

Helping.propTypes = {
  left: PropTypes.number.isRequired,
  isClearable: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Helping;
