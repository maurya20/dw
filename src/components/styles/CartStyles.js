import { createStyles, makeStyles } from "@material-ui/core";

export const useCartStyles = makeStyles(() =>
  createStyles({
    pageTitle: {
      display: "flex",
      justifyContent: "center",
    },
    deleteIcon: {
      cursor: "pointer",
    },
  })
);
