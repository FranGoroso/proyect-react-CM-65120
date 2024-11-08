import { useCart } from '../../context/cartContext';
import { createOrder } from '../../firebase/db';
import { serverTimestamp } from 'firebase/firestore';
import Cart from '../cart/Cart';
import Swal from 'sweetalert2';  

function CartContainer() {
    const { cart, getTotal, clearCart } = useCart();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Carrito vacío',
                text: 'No puedes realizar la compra sin productos en el carrito.',
            });
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
            const orderId = await createOrder(order);

            Swal.fire({
                icon: 'success',
                title: 'Compra exitosa',
                html: `
                    <p style="font-size: 18px; margin-bottom: 10px;">Tu compra se ha realizado con éxito.</p>
                    <p style="font-size: 20px; font-weight: bold; color: #4CAF50;">ID de tu orden: <span style="color: #000; font-style: italic;">${orderId}</span></p>
                    <p style="font-size: 16px; margin-top: 10px; color: #555;">¡NO TE OLVIDES DE ANOTARLO!</p>
                `,
                confirmButtonText: 'Cerrar',
                didClose: () => {
                    
                    window.location.href = '/';  
                }
            });
                 

            clearCart(); 
        } catch (error) {
            console.error("Error al crear la orden:", error);
            Swal.fire({
                icon: 'error',
                title: 'Hubo un problema',
                text: 'No se pudo completar la compra. Intenta nuevamente.',
            });
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
