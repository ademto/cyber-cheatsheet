import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Search from './Search'

const Header = () => {
  return (
    <section  className='bg-[#fefae0] md:h-96'>
          <Navbar />
          <HeroSection />
    </section>
  )
}

export default Header