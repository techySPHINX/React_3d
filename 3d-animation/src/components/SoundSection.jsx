import React from "react";

function SoundSection() {
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel the BASE</p>
          <span className="description">From thsi price to that price</span>
          <ul className='links'>
            <li>
                <button className='button'>Buy</button>
            </li>
            <li>
                <a className='link'>
                    Learn More
                </a>
            </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
