import React, {Component} from 'react';
import {publications} from '../../configs';
import './Publications.css';
import ReactHtmlParser from 'react-html-parser';

class Publications extends Component {
    groupPublications = publications.reduce((r, a) => {
        r[a.category] = [...r[a.category] || [], a];
        return r;
    }, {});

    generatePublicationsPanel = () => {
        const rows = [];
        for (const groupPublication in this.groupPublications) {
          rows.push(<p>{ReactHtmlParser(groupPublication)}</p>)
            for (let i = 0; i < this.groupPublications[groupPublication].length; i++) {
                const {_, desc} = this.groupPublications[groupPublication][i]
                rows.push(<div className="PublicationsColumn" key={groupPublication + i}>
                              <div className="mCardPub shadow cardPubOverride">
                                  <div className="mCardPub-content" style={{flex: '1 1 auto'}}>
                                      <p>{ReactHtmlParser(desc)}</p>
                                  </div>
                              </div>
                          </div>)
            }
        }

        return rows
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
