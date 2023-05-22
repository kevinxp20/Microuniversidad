const mongoose = require('mongoose');

const getConnection = async () => {
    try {   
        const url = 'mongodb+srv://matkev:kevin123@cluster0.ly2c9ho.mongodb.net/?retryWrites=true&w=majority'

        await mongoose.connect(url);

        console.log('Conexion exitosa');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection,
}