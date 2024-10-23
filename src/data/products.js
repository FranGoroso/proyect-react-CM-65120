// Simulación de datos de productos fitness
export const products = [
    {
        id: "1",
        name: "Proteína Whey",
        price: 49.99,
        category: "Suplementos",
        img: "https://justloading.com/wp-content/uploads/2023/03/Proteina-WHEY-Chocolate-Justloading.jpg",
        stock: 50,
        description: "Proteína Whey de alta calidad para ganar masa muscular y mejorar el rendimiento.",
    },
    {
        id: "2",
        name: "Pantalones de Compresión",
        price: 29.99,
        category: "Indumentaria",
        img: "https://danishendurance.com/cdn/shop/products/compression-pants-for-men-522386.jpg?v=1700621952&width=831",
        stock: 100,
        description: "Pantalones de compresión para mejorar la circulación y rendimiento durante el ejercicio.",
    },
    {
        id: "3",
        name: "Smartwatch Fitness",
        price: 149.99,
        category: "Tecnología Fitness",
        img: "https://tidbits.com/uploads/2022/02/Activity-vs-Athlytic.jpeg",
        stock: 20,
        description: "Smartwatch con monitoreo de frecuencia cardíaca, GPS y seguimiento de actividades deportivas.",
    },
    {
        id: "4",
        name: "Aminoácidos BCAA",
        price: 34.99,
        category: "Suplementos",
        img: "https://chilesuplementos.cl/wp-content/uploads/2022/06/bcaaamino-mango-600x600.png",
        stock: 80,
        description: "Suplemento de aminoácidos esenciales BCAA para mejorar la recuperación muscular.",
    },
    {
        id: "5",
        name: "Camiseta Deportiva",
        price: 19.99,
        category: "Indumentaria",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAQjBJCzhOmXXsMGr-JT_3jEW3ot4pA003g&s",
        stock: 150,
        description: "Camiseta transpirable para entrenamientos intensos y actividades al aire libre.",
    },
    {
        id: "6",
        name: "Banda de Resistencia",
        price: 14.99,
        category: "Tecnología Fitness",
        img: "https://m.media-amazon.com/images/I/71iMq-YtxZL._AC_UF894,1000_QL80_.jpg",
        stock: 200,
        description: "Banda de resistencia para ejercicios de fuerza y rehabilitación.",
    },
    {
        id: "7",
        name: "Creatina Monohidratada",
        price: 39.99,
        category: "Suplementos",
        img: "https://img2.elyerromenu.com/images/maykelsgymshop/on-creatina-monohidratada/img.webp",
        stock: 60,
        description: "Creatina monohidratada para aumentar la fuerza y mejorar el rendimiento físico.",
    },
    {
        id: "8",
        name: "Zapatillas de Running",
        price: 89.99,
        category: "Indumentaria",
        img: "https://media.istockphoto.com/id/1350560575/es/foto/par-de-zapatillas-azules-sobre-fondo-blanco-aislado.jpg?s=612x612&w=0&k=20&c=f-X38MOq2OzctlPMR9NyxdpDQuv4RYoG7rr4AhFjUi8=",
        stock: 75,
        description: "Zapatillas ligeras y cómodas para correr largas distancias y entrenamientos de alta intensidad.",
    },
    {
        id: "9",
        name: "Reloj de Pulso Deportivo",
        price: 99.99,
        category: "Tecnología Fitness",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NjDGVaXu_299uIyiWeqcCc6-wSq9DtRgtg&s",
        stock: 30,
        description: "Reloj de pulso con monitorización de ritmo cardíaco y conectividad Bluetooth.",
    },
    {
        id: "10",
        name: "Guantes de Gimnasio",
        price: 12.99,
        category: "Indumentaria",
        img: "https://givovaonline.com/4535-large_default/guantes-de-gimnasio.jpg",
        stock: 120,
        description: "Guantes antideslizantes para mejorar el agarre y proteger las manos durante el entrenamiento.",
    }
];

//ASYNC MOCK
export const getPorducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        })
    }, 2000)
}

export const getPoductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 2000)
    })
}