import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Product extends Component {
  constructor(props){
    super(props)
    this.state={
      newItem: {}
    }
    this.handleOrderButton = this.handleOrderButton.bind(this)
  }

  handleOrderButton(e, id, name, price){
    // FIXME: first click toggles previously clicked product

    //change buttonLabel:
    e.preventDefault()
    e.target.innerText = "Im Warenkorb"

    //send product props:
    this.setState({
      newItem: {
        id: id,
        name: name,
        price: price
      }
    })
    this.props.addToCart(this.state.newItem)
  }


  render(){

    const {items} = this.props

    const ProductItems = items.map((product) =>

      <li
        key={product.id}
        className="product-card">

        <img
          src={product.image}
          alt={`${product.name} Artikel-Nr: ${product.id}`}
          className="product-img"/>

        <div className="product-details">
          <div className="product-name">{product.name}</div>
          <div className="product-id">Artikel-Nr.: {product.id}</div>
        </div>

        <div className="product-price">{product.price.toLocaleString('de-DE', { maximumFractionDigits: 2 }) }</div>

        <button
          className="order-btn"
          onClick={e => this.handleOrderButton(e, product.id, product.name, product.price)}>Bestellen
        </button>
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
  items: PropTypes.array.isRequired,
  addToCart: PropTypes.func
}
