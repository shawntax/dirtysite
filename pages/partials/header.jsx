import { Component } from 'react';
import Link from 'next/link'

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
            <div className="">

                <div className="bg-black w-auto mx-auto px-4">

                    <div className="flex justify-between">
                  
                        {/* Logo */}
                        <div className="hidden md:flex space-x-4">

                            <div>
                                <Link href="/">
                                    <a className="flex items-center py-2">
                                        <img src="logo.svg" className="h-20 w-20" />
                                    </a>
                                </Link>
                            </div>

                        </div>
                        {/* Primary nav */}
                        <div className="hidden md:flex space-x-1 align-left">
                            <Link href="/events"><a className="py-7 px-3 text-gray-100 hover:text-gray-600">Events</a></Link>
                            <Link href="/about"><a className="py-7 px-3 text-gray-100 hover:text-gray-600">About</a></Link>
                            <Link href="/roster"><a className="py-7 px-3 text-gray-100 hover:text-gray-600">Roster</a></Link>
                            <Link href="/contact"><a className="py-7 px-3 text-gray-100 hover:text-gray-600">Contact</a></Link>
                            <a href="https://shop.dirtynotsorry.com" className="py-7 px-3 text-gray-100 hover:text-gray-600">Shop</a>
                        </div>
                    </div>

                </div>
                
                {/**Mobile menu bar*/}  
                <div className="bg-black text-gray-100 flex justify-between md:hidden">
                    {/**Logo */}
                    <Link href="/">
                        <a className="block p-4 text-white font-bold">
                            <img src="logo.svg" className="h-20 w-20 " />
                        </a>
                    </Link>
                   

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
                    <Link href="/">
                        <a href="/" className="text-gray-200 flex items-center p-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white">
                            Dirty Not Sorry
                        </a>
                    </Link>
                    
                    <nav>
                        <Link href="/events"><a className="block py-3 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white">Events</a></Link>
                        <Link href="/about"><a className="block py-3 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white">About</a></Link>
                        <Link href="/roster"><a className="block py-3 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white">Roster</a></Link>
                        <Link href="/contact"><a href="/contact" className="block py-3 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white">Contact</a></Link>
                    </nav>
                </div>
            </div>
        )
    }
}