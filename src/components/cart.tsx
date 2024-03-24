import { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { AppContext } from "../Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { getTotalProductInCart, cart, removeFromCart,checkout } = useContext(AppContext);
  const total = getTotalProductInCart();

  return (
    <>
      <Typography variant="h6" component="div" style={{ cursor: "pointer" }}>
        Il mio carrello
      </Typography>
       
          <>
            {cart.map((item) => (
              <div key={item.prod.id}>
                <img
                  src={item.prod.image}
                  alt={item.prod.title}
                  style={{ width: "50px", height: "50px" }}
                />
                {item.prod.title} - {item.prod.price}
                <Button onClick={() => removeFromCart(item.prod.id)}>
                  Rimuovi
                </Button>
              </div>
            ))}
              <Typography>Totale: {total}</Typography>  
              <Button variant="contained" color="primary" component={Link} to="/checkout" onClick={checkout}>
                Acquista
              </Button>
              
          </>
    </>
  );
};

export default Cart;
