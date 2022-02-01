import { Component } from 'react'
// import { attributes } from '../content/pages/home.md';
import Header from './partials/header'

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="flex flex-col items-center py-20 h-screen bg-gray-200">
          <h1 className="font-bold text-black">This is the about page</h1>
        </main>
      </>
    )
  }
}
