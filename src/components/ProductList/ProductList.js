import PropTypes from "prop-types";
import styles from "./ProductList.module.scss";
// import { Button } from "./styled";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "./Button";

const useStyles = makeStyles({
  root: {
    minWidth: "300px",
    padding: "2rem",
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const ProductList = ({ children, priceColor, price, products }) => {
  const classes = useStyles();
  return (
    <div>
      {children}
      <h2>{price}$</h2>
      <ul className={styles.ProductList}>
        {/* <ul className={styles.ProductList}> */}
        {products.map((product) => (
          <li key={product.id}>
            <Card className={classes.root}>
              {/* <li key={product.id} className={styles.ProductList__Item}> */}
              <h3>{product.name}</h3>
              <img width="100" src={product.image} alt={product.name} />
              <div>
                Price: <b>{product.price}$</b>
              </div>
              <Button
                like="💅💅💅"
                action={() => alert("Clicked")}
                primary
                letterSpacing="9px"
              >
              Buy
              </Button>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  children: PropTypes.string,
  price: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
    })
  ),
  priceColor: PropTypes.string,
};

ProductList.defaultProps = {
  children: <h1>Product List</h1>,
};
