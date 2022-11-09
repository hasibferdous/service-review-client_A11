import React from 'react';
import AboutService from '../AboutService/AboutService';
import Banner from '../Banner/Banner';
import OrderNow from '../OrderNow/OrderNow';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutService></AboutService>
            <OrderNow></OrderNow>
        </div>
    );
};

export default Home;