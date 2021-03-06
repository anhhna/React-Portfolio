import React, { Component } from 'react';
import { about } from '../../configs';
import ReactHtmlParser from 'react-html-parser';

import './About.css';

class About extends Component {
  render() {
    return (
      <div id="About">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{`About ${about.firstName}`}</h1>
              <div className="content columns">
                <div className="column">
                  <img
                    src="https://picsum.photos/600/500"
                    alt="Profile"
                    className="aboutImage shadow"
                  />
                </div>
                <div className="column longDescription">
                  {
                    // about.longDesc.map((paragraph, index) => <p className="smallSpacing" key={index}>{ReactHtmlParser(paragraph)}</p>)
                    <p>{ReactHtmlParser(about.longDesc)}</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
