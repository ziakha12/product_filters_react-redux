import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { forUseContext } from '../contextApi/contextApiStore'

function CartOpenbutton() {

const context = useContext(forUseContext)

  return (
    <div className='btn-wrapper'>
    <button className='cart-button' onClick={
      ()=>{context.setCartShow(!context.cartShow)
      console.log(context.cartShow);
      }
    }>
    <span className='cart-item'>{context.cartItem}</span>
      <FontAwesomeIcon icon={faCartShopping}/>
    </button>
    </div>
  )
}

export default CartOpenbutton
