import './index.css';
import facebookIcon from '../../assets/IcoFacebook.svg';
import instagramIcon from '../../assets/icoInstagram.svg';


function Footer() {
  return (
    <div className='content-footer'>
      <div className='content-contacts'>
        <h2>Contato</h2>
        
        <div className="contacts">
          <h3>(xx) x.xxxx-xxxx</h3>
          <h3>fulanodetal@teste.com.br</h3>
        </div>

      </div>
      <div className='content-social-midias'>
        <h2>Nossas Redes Sociais</h2>
        <div className="social-midias-icons">
          <img src={facebookIcon} />
          <img src={instagramIcon} />
        </div>
      </div>
    </div>
    
  )
}

export default Footer;