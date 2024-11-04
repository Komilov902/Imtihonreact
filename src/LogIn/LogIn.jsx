import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Login.css";
import Navbar from "../Nav/Navbar";
import logo from '../img/v-high-resolution-logo-removebg-preview.png'

function LogIn() {
  const [form, setForm] = useState({
    name: "",
    phone: "+998",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    phone: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [isChecked, setIsChecked] = useState(false); // Checkbox state
  const [checkboxError, setCheckboxError] = useState(""); // Checkbox error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\+998\d{0,9}$/.test(value) || value === "+998") {
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
      }
    } else if (name === "password") {
      if (value.length <= 8) {
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
      }
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const validateForm = () => {
    let phoneError = "";
    let passwordError = "";

    if (form.phone.length !== 13) {
      phoneError = "Phone number must be 13 characters including +998.";
    }

    if (form.password.length !== 8) {
      passwordError = "Password must be exactly 8 characters.";
    }

    setErrors({ phone: phoneError, password: passwordError });
    return !phoneError && !passwordError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Agar checkbox belgilanmagan bo'lsa, xato xabari chiqadi
    if (!isChecked) {
      setCheckboxError("Пожалуйста, примите условия соглашения.");
      return;
    } else {
      setCheckboxError(""); // Agar checkbox belgilangan bo'lsa, xato xabar o'chadi
    }

    // Formani tasdiqlash
    if (validateForm()) {
      setShowModal(true); // Show the modal on successful submission
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  // Checkbox holatini boshqarish uchun funksiya
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (checkboxError) {
      setCheckboxError(""); // Checkbox belgilanganda xato xabari o'chadi
    }
  };

  return (
    <div className="for-nav">
      <Navbar />
      <div className="form-container">
        <div className="form-pos">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="form-style"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="form-style"
                required
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="form-style"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="form-style"
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            {/* Checkbox */}
            <div className="form-group">
              <label id="checked">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />{" "}
                <p style={{ color: "white" }}>Я принимаю условия соглашения</p>
              </label>
              {/* Agar checkbox belgilanmagan bo'lsa, xato xabari chiqadi */}
              {checkboxError && <p className="error">{checkboxError}</p>}
            </div>

            {/* Tugma faqat checkbox belgilanganda faollashadi */}
            <button type="submit" className="btn" disabled={!isChecked}>
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Modal for successful submission */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Вы успешно зарегистрировались!</h3>
            <Link to="/" onClick={closeModal}>
              <button className="modal-btn">Назад на главную</button>
            </Link>
          </div>
        </div>
      )}
      <div className="foot-back2">
        <div className="foot-cont2">
          <div className="foot-fl2">
            <div className="logo">
              <Link to="/">
                <img id="ver-lo" src={logo} alt="" />
              </Link>
            </div>
            <div className="navigation-foot">
              <ul>
                <Link to="home">
                  <li>Home</li>
                </Link>
                <Link to="about">
                  <li>About</li>
                </Link>
                <Link to="info">
                  <li>Info</li>
                </Link>
              </ul>
            </div>
            <div className="internet2">
              <Link target="_blank" to="https://www.facebook.com/">
                <svg viewBox="0 0 512 512">
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </Link>
              <Link target="_blank" to="https://www.instagram.com/">
                <svg viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </Link>
              <Link target="_blank" to="https://web.telegram.org/">
                <svg viewBox="0 0 496 512">
                  <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
