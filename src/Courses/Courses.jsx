import React, { useState, useEffect } from 'react';
import './courses.css';
import CourseCard from './CourseCard';
import EnrollmentModal from './EnrollmentModal'; 

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch courses data from db.json
    fetch('/public/db.json')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error("Error fetching course data:", error));
  }, []);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
    setSuccessMessage('');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = () => {
    setSuccessMessage('Вы успешно зарегистрировались');
  };

  return (
    <div className="courses-container">
      <div className="courses-grid">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            description={course.description}
            buttonText={course.buttonText}
            onEnroll={handleEnrollClick}
          />
        ))}
      </div>

      {isModalOpen && (
        <EnrollmentModal 
          onClose={handleCloseModal} 
          onSuccess={handleFormSubmit}
        />
      )}

      {successMessage && <p style={{ fontSize: '30px' }} className="courses-success">{successMessage}</p>}
    </div>
  );
};

export default Courses;
