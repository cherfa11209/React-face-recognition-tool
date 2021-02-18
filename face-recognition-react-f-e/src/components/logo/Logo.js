import react from 'react'
import './logo.css'
import logo from './logo.png'

const Logo = () => {
    return(
        <div className="logo-card">
            <img src={logo} height="100" width="100"/>
        </div>
    )
}

export default Logo