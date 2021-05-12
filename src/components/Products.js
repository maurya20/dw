import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import {
  Container,
  IconButton,
  InputBase,
  Typography,
} from "@material-ui/core";
import { useProductsStyles } from "./styles/ProductStyles";
import Pagination from "react-js-pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/AuthActions";
export const Products = () => {
  const dispatch = useDispatch();

  const classes = useProductsStyles();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [category, setCategory] = React.useState("");
  const [input, setInput] = React.useState("");
  const [activePage, setActivePage] = React.useState(1);
  //// for search by name
  let filter2 = data.filter((x) => x.title === input);
  if (input === "") {
    filter2 = data;
  }
  //// for search by category
  let filter1 = filter2.filter((cat) => cat.category === category);
  if (category === "--Select--" || category === "") {
    filter1 = filter2;
  }
  const listing = filter1;
  console.log("listing", listing);
  React.useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const indexOfLastProduct = activePage * 6;
  const indexOfFirstProduct = indexOfLastProduct - 6;
  const currentProducts = listing.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        image: item.image,
        name: item.title,
        price: item.price,
      })
    );
  };
  return (
    <div className={classes.root}>
      {loading && <LinearProgress />}
      <Container>
        <Grid container spacing={1} className={classes.wrapper}>
          <Grid xs={6}>
            <div className="form-group">
              <label>Choose Category: </label>
              <select
                className="form-control-sm"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>--Select--</option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
              </select>
            </div>
          </Grid>
          <Grid xs={6}>
            <form className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Search product"
                inputProps={{ "aria-label": "" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </form>
          </Grid>

          {currentProducts.map((item) => (
            <Grid key={item.id} item xs={12} sm={3}>
              <Paper className={classes.paper}>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
                  />
                </div>
                <Link to={"/"}>
                  <Typography className={classes.title}>
                    {item.title}
                  </Typography>
                </Link>
                <Typography className={classes.title}>
                  Category:{item.category}
                </Typography>
                <p style={{ marginBottom: "40px" }}>${item.price}</p>
                <Button
                  className={classes.btn}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
        {listing.length > 6 && (
          <div className="d-flex justify-content-center mt-5">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={6}
              totalItemsCount={20}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
              nextPageText="Next"
              prevPageText="Previous"
              lastPageText="Last"
              firstPageText="First"
            />
          </div>
        )}
      </Container>
    </div>
  );
};
