import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component.jsx';
import HomeCarousel from '../../components/carousel/carousel.component.jsx';

const HomePage = () => (
    <div className="homepage">
        <HomeCarousel />
        <Directory />
    </div>
)

export default HomePage; 