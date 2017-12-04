import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Discount extends Component {

  constructor(props){
    super(props)
    this.state = {
      discountCode: '',
      discountValue: 0
    }
    this.handleInputField = this.handleInputField.bind(this)
    this.handleApplyButton = this.handleApplyButton.bind(this)
    this.displayDiscount = this.displayDiscount.bind(this)
  }

  handleInputField(key,value){
    this.setState({
      [key]: value
    })
  }

  handleApplyButton(){
    const {updateDiscountState} = this.props

    //dummy voucher
    this.setState({
      discountCode: 'b',
      discountValue: 2,
      discountType: 'fixed'
    })
    // pass updated state back to cart
    updateDiscountState(this.state)
  }


  displayDiscount() {

    if (this.state.discountValue) {
      return (
        <span className='cart-discount'>
          {this.state.discountCode}
          <div className='cart-discount-value'>
            - {this.state.discountValue.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
          </div>
        </span>
      )
    }
    else {
      return (
        <span className='cart-discount'>
          <input
            className='discount-field'
            type='text'
            value={this.state.discountCode}
            onChange={e => this.handleInputField('discountCode', e.target.value)}/>
          <button className='apply-discount' onClick={this.handleApplyButton}>Anwenden</button>
        </span>
      )
    }
  }


  render(){

    return (
      <span className='cart-discount'>
        {this.displayDiscount()}
      </span>
    )
  }
}


Discount.propTypes = {
  updateDiscountState: PropTypes.func
}
