import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Search from './Search'

const Header = () => {
  return (
    <section  className='bg-[#fefae0] md:h-96'>
        <div className='container mx-auto'>
            <Navbar />
            <HeroSection />
            {/* <Search /> */}
        </div>
    </section>
  )
}

export default Header