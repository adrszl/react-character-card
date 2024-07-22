import React, { Component } from 'react';

class Abilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    const { id } = event.target;

    if (this.state.active === id && id !== '') {
      this.setState({ active: '' });
    } else if (this.state.active === '' && id === '') {
        if(event.target.parentNode.id === '') {
          this.setState({ active: event.target.parentNode.parentNode.id });
        } else {
          this.setState({ active: event.target.parentNode.id });
        }
    } else this.setState({ active: id });
  }
  
  render() {
    let mappedAbilities = this.props.abilities.map( (ability, index) => {
      return ( 
        <li 
          id={`ability${index}`} 
          key={`ability${index}`}
          className={`list-group-item ability-${this.state.active === ("ability" + index) ? "active" : "hidden"}`}
          onClick={(event) => this.handleClick(event)} >
            <p><span className="ability__title">{ability}</span></p>
            <p className="ability-prop-container"><span className={`ability-props ability-${this.state.active === ("ability" + index) ? "active" : "hidden"}`}>
              {this.props.abilitiesDescription[ability]}
            </span></p>
        </li> );
    });
    return (
      <div className="card col-12 col-sm-5 my-4 my-sm-0">
        <div className="card-body">
          <h5 className="card-title text-center">Zdolności</h5>
          <ul className="list-group">
            {mappedAbilities}
          </ul>
        </div>
      </div>
    );
  }
}

export default Abilities;