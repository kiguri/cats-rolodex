import React from 'react';
import './App.css';

import CardList from "./components/card-list/card-list";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ cats: users }));
    }

    render() {
        const { cats, searchField } = this.state;
        const filteredCats = cats.filter(cat =>
            cat.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <input
                    type='search'
                    placeholder='search cats'
                    onChange={ e => this.setState({searchField: e.target.value}) }
                />
                <CardList cats={filteredCats} />
            </div>
        );
    }
}

export default App;
