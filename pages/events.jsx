import { Component } from 'react'
import Header from './partials/header'
import { attributes } from '../content/events/dns-at-your-moms-house.md'

export default class Events extends Component {
  render() {
    // let { hero_title, hero_subtitle } = attributes;
    return (
      <>
        <Header />
        <main className="h-screen bg-gray-200 flex flex-col py-20 items-center">
          <h1 className="text-black font-bold">Events page</h1>
        </main>
      </>
    )
  }
}
