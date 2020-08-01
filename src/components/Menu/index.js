import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import './Menu.css'
import ButtonLink from '../ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="" />
            </Link>

            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">Novo vídeo</ButtonLink>
        </nav>
    )
}

export default Menu