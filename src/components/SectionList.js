import React, { Component } from 'react';
import './SectionList.css';
import SectionHeader from './SectionHeader';
import Section from './Section';


class SectionList extends Component {
  render() {
    return (
      <div className="SectionList">
        <SectionHeader />
        {this.props.sections.map((section) => 
          <Section
            key={section.name} // duplicate section.id in mockData
            name={section.name}
            imageUri={section.imageUri} 
            exercises={section.exercises} />
        )}
      </div>
    );
  }
}

export default SectionList;
