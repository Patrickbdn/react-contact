import React from 'react';
import PropTypes from 'prop-types';
import './contact.css'; // Ajoute un fichier CSS pour le style

export function Contact({ name, profileImage, isOnline }) {
  return (
    <div className="contact">
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <div className="contact-info">
        <p className="contact-name">{name}</p>
        <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Contact;
