import React from 'react'
import Logo from "./Logo"
import AddresAndPhone from './AddresAndPhone';
import Account from './Account';
import Nav from './Nav';
export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className=" mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <Logo />
                    <AddresAndPhone />
                    <Account />
                </div>
            </div>
            <Nav />
        </header>
    )
}
