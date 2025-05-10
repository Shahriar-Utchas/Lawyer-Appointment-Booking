import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Success from '../../Components/Success/Success';
import { useLoaderData } from 'react-router';
import Lawyers from '../../Components/Lawyers/Lawyers';
import { Helmet } from 'react-helmet';

const Home = () => {
    const data = useLoaderData();

    return (
        <>
        <Helmet>
            <title>Lawyer | Home</title>
        </Helmet>
            <Banner></Banner>
            <Lawyers lawyers={data}></Lawyers>
            <Success></Success>
        </>
    );
};

export default Home;