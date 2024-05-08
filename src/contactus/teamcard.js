import React from 'react';
import '../styles/contactus.css';

const MemberCard = ({ name, role, image, linkedin, instagram, whatsapp }) => (
    <div className="member-card">
        <article className="card card--1">
            <div className="card__img" style={{ backgroundImage: `url('${image}')` }}></div>
            <div className="card__img--hover" style={{ backgroundImage: `url('${image}')` }}></div>
            <div className="card__info">
                <span className="card__category">{role}</span>
                <h3 className="card__title">{name}</h3>
                <span className="card__by">
                    <a href={linkedin} target="_blank" title="linkedin" rel="noreferrer"  class="card__author">
                        <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="" />
                    </a>
                    <a href={instagram} target="_blank" title="instagram" rel="noreferrer"  class="card__author">
                        <img src="https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png" alt="" />
                    </a>
                    <a href={whatsapp} target="_blank" title="whatsapp" rel="noreferrer"  class="card__author">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png" alt="" />
                    </a>
                </span>
            </div>
        </article>
    </div>
);

const TeamSection = () => {
    const members = [
        { name: "Rachit", role: "Tech Coordinator", image: "https://www.w3schools.com/howto/img_avatar.png", linkedin: "https://linkedin.com", instagram: "https://instagram.com", whatsapp: "https://wa.me/123" },
        { name: "Rachit", role: "Tech Coordinator", image: "https://www.w3schools.com/howto/img_avatar.png", linkedin: "https://linkedin.com", instagram: "https://instagram.com", whatsapp: "https://wa.me/123" },
        { name: "Rachit", role: "Tech Coordinator", image: "https://www.w3schools.com/howto/img_avatar.png", linkedin: "https://linkedin.com", instagram: "https://instagram.com", whatsapp: "https://wa.me/123" },
        { name: "Rachit", role: "Tech Coordinator", image: "https://www.w3schools.com/howto/img_avatar.png", linkedin: "https://linkedin.com", instagram: "https://instagram.com", whatsapp: "https://wa.me/123" },
        { name: "Rachit", role: "Tech Coordinator", image: "https://www.w3schools.com/howto/img_avatar.png", linkedin: "https://linkedin.com", instagram: "https://instagram.com", whatsapp: "https://wa.me/123" },

        // Add more members as needed...
    ];

    return (
        <div className="team-container">
            <div className="title"><h1>Meet The Organizing Team</h1></div>
            {members.map(member => (
                <MemberCard key={member.name} {...member} />
            ))}
        </div>
    );
};

export default TeamSection;
