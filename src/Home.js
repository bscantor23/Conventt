import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container-home">
        <div className="logo-container">
            <img className="logo" src="img/generalAssets/logo.png" alt=""/>
        </div>
        <div className="info-home-container">
            <p>¡Bienvenido a Conventt!</p>
            <hr/>
        </div>
        <div className="buttons-container">
            <div className="double-button">
                <a href="/double">
                    <img className="img-button-1" src="img/generalAssets/doubleGroup.png" alt=""/>
                </a>
                <hr/>
            </div>
            <div className="triple-button">
                <a href="/triple">
                    <img className="img-button-2" src="img/generalAssets/tripleGroup.png" alt=""/>            
                </a>
                <hr/>
            </div>
        </div>
    </div>
  );
}

export default Home;
