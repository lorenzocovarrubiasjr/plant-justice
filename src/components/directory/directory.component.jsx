import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: [
                {
                  title: 'plants',
                  imageUrl: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-slaurentii_terracotta_4_1024x1024.jpg?v=1537308389',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'design',
                  imageUrl: 'http://www.ecofriendlyhouses.net/uploads/images/plantwall.jpg',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'gear',
                  imageUrl: 'https://rupawear.com/wp-content/uploads/2018/01/t-shirt-Time-Eco-1.png',
                  id: 3,
                  linkUrl: ''
                }
                /*
                ,
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                } */
              ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
            {
                this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                    )
                    )
            }
            </div>
        )
        
    }
}

export default Directory;