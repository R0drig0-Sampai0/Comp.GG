import React, { useState } from 'react';
import './Boxes.css';

function Boxes() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="box-containerapex">
          <div className="boxapex">
            <h1 id="boxname">Apex Legends</h1>
              <div className="box-content"></div>
              <div className="box-content"></div>
              <div className="box-content"></div>
              <div className="box-content"></div>
          </div>
        </div>

        <div className="box-containerrocket">
          <div className="boxrocket">
            <h1 id="boxname">Rocket League</h1>
            <div className="box-content"></div>
            <div className="box-content"></div>
            <div className="box-content"></div>
            <div className="box-content"></div>
          </div>
        </div>

        <div className="box-containerrainbow">
          <div className="boxrainbow">
            <h1 id="boxname">Rainbow Six Siege</h1>
            <div className="box-content"></div>
            <div className="box-content"></div>
            <div className="box-content"></div>
            <div className="box-content"></div>
            </div>
        </div>

        <div className="box-containerbrawl">
          <div className="boxbrawl">
          <h1 id="boxname">Brawlhalla</h1>
            <div className="box-content"></div>
            <div className="box-content"></div>
            <div className="box-content"></div>
            <div className="box-content"></div>
            </div>
        </div>

        <div className="box-containercs">
          <div className="boxcs">
            <h1 id="boxname">Counter-Strike 2</h1>
            <div className="box-content"></div>
            <div className="box-content"></div>
            <div className="box-content"></div>
            <div className="box-content"></div>
          </div>
        </div>

      </div>
    </>

  );
}

export default Boxes;