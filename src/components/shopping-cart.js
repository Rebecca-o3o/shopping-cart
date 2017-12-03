import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ShoppingCart extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){

    const {closeCartView, itemsInCart} = this.props

    // TODO: add each newItem only once
    const CartItems = itemsInCart.map((newItem) =>

      <li
        key={newItem.id}>

        <div>
          <div>{newItem.name}</div>
          <div>Artikel-Nr.: {newItem.id}</div>
        </div>

        <div>{newItem.price}</div>
      </li>
    )

    return (
      <div className="cart-container">
        <div className="close-modal" onClick={closeCartView}>X</div>
        <div className='cart-items'>
          {CartItems}
          {/*<div className='item-total'>{this.calculateTotal(this.props.total)}</div> */}
        </div>

        <div className='cart-discount'>
          <input className='discount__field' type='text' name='discount' defaultValue='Gutscheincode'/>
          <button className='apply-discount'>Anwenden</button>
        </div>

        <div className='cart-summary'>
          Gesamtpreis:
        </div>
        <button className='cart-payment-btn'>
          Zur Kasse
        </button>

      </div>
    )
  }
}


ShoppingCart.propTypes = {
  closeCartView: PropTypes.func,
  itemsInCart: PropTypes.array
}
