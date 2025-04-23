import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Lawyer from '../../Components/Lawer/Lawyer';
import Success from '../../Components/Success/Success';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <>
            <Banner></Banner>
            <Lawyer></Lawyer>
            <Success></Success>
        </>
    );
};

export default Home;