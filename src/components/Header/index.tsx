import './index.css';
import Logo from '../../assets/logo-topo 1.svg';


function Header() {

  return (
    <header>
      <div className="content-header">
          <img src={Logo} alt="logo" />
      </div>
        <div className='content-title'>
          <h1>FrontEnd Challenge</h1>
        </div>
    </header>
    
  )
}

export default Header;