import React, { useState } from 'react';
import './EightBall.css'; // You can style the ball here.

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  function handleClick() {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIdx];
    setMsg(msg);
    setColor(color);
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: color, color: 'white', borderRadius: '50%', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', cursor: 'pointer' }}
    >
      <p>{msg}</p>
    </div>
  );
}

export default EightBall;
