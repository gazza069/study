import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/style';

class Layout extends Component {

    render() {
        return (<div>
            <Head>
                <title>{this.props.title}</title>
                <meta charSet='utf-8' />
                <meta neme='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            {style}
            <Header header={this.props.header} title={this.props.title} />
            {this.props.children}
            <Footer footer="copyright SYODA-Tuyano."/>
        </div>);
    }
}
export default Layout;