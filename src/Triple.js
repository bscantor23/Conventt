import React, { Component } from 'react';
import './Triple.css';

class Triple extends Component {

    state = {
        universo: 0,
        conA: 0,
        conB: 0,
        conC: 0,
        conAnB: 0,
        conAnC: 0,
        conBnC: 0,
        conAnBnC: 0
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

    updateInputConC = (ev) => {
        this.setState({ conC: Number(ev.target.value) });
    }

    updateInputConAnB = (ev) => {
        this.setState({ conAnB: Number(ev.target.value) });
    }

    updateInputConAnC = (ev) => {
        this.setState({ conAnC: Number(ev.target.value) });
    }

    updateInputConBnC = (ev) => {
        this.setState({ conBnC: Number(ev.target.value) });
    }

    updateInputConAnBnC = (ev) => {
        this.setState({ conAnBnC: Number(ev.target.value) });
    }

    render() {

        const { universo, conA, conB, conC, conAnB,
            conAnC, conBnC, conAnBnC } = this.state;

        var ab = conAnB - conAnBnC;
        var ac = conAnC - conAnBnC;
        var bc = conBnC - conAnBnC;

        var a = conA - ab - ac - conAnBnC;
        var b = conB - ab - bc - conAnBnC;
        var c = conC - ac - bc - conAnBnC;

        var dif = (a < 0 ? 0 : a) + (b < 0 ? 0 : b) + (c < 0 ? 0 : c) +
            ab + ac + bc + conAnBnC;

        var com = universo - dif;   


        return (
            <div className="container-triple">
                <div className="t-diagram-container">
                    <div className="t-diagram-component">
                        <div className="t-title-diagram-section">
                            <h1>DIAGRAMA</h1>
                            <hr />
                        </div>
                        <div className="triple-diagram-section">
                            <div className="t-diagram-item">
                                <div className="t-diagram-A-item">
                                    <h2>{dif <= universo && a >= 0 && conA >= 0 && conAnB >= conAnBnC && conAnC >= conAnBnC ? a : "X"}</h2>
                                </div>
                                <div className="t-diagram-com-item">
                                    <h2>{com >= 0 && dif <= universo && conAnBnC >=0 &&  conAnB >= conAnBnC && conBnC >= conAnBnC && conAnC >= conAnBnC   ? com : "?"}</h2>
                                </div>
                                <div className="t-diagram-AnB-item">
                                    <h2>{dif <= universo  && ab >= 0 && conAnBnC >=0 ? ab : "X"}</h2>
                                </div>
                                <div className="t-diagram-AnBnC-item">
                                    <h2>{dif <= universo && conAnBnC >=0 ? conAnBnC : "X"}</h2>
                                </div>
                                <div className="t-diagram-AnC-item">
                                    <h2>{dif <= universo && ac >= 0 && conAnBnC >=0 ? ac : "X"}</h2>
                                </div>
                                <div className="t-diagram-B-item">
                                    <h2>{dif <= universo && b >= 0 && conB >= 0 && conAnB >= conAnBnC && conBnC >= conAnBnC ? b : "X"}</h2>
                                </div>
                                <div className="t-diagram-BnC-item">
                                    <h2>{dif <= universo && bc >= 0 && conAnBnC >=0 ? bc : "X"}</h2>
                                </div>
                                <div className="t-diagram-C-item">
                                    <h2>{dif <= universo && c >= 0 && conC >= 0 && conAnC >= conAnBnC && conBnC >= conAnBnC ? c : "X"}</h2>
                                </div>
                            </div>
                            <div className="t-diagram-universe-item">
                                <h2>{universo >= 0 ? universo : "?" }</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="t-button-return">
                    <a href="/">
                        <img src="../img/generalAssets/returnButton.png" alt="" />
                    </a>
                </div>
                <div className="info-triple-container">
                    <div className="t-information-component">
                        <div className="t-title-form-section">
                            <div className="t-title-form">
                                <h2>Información Recopilada</h2>
                                <hr />
                            </div>
                            <img className="triple-icon" src="../img/generalAssets/tripleGroup.png" alt="" />
                        </div>
                        <div className="t-form-container">
                            <div className="t-form-row-1">
                                <div>
                                    <label for="universo">Universo: </label>
                                    <input type="number" id="universo" placeholder="Digite un valor" onChange={this.updateInputUniverso} required />
                                </div>
                                <div>
                                    <label for="abnc">AnBnC: </label>
                                    <input type="number" id="abnc" placeholder="Digite un valor" onChange={this.updateInputConAnBnC} required />
                                </div>

                            </div>
                            <div className="t-form-row-2">
                                <div>
                                    <label for="anb">AnB: </label>
                                    <input type="number" id="anb" placeholder="Digite un valor" onChange={this.updateInputConAnB} required />
                                </div>
                                <div>
                                    <label for="anc">AnC: </label>
                                    <input type="number" id="anc" placeholder="Digite un valor" onChange={this.updateInputConAnC} required />
                                </div>

                            </div>
                            <hr />
                            <div className="t-form-row-3">
                                <div>
                                    <label for="bnc">BnC: </label>
                                    <input type="number" id="bnc" placeholder="Digite un valor" onChange={this.updateInputConBnC} required />
                                </div>
                                <div>
                                    <label for="conA">Conjunto A: </label>
                                    <input type="number" id="conA" placeholder="Digite un valor" onChange={this.updateInputConA} required />
                                </div>

                            </div>
                            <div className="t-form-row-4">

                                <div>
                                    <label for="conB">Conjunto B: </label>
                                    <input type="number" id="conB" placeholder="Digite un valor" onChange={this.updateInputConB} required />
                                </div>
                                <div>
                                    <label for="conC">Conjunto C: </label>
                                    <input type="number" id="conC" placeholder="Digite un valor" onChange={this.updateInputConC} required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="t-results-container">
                        <div className="t-title-results-section">
                            <h2>Resultados</h2>
                            <hr />
                        </div>
                        <div className="t-result-item">
                            <p>A = {dif <= universo && conA>=0 ? conA : "?"}</p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt1.png" alt="" />
                        </div>
                        <div className="t-result-item">
                            <p>B = {dif <= universo && conB>=0 ? conB : "?"}</p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt2.png" alt="" />
                        </div>
                        <div className="t-result-item">
                            <p>C = {dif <= universo && conC>=0 ? conC : "?"}</p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt3.png" alt="" />
                        </div>

                        <hr className="t-row-result-1" />

                        <div className="t-result-item">
                            <p>AnB-(AnBnC)</p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt4.png" alt="" />
                            <p>{dif <= universo && (conAnB - conAnBnC) >=0 ? conAnB - conAnBnC : "?"}</p>
                        </div>
                        <div className="t-result-item">
                            <p>AnC-(AnBnC)</p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt5.png" alt="" />
                            <p>{dif <= universo && (conAnC - conAnBnC) >=0 ? conAnC - conAnBnC : "?"}</p>
                        </div>
                        <div className="t-result-item">
                            <p>BnC-(AnBnC)</p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt6.png" alt="" />
                            <p>{dif <= universo && (conBnC - conAnBnC) >=0 ? conBnC - conAnBnC : "?"}</p>
                        </div>

                        <hr className="t-row-result-2" />

                        <div className="t-result-item">
                            <p>A-(BuC)</p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt7.png" alt="" />
                            <p>{dif <= universo && a>=0 && conAnB >= conAnBnC && conAnC >= conAnBnC  ? a : "?"}</p>
                        </div>
                        <div className="t-result-item">
                            <p>B-(AuC)</p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt8.png" alt="" />
                            <p>{dif <= universo && b>=0  && conAnB >= conAnBnC && conBnC >= conAnBnC    ? b : "?"}</p>
                        </div>
                        <div className="t-result-item">
                            <p>C-(AuB)</p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt9.png" alt="" />
                            <p>{dif <= universo && c>=0 && conAnC >= conAnBnC && conBnC >= conAnBnC   ? c : "?"}</p>
                        </div>

                        <hr className="t-row-result-3" />

                        <div className="t-result-item">
                            <p>(AnBnC)u(AuBuC)<sup>C</sup></p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt10.png" alt="" />
                            <p>{dif <= universo ? com + conAnBnC : "?"}</p>
                        </div>
                        <div className="t-result-item">
                            <p>AnBnC</p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt11.png" alt="" />
                            <p>{dif <= universo ? conAnBnC : "?"}</p>
                        </div>
                        <div className="t-result-item">
                            <p>(AuBuC)<sup>C</sup></p>
                            <img className="t-img-result" src="../img/tripleAssets/TripleVentt12.png" alt="" />
                            <p>{dif <= universo ? com : "?"}</p>
                        </div>

                        <hr className="t-row-result-4" />

                    </div>
                </div>
            </div>
        );
    }

}

export default Triple;
