import { Component } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { hero_title, hero_description } = attributes;
    return (
      <>
        <main>
          <h1 className="text-2xl">{hero_title}</h1>
          <p>{hero_description}</p>
        </main>
      </>
    );
  }
}
