import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <nav className='bg-rose-400 w-full pl-10 pr-24 h-[100px] flex justify-between items-center'>
            <img className='mt-5' src={logo} alt="" />
            <div>
                <a className='text-xl hover:border-b-4 hover:border-black p-1 font-bold ml-10' href="/home">Home</a>
                <a className='text-xl hover:border-b-4 hover:border-black p-1 font-bold ml-10' href="/players">Players</a>
                <a className='text-xl hover:border-b-4 hover:border-black p-1 font-bold ml-10' href="/services">Services</a>
                <a className='text-xl hover:border-b-4 hover:border-black p-1 font-bold ml-10' href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;