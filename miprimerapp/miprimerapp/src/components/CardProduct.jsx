import Button from "./Button";

function CardProduct(props) {
  const { price, title, text, img } = props;
  return (
    <div className="card">
      <img src={img} width={300} height={200} alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title} </h3>
        <p className="card-text">{text}</p>
        <div>
          <p className="card-price"> {price} </p>
        </div>

        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default CardProduct;
