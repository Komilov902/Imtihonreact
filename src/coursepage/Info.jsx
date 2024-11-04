import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard2';
import EnrollmentModal from './Enrollment'; 
import Navbar from '../Nav/Navbar';
import Footer from '../footer/Footer';
import './courses2.css'; // Import your CSS file for styling

const Info = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true); // New state for loading

  useEffect(() => {
    fetch('/public/db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCourses(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error("Error fetching course data:", error);
        setIsLoading(false); // Also set loading to false in case of an error
      });
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
    <div className="st">
      <Navbar />
      <div className="courses-container">
        {isLoading ? ( // Conditional rendering based on loading state
          <div className="loader">Loading...</div> // Loading spinner
        ) : (
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
        )}

        {isModalOpen && (
          <EnrollmentModal 
            onClose={handleCloseModal} 
            onSuccess={handleFormSubmit}
          />
        )}

        {successMessage && <p style={{ fontSize: '30px' }} className="courses-success">{successMessage}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Info;
