import React from "react";

class Socialicons extends React.Component {
  render() {
    return (
      <div className="social">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/rishihood">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://twitter.com/rishihooduni/">
            <i className="fab fa-twitter-square" />
          </a>
          <a href="https://www.instagram.com/damru_fest?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/company/damru/">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    );
  }
}

export default Socialicons;
