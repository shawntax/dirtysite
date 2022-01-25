import { Component } from 'react';
import { attributes } from '../content/pages/home.md';

export default class Home extends Component {
  render() {
    let { hero_title, hero_subtitle } = attributes;
    return (
      <>
        <main className="h-screen bg-black text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl my-5">{hero_title}</h1>
          <p className="italic">{hero_subtitle}</p>
        </main>
      </>
    );
  }
}
