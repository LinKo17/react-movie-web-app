// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    // console.log(pathname)

    useEffect(() => {
        window.scrollTo(0, 0);

        // console.log("enter this")
        
    }, [pathname]);

    return null;
};

export default ScrollToTop;
