import { Component } from 'react';
// import { attributes } from '../content/pages/home.md';
import Header from './partials/header'

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <main  className="h-screen bg-gray-200 flex flex-col py-20 items-center">
            <h1 className="text-black font-bold">This is the contact page</h1>
        </main>
      </>
    );
  }
}