import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7fafbe43ad20e974cfe756a3316f4fe5&format=json&nojsoncallback=1&per_page=10')
      .then(response => response.json())
      .then(photos => this.setState({ photos: photos.photos.photo }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { photos, searchField } = this.state;
    const filteredPhotos = photos.filter(photo =>
      photo.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Find Users</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList photos={filteredPhotos} />
      </div>
    );
  }
}

export default App;
