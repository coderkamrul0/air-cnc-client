import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';
import Card from './Card';
import Loader from '../Shared/Loader';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('./rooms.json')
        .then(res => res.json())
        .then(data => {
            setRooms(data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        })
    },[])
    if(loading){
        return <Loader/>
    }

    return (
        <Container>
            <div className='pt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                {rooms.map((room,index) => <Card room={room} key={index}/>)}
            </div>
        </Container>
    );
};

export default Rooms;