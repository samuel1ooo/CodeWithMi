/*
Title:
    Header.tsx
Description:
    Renders the site logo and primary navigation links.
Authors:
    Oluwapelumi Samuel Coker
*/

import './Header.css'
import bannerLogo from '../assets/banner_logo.png'

export function Header(){
    return(
        <header>
            <div>
                <img
                    className="header-logo"
                    src={bannerLogo}
                    alt="CodeWithMi Logo"
                />
            </div>
            <div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/projects/">Projects</a>
                    <a href="/contact/">Contact</a>
                </nav>
            </div>
        </header>
    )
}
