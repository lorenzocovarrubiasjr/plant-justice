import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from  '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';
import CollectionPreview  from '../collection/collection-preview.component.jsx';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.filter((collection, idx) => idx < 1).map(
                ({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />)
            )
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);