import React, {Component} from 'react';
import {publications} from '../../configs';
import './Publications.css';
import ReactHtmlParser from 'react-html-parser';

class Publications extends Component {
    generatePublicationsPanel = () => {
        const rows = [];

        for (let i = 0; i < publications.length; i++)
        {
            const {category, desc} = publications[i]
            rows.push(<p><b>{ReactHtmlParser(category)}</b></p>)
            for (let j = 0; j < desc.length; j++)
            {
                rows.push(<div className="PublicationsColumn" key={i + j}>
                    <div className="mCardPub shadow cardPubOverride">
                        <div className="mCardPub-content" style={{flex: '1 1 auto'}}>
                            <p>[{j + 1}] {ReactHtmlParser(desc[j])}</p>
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
