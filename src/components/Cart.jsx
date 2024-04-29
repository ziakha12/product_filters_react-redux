import React from "react";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { forUseContext } from "../contextApi/contextApiStore";
import { useContext } from "react";
import { deletItem } from "../redux/slices/cartSlice";

function Cart() {
  const items = useSelector((state) => state);
  console.log(items);
  const reducePrice = items.cart.reduce((a, c) => a + c.price, 0);

const context = useContext(forUseContext)
const dispatch = useDispatch()

  return (
    <div className={ context.cartShow ? " cart-wrapper" : "d-none"}>
      <Alert>
        <h3 className="text-center">total price = {reducePrice} </h3>
        </Alert>
        <div className="cart-items">
        {
          items.cart.map((item)=>(
            <div className="item my-2" key={item.id}>
             <img src={item.image} className="h-[120px] w-[120px]" />
             <p className="w-[200px]">name : {item.name}</p>
             <p>{item.price}</p>
             <button onClick={()=>{
              dispatch(
                deletItem(item.id)
              )
             }} >delet</button>
            </div>
          ))
        }
        </div>
    </div>
  );
}

export default Cart;
