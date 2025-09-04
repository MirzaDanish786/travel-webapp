import React from 'react';

const Hamburger = ({ isActive, onClick }) => (
  <div
    className={`menu-btn-3 z-100 ${isActive ? 'active' : ''}`}
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <span></span>
  </div>
);

export default Hamburger;