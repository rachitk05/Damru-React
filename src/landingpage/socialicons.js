import React from 'react';
import '../styles/footer.css';  // Assuming social icons are styled in footer.css

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="https://www.facebook.com/rishihood"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com/rishihooduni/"><i className="fab fa-twitter-square"></i></a>
            <a href="https://www.instagram.com/damru_fest"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/damru/"><i className="fab fa-linkedin"></i></a>
        </div>
    );
};

export default SocialIcons;
