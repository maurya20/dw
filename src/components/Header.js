import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Header = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-sm bg-info">
      <h3 className="navbar-brand text-white">E-COMM</h3>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            <h5>Home</h5>
          </Link>
        </li>
      </ul>
      <div className="w-100">
        <Link to="/cart" className="float-right">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={items.length} color="secondary">
              <ShoppingCartIcon color="action" />
            </StyledBadge>
          </IconButton>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
