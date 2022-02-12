import React from "react";
import "./Card.css";

class Card extends React.Component {
    render() {
        return (
            <div className="card-wrapper">
                <h1 className="card-title">Card title</h1>
                <p className="card-content"> A class component is a JavaScript class that extends React. Component which has a render method. ... On the other hand, when defining a class component, you have to make a class that extends React. Component . The JSX to render will be returned inside the render method.</p>
            </div>
        )
    }
}

export default Card;