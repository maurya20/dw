import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useCartStyles } from "./styles/CartStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteFromCart } from "../redux/actions/AuthActions";
import { Link } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const classes = useCartStyles();

  const handleDelete = (item) => {
    dispatch(deleteFromCart(item.id));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-info">
        <b className="navbar-brand text-white" style={{ fontSize: "40px" }}>
          DW
        </b>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              <h5>Home</h5>
            </Link>
          </li>
        </ul>
        <div className="w-100">
          <Link
            className="float-right"
            data-toggle="modal"
            data-target="#myModal"
          >
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={items.length} color="secondary">
                <ShoppingCartIcon className="text-white" />
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
      </nav>

      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">My Cart</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={item.image}
                            alt="Product-pic"
                            width="50px"
                            height="40px"
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td
                          className={classes.deleteIcon}
                          onClick={() => handleDelete(item)}
                        >
                          <DeleteIcon color="error" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
