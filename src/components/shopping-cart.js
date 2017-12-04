import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Discount from './discount'

export default class ShoppingCart extends Component {

  constructor(props){
    super(props)
    this.state = {}
    this.updateDiscountState = this.updateDiscountState.bind(this)
  }

  async updateDiscountState(updatedDiscount){
    console.log(updatedDiscount)
    this.setState({
      discountCode: updatedDiscount.discountCode,
      discountValue: updatedDiscount.discountValue,
      discountType: updatedDiscount.discountType
      }
    )
    // TODO: calculate new total after discount
  }

  render(){

    const {closeCartView, itemsInCart} = this.props

    // TODO: add each newItem only once
    // TODO: add quantity changer
    const CartItems = itemsInCart.map((newItem) =>

      <li
        key={newItem.id}
        className="cart-item-row">

        <div className="cart-item-name">{newItem.name}
          <div className="cart-item-id">Artikel-Nr.: {newItem.id}</div>
        </div>

        <div className="cart-item-price">{newItem.price.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</div>
      </li>
    )

    return (
      <div className="cart-container">
        <div className="close-modal" onClick={closeCartView}>X</div>
        <div className='cart-items'>
          {CartItems}
          {/*<div className='item-total'>{this.calculateTotal(this.props.total)}</div> */}
        </div>

        <Discount updateDiscountState={this.updateDiscountState}/>

        <span className='cart-summary'>
          Gesamtpreis ({this.props.totalItems} Artikel):
          <span className="cart-item-price"> {this.props.totalAmount.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</span>
        </span>
        <button className='cart-payment-btn'>
          Zur Kasse
        </button>

      </div>
    )
  }
}


ShoppingCart.propTypes = {
  closeCartView: PropTypes.func,
  itemsInCart: PropTypes.array,
  totalAmount: PropTypes.number,
  totalItems: PropTypes.number
}
