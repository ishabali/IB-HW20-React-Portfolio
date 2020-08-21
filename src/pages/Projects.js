import React, { Component } from "react";
import Card from "../components/Card";
import projects from "../projects.json"

class Projects extends Component {
  state = {
   projects
  };

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState)
  };



  render() {
    return (
      <div>
        <h1 className="text-center">Projects</h1>
        {this.state.projects.map(project => (
          <Card
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            github={project.github}
            deployed={project.deployed}
          />
        ))}
     

        {/* <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} /> */}
      </div>
    );
  }
}

export default Projects;
