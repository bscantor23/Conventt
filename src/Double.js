import React from 'react';
import './Double.css';

function Double() {
  return (
    <div className="container-double">
        <div className="d-diagram-container">
            <div className="d-diagram-component">
                <div className="d-title-diagram-section">
                    <h1>DIAGRAMA</h1>
                    <hr/>
                </div>
                <div className="double-diagram-section">
                    <div className="d-diagram-item">
                        <div className="d-diagram-A-item">
                            <h2>315</h2>
                        </div>
                        <div className="d-diagram-AnB-item">
                            <h2>103</h2>
                        </div>
                        <div className="d-diagram-B-item">
                            <h2>210</h2>
                        </div>
                        <div className="d-diagram-com-item">
                            <h2>72</h2>
                        </div>
                    </div>
                    <div className="d-diagram-universe-item">
                        <h2>700</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-button-return">
            <a href="/">
                <img src="../img/generalAssets/returnButton.png" alt=""/>
            </a>
        </div>
        <div className="info-double-container">
            <div className="d-information-component">
                <div className="d-title-form-section">
                    <div className="d-title-form">
                        <h2>Información Recopilada</h2>
                        <hr/>
                    </div>
                    <img src="../img/generalAssets/doubleGroup.png" alt=""/>
                </div>
                <div className="d-form-container">
                    <div className="d-form-row-1">
                        <div>
                            <label for="universo">Universo: </label>
                            <input type="number" id="universo" placeholder="Digite un valor" required/>
                        </div>
                        <div>
                            <label for="conA">Conjunto A: </label>
                            <input type="number" id="conA" placeholder="Digite un valor" required/>
                        </div>
                    </div>
                    <div className="d-form-row-2">
                        <div>
                            <label for="conB">Conjunto B: </label>
                            <input type="number" id="conB" placeholder="Digite un valor" required/>
                        </div>
                        <div>
                            <label for="conC">Conjunto C: </label>
                            <input type="number" id="conC" placeholder="Digite un valor" required/>  
                        </div>
                    </div>
                </div>
                <div className="d-button-form">
                    <button id="calculate" className="d-button-calculate">CALCULAR</button>
                </div>
            </div>
            <div className="d-results-container">
                <div className="d-title-results-section">
                    <h2>Resultados</h2>
                    <hr/>
                </div>
                <div className="d-result-item">
                    <p>A = 418</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble1.png" alt=""/>
                </div>
                <div className="d-result-item">
                    <p>AnB = 103</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble2.png" alt=""/>
                </div>
                <div className="d-result-item">
                    <p>B = 313</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble3.png" alt=""/>
                </div>

                <hr className="d-row-result-1"/>

                <div className="d-result-item">
                    <p>A-B = 315</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble4.png" alt=""/>
                </div>
                <div className="d-result-item">
                    <p>AuB = 628</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble5.png" alt=""/>
                </div>
                <div className="d-result-item">
                    <p>B-A = 210</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble6.png" alt=""/>
                </div>

                <hr className="d-row-result-2"/>

                <div className="d-result-item">
                    <p>B<sup>C</sup> = 387</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble7.png" alt=""/>
                </div>
                <div className="d-result-item">
                    <p>(AuB)<sup>C</sup> = 72</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble8.png" alt=""/>
                </div>
                <div className="d-result-item">
                    <p>A<sup>C</sup> = 282</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble9.png" alt=""/>
                </div>

                <hr className="d-row-result-3"/>

                <div className="d-result-item">
                    <p>B<sup>C</sup>u(AnB)</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble10.png" alt=""/>
                    <p>490</p>
                </div>
                <div className="d-result-item">
                    <p>(AnB)u(AuB)<sup>C</sup></p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble11.png" alt=""/>
                    <p>103</p>
                </div>
                <div className="d-result-item">
                    <p>A<sup>C</sup>u(AnB)</p>
                    <img className="d-img-result" src="../img/doubleAssets/venttDouble12.png" alt=""/>
                    <p>385</p>
                </div>

                <hr className="d-row-result-4"/>

            </div>
        </div>
    </div>
  );
}

export default Double;
