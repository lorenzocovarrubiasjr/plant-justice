import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, key, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='background-image'
            style={{ backgroundImage: `url(${imageUrl})`}} />
        <div className="content">
            <h1 className="title">{ title.toUpperCase() }</h1>
            {
                title !== 'blog' ? <span className="subtitle">Shop Now</span> 
                : <span className="subtitle">Read Now</span>
            }
            
        </div>
    </div>
)

export default withRouter(MenuItem);