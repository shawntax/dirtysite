import { Component } from 'react';
// import { attributes } from '../content/pages/home.lg';
import Header from './partials/header'

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="h-screen bg-center bg-cover flex flex-col py-6 ">
          <div className="lg:flex justify-center" >
            <img className="absolute h-5/6 w-max opacity-30 -z-50 "  src="/rose-motif.png"/> 
            <img src="/Knives-yellow.png" className="h-72 lg:w-1/4 p-1 mx-auto my-8"/>         
            <img src="/jaxx-mask.webp"     className="h-72 lg:w-1/4 p-1 mx-auto mb-5 my-8"/>
            <img src="/hackjob-finished.png" className="h-72 lg:w-1/4 p-1 mx-auto mb-5 my-8"/>
            <img src="/cat-yolo-cropped.png " className="h-72 lg:w-1/4 p-1 mx-auto mb-5 my-8" /> 
          </div>
          <h1 className="text-black text-2xl font-bold px-20 py-10 text-center">Dirty Not sorry is an artist and promotion collective united by the belief that music brings us together.</h1>
          
        </main>
      </>
    );
  }
}