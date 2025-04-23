import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Success from '../../Components/Success/Success';
import { useLoaderData } from 'react-router';
import Lawyers from '../../Components/Lawyers/Lawyers';

const Home = () => {
    const data = useLoaderData();

    return (
        <>
            <Banner></Banner>
            <Lawyers lawyers={data}></Lawyers>
            <Success></Success>
        </>
    );
};

export default Home;