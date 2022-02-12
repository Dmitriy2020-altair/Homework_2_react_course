/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <h1 className="footer-title">Some footer</h1>
                <a className="footer-link" href="#">powered by React</a>
                <div>2022</div>
            </footer>
        )
    }
}

export default Footer;