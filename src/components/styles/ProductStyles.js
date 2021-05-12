import { createStyles, makeStyles } from "@material-ui/core";

export const useProductsStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    wrapper: {
      marginTop: "10px",
    },
    paper: {
      height: "370px",
      width: "300px",
      textAlign: "center",
      // border: "2px solid black",
      //borderRadius: "0 0 20px 20px",
      position: "relative",
      marginBottom: "5px",
    },
    image: {
      width: "100%",
      height: "250px",
    },
    title: {
      width: 250,
      whiteSpace: "nowrap",
      paddingLeft: "10px",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    btn: {
      width: "100%",
      backgroundColor: "rgb(2, 209, 47)",
      position: "absolute",
      bottom: 0,
      // borderRadius: "0 0 18px 18px",
      left: 0,
      right: 0,
    },
    input: {
      marginLeft: "5px",
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    search: {
      border: "1px solid gray",
      borderRadius: "10px",
      width: "235px",
      height: "40px",
    },
  })
);
