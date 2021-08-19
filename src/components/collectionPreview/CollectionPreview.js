import React from 'react';
import './CollectionPreview.styles.scss';

import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemsProps }) => {
            return <CollectionItem className='item' key={id} {...otherItemsProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
