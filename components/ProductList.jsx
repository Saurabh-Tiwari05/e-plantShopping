import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/CartSlice'

function ProductList() {
  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cart.items)

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const plants = [
    {
      id: 1,
      name: 'Snake Plant',
      price: 300,
      category: 'Indoor Plants',
      image:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
    },
    {
      id: 2,
      name: 'Aloe Vera',
      price: 250,
      category: 'Medicinal',
      image:
        'https://images.unsplash.com/photo-1470163395405-d2b80e7450ed',
    },
    {
      id: 3,
      name: 'Peace Lily',
      price: 500,
      category: 'Indoor Plants',
      image:
        'https://images.unsplash.com/photo-1463154545680-d59320fd685d',
    },
    {
      id: 4,
      name: 'Tulsi',
      price: 200,
      category: 'Medicinal',
      image:
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
    },
    {
      id: 5,
      name: 'Money Plant',
      price: 400,
      category: 'Decorative',
      image:
        'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
    },
    {
      id: 6,
      name: 'Bonsai',
      price: 700,
      category: 'Decorative',
      image:
        'https://images.unsplash.com/photo-1512428813834-c702c7702b78',
    },
  ]

  const categories = [
    ...new Set(plants.map(plant => plant.category)),
  ]

  const isAdded = id => {
    return cartItems.some(item => item.id === id)
  }

  return (
    <div className="products-container">
      <nav className="navbar">
        <h1>Paradise Nursery</h1>

        <div>
          <Link to="/">Home</Link>

          <Link to="/cart">
            Cart ({totalQuantity})
          </Link>
        </div>
      </nav>

      {categories.map(category => (
        <div className="category" key={category}>
          <h2>{category}</h2>

          <div className="products-grid">
            {plants
              .filter(
                plant => plant.category === category
              )
              .map(plant => (
                <div className="card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>₹{plant.price}</p>

                  <button
                    disabled={isAdded(plant.id)}
                    onClick={() =>
                      dispatch(addItem(plant))
                    }
                  >
                    {isAdded(plant.id)
                      ? 'Added'
                      : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
