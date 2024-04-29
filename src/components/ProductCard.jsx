import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/cartSlice";
import { useContext } from 'react'
import { forUseContext } from '../contextApi/contextApiStore'


function ProductCard(props) {
  const context = useContext(forUseContext)
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem ", margin:"auto" }} className="product-card">
      <Card.Img variant="top" src={props.image} className="h-[300px]" />
      <Card.Body>
        <Card.Title className="product-title" style={{fontSize:'17px'}}>{props.title}</Card.Title>
        <div className="flex justify-between items-center">
        <h5 className="p-2 rounded-lg text-[#766946] " style={{fontSize:'15px'}}>price : ${props.price}</h5>
        <Button
          style={{color:'white', background:'#766946', borderRadius:'2px', border:'1px solid #766946'}}
          onClick={(e) =>{
            dispatch(
              addProduct({
                name: props.title,
                price: props.price,
                image: props.image,
                id: props.id, 
                category: props.category
              })
            )
            context.setCartItem(context.cartItem + 1)
            console.log(context.cartItem);
          }
          }
        >
          add to cart
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
