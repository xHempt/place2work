import React from 'react'
import useInput from '../hooks/useInput'

export default function Header() {
    const searchInput = useInput('')

    return (
        <header>
            <nav>
                <h1>Place2Work</h1>
                <div className="search--wrapper">
                    <input type="text" placeholder="Search for an offer" {...searchInput} />
                    <i className="fa fa-search"></i>
                </div>
                <ul>
                    <li>
                        <button>Log In</button>
                    </li>
                    <li>
                        <button className="sign-up--button">Sign Up</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
