import { Component } from 'react'
import Header from './partials/header'

export default class Roster extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="h-screen bg-gray-200 flex flex-col py-20 items-center">
          <h1 className="text-black font-bold">Roster page</h1>
        </main>
      </>
    )
  }
}
