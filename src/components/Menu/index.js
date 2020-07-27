import React from 'react'
import Logo from '../../assets/img/logo.svg'
import './Menu.css'
import ButtonLink from '../ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="" />
            </a>

            <ButtonLink as="a" className="ButtonLink" href="/">Novo vídeo</ButtonLink>
        </nav>
    )
}

export default Menu