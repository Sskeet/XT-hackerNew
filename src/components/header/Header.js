import React from 'react';
import './header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">Hacker News</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">New <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Past</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Comments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">ask</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">show</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">jobs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">submit</a>
          </li>
        </ul>
      </div>
    </nav>

  )
};

export default Header;