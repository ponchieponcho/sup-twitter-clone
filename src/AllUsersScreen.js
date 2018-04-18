import React from 'react';
import SupList from './SupList';

const sups = [
    {id:'1', author: 'Jonathan', body:'Love to climb mountains and take pictures!', time: new Date(), image: "../images/jonathan.jpg"},
    {id:'2', author: 'Aaron', body:'Do you think I have imposter syndrome?', time: new Date(), image: "../images/aaron.jpg"},
    {id:'3', author: 'Illia', body:'In Ukraine, tv watch you.', time: new Date(), image: "../images/illia.jpg"},
    {id:'4', author: 'Illia', body:'What’s the definition of a Russian string quartet? A Soviet orchestra back from a US tour.', time: new Date(), image: "../images/illia.jpg"}
]

let AllUsersScreen = () => {
    return( 
    <SupList sups={sups} />
    )
}

export default AllUsersScreen;
