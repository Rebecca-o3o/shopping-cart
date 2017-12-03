import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ShoppingCart extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){

    const {closeCartView, itemsInCart} = this.props
    console.log (itemsInCart)

    return (
      <div className="cart-container">
        Dein Warenkorb


        <div className="close-modal" onClick={closeCartView}>X</div>
        <div className='cart-items'>
          cart-items!!!
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
}
