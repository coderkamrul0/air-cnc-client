import React from 'react';

const CategoryBox = ({label, icon: Icon}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 cursor-pointer'>
            <Icon size={26}/>
            <div className='text-sm font-medium'>{label}</div>
            
        </div>
    );
};

export default CategoryBox;