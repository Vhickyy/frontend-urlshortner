import Logo from '../assets/logo.svg';
import Twitter from '../assets/icon-twitter.svg'
import Bg1 from '../assets/bg-shorten-desktop.svg'
import Facebook from '../assets/icon-facebook.svg'
import Pin from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'

const Footer = () => {
  return (
    <>
    <div className='boost'>
        {/* <img src={Bg1} alt="bg-shorten-desktop" /> */}
        <section className='setWidth'>
            <h3>Boost your links today</h3>
            <button>Get Started</button>
        </section>
    </div>
    <footer>
        <section className='setWidth'>
            <img src={Logo} alt="logo" />
            <aside>
                <div>
                    <h4>Features</h4>
                    <ul>
                        <li>Link Shortening</li>
                        <li>Brand Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div>
                    <h4>Resources</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Develops</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='icons'>
                    <img src={Facebook} alt="facebookr" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Pin} alt="pin-interest" />
                    <img src={Instagram} alt="instagram" />
                </div>
            </aside>
        </section>
    </footer>
    </>
  )
}

export default Footer