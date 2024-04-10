
import HeroImg from '../assets/illustration-working.svg'
import '../Hero.css'

const Hero = () => {
  return (
    <header>
        <section className='setWidth section'>
            <div className='container'>
                <img src={HeroImg} className='img' alt="illustration-working" />
            </div>
            <div className='text'>
                <h2>More than just shortner links</h2>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
        </section>
        {/* <section className='setWidth section'>
            <div className='container'>
                <img src={HeroImg} className='img' alt="illustration-working" />
            </div>
            <div className='hero-text'>
                <h2>More than just shortner links</h2>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
        </section> */}
    </header>
  )
}

export default Hero