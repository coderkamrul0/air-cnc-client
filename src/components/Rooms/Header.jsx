import React from 'react';
import Heading from '../Shared/Heading/Heading';

const Header = ({roomData}) => {
    return (
        <div className='pt-8'>
            <Heading title={roomData.title} subtitle={roomData.location} center={false}/>
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img className='object-cover w-full' src={roomData.image} alt="Header Image" />
            </div>
        </div>
    );
};

export default Header;