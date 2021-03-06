import React from "react";
import { Button } from "reactstrap";
import { Map } from "../map/map";
import { FloodBackground } from "../floodBackground/floodBackground";
import { About } from "../../josh/About/About";
import { FaChevronDown, FaChevronCircleUp } from "react-icons/fa";

import "./home.css";

// ES6 Imports
import * as Scroll from "react-scroll";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

export class Home extends React.Component {

    constructor(props) {
        super( props );
        this.state = {
            hideTopButton:  false,
        };
    }

    componentDidMount() {
        Events.scrollEvent.register( "begin", ( to, element ) => {
            console.log( "begin", to );
        } );

        Events.scrollEvent.register( "end", ( to, element ) => {
            this.setState( { hideTopButton: to === undefined } );

        } );

        scrollSpy.update();

    }

    componentWillUnmount() {
        Events.scrollEvent.remove( "begin" );
        Events.scrollEvent.remove( "end" );
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="navbar">
                    <Link to="homeSection" spy={true} smooth={true} duration={500}>
                        <h5>Home</h5>
                    </Link>
                    <Link to="aboutSection" spy={true} smooth={true} duration={500}>
                        <h5>About</h5>
                    </Link>
                    <Link to="mapSection" spy={true} smooth={true} duration={500}>
                        <h5>Map</h5>
                    </Link>
                </div>
                <Element name="homeSection">
                <div>
                    <div className="title-wrapper">
                        <Link to="mapSection" spy={true} smooth={true} duration={500}>
                            <FaChevronDown className="down-button" />
                        </Link>
                        <div className="title-contents">
                            <h1>RAIN PAIN</h1>
                            <div className="raindrop-logo"></div>
                        </div>
                        <FloodBackground />
                    </div>
                    </div>
                </Element>

                <Element name="aboutSection">
                    <About />
                </Element>

                <Element name="mapSection">
                    <div className="about-section">
                        {!this.state.hideTopButton ?
                            <a className="top-button-wrapper" onClick={() => this.scrollToTop()}>
                                <FaChevronCircleUp className="top-button" /></a> : null}
                        <Map/>
                    </div>
                </Element>

            </div>
        );
    }
}
