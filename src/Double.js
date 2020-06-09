import React, { Component } from 'react';
import './Double.css';

class Double extends Component {

    state = {
        universo: 0,
        conA: 0,
        conB: 0,
        conAnB: 0
    }

    updateInputUniverso = (ev) => {
        this.setState({ universo: Number(ev.target.value) });
    }

    updateInputConA = (ev) => {
        this.setState({ conA: Number(ev.target.value) });
    }

    updateInputConB = (ev) => {
        this.setState({ conB: Number(ev.target.value) });
    }

    updateInputConAnB = (ev) => {
        this.setState({ conAnB: Number(ev.target.value) });
    }

    render() {

        const { universo, conA, conB, conAnB } = this.state;

        var ab = conA - conAnB;
        var ba = conB - conAnB;

        var dif = (ab < 0 ? 0 : ab) + (ba < 0 ? 0 : ba) + conAnB;
        var com = universo - dif;

        return (
            <div className="container-double">
                <div className="d-diagram-container">
                    <div className="d-diagram-component">
                        <div className="d-title-diagram-section">
                            <h1>DIAGRAMA</h1>
                            <hr />
                        </div>
                        <div className="double-diagram-section">
                            <div className="d-diagram-item">
                                <div className="d-diagram-A-item">
                                    <h2>{dif <= universo && conAnB <= universo && conAnB >=0  ? (ab < 0 ? "X" : ab) : "X"}</h2>
                                </div>
                                <div className="d-diagram-AnB-item">
                                    <h2>{dif <= universo && conAnB <= universo && conAnB >=0 ? conAnB : "X"}</h2>
                                </div>
                                <div className="d-diagram-B-item">
                                    <h2>{dif <= universo && conAnB <= universo && conAnB >=0  ? (ba < 0 ? "X" : ba) : "X"}</h2>
                                </div>
                                <div className="d-diagram-com-item">
                                    <h2>{com >= 0 && conAnB>= 0 && dif <= universo && conAnB >=0  ? com : "?"}</h2>
                                </div>
                            </div>
                            <div className="d-diagram-universe-item">
                                <h2>{universo >= 0 ? universo : "?"}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-button-return">
                    <a href="/">
                        <img src="../img/generalAssets/returnButton.png" alt="" />
                    </a>
                </div>
                <div className="info-double-container">
                    <div className="d-information-component">
                        <div className="d-title-form-section">
                            <div className="d-title-form">
                                <h2>Información Recopilada</h2>
                                <hr />
                            </div>
                            <img src="../img/generalAssets/doubleGroup.png" alt="" />
                        </div>
                        <div className="d-form-container">
                            <div className="d-form-row-1">
                                <div>
                                    <label for="universo">Universo: </label>
                                    <input type="number" id="universo" placeholder="Digite un valor" onChange={this.updateInputUniverso} required />
                                </div>
                                <div>
                                    <label for="conAnB">AnB: </label>
                                    <input type="number" id="conAnB" placeholder="Digite un valor" onChange={this.updateInputConAnB} required />
                                </div>

                            </div>
                            <div className="d-form-row-2">
                                <div>
                                    <label for="conA">Conjunto A: </label>
                                    <input type="number" id="conA" placeholder="Digite un valor" onChange={this.updateInputConA} required />
                                </div>
                                <div>
                                    <label for="conB">Conjunto B: </label>
                                    <input type="number" id="conB" placeholder="Digite un valor" onChange={this.updateInputConB} required />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-results-container">
                        <div className="d-title-results-section">
                            <h2>Resultados</h2>
                            <hr />
                        </div>
                        <div className="d-result-item">
                            <p>A = {dif <= universo && conAnB <= universo && conAnB >=0 && ab >= 0  && ba >=0 ? conA : "?"}</p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble1.png" alt="" />
                        </div>
                        <div className="d-result-item">
                            <p>AnB = {dif <= universo && conAnB <= universo  && conAnB >=0 && ab >= 0 && ba >=0  ? conAnB : "?"}</p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble2.png" alt="" />
                        </div>
                        <div className="d-result-item">
                            <p>B = {dif <= universo && conAnB <= universo  && conAnB >=0 && ab >= 0 && ba >=0  ? conB : "?"}</p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble3.png" alt="" />
                        </div>

                        <hr className="d-row-result-1" />

                        <div className="d-result-item">
                            <p>A-B = {dif <= universo && conAnB <= universo  && conAnB >=0 && ab >= 0 && ba >=0  ? ab : "?"}</p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble4.png" alt="" />
                        </div>
                        <div className="d-result-item">
                            <p>AuB = {dif <= universo && conAnB <= universo  && conAnB >=0 && ab >= 0 && ba >=0  ? ab + conAnB + ba : "?"}</p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble5.png" alt="" />
                        </div>
                        <div className="d-result-item">
                            <p>B-A = {dif <= universo && conAnB <= universo  && conAnB >=0 && ab >= 0 && ba >=0  ? ba : "?"}</p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble6.png" alt="" />
                        </div>

                        <hr className="d-row-result-2" />

                        <div className="d-result-item">
                            <p>B<sup>C</sup> = {dif <= universo && conAnB <= universo  && conAnB >=0 && ab >= 0 && ba >=0  ? ab + com : "?"}</p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble7.png" alt="" />
                        </div>
                        <div className="d-result-item">
                            <p>(AuB)<sup>C</sup> = {dif <= universo && conAnB <= universo  && conAnB >=0 && ab >= 0 && ba >=0  ? com: "?"}</p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble8.png" alt="" />
                        </div>
                        <div className="d-result-item">
                            <p>A<sup>C</sup> = {dif <= universo && conAnB <= universo  && conAnB >=0 && ab >= 0 && ba >=0  ? ba + com : "?"} </p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble9.png" alt="" />
                        </div>

                        <hr className="d-row-result-3" />

                        <div className="d-result-item">
                            <p>Au(AuB)<sup>C</sup></p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble10.png" alt="" />
                            <p>{dif <= universo && conAnB <= universo && conAnB >=0 && ab >= 0 && ba >=0  ? conA + com : "?"}</p>
                        </div>
                        <div className="d-result-item">
                            <p>(AnB)u(AuB)<sup>C</sup></p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble11.png" alt="" />
                            <p>{dif <= universo && conAnB <= universo && conAnB >=0 && ab >= 0 && ba >=0  ? conAnB + com : "?"}   </p>
                        </div>
                        <div className="d-result-item">
                            <p>Bu(AuB)<sup>C</sup></p>
                            <img className="d-img-result" src="../img/doubleAssets/venttDouble12.png" alt="" />
                            <p>{dif <= universo && conAnB <= universo && conAnB >=0 && ab >= 0 && ba >=0  ? conB + com : "?"}</p>
                        </div>
                        <hr className="d-row-result-4" />
                    </div>
                </div>

            </div>
        );
    }
}

export default Double;
