import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="Header">
            <Link to="/">
            The First 151 Pokemon
            </Link>
        </header>
    )
}

export default Header