import { useDispatch, useSelector } from 'react-redux'
} from '../redux/CartSlice'

import { Link } from 'react-router-dom'

function CartItem() {
  const dispatch = useDispatch()

  const items = useSelector(state => state.cart.items)
  const totalQuantity = useSelector(
    state => state.cart.totalQuantity
  )

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className='cart-container'>
      <div className='total-section'>
        <h2>Total Plants: {totalQuantity}</h2>
        <h2>Total Cost: ₹{totalAmount}</h2>
      </div>

      {items.map(item => (
        <div className='cart-item' key={item.id}>
          <img src={item.image} alt={item.name} />

          <div>
            <h3>{item.name}</h3>
            <p>Unit Price: ₹{item.price}</p>
            <p>Total: ₹{item.price * item.quantity}</p>
          </div>

          <div className='cart-buttons'>
            <button
              onClick={() =>
                dispatch(increaseQuantity(item.id))
              }
            >
              +
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                dispatch(decreaseQuantity(item.id))
              }
            >
              -
            </button>

            <button
              onClick={() => dispatch(removeItem(item.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <Link to='/products'>
        <button>Continue Shopping</button>
      </Link>

      <button
        onClick={() => alert('Coming Soon')}
        style={{ marginLeft: '10px' }}
      >
        Checkout
      </button>
    </div>
  )
}

export default CartItem