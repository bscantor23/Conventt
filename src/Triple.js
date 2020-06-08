import React from 'react';
import './Triple.css';

function Triple() {
  return (
    <div className="container-triple">
        <div className="t-diagram-container">
            <div className="t-diagram-component">
                <div className="t-title-diagram-section">
                    <h1>DIAGRAMA</h1>
                    <hr/>
                </div>
                <div className="triple-diagram-section">
                    <div className="t-diagram-item">
                        <div className="t-diagram-A-item">
                            <h2>200</h2>
                        </div>
                        <div className="t-diagram-com-item">
                            <h2>72</h2>
                        </div>
                        <div className="t-diagram-AnB-item">
                            <h2>105</h2>
                        </div>
                        <div className="t-diagram-AnBnC-item">
                            <h2>8</h2>
                        </div>
                        <div className="t-diagram-AnC-item">
                            <h2>7</h2>
                        </div>
                        <div className="t-diagram-B-item">
                            <h2>105</h2>
                        </div>
                        <div className="t-diagram-BnC-item">
                            <h2>25</h2>
                        </div>
                        <div className="t-diagram-C-item">
                            <h2>238</h2>
                        </div>
                    </div>
                    <div className="t-diagram-universe-item">
                        <h2>760</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="t-button-return">
            <a href="/">
                <img src="../img/generalAssets/returnButton.png" alt=""/>
            </a>
        </div>
        <div className="info-triple-container">
            <div className="t-information-component">
                <div className="t-title-form-section">
                    <div className="t-title-form">
                        <h2>Información Recopilada</h2>
                        <hr/>
                    </div>
                    <img className="triple-icon" src="../img/generalAssets/tripleGroup.png" alt=""/>
                </div>
                <div className="t-form-container">
                    <div className="t-form-row-1">
                        <div>
                            <label for="universo">Universo: </label>
                            <input type="number" id="universo" placeholder="Digite un valor" required/>
                        </div>
                        <div>
                            <label for="interseccion">AnB: </label>
                            <input type="number" id="interseccion" placeholder="Digite un valor" required/>
                        </div>
                    </div>
                    <div className="t-form-row-2">
                        <div>
                            <label for="conA">Conjunto A: </label>
                            <input type="number" id="conA" placeholder="Digite un valor" required/>
                        </div>
                        <div>
                            <label for="conB">Conjunto B: </label>
                            <input type="number" id="conB" placeholder="Digite un valor" required/>
                        </div>
                    </div>     
                    <hr/>
                    <div className="t-form-row-3">
                        <div>
                            <label for="anb">AnB: </label>
                            <input type="number" id="anb" placeholder="Digite un valor" required/>
                        </div>
                        <div>
                            <label for="anc">AnC: </label>
                            <input type="number" id="anc" placeholder="Digite un valor" required/>
                        </div>
                    </div>
                    <div className="t-form-row-4">
                        <div>
                            <label for="bnc">BnC: </label>
                            <input type="number" id="bnc" placeholder="Digite un valor" required/>
                        </div>
                        <div>
                            <label for="abnc">AnBnC: </label>
                            <input type="number" id="abnc" placeholder="Digite un valor" required/>
                        </div>
                    </div>
                </div>
                <div className="t-button-form">
                    <button id="calculate" className="t-button-calculate">CALCULAR</button>
                </div>
            </div>
            <div className="t-results-container">
                <div className="t-title-results-section">
                    <h2>Resultados</h2>
                    <hr/>
                </div>
                <div className="t-result-item">
                    <p>A = 320</p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt1.png" alt=""/>
                </div>
                <div className="t-result-item">
                    <p>B = 243</p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt2.png" alt=""/>
                </div>
                <div className="t-result-item">
                    <p>C = 278</p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt3.png" alt=""/>
                </div>

                <hr className="t-row-result-1"/>

                <div className="t-result-item">
                    <p>A-B-(AnBnC)</p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt4.png" alt=""/>
                    <p>105</p>
                </div>
                <div className="t-result-item">
                    <p>AnC-(AnBnC)</p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt5.png" alt=""/>
                    <p>7</p>
                </div>
                <div className="t-result-item">
                    <p>BnC-(AnBnC)</p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt6.png" alt=""/>
                    <p>25</p>
                </div>

                <hr className="t-row-result-2"/>

                <div className="t-result-item">
                    <p>A-(BuC)</p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt7.png" alt=""/>
                    <p>200</p>
                </div>
                <div className="t-result-item">
                    <p>B-(AuC)</p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt8.png" alt=""/>
                    <p>105</p>
                </div>
                <div className="t-result-item">
                    <p>C-(AuB)</p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt9.png" alt=""/>
                    <p>238</p>
                </div>

                <hr className="t-row-result-3"/>

                <div className="t-result-item">
                    <p>(AnBnC)u(AuBuC)<sup>C</sup></p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt10.png" alt=""/>
                    <p>80</p>
                </div>
                <div className="t-result-item">
                    <p>AnBnC</p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt11.png" alt=""/>
                    <p>8</p>
                </div>
                <div className="t-result-item">
                    <p>(AuBuC)<sup>C</sup></p>
                    <img className="t-img-result" src="../img/tripleAssets/TripleVentt12.png" alt=""/>
                    <p>72</p>
                </div>

                <hr className="t-row-result-4"/>

            </div>
        </div>
    </div>
  );
}

export default Triple;
