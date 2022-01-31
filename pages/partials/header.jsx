import { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const menu = document.querySelector(".sidebar")
        menu.classList.toggle("-translate-x-full");
    }
    render() {
        return (
            <div className="relative lg:flex">

                <div className="bg-black max-w-screen mx-auto px-4">

                    <div className="flex justify-between">
                  
                        {/* Logo */}
                        <div className="hidden md:flex space-x-4">

                            <div>
                                <a href="/" className="flex items-center py-2">
                                    <img src="logo.svg" className="h-20 w-20" />
                                </a>
                            </div>

                        </div>
                        {/* Primary nav */}
                        <div className="hidden md:flex space-x-1 align-left">
                            <a href="/events" className="py-7 px-3 text-gray-100 hover:text-gray-600">Events</a>
                            <a href="/about" className="py-7 px-3 text-gray-100 hover:text-gray-600">About</a>
                            <a href="/roster" className="py-7 px-3 text-gray-100 hover:text-gray-600">Roster</a>
                            <a href="/contact" className="py-7 px-3 text-gray-100 hover:text-gray-600">Contact</a>
                        </div>
                    </div>

                </div>
                
                {/**Mobile menu bar*/}  
                <div className="bg-black text-gray-100 flex justify-between md:hidden">
                    {/**Logo */}
                    <a href="/" className="block p-4 text-white font-bold">
                        <img src="logo.svg" className="h-20 w-20 " />
                    </a>

                    {/**Mobile menu button */}
                    <button onClick={this.handleClick} className="p-4 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {/**Sidebar */}
                <div className="sidebar min-h-screen bg-black text-white w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out md:hidden">
                    {/**Dirty Not Sorry */}
                    <a href="/" className="text-gray-200 flex items-center p-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white">
                        Dirty Not Sorry
                    </a>
                    <nav>
                        <a href="/events" className="block py-3 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white">Events</a>
                        <a href="/about" className="block py-3 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white">About</a>
                        <a href="/roster" className="block py-3 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white">Roster</a>
                        <a href="/contact" className="block py-3 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white">Contact</a>
                    </nav>
                </div>
            </div>
        )
    }
}