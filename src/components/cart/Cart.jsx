function Cart({ cart, total, handleSubmit }) {
    if (!cart) {
        return <p>Error: no se pudo cargar el carrito.</p>;
    }

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Carrito de Compras</h2>
            <div className="row gx-5">
                <div className="col-lg-8">
                    <div className="bg-light p-4 rounded shadow-sm">
                        <h4 className="mb-3">Tus Productos</h4>
                        {cart.length === 0 ? (
                            <p className="text-center text-muted">No hay productos en tu carrito.</p>
                        ) : (
                            <ul className="list-group">
                                {cart.map((prod) => (
                                    <li
                                        key={prod.id}
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2 p-3 shadow-sm rounded"
                                    >
                                        <div>
                                            <h5 className="mb-1">{prod.title}</h5>
                                            <p className="mb-0 text-muted">
                                                Cantidad: <strong>{prod.qty}</strong>
                                            </p>
                                        </div>
                                        <span className="badge bg-primary fs-6 p-2">
                                            ${parseFloat((prod.price * prod.qty).toFixed(2))}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h4 className="card-title">Resumen de Compra</h4>
                            <p className="card-text">
                                Total: <strong>${total.toFixed(2)}</strong>
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre completo"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Correo electrónico"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Teléfono"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100">
                                    Finalizar compra
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
