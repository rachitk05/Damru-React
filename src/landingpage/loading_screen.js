import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3100); // simulate loading time
  }, []);
  
    return (
      !isLoaded && (<div className='loading'>
            <div className='logo'>
                <img src="https://damru.rishihood.edu.in/images/welcome-3688628-3231459.webp" alt="" style={{width: '350px'}} />
            </div>
            <div className='dots animate'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
        </div>)
    );
}

export default LoadingScreen;


