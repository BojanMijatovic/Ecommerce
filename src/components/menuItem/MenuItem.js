import React from 'react';
import './MenuItem.styles.scss';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      {/*  add background image and imageUrl */}
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
