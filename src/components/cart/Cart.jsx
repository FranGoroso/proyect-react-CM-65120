import { useCart } from '../../context/cartContext'
import { createOrder } from '../../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

function Cart() {
    const { cart, getTotal } = useCart(); 

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
        } catch (error) {
            console.error("Error al crear la orden:", error);
            alert("Hubo un problema con la compra.");
        }
    };

    return (
        <div>
            {cart.map(prod => (
                <div key={prod.id}>
                    <p>{prod.title} x {prod.qty}</p>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" required />
                <input type="email" placeholder="prueba@gmail.com" required />
                <input type="text" placeholder="phone number" required />
                <button type="submit">Finalizar compra</button>
            </form>
        </div>
    );
}

export default Cart;
