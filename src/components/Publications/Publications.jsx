import React, { Component } from 'react';
import {about, projects} from '../../configs';
import './Publications.css';
import ReactHtmlParser from 'react-html-parser';

class Projects extends Component {
  generateProjectsPanel = () => {
    return projects.map((project, index) => {
      const { name, desc, image, demo, source } = project;

      return (<div className="PublicationsColumn" key={index} >
        <div className="mCardPub shadow cardPubOverride">
          <div className="mCardPub-content" style={{ flex: '1 1 auto' }}>
            <p>{ReactHtmlParser(desc)}</p>
          </div>
        </div>
      </div>);
    })
  }

  render() {
    return (
      <div id="Publications">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Projects</h1>
              {/*<div className="content columns">*/}
              <div className="listPublications">
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
