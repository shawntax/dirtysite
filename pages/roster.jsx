import { Component } from 'react';
import Header from './partials/header'

export default class Roster extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="h-max bg-gray-200 lg:flex flex-wrap -mx-1 lg:-mx-4 py-10 justify-center">
  
          <div className="bg-neutral-700  rounded-xl mx-5 my-5 p-8 ">
            <img src="/knives-7.png" className=''/>
            <h3 className='text-white text-center text-2xl'>Knives</h3>
            <p className='text-white text-center'>Praesent molestie eros sed cursus dictum. Morbi eget euismod purus. Pellentesque vel justo in lectus maximus sodales. </p>
          </div> 
            
          <div className="bg-neutral-700  rounded-xl mx-5 my-5 p-8 ">
            <img src="/knives-7.png" className=''/>
            <h3 className='text-white text-center text-2xl'>Knives</h3>
            <p className='text-white text-center'>Praesent molestie eros sed cursus dictum. Morbi eget euismod purus. Pellentesque vel justo in lectus maximus sodales. </p>
          </div> 
      
          <div className="bg-neutral-700  rounded-xl mx-5 my-5 p-8 ">
            <img src="/knives-7.png" className=''/>
            <h3 className='text-white text-center text-2xl'>Knives</h3>
            <p className='text-white text-center'>Praesent molestie eros sed cursus dictum. Morbi eget euismod purus. Pellentesque vel justo in lectus maximus sodales. </p>
          </div> 

          <div className="bg-neutral-700  rounded-xl mx-5 my-5 p-8 ">
            <img src="/knives-7.png" className=''/>
            <h3 className='text-white text-center text-2xl'>Knives</h3>
            <p className='text-white text-center'>Praesent molestie eros sed cursus dictum. Morbi eget euismod purus. Pellentesque vel justo in lectus maximus sodales. </p>
          </div> 

        </main>
      </>
    );
  }
}
