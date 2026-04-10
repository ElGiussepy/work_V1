const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const PORT = 3000;

// Configurar Handlebars como motor de plantillas
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

// Ruta principal
app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Bienvenido a Mi Ecommerce',
        productos: [
            { nombre: 'Camiseta', precio: 150000 },
            { nombre: 'Pantalón', precio: 25000 },
            { nombre: 'Zapatos', precio: 45000 }
        ]
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});