import { Link } from "react-router-dom";

import  { useState, useEffect } from 'react';
import './not.css'
import Cursor from "../cursor/Cursor";

const Notfound = () => {
  const [rotation, setRotation] = useState({ xAxis: 0, yAxis: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      setRotation({ xAxis, yAxis });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section>
    <Cursor/>
      <div
        className="box"
        style={{
          transform: `rotateY(${rotation.xAxis}deg) rotateX(${rotation.yAxis}deg)`,
        }}
      >
        <h1>404</h1>
        <p>
        Sorry, no such page exists</p>
        <button><Link to='/'> Back to main</Link></button>
      </div>
    </section>
  );
};

export default Notfound;