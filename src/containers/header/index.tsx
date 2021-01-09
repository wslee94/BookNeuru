import React from 'react';

export default function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <a href="">Title</a>
      </div>
      <div className="header__menu">
        <i className="fas fa-dumbbell"></i>
      </div>
      <div className="header__profile">
        <i className="fas fa-user"></i>
      </div>
    </nav>
  );
}
