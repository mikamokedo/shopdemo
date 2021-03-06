import React from 'react';
import Index from '../components/Index.js';
import Checkout from '../components/Checkout.js';
import NotFound from '../components/Notfound.js';
import SingleProduct from '../components/SingleProduct.js';
import OrderComplete from '../components/Ordercomplete';
import Admin from '../components/Admin';




const routers = [
    {
        path:'/',
        exact: true,
        component: () => <Index />
    },
    {
        path:'/Checkout',
        exact: true,
        component: (match) => <Checkout history={match}/>
    },
    {
        path:'/:cate/:slug.:id.html',
        exact: true,
        component: (match) => <SingleProduct match={match}/>
    },
    {
        path:'/order-success.html',
        exact: true,
        component: () => <OrderComplete />
    },
    {
        path:'/admin',
        exact: true,
        component: () => <Admin />
    },
    {
        path:'',
        exact: true,
        component: () => <NotFound />
    }
    

];

export default routers;