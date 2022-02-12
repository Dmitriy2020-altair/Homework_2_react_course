import React from "react";
import "./Main.css";
import Card from "../Card/Card";

class Main extends React.Component {
    // constructor(props) {
    //     super(props) {[

    //     ]}
    // }
    render() {
        return (
            <main className="container">
                <h2 className="main-title">Main container with cards</h2>
                <div className="cards-wrapper">
                <Card/>
                <Card/>
                <Card/>
                </div>
            </main>
        )
    }
}

export default Main;