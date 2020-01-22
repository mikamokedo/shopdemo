import React, { Component } from 'react';
import Index from '../components/Index.js';
import Checkout from '../components/Checkout.js';
import Contact from '../components/Contact.js';
import NotFound from '../components/Notfound.js';
import SupportArea from '../components/SuportArea.js';
import SingleProduct from '../components/SingleProduct.js';




const routers = [
    {
        path:'/',
        exact: true,
        component: () => <Index />
    },
    {
        path:'/Checkout',
        exact: true,
        component: () => <Checkout />
    },
    {
        path:'/Contact',
        exact: true,
        component: () => <Contact />
    },
    {
        path:'/:cate/:slug.:id.html',
        exact: true,
        component: (match) => <SingleProduct match={match}/>
    },
    {
        path:'',
        exact: true,
        component: () => <NotFound />
    }

];

export default routers;