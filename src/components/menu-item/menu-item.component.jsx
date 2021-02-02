import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)} // access to history through withRouter
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="shop-title">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
