import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const totalQuantity = useSelector(
    state => state.cart.totalQuantity
  )

  return (
    <div className='navbar'>
      <h2>Paradise Nursery</h2>

      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/products'>Plants</Link>
        <Link to='/cart'>Cart ({totalQuantity})</Link>
      </div>
    </div>
  )
}

export default Header