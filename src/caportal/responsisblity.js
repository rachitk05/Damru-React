import React from 'react';
import "../styles/caportal.css"

function ResponsibilitySection() {
  return (
    <section id="responsibility">
      <div id="blue">
        <p id="res">What will be your responsibilities?</p>
        <div id="man">
          <img src="https://minio-api.alcheringa.in/alchercastatic/images/man.svg" alt="Man" />
          <div className="box-text">
            <div>
              <h2>College Branding</h2>
              <p>To act as a bridge between Damru, Rishihood University, and your respective college.</p>
              <p>Ensuring participation from your respective colleges for various events conducted by Kshitij.</p>
            </div>
            <div>
              <h2>Increasing Reach</h2>
              <p>Publicizing Damru in your respective colleges by circulating posters, mails or messages in the official college groups.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResponsibilitySection;
