import React from 'react';
import './card-list.css';

import Card from "../card/card";

function CardList(props) {
    return (
        <div className="card-list">
            { props.cats.map(cat => (
                <Card
                    key={ cat.id }
                    cat={ cat }
                />
            ))}
        </div>
    );
}

export default CardList;