import './mentors.css';
import men from '../img/javohir.jpg';
import man from '../img/python.jpg';
import Marquee from "react-fast-marquee";
const Mentors = () => {
    return (
        <div className="marquee-container">
            <h2>Наши наставники</h2>
            <Marquee pauseOnHover={true} gradient={false}>
             
                    <div className="mentor">
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor">
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>
                    <div className="mentor">
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor">
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>
                    <div className="mentor">
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor">
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>
                    <div className="mentor">
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor">
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>
                    <div className="mentor">
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor">
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>
                    <div className="mentor">
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
               
            </Marquee>
        </div>
    );
};

export default Mentors;
