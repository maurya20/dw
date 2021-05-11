import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCartStyles } from "./styles/CartStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteFromCart } from "../redux/actions/AuthActions";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const classes = useCartStyles();

  const handleDelete = (item) => {
    dispatch(deleteFromCart(item.id));
  };
  return (
    <div className="container">
      <h3 className={classes.pageTitle}>My Cart</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product image</th>
            <th> Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img src={item.image} width="50px" height="40px" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td
                  className={classes.deleteIcon}
                  onClick={() => handleDelete(item)}
                >
                  <DeleteIcon />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
