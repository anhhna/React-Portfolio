import React, { Component } from 'react';
import { publications } from '../../configs';
import './Publications.css';
import ReactHtmlParser from 'react-html-parser';

class Publications extends Component {
  groupPublications = publications.reduce((r, a) => {
    r[a.category] = [...r[a.category] || [], a];
    return r;
   }, {});

  generatePublicationsPanel = () => {
    return publications.map((publication, index) => {
      const { category, desc } = publication;

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
              <h1 className="title">Publications</h1>
              <div className="listPublications">
                {this.generatePublicationsPanel()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Publications;
