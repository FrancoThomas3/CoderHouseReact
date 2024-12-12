import "./App.css";
import Button from "./components/Button";
import CardProduct from "./components/CardProduct";
import NavBar from "./components/NavBar";
function App() {
  function isUserLoggedIn() {
    return false;
  }
  function logIn() {
    alert("bienvenido!");
  }

  return (
    <>
      <div>
        <NavBar
          brand="SuperShop"
          categories={["Home", "Products", "About", "Contact"]}
        />
      </div>

      <section>
        <CardProduct
          price="25.50"
          title="Remera Coder"
          text="Best remera"
          img="/images/javascript.jpg"
        />
        <CardProduct
          price="15.50"
          title="Gorra React"
          text="Best gorra"
          img="/images/javascript.jpg"
        />
        <CardProduct
          price="35.50"
          title="Campera Javascript"
          text="Best campera"
          img="/images/javascript.jpg"
        />
      </section>
    </>
  );
}

export default App;
