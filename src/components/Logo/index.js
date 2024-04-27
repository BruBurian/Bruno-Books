import './style.css'
import logo from '../../images/logo.svg'
import './style.css'

function Logo() {
    return(
        <div className='logo'>
          <img src={logo} alt='logo' className='logo-img'></img>
          <p><strong>Bruno</strong>Books</p>
        </div>
    )
}

export default Logo;