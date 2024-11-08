import { useCart } from '../../context/cartContext';
import { createOrder } from '../../firebase/db';
import { serverTimestamp } from 'firebase/firestore';
import Cart from '../cart/Cart';

function CartContainer() {
    const { cart, getTotal, clearCart } = useCart();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("El carrito está vacío.");
            return;
        }

        const form = e.target;
        const [name, email, phone] = form;

        const order = {
            buyer: { name: name.value, email: email.value, phone: phone.value },
            items: cart,
            date: serverTimestamp(),
            total: getTotal(),
        };

        try {
            await createOrder(order);
            alert("Compra realizada con éxito");
            clearCart(); 
        } catch (error) {
            console.error("Error al crear la orden:", error);
            alert("Hubo un problema con la compra.");
        }
    };

    return (
        <Cart
            cart={cart}
            total={getTotal()}
            handleSubmit={handleSubmit}
        />
    );
}

export default CartContainer;
