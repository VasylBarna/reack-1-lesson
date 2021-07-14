import { Fragment } from "react";
import { ProductList } from "./components/ProductList";

const products = [
  {
    id: 1,
    name: "Espresso",
    price: 4,
    image:
      "https://media.istockphoto.com/photos/hot-coffee-on-wooden-table-picture-id1084020754?s=612x612",
  },
  {
    id: 2,
    name: "Latte",
    price: 5,
    image:
      "https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg",
  },
  {
    id: 3,
    name: "Capuccino",
    price: 3,
    image:
      "https://thursdaydinners.com/wp-content/uploads/2019/07/c-3-768x549.jpg",
  },
  {
    id: 4,
    name: "Kruasan",
    price: 2.5,
    image:
      "https://www.recept.ua/files/uploads/rec_img/kruassani-iz-droggevogo-testa.jpg",
  },
];

const products2 = [
  {
    id: 1,
    name: "Espresso",
    price: 2,
    image:
      "https://media.istockphoto.com/photos/hot-coffee-on-wooden-table-picture-id1084020754?s=612x612",
  },
  {
    id: 2,
    name: "Latte",
    price: 2.5,
    image:
      "https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg",
  },
  {
    id: 3,
    name: "Capuccino",
    price: 1.5,
    image:
      "https://thursdaydinners.com/wp-content/uploads/2019/07/c-3-768x549.jpg",
  },
  {
    id: 4,
    name: "Kruasan",
    price: 1,
    image:
      "https://www.recept.ua/files/uploads/rec_img/kruassani-iz-droggevogo-testa.jpg",
  },
];

function App() {
  return (
    <Fragment key="">
      <div className="App">
        <header className="App-header">
          <p>Reack {21 + 8} group!!! You are the very best! 👍</p>
          <p>This is our brand new coffee shop!</p>
          <ProductList priceColor="teal" products={products} price={9.99}>
            <h2>Елитная подборка кофе!!!</h2>
            <h3>Second children</h3>
          </ProductList>
          <ProductList priceColor="tomato" products={products2} price={9.99}>
            <h2>Обичная подборка кофе!!!</h2>
            <h3>Second children</h3>
          </ProductList>
        </header>
      </div>
      <h2>Second element</h2>
    </Fragment>
  );
}

export default App;
