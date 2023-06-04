import React from 'react';
import Heading from '../Shared/Heading/Heading';

const Header = () => {
    return (
        <div className='pt-8'>
            <Heading title={'Veluvana bali - Owl Bamboo House'} subtitle={'Sidman, Indonesia'} center={false}/>
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img className='object-cover w-full' src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg" alt="Header Image" />
            </div>
        </div>
    );
};

export default Header;