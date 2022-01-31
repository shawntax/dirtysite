import { Component } from 'react';
// import { attributes } from '../content/pages/home.md';
import Header from './partials/header'

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="h-screen bg-black text-white flex flex-col justify-center items-center">
            <h2>This is the about page</h2>
        </main>
      </>
    );
  }
}