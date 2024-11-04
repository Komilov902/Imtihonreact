
import { useState } from 'react';
import tr from "../img/tr.jpg";
import "./it.css";
import idk from "../img/ldk.jpg";
import ModalSwiper from "../modal-swiper/ModalSwiper";
import MSwiper from "../SModal/MSwiper";
import { Link } from "react-router-dom";
import jn from '../img/jn.jpg'
function Itabout() {
  const [ismodal, setModal] = useState(false);

  const showhandle = () => {
    setModal(true)
  };

  const hideHandle = () => {
    setModal(false)
  }
  const [ismodal2, setModal2] = useState(false);

  const showhandle2 = () => {
    setModal2(true)
  };

  const hideHandle2 = () => {
    setModal2(false)
  }
  return (
    <div className="container">
      <div className="big-info">
        <article>
          <h1>
            Изучайте IT-сферу в Академии <br /> <span>Vercel</span> IT и меняйте
            свою <br /> жизнь к лучшему
          </h1>
          <p>
            С помощью искуственного интеллекта курсы программирования <br /> в
            нашей академии систематизированы таким образом, <br /> что к моменту
            окончания учебы у вас будет <br /> достаточно знаний и хорошее
            портфолио
          </p>
        </article>
        <div className="bt-test">
          <img onClick={showhandle} src={tr} alt="" />
          <img id='idk2' onClick={showhandle2} src={idk} alt="" />
          <img src={jn} alt="" />
          <div className="galery2">
              <Link to='/galery'><p>Галерея {'>'}</p></Link>
          </div>
        </div>
        </div>
        {ismodal && <> <ModalSwiper hideHandle={hideHandle} />  </>}
        {ismodal2 && <> <MSwiper hideHandle2={hideHandle2} />  </>}
    </div>
  );
}

export default Itabout;
