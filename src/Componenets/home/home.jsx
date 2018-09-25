import List from '../ads/List'
import Filter from '../Header/Filter';
import React from 'react';

const Home = () => {
    return ( 
        <div className="home-page">
         <Filter />
        <List />
        </div>
     );
}
 
export default Home;