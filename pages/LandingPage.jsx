import { Link } from 'react-router-dom'
import AboutUs from '../components/AboutUs'

function LandingPage() {
  return (
    <div className='landing'>
      <div className='overlay'>
        <h1>Paradise Nursery</h1>

        <AboutUs />

        <Link to='/products'>
          <button className='start-btn'>Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage