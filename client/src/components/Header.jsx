import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <meta charset="utf-8" />
      <title>Daily Journal</title>
      <meta charset="utf-8" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="/css/styles.css" />
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <p className="navbar-brand">Latest Insights in Machine Learning</p>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/About">ABOUT US</Link>
            </li>
            <li>
              <Link to="/Contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;