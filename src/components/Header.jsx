import React from 'react'
import "./header.css";
import { useRef } from "react";
import Logo from '../assets/Images/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const Header = () => {

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const CustomLink = ({ to, children, ...props }) => {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })

        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

    return (
        <>
            <nav className='navbar'>
                <div className='head'>
                    <Link to='/' className='logoImg'>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <Link to='/'>LOGO</Link>
                    <ul className='headIcon'>
                        <li>
                            <IoSearch />
                        </li>
                        <li>
                            <FaRegHeart />
                        </li>
                        <li>
                            <BsCartPlus />
                        </li>
                        <li>
                            <IoPersonCircleOutline />
                        </li>
                        <button className='nav-btn' onClick={showNavbar}>
                            <IoMdMenu />
                        </button >

                    </ul>

                </div>
                <nav className='nav' ref={navRef}>
                    <ul>
                        <CustomLink to='/shop'>SHOP</CustomLink>
                        <CustomLink to='/skills'>SKILLS</CustomLink>
                        <CustomLink to='/stories'>STORIES</CustomLink>
                        <CustomLink to='/about'>ABOUT</CustomLink>
                        <CustomLink to='/contact'>CONTACT US</CustomLink>
                    </ul>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <RxCross1 />
                    </button>
                </nav>
            </nav>
        </>
    )
}

export default Header