import react from 'react'
import './Header.css'

const Header = (props) => {
    return(
        <div className="header">
            <button onClick={props.expand} className="moreOptions"> More options </button>
        </div>
    )
}

export default Header;