import heroImg from '../assets/images/hero.jpg'
const Hero = () => {
    return (
        <div className="hero">
            <img className="hero-photo" src={heroImg} />
            <h3 className='hero-header'>Our Collections</h3>
            <p className='hero-text'>Experience our most viewed and sells collections</p>
        </div>
    )
}

export default Hero