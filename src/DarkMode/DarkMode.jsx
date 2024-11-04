import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  // Initialize darkMode state from local storage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; // Convert the string to boolean
  });

  useEffect(() => {
    // Update the class on body based on darkMode state
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Save the darkMode preference to local storage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkMode;
