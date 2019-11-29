const INITIAL_STATE = {
    sections: [
        {
          title: 'plants',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-slaurentii_terracotta_4_1024x1024.jpg?v=1537308389',
          id: 1,
          linkUrl: 'shop/plants'
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
        ,
        {
          title: 'blog',
          imageUrl: 'http://wpmu.mah.se/nmict172group7/files/2017/09/blog.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        }
        /*,
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        } */
      ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }

}

export default directoryReducer;