import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../styles/products.css'


export default class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      buttonLabel: "Bestellen"
    }
    this.handleOrderButton = this.handleOrderButton.bind(this)
  }

  handleOrderButton(id, name, price){
    // addToCart

    // updateButtonDisplay
    this.setState({
      buttonLabel: "Im Warenkorb"
    })
  }

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
        <button onClick={e => this.handleOrderButton(product.id, product.name, product.price)}>{this.state.buttonLabel}</button>
      </li>
    )

    return (

      <ul className="products-wrapper">
        {ProductItems}
      </ul>

    )
  }

}

Product.propTypes = {
  items: PropTypes.array.isRequired
}
