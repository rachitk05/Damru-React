import React from 'react';
import "../styles/caportal.css"

function BenefitsSection() {
  return (
    <section id="benefits">
      <div>
        <p className="joining">Why Become a Damru Campus Ambassador?</p>
      </div>
      <div className="benefit1">
        <div>
          <img src="https://minio-api.alcheringa.in/alchercastatic/images/perspaleta1_0016.png" alt='' style={{ display: 'unset' }} />
          <h2>Exclusive Connections:</h2>
          <p>As a Damru Campus Ambassador, you'll have the unique opportunity to connect with fellow students, faculty, and event organizers. Build relationships that go beyond the fest and last a lifetime.</p>
        </div>
        <div>
          <img src="https://minio-api.alcheringa.in/alchercastatic/images/perspaleta1_0003.png" alt='' style={{ display: 'unset' }} />
          <h2>Skill Development:</h2>
          <p>Hone your communication, marketing, and organizational skills in a real-world setting. Gain hands-on experience in event promotion and management that will set you apart in your academic and professional journey.</p>
        </div>
        <div>
          <img src="https://minio-api.alcheringa.in/alchercastatic/images/Luggage.png" alt='' style={{ display: 'unset' }} />
          <h2>Rewards:</h2>
          <p>Your efforts won't go unnoticed. Receive special recognition, certificates, Invitation to all events in “Damru”, merchandise, and exclusive perks as a token of our appreciation for your dedication and hard work.</p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
