'use strict';

require('dotenv').config();

const connect = require('./lib/connectMongo');
const anuncios = require('./models/anuncios');
const usuarios = require('./models/usuarios');

connect.once('open', async () => {
    try {
        await initAnuncios();
        await initUsuarios();
        console.log("Import taks complete");
        connect.close();
    } catch (err) {
        console.error('Hubo un error: ', err)
        process.exit(1);
    }
});

async function initAnuncios() {
    await anuncios.deleteMany();
    await anuncios.insertMany([
        { name: 'Galletas', sell: true, price: 2, photo: 'galletas.JPG', tags: ['lifestyle','work'] },
        { name: 'Moto', sell: false, price: 60000, photo: 'moto.JPG', tags: ['motor'] },
        { name: 'Chocoflakes', sell: true, price: 2.52, photo: 'chocoflakes.JPG', tags: ['lifestyle'] },
        { name: 'Chocoflakes2', sell: false, price: 3.50, photo: 'chocoflakes2.JPG', tags: ['lifestyle'] },
        { name: 'Aston Martin', sell: false, price: 290500, photo: 'astonmartin.JPG', tags: ['motor'] },
        { name: 'Iphone 11', sell: false, price: 630, photo: 'iphone.JPG', tags: ['mobile','work'] },
    ]);
}

async function initUsuarios() {
    console.log('Deleting all users on ' + new Date());
    await usuarios.deleteMany();
    console.log('Creating some new users ' + new Date());
    await usuarios.insertMany([
      {
        email: 'user@example.com',
        password: '1234',
      },
    ]);
    console.log("For this testing season user is: user@example.com => 1234");
  }