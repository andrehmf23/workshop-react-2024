import { Link } from 'react-router-dom';
import icon from './images/hex-icon.png'

export function Header(){
    return (
        <div>
            <nav>
                <div className='flex-container-icon'>
                    <Link to="/" className='flex-link'>
                        <img className='hex-icon' src={icon} alt="Descrição da imagem" width="50"/>
                    </Link>
                    <div className='flex-container-links'>
                        <Link to="/about" className='flex-link'><p>Sobre</p></Link>
                        <Link to="/profile/:id" className='flex-link'><p>Profile</p></Link>
                        <Link to="/list" className='flex-link'><p>Lista</p></Link>
                        <Link to="/login" className='flex-link'><p>Login</p></Link>
                        <Link to="/register" className='flex-link'></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}