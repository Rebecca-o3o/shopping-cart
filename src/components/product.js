import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../styles/products.css'


export default class Product extends Component {

  render(){
    const {items} = this.props

    const ProductItems = items.map((product) =>

      <li key={product.id} className="product-card">
        <img
          src={product.image}
          alt={`${product.name} Artikel-Nr: ${product.id}`}
          className="product-img"
        />
        <p>Artikel-Nr.: {product.id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </li>
    )

    return (

      <ul>
        {ProductItems}
      </ul>

    )
  }

}

Product.propTypes = {
  items: PropTypes.array.isRequired
}
