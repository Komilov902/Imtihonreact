import { useState } from 'react';
import './page-1.css';
import checked from '../img/checked-removebg-preview.png'
function PageOne() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOnFocus = () => {
    if (phone === '') {
      setPhone('+998 ');
    }
  };

  const handleBlur = () => {
    if (phone === '+998 ') {
      setPhone('');
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9+ ]/g, '');
    if (!value.startsWith('+998 ')) {
      value = '+998 ' + value.replace('+998', '').trim();
    }
    if (value.length > 14) {
      value = value.slice(0, 14);
    }
    setPhone(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;

    const nameWithoutNumbers = value.replace(/[0-9]/g, '');

    setName(nameWithoutNumbers);

    const regex = /[.,;:"]/;
    setNameError(regex.test(nameWithoutNumbers));
  };

  const handleSubmit = () => {
    const nameRegex = /[.,;:"]/;
    if (name.trim() === '' || nameRegex.test(name)) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (phone.length < 14) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (name.trim() !== '' && !nameRegex.test(name) && phone.length === 14) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='page-1'>
      <div className="container">
        <div className="p1">
          <h1 className='w'>Веб-программирование</h1>
          <br />
          <h1 style={{ fontSize: '27px' }}>Освой профессию веб-разработчика</h1>
          <article>
            <input
              placeholder='Ваше имя'
              type="text"
              value={name}
              onChange={handleNameChange}
              style={{ border: nameError ? '2px solid red' : '1px solid white' }} // Red border for invalid name
            />
            <input
              value={phone}
              onFocus={handleOnFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder='+998 (99) 999 9999'
              type='text'
              style={{ border: phoneError ? '2px solid red' : '1px solid white' }}
            />
            <button onClick={handleSubmit}>Записаться</button>
          </article>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="custom-modal">
            <div className="custom-modal-body">
              <img src={checked} alt="" />
              <h2>Your request is accepted!</h2>
              <p>Our staff members will be with you in 3 days.</p>
              <button className="custom-modal-button" onClick={closeModal}>Come back</button>
            </div>
          </div>
        </div>
      )}

      <div className="bgc">
        <div className="page-1-foot container">
          <article>
            <h1>Длительность курса: <br /> <span>10 месяцев</span></h1>
          </article>
          <article>
            <h1>Количество уроков: <br /> <span>80 уроков</span></h1>
          </article>
          <article>
            <h1>Форматы обучения: <br /> <span>Очно / онлайн</span></h1>
          </article>
          <article>
            <h1>Длительность урока: <br /> <span>2 часа</span></h1>
          </article>
        </div>
      </div>
    </div>
  );
}

export default PageOne;
