import React, { Component } from 'react';
import Exercise from './Exercise';
import downArrow from '../assets/downArrow.svg';
import upArrow from '../assets/upArrow.svg';
import './Section.css';

class Section extends Component { 
  constructor(props) {
    super(props);
    this.name = props.name;
    this.imageUri = props.imageUri;
    this.exercises = props.exercises;
    this.state = {
      isHidden: true
    }
  }

  toggleHidden() {
    this.setState({isHidden: !this.state.isHidden});
  }

  render() {
    return (
      <div className="Section">
        <div className="Section-row" key={this.name}>
          <div className="Section-info">
            <img src={this.imageUri} alt={this.name} className="Section-image" />
            <div className="Section-title">{this.name}</div>
          </div>
          <div className="toggle" onClick={this.toggleHidden.bind(this)}>
            <img src={this.state.isHidden ? downArrow : upArrow} alt="" />
          </div>
        </div>
        {!this.state.isHidden ? 
          this.exercises.map(exercise => 
            <Exercise 
              key={exercise.id}
              name={exercise.name}
              peerReviewDue={exercise.peerReviewDue}
              imageUri={exercise.imageUri} />
          ) : 
          null}
      </div>
    )
  }
}

export default Section;
