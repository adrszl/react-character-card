import React from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modifierValue: 0,
      modifierType: '+',
      result: '',
      modifiedResult: '',
      activeIndex: -1
    };
    this.handleSkillClick = this.handleSkillClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.dicesRoll = this.dicesRoll.bind(this);
  }
  
  dicesRoll() {
    let rollResult = Math.floor(Math.random() * 100);
    return rollResult;
  }
  
  handleSkillClick(event, elementIndex) {
    let element = event.target;
    if(element.classList.contains('active-skill')) {
      element.classList.remove('active-skill');
      this.setState({ activeIndex: -1 });
    } else {
      element.classList.add('active-skill');
      this.setState({ activeIndex: elementIndex });
    }
  }
  
  handleChange(event) {
    this.setState({ modifierValue: event.target.value });
  }
  
  handleClick(type, elementIndex) {
    if(type === '+') {
      this.setState({ modifierType: '+', activeIndex: elementIndex });
    } else if (type === '-') {
      this.setState({ modifierType: '-', activeIndex: elementIndex });
    } else {
      if(this.state.modifierType === '+' || this.state.modifierType === '-') {
        let baseRoll = this.dicesRoll();
        let mVal = parseInt(this.state.modifierValue);
        this.setState({ result: baseRoll });
        if(this.state.modifierType === '+') this.setState({ modifiedResult: baseRoll + mVal });
        if(this.state.modifierType === '-') this.setState({ modifiedResult: baseRoll - mVal });
      }
    }
  }
  
  render() {
    let { result, modifiedResult } = this.state;
    let mappedSkills = this.props.skills.map( (skill, index) => {
      return ( 
        <li 
          key={`skill${index}`} 
          className="list-group-item skill"
          onClick={(event) => this.handleSkillClick(event, index)}>
          {skill}
          <p className="justify-content-between">
            <span>Modyfikator:</span>
            <span>
              <input 
                className="stats-value-input" 
                value={this.state.activeIndex === index ? this.state.modifierValue : ''} 
                onChange={this.handleChange} />
            </span>
            <button 
              type="button" 
              className={`btn btn-outline-secondary ${this.state.modifierType === '+' && this.state.activeIndex === index ? 'active' : ''}`} 
              onClick={() => this.handleClick('+', index)}>
              +
            </button>
            <button 
              type="button" 
              className={`btn btn-outline-secondary ${this.state.modifierType === '-' && this.state.activeIndex === index ? 'active' : ''}`}
              onClick={() => this.handleClick('-', index)}>
              -
            </button>
            <button 
              type="button" 
              className={'btn btn-outline-success'}
              onClick={() => this.handleClick('test')}>
              Test
            </button>
          </p>
          {result !== '' && this.state.activeIndex === index ? 
            <p className="justify-content-center skill__roll">Rzut: <strong>{result}</strong>, wynik: <strong>{modifiedResult}</strong></p> 
            : null}
        </li> 
      );
    });
    return (
      <div className="card col-12 col-sm-5 my-4 my-sm-0">
        <div className="card-body">
          <h5 className="card-title text-center">Umiejętności</h5>
          <ul className="list-group">
            {mappedSkills}
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;