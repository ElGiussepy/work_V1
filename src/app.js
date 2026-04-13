const express = require('express');
const { engine } = require('express-handlebars');
const conectarDB = require('./database');  // NUEVO
const Producto = require('./models/Producto');  // NUEVO (lo usaremos después)

const app = express();
const PORT = 3000;

// Conectar a MongoDB (NUEVO)
conectarDB();



// Configurar Handlebars como motor de plantillas
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

// Ruta principal - MODIFICADA para usar la base de datos
app.get('/', async (req, res) => {
    try {
        // Obtener todos los productos de la base de datos
        const productos = await Producto.find();
        
        res.render('home', {
            titulo: 'Bienvenido a Mi Ecommerce',
            productos: productos  // Enviamos los productos de la DB
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar los productos');
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});