import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="title">Some header</h1>
                <p className="header-description"> What exactly is React architecture, and how it helps in web development? Unlike other UI libraries and frameworks, Reactjs doesn't enforce an architecture pattern. It is just a view that caters to the user interface. Just beneath the user interface lies a tree of several React components.</p>
            </header>
        )
    }
}

export default Header;