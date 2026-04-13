// src/crearProductoPrueba.js
const conectarDB = require('./database');
const Producto = require('./models/Producto');

const crearProductoPrueba = async () => {
    try {
        await conectarDB();
        
        // Crear un producto nuevo
        const nuevoProducto = new Producto({
            nombre: 'Camiseta de Prueba',
            precio: 19900,
            descripcion: 'Una camiseta increíble para probar la base de datos',
            categoria: 'ropa',
            imagen: 'camiseta.jpg'  // Por ahora solo el nombre de archivo
        });
        
        // Guardar en la base de datos
        const productoGuardado = await nuevoProducto.save();
        console.log('✅ Producto creado exitosamente:', productoGuardado);
        
        process.exit(0); // Salir del programa
        
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

crearProductoPrueba();