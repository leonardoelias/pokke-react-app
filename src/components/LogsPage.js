import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class LogsPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <section>
                <h1>
        LogsPage
                </h1>
                <button><Link to='/login'>Get Started</Link></button>
                <button><Link to='/'>Learn More!</Link></button>
            </section>
        );
    }
}
