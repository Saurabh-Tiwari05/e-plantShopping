import { useDispatch, useSelector } from 'react-redux'
      name: 'Tulsi',
      price: 200,
      category: 'Medicinal',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
    },
    {
      id: 5,
      name: 'Money Plant',
      price: 400,
      category: 'Decorative',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
    },
    {
      id: 6,
      name: 'Bonsai',
      price: 700,
      category: 'Decorative',
      image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78',
    },
  ]

  const categories = [...new Set(plants.map(plant => plant.category))]

  const isAdded = id => {
    return cartItems.some(item => item.id === id)
  }

  return (
    <div className='products-container'>
      {categories.map(category => (
        <div className='category' key={category}>
          <h2>{category}</h2>

          <div className='products-grid'>
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div className='card' key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>

                  <p>₹{plant.price}</p>

                  <button
                    disabled={isAdded(plant.id)}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isAdded(plant.id) ? 'Added' : 'Add to Cart'}
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