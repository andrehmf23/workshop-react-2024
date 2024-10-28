import { Link } from 'react-router-dom';
import icon from './images/hex-icon.png'

export function Header(){
    return (
        <nav className='flex-container'>
            <Link to="/" className='topics'>
                <img className='grow-up' src={icon} alt="Descrição da imagem" width="50"/>
            </Link>
            <div className='flex-container-links'>
                <Link to="/about" className='topics'>Sobre</Link>
                <Link to="/profile/:id" className='topics'>Profile</Link>
                <Link to="/list" className='topics'>Lista</Link>
                <Link to="/login" className='topics'>Login</Link>
                <Link to="/register" className='topics'></Link>
            </div>
        </nav>
    )
}