// src/Courses/CourseCard.jsx
import React from 'react';

const CourseCard = ({ image, title, description, buttonText, onEnroll }) => {
  return (
    <div className="course-card">
      <div className="course-card__image">
        <img src={image} alt={title} />
      </div>
      <h3 className="course-card__title">{title}</h3>
      <p className="course-card__description">{description}</p>
      <button className="course-card__button" onClick={onEnroll}>{buttonText}</button>
    </div>
  );
};

export default CourseCard;
