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

                <div className="bg-gray-900 max-w-screen mx-auto px-4">

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
                            <a href="/contact" className="py-7 px-3 text-gray-100 hover:text-black">Contact</a>
                        </div>
                    </div>

                </div>
                
                {/**Mobile menu bar*/}  
                <div className="bg-gray-900 text-gray-100 flex justify-between md:hidden">
                    {/**Logo */}
                    <a href="/" className="block p-4 text-white font-bold">
                        <img src="logo.svg" className="h-20 w-20 " />
                    </a>

                    {/**Mobile menu button */}
                    <button onClick={this.handleClick} className="p-4 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {/**Sidebar */}
                <div className="sidebar min-h-screen bg-gray-900 text-blue-100 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out md:hidden ">
                    {/**Logo */}
                    <a href="/" className="text-white flex items-center p-4 hover:bg-blue-400 hover:text-white">
                        Dirty Not Sorry
                    </a>
                    <nav>
                        <a href="/events" className="block py-3 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">Events</a>
                        <a href="/about" className="block py-3 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">About</a>
                        <a href="/roster" className="block py-3 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">Roster</a>
                        <a href="/contact" className="block py-3 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">Contact</a>
                    </nav>
                </div>
            </div>
        )
    }
}

// export default class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         const menu = document.querySelector(".mobile-menu")
//         menu.classList.toggle("hidden");
//     }
//     render() {
//         return (
//             <nav className="bg-gray-300">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <div className="flex justify-between">

//                         {/* Logo */}
//                         <div className="flex space-x-4">
//                             <div>
//                                 <a href="#" className="flex items-center  text-gray-700 hover:text-black">
//                                     <img src="logo.svg" className="h-20 w-20" />
//                                 </a>
//                             </div>
//                             {/* Primary nav */}
//                             <div className="hidden md:flex items-center space-x-1">
//                                 <a href="" className="py-5 px-3 text-gray-700 hover:text-black">Features</a>
//                                 <a href="" className="py-5 px-3 text-gray-700 hover:text-black">Pricing</a>
//                             </div>
//                         </div>

//                         {/* Mobile nav button */}
//                         <div className="md:hidden flex items-center">
//                             <button onClick={this.handleClick}>
//                                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                             </button>

//                         </div>

//                     </div>

//                 </div>
//                 {/* Sidebar */}
                

  
//                 {/* Mobile menu */}
//                 <div className="mobile-menu hidden md:hidden">
//                     <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
//                     <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
//                 </div>
//             </nav>
//         )
//     }
// }