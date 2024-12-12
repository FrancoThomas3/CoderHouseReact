export default function NavBar(props) {
  const { brand = "MiTienda", categories = [], cartItems = 0 } = props;

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#333",
        color: "white",
        width: "100%",
        alignItems: "center",
      }}
    >
      {}
      <div style={{ fontSize: "1.5rem", marginRight: "20px" }}>{brand}</div>

      {}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "15px",
          margin: 0,
          padding: 0,
        }}
      >
        {categories.map((category, index) => (
          <li key={index}>
            <a
              href={`/${category.toLowerCase()}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>

      {}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "20px",
        }}
      >
        <a
          href="/cart"
          style={{
            color: "white",
            fontSize: "1.25rem",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          🛒
          {cartItems > 0 && (
            <span
              style={{
                backgroundColor: "red",
                borderRadius: "50%",
                color: "white",
                padding: "0.2rem 0.4rem",
                fontSize: "1rem",
                marginLeft: "5px",
              }}
            >
              {cartItems}
            </span>
          )}
        </a>
      </div>
    </nav>
  );
}
