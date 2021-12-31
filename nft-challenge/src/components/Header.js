import React from 'react'
import './Header.css'
import punkLogo from '../assets/punkLogo.jpg'
import searchIcon from '../assets/search.png'
import themeSwitchIcon from '../assets/theme-switch.png'

export default function Header() {
    return (
        <div className="header">

            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt=''/>
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} alt=''/>

                </div>
                <input className='searchInput' placeholder='Collection, item or user...'></input>

            </div>

            <div className='headerItems'>
                <ul>
                    <li>Drops</li>
                    <li>Marketplace</li>
                    <li>Create</li>
                </ul>

            </div>

            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} alt=''/>
                </div>

            </div>

            <div className='loginButton'>
                    GET IN
            </div>
        </div>

    )
}
