import React from 'react';
import SHOPDATA from './shop.data.jsx';
import CollectionPreview from '../../components/collection/collection-preview.component.jsx'

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOPDATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            
            <div className="shop-page">
                {
                    collections.filter((collection, idx) => idx < 1).map(
                        ({ id, ...otherCollectionProps }) => (
                            <CollectionPreview key={id} {...otherCollectionProps} />)
                    )
                }
            </div>
        )
    }
}

export default ShopPage;