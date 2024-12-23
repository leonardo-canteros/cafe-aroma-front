import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoCartOutline, IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../service/Redux/reducers/cartSlice";
import ButtonMercadoPago from "./ButtonMercadoPago";

function DropdownCart() {
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce(
    (total, article) => total + article.quantity,
    0
  );
  const dispatch = useDispatch();
  const handleRemove = (_id) => {
    dispatch(removeFromCart(_id));
  };

  const handleQuantityChange = (_id, quantity) => {
    dispatch(updateQuantity({ _id, quantity: parseInt(quantity, 10) }));
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  };

  if (!Array.isArray(cart)) {
    return <p>Cargando carrito...</p>;
  }

  return (
    // <NavDropdown.Item as={Link} onClick={handleSelfDelete}>
    //   Darme de Baja
    // </NavDropdown.Item>
    // <Link to="/cart" className="nav-link cart-link">
    // <IoCartOutline className="cart-icon" />
    // {cartCount > 0 && (
    //     <span className="cart-count">{cartCount}</span>
    // )}
    // </Link>
    <NavDropdown
      title={
        <div className="cart-link-container">
          <IoCartOutline className="cart-icon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      }
    >
      <Container>
        {cart.length === 0 ? (
          <h6>No tienes productos en tu carrito.</h6>
        ) : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th style={{ width: "50px" }}>Imagen</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item._id}>
                    <td style={{ textAlign: "center" }}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        style={{ width: "25px" }}
                        fluid
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.precio}</td>
                    <td>
                      <Form.Control
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item._id, e.target.value)
                        }
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Button
                        variant="danger"
                        onClick={() => handleRemove(item._id)}
                      >
                        <IoTrashOutline className="trash-icon" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Row>
              <Col>
                <h6>
                  Total (incluye IVA): $
                  {(calculateSubtotal() * 1.21).toFixed(2)}
                </h6>
              </Col>
            </Row>
              <ButtonMercadoPago />
          </div>
        )}
      </Container>
      {/* Agrega más opciones si es necesario */}
    </NavDropdown>
  );
}

export default DropdownCart;
