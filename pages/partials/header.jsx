import { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="bg-black">
                    <div className="flex flex-row">
                        <div className="basis-1/4 items-center">
                            <nav>
                                <ul className='flex   '>
                                    <li className="text-white ">Home</li>
                                    <li className="text-white ">About</li>
                                    <li className="text-white ">Roster</li>
                                    <li className="text-white ">Contact</li>
                                </ul>

                            </nav>
                        </div>
                        <div className="basis-1/2">
                            <img src="/logo.svg" height="120rem" width="120rem" className="mx-auto" />
                        </div>
                        <div className="basis-1/4"></div>
                    </div>
                </div>
            </>
        );
    }
}