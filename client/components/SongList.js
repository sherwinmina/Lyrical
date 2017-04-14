import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {

  renderSongs() {
    return this.data.songs.data.songs.map(() => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    });
  }

  render () {
     console.log(this.props);
    if (this.props.data.loading) { return <div>Loading...</div>; }
    return (
      <div> 
        <ul className="collection">
         {this.renderSongs()}
        </ul>
        <Link 
          t="songs/new"
        >
        
        </Link>
      </div>
    )
  }
}

const query = gql`
  {
    songs {
      id
      title 
    }
  }
`;

export default graphql(query)(SongList);