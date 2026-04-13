// src/database.js
const mongoose = require('mongoose');

// Esta función se encarga de conectar a MongoDB
const conectarDB = async () => {
    try {
        // Intentamos conectar a la base de datos local
        // 'appbd' es el nombre de nuestra base de datos
        await mongoose.connect('mongodb+srv://elgiussepy:Mypass@cluster0.hwjxd84.mongodb.net/My-Ecomerce'); 

        
        
        console.log('✅ Base de datos conectada exitosamente');
        
    } catch (error) {
        console.error('❌ Error conectando a la base de datos:', error.message);
        // Si hay error, cerramos la aplicación porque sin DB no funciona
        process.exit(1);
    }
};

module.exports = conectarDB;