// src/models/Producto.js
const mongoose = require('mongoose');

// Creamos un "esquema" que define la estructura de un producto
const productoSchema = new mongoose.Schema({
    // Campo para el nombre del producto
    nombre: {
        type: String,     // Tipo: texto
        required: true,   // Obligatorio: no puede estar vacío
        trim: true        // Elimina espacios al inicio y final
    },
    
    // Campo para el precio
    precio: {
        type: Number,     // Tipo: número
        required: true,   // Obligatorio
        min: 0           // El precio mínimo es 0 (no puede ser negativo)
    },
    
    // Campo para la descripción
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    
    // Campo para la imagen (guardaremos la ruta del archivo)
    imagen: {
        type: String,
        required: true,
        default: 'default.jpg'  // Si no ponen imagen, usamos esta por defecto
    },
    
    // Campo para la categoría (útil para un ecommerce)
    categoria: {
        type: String,
        required: true,
        enum: ['ropa', 'electronica', 'hogar', 'otros'],  // Solo estos valores permitidos
        default: 'otros'
    },
    
    // Campo automático: fecha de creación
    fechaCreacion: {
        type: Date,
        default: Date.now  // Si no se especifica, usa la fecha actual
    }
});

// Creamos el modelo a partir del esquema
// 'Producto' será el nombre de la colección en MongoDB
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;