import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.style.scss';

class HomeCarousel extends React.Component {
    constructor(){
        super()

        this.state = {
            slides: [
                {
                    id: 1,
                    imgUrl:'https://youhadmeatgardening.com/wp-content/uploads/2019/11/palm-leaves.jpg',
                    alt: 'Slide 1',
                    linksTo: '',
                },
                {
                    id: 2,
                    imgUrl:'https://i.pinimg.com/736x/33/a7/be/33a7be0a456f4b3b7074d591d5acc9ac--office-reception-reception-ideas.jpg',
                    alt: 'Slide 2',
                    linksTo: '',
                    },
                {
                    id: 3,
                    imgUrl:'https://travelx.me/wp-content/uploads/2018/10/vegetable-seedling-seedlings-in.jpg',
                    alt: 'Slide 3',
                    linksTo: '',
                        },
            ]
        }
    }

    render() {
        return (
            <Carousel className='home-carousel'>
                {
                    this.state.slides.map((slide) => (
                        <Carousel.Item key={slide.id}>
                            <img 
                            className='carousel-image'
                            src={slide.imgUrl}
                            alt={slide.alt}
                            />
                        </Carousel.Item>
                    )
                    )
                }
            </Carousel>
        )
    }
}

export default HomeCarousel;