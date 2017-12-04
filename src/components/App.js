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
      modalIsShown: false,
      itemsInCart: []
    }
    this.addToCart = this.addToCart.bind(this)
    this.toggleCartView = this.toggleCartView.bind(this)
    this.openCartView = this.openCartView.bind(this)
    this.closeCartView = this.closeCartView.bind(this)
  }

  addToCart(newItem) {
    // FIXME: unneccesary states
    this.state.itemsInCart.push(newItem)
    this.setState(
      this.state.itemsInCart
    )
  }

  openCartView(){
    this.setState({
      modalIsShown: true
    })
  }

  closeCartView(){
    this.setState({
      modalIsShown: false
    })
  }

  toggleCartView(){
    const toggleModal = this.state.modalIsShown ? false : true
    this.setState({
      modalIsShown: toggleModal
    })
  }

  render() {

    const {modalIsShown, itemsInCart} = this.state

    return (
      <div className="app-body">
        <header className="app-header">
          Shopping Cart Calculator

          <img
            src="images/shopping-cart.svg"
            alt="Cart Icon"
            className="cart-icon"
            onClick={this.toggleCartView}/>

        </header>

        <ProductList
          addToCart={this.addToCart}/>

        {
          modalIsShown &&
          <ShoppingCart
            itemsInCart={itemsInCart}
            closeCartView={this.closeCartView}
            openCartView={this.openCartView}
          />
        }

      </div>
    )
  }
}

export default App
