import React, { Component } from 'react'
import ProductList from './product-list'
import ShoppingCart from './shopping-cart'

import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          test header
        </header>
        <ProductList />
        <ShoppingCart />
      </div>
    )
  }
}

export default App
