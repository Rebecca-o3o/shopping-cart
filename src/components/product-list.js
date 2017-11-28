import React, {Component} from 'react'
import Product from './product'

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
      <div className="products-wrapper">
        <Product items={this.state.products}/>
      </div>
    )
  }

}
