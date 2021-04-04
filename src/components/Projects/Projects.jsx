import React, { Component } from 'react';
import { projects } from '../../configs';
import './Projects.css';
import ReactHtmlParser from 'react-html-parser';

class Projects extends Component {
  generateProjectsPanel = () => {
    return projects.map((project, index) => {
      const { desc } = project;

      return (<div className="ProjectsColumn" key={index} >
        <div className="mCard shadow cardOverride">
          <div className="mCard-content" style={{ flex: '1 1 auto' }}>
            <p>{ReactHtmlParser(desc)}</p>
          </div>
        </div>
      </div>);
    })
  }

  render() {
    return (
      <div id="Projects">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Projects</h1>
              <div className="listProjects">
                {this.generateProjectsPanel()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
