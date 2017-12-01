import React, { Component } from 'react'
import ProductList from './product-list'
import ShoppingCart from './shopping-cart'

import '../styles/app.css'
import '../styles/cart.css'
import '../styles/products.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      itemsInCart: {}
    }
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart(id, name, price) {
    this.setState({
      itemsInCart: {
        id: id,
        name: name,
        price: price
      }
    })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          Shopping Cart Calculator
        </header>
        <ProductList onClick={this.addToCart}/>
        <ShoppingCart itemsInCart={this.state.itemsInCart}/>
      </div>
    )
  }
}

export default App
