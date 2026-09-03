import './Header.css'
import bannerLogo from '../assets/banner_logo.png'

export function Header(){
    return(
        <header>
            <div>
                <img src={bannerLogo} alt="CodeWithMi" />
            </div>
            <div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/blogs/">Blogs</a>
                    <a href="/about/">About</a>
                </nav>
            </div>
        </header>
    )
}
