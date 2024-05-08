import React from 'react';
import Main from './main';
import LoadingScreen from './loading_screen';


const Home = () => {
    return (
        <div>
            <LoadingScreen />
            <Main/>
        </div>
    );
}

export default Home;
