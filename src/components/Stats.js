import React, { Component } from 'react';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.dicesRoll = this.dicesRoll.bind(this);
  }
  
  handleClick(event, statValue) {
    let element = event.target;
    let rollResult = this.dicesRoll();
    if(element.classList.contains('list-group-item')) {
      if(statValue >= rollResult) {
        element.classList.add('success');
        setTimeout(() => { element.classList.remove('success'); }, 3000);
      } else {
        element.classList.add('failure');
        setTimeout(() => { element.classList.remove('failure'); }, 3000);
      }
    }
    
  }
  
  dicesRoll() {
    let rollResult = Math.floor(Math.random() * 100);
    return rollResult;
  }
  
  render() {
    return (
      <div className="card col-12 col-sm-2 my-4 my-sm-0">
        <div className="card-body">
          <h5 className="card-title text-center">Statystyki</h5>
          <ul className="list-group">
            <li className="list-group-item" onClick={(event) => this.handleClick(event, this.props.stats.ww)}>WW: <span className="font-weight-bold">{this.props.stats.ww}</span></li>
            <li className="list-group-item" onClick={(event) => this.handleClick(event, this.props.stats.us)}>US: <span className="font-weight-bold">{this.props.stats.us}</span></li>
            <li className="list-group-item" onClick={(event) => this.handleClick(event, this.props.stats.k)}>K: <span className="font-weight-bold">{this.props.stats.k}</span></li>
            <li className="list-group-item" onClick={(event) => this.handleClick(event, this.props.stats.odp)}>Odp: <span className="font-weight-bold">{this.props.stats.odp}</span></li>
            <li className="list-group-item" onClick={(event) => this.handleClick(event, this.props.stats.zr)}>Zr: <span className="font-weight-bold">{this.props.stats.zr}</span></li>
            <li className="list-group-item" onClick={(event) => this.handleClick(event, this.props.stats.int)}>Int: <span className="font-weight-bold">{this.props.stats.int}</span></li>
            <li className="list-group-item" onClick={(event) => this.handleClick(event, this.props.stats.sw)}>Sw: <span className="font-weight-bold">{this.props.stats.sw}</span></li>
            <li className="list-group-item" onClick={(event) => this.handleClick(event, this.props.stats.ogd)}>Ogd: <span className="font-weight-bold">{this.props.stats.ogd}</span></li>
          </ul>
          <ul className="list-group mt-3">
            <li className="list-group-item">A: <span className="font-weight-bold">{this.props.stats.a}</span></li>
            <li className="list-group-item">Żyw: <span className="font-weight-bold">{this.props.stats.zyw}</span></li>
            <li className="list-group-item">S: <span className="font-weight-bold">{this.props.stats.s}</span></li>
            <li className="list-group-item">Wt: <span className="font-weight-bold">{this.props.stats.wt}</span></li>
            <li className="list-group-item">Sz: <span className="font-weight-bold">{this.props.stats.sz}</span></li>
            <li className="list-group-item">Mag: <span className="font-weight-bold">{this.props.stats.mag}</span></li>
            <li className="list-group-item">PO: <span className="font-weight-bold">{this.props.stats.po}</span></li>
            <li className="list-group-item">PP: <span className="font-weight-bold">{this.props.stats.pp}</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Stats;