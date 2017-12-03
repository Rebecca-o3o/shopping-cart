import React, {Component} from 'react'
import Product from './product'
import PropTypes from 'prop-types'

export default class ProductList extends Component {

  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    const products = require('../mock-products.json')
    this.setState({
      products
    })
  }

  render(){

    return (
      <Product
        items={this.state.products}
        addToCart={this.props.addToCart}/>
    )
  }

}


ProductList.propTypes = {
  addToCart: PropTypes.func
}
