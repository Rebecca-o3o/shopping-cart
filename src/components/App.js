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
      itemsInCart: [],
      totalItems: 0,
      totalAmount: 0,
    }
    this.addToCart = this.addToCart.bind(this)
    this.sumTotalItems = this.sumTotalItems.bind(this)
    this.sumTotalAmount = this.sumTotalAmount.bind(this)
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
    this.sumTotalItems(this.state.itemsInCart)
    this.sumTotalAmount(this.state.itemsInCart)
  }

  sumTotalItems() {
    let total = 0
    let itemsInCart = this.state.itemsInCart
    total = itemsInCart.length
    this.setState({
      totalItems: total
    })
  }

  sumTotalAmount() {
    let total = 0
    let itemsInCart = this.state.itemsInCart
    for (var i = 0; i < itemsInCart.length; i++) {
      total += itemsInCart[i].price
    }
    this.setState({
      totalAmount: total
    })
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
            totalItems={this.state.totalItems}
            totalAmount={this.state.totalAmount}
            closeCartView={this.closeCartView}
            openCartView={this.openCartView}
          />
        }

      </div>
    )
  }
}

export default App
