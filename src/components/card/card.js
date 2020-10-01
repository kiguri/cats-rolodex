import React from 'react';
import './card.css';

function Card(props) {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.cat.id}?set=set4`} alt="cat"/>
            <h2> { props.cat.name } </h2>
            <p> { props.cat.email } </p>
        </div>
    );
}

export default Card;